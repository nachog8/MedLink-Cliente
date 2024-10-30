"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuNavButton } from './menu-nav-button';
import { UserButton } from './user-button';
import { links } from '../../data/links';

export default function Navbar() {
  const pathname = usePathname(); // Para identificar la ruta activa

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
              className={`capitalize relative text-gray-500 hover:text-[#0234a1] dark:text-gray-400 
                dark:hover:text-[#0234a1] md:text-lg transition-colors duration-300 
                ${pathname === link.path ? 'text-[#0234a1]' : ''}`}
              prefetch={false}
            >
              {link.name}
              {/* Estilos y animación del subrayado */}
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0234a1] 
                scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"
              ></span>
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
