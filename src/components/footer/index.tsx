import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { FooterSection } from './footer-section';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { SocialButton } from './footer-button-social';

export default function Footer() {
  return (
    <footer className="bg-white font-poppins">
      <div className="container mx-auto px-4 py-8 text-center md:py-12 lg:py-16 lg:text-center">
        <div className="grid gap-8 lg:grid-cols-4">
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

          <FooterSection
            title="Recursos"
            links={[
              { href: '/', label: 'Política y privacidad' },
              { href: '/', label: 'Preguntas frecuentes' },
              { href: '/contact', label: 'Contacto' },
            ]}
          />

          <FooterSection
            title="Servicios"
            links={[
              { href: '/nosotros', label: 'Sobre nosotros' },
              { href: '/', label: 'Sucursales' },
            ]}
          />

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

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MedLink. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Términos
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
