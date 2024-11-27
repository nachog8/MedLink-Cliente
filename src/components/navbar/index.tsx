import Image from 'next/image';
import Link from 'next/link';
import { MenuNavButton } from './menu-nav-button';
import { UserButton } from './user-button';
import { links } from '../../data/links';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white font-poppins">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-5">
        <MenuNavButton />

        <Link href="/" className="inline-block">
          <Image
            src="/images/logo/MEDLINK_LOGO-01.png"
            alt="logo-footer"
            width={150}
            height={150}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`relative capitalize text-gray-500 transition-colors duration-300 hover:text-[#0234a1] dark:text-gray-400 dark:hover:text-[#0234a1]`}
              prefetch={false}
            >
              {link.label}
              {/* Estilos y animación del subrayado */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0234a1] transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
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
