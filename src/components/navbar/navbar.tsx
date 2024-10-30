import Image from 'next/image';
import Link from 'next/link';
import { MenuNavButton } from './menu-nav-button';
import { UserButton } from './user-button';
import { links } from '../../data/links';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-5">
        <MenuNavButton />

        <Link href={'/'} className="flex items-center justify-center gap-5">
          <Image
            alt="logo-app"
            src={'/images/icons/Logo.svg'}
            width={80}
            height={80}
          />
          <p className="font-bold">MedLink</p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="capitalize text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 md:text-lg"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
