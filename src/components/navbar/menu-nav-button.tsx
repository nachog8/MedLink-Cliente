import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { links } from '../../data/links';

export const MenuNavButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white md:hidden">
        <SheetTitle className="flex items-start">
          <div className="flex items-center justify-center gap-5">
            <Image
              alt="logo-app"
              src={'/images/icons/Logo.svg'}
              width={60}
              height={60}
            />
            <p className="font-bold">MedLink</p>
          </div>
        </SheetTitle>
        <SheetDescription />

        <nav className="mt-7 grid space-y-6 p-4">
          {links.map((link, i) => (
            <SheetClose key={i} asChild>
              <Link
                href={link.path}
                className="capitalize text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 md:text-lg"
                prefetch={false}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
