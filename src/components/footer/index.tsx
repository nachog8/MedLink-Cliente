import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/data/links';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4">
        {/* Logo Section */}
        <Link href={'/'} className="flex items-center justify-center gap-5">
          <Image
            alt="logo-app"
            src={'/images/icons/Logo.svg'}
            width={80}
            height={80}
          />
          <p className="font-bold">MedLink</p>
        </Link>

        {/* Navigation Links */}
        <div className="grid w-full gap-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Páginas</h4>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="capitalize text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 md:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid w-full gap-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <p className="text-muted-foreground">Teléfono: +54-3704-441861</p>
          <p className="text-muted-foreground">Email: info@stayls.com</p>
          <p className="text-muted-foreground">
            Dirección: La Rioja 1500, Corrientes - Capital
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid gap-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Redes Sociales</h4>
          <div className="flex justify-center gap-4 md:justify-start">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between text-xs text-muted-foreground sm:flex-row">
        <p>&copy; 2024 tails Inc. Todos los derechos reservados.</p>
        <div className="mt-4 flex gap-4 sm:mt-0">
          <Link href="#" className="hover:underline">
            Términos de Servicio
          </Link>
          <Link href="#" className="hover:underline">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
