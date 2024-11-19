import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ForgotPassword } from '@/components/user-auth/forgot-my-password';
import FormSignUp from '@/components/form/auth/form-signup';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  // TODO:REVISAR CLASES SI SE PUEDE OPTIMIZAR
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:px-0">
      {/* Left Side - Card */}
      <div className="flex items-center justify-center">
        <Card className="h-full w-full max-w-lg transform rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardHeader className="space-y-6 text-center">
            <div className="mx-auto">
              <Image
                src="/banners/shield_user.png"
                alt="MedLink Logo"
                width={80}
                height={80}
                priority
                className="aspect-square"
              />
            </div>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Hola, bienvenido de vuelta
            </CardTitle>
            <Separator className="mx-auto w-3/4" />
          </CardHeader>

          <CardContent className="px-6">
            <FormSignUp />
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 px-6 pb-6 pt-2">
            <ForgotPassword />
            <div className="text-sm text-muted-foreground">
              No tienes una cuenta?
              <Link
                href="/signin"
                className="font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
                prefetch={false}
              >
                Registro
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src="/banners/signup.jpg"
            alt="Medical professionals at work"
            fill
            priority
            className="object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
