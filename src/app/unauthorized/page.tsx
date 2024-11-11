'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center p-4 font-poppins">
      <div className="w-full max-w-lg space-y-6 text-center">
        <div className="space-y-6">
          <Image
            src="/banners/401s.png"
            alt="error-401-noauthorized"
            width={1920}
            height={1080}
          />

          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Acceso No Autorizado
          </h2>
          <p className="text-muted-foreground">
            Lo sentimos, no tienes permiso para acceder a esta página. Por
            favor, verifica tus credenciales e intenta nuevamente.
          </p>
        </div>

        <Button
          onClick={() => router.back()}
          variant="default"
          className="mx-auto gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver atrás
        </Button>
      </div>
    </div>
  );
}
