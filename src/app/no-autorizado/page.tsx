'use client';

import { ArrowLeft, Home } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <Card className="mx-auto my-10 max-w-2xl font-poppins">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          👮🚨 Error 401 - No Authorized
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5 text-center">
          <Image
            src="/banners/401 Error Unauthorized-rafiki.png"
            width={400}
            height={400}
            alt="image-401 noauthorized"
            className="mx-auto object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Acceso No Autorizado
          </h1>
          <p className="mx-auto text-center text-xl text-gray-600">
            Lo sentimos, no tienes permiso para acceder a esta página. Por
            favor, verifica tus credenciales e intenta nuevamente.
          </p>
        </div>
      </CardContent>
      <CardFooter className="my-5 flex items-center justify-between space-x-5 lg:justify-around">
        <Button
          onClick={() => router.back()}
          variant="default"
          className="font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver atrás
        </Button>
        <Button className="font-medium" asChild>
          <Link href={'/'}>
            <Home className="h-5 w-5" />
            Volver al inicio
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
