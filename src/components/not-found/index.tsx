import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NotFoundContent() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Oops! Página no encontrada
        </h1>
        <p className="mx-auto text-center text-lg text-gray-600">
          Parece que te has perdido en el espacio. La página que buscas no
          existe o ha sido movida.
        </p>
      </div>

      <Button size="lg" className="font-medium" asChild>
        <Link href={'/'}>
          <Home className="mr-2 h-5 w-5" />
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}
