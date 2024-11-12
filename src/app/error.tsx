'use client';

import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';
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
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="grid w-full grid-cols-2 justify-items-center space-y-5">
        <Image
          src="/banners/500-error.jpg"
          width={1000}
          height={700}
          alt="image-Error"
          className="object-cover"
        />
        <div className="flex h-full flex-col items-center justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Oops! Ha ocurrido un error
            </h1>
            <p className="mx-auto text-center text-lg text-gray-600">
              {error.message}
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <Button size="lg" className="font-medium" onClick={() => reset()}>
              <RefreshCw className="h-5 w-5" />
              Recargar
            </Button>
            <Button size="lg" className="font-medium" asChild>
              <Link href={'/'}>
                <Home className="h-5 w-5" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
