import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function AuthorizationPreview() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="animate-fadeIn">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">
              Autorización Requerida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              Para acceder al perfil de este paciente, debe tener una
              autorización previa del usuario.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
