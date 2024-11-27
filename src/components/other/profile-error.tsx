import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function ProfileError() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="relative mb-8 aspect-square w-full overflow-hidden rounded-lg">
          <Image
            width={900}
            height={900}
            src="/images/user-not-found.jpg"
            alt="Profile placeholder"
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        <Alert variant="destructive" className="border-2">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="ml-2">Error</AlertTitle>
          <AlertDescription className="ml-2">
            No pudimos cargar el perfil en este momento. Por favor, intenta
            nuevamente más tarde.
          </AlertDescription>
        </Alert>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button size="lg" className="w-full">
            <Link href={'/'}></Link>
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
