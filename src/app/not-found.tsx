import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Card className="mx-auto my-10 max-w-2xl font-poppins">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Error 404 - Not Found
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5 text-center">
          <Image
            src="/banners/404-notFound.jpg"
            width={1000}
            height={787}
            alt="image-notFound"
            className="object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Oops! Página no encontrada
          </h1>
          <p className="mx-auto text-center text-lg text-gray-600">
            Parece que te has perdido en el espacio. La página que buscas no
            existe o ha sido movida.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto font-medium" asChild>
          <Link href={'/'}>
            <Home className="mr-2 h-5 w-5" />
            Volver al inicio
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
