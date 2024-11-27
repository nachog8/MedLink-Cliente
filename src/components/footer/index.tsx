import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { FooterSection } from './footer-section';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { SocialButton } from './footer-button-social';
import { links } from '@/data/links';

export default function Footer() {
  return (
    <footer className="bg-white font-poppins">
      <div className="container mx-auto px-4 py-8 text-center md:py-12 lg:py-16 lg:text-center">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/MEDLINK_LOGO-01.png"
                alt="logo-footer"
                width={150}
                height={150}
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Cuidando tu salud con excelencia y compromiso. Disponibles cuando
              nos necesites.
            </p>
          </div>

          <FooterSection title="Navegación" links={links} />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociales</h3>
            <div className="flex justify-center space-x-2 lg:justify-center">
              <SocialButton
                href="https://facebook.com"
                icon={Facebook}
                label="Facebook"
              />
              <SocialButton
                href="https://instagram.com"
                icon={Instagram}
                label="Instagram"
              />
              <SocialButton
                href="https://linkedin.com"
                icon={Linkedin}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MedLink. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
