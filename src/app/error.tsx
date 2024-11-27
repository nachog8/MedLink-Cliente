'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-20">
      <Card className="mx-auto max-w-2xl font-poppins">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            ⚠️ Error 500 - Internal Server Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5 text-center">
            <Image
              src="/banners/500.jpg"
              width={1400}
              height={875}
              alt="image-Error"
              className="object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Oops! Ha ocurrido el siguiente error:
            </h1>
            <p className="mx-auto text-center text-xl text-red-500">
              {error.message}
            </p>
          </div>
        </CardContent>
        <CardFooter className="my-5 flex items-center justify-between space-x-5 lg:justify-around">
          <Button className="font-medium" onClick={() => reset()}>
            <RefreshCw className="h-5 w-5" />
            Recargar
          </Button>
          <Button className="font-medium" asChild>
            <Link href={'/'}>
              <Home className="h-5 w-5" />
              Volver al inicio
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
