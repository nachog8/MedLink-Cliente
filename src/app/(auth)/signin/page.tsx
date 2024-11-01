import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Paciente</CardTitle>
          <CardDescription>
            Accede a una plataforma diseñada para ayudarte a gestionar y
            consultar tu historial médico, contactar con profesionales de salud
            y recibir recomendaciones personalizadas. Crea tu cuenta como
            paciente y ten el control de tu bienestar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* TODO: PONER IMAGENES AQUI */}
          <Skeleton className="mb-10 h-96 w-full" />
          <Button asChild className="w-full">
            <Link href={'/auth/signin/paciente'}>
              Registrarse como Paciente
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profesional</CardTitle>
          <CardDescription>
            Únete a nuestra red de profesionales de la salud y ofrece tus
            servicios de manera fácil y accesible para los pacientes. Regístrate
            como profesional y amplía tu alcance, administra citas y mantén tus
            datos actualizados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* TODO: PONER IMAGENES AQUI */}
          <Skeleton className="mb-10 h-96 w-full" />
          <Button asChild className="w-full">
            <Link href={'/auth/signin/profesional'}>
              Registrarse como Profesional
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
