import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '@/components/form/contact/form-contact';
import { ContactInfo } from '@/components/contact/contact-info';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="container m-auto space-y-5 py-16 font-poppins max-xl:w-[95%] lg:grid lg:grid-cols-2 lg:space-y-0">
      <section className="flex flex-col items-center justify-center gap-6 rounded-xl bg-sky-400 p-10">
        <ContactInfo
          icon={Phone}
          title="Teléfono"
          description="Estamos disponibles para ayudarte."
          contactText="+1-2345-2345"
        />
        <ContactInfo
          icon={Mail}
          title="Correo"
          description="También podes comunicarte con nosotros a través de nuestro correo"
          contactText="medlink-contact@info.com"
        />
        <ContactInfo
          icon={MapPin}
          title="Ubicación"
          description="Si nos necesitas nos podes encontrar en nuestra sucursal."
          contactText="Junin 1250 2do Piso, Oficina 1, 3400 Corrientes"
        />
      </section>
      <section>
        <Card className="mx-auto max-w-xl">
          <picture>
            <Image
              src={'/images/doctors/doctors-form-contact.png'}
              width={1230}
              height={871}
              alt="contact-image-form"
              className="transition-all hover:scale-105"
            />
          </picture>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lg:text-4xl">
              Ponte en contacto
            </CardTitle>
            <CardDescription>
              A nuestro equipo le encantaría conocerte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
