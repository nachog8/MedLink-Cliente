'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Contact', href: '/' },
];

const MenuHamburger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="rounded-[4px] border bg-[#950DFC] px-[16px] py-[12px] md:hidden">
          <Image
            src="/images/icons/MenuHamburger.svg"
            alt="Menu Hamburger Icon"
            width={24}
            height={18}
          />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4">
          {menuItems.map(({ title, href }, index) => (
            <Link
              key={index}
              href={href}
              className="block px-2 py-1 text-lg"
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuHamburger;
