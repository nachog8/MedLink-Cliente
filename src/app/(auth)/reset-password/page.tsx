import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import { LockKeyholeOpen } from 'lucide-react';
import { ResetPasswordForm } from '@/components/form/form-reset-password';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
      {/* Left Side - Card */}
      <div className="flex items-center justify-center">
        <Card className="h-full w-full max-w-lg transform rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <LockKeyholeOpen className="h-6 w-6" />
              Cambio de Contraseña
            </CardTitle>
            <CardDescription></CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <ResetPasswordForm />
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Form */}

      <div className="hidden rounded-2xl bg-white lg:block">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={'/banners/person-recuperate-password.avif'}
            alt={'form-recuperate-password'}
            fill
            priority
            className="object-contain object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
