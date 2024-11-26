'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { patientService } from '@/services/patient-service';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth-context';
import { useState } from 'react';

const { authorizeDoctorPatient } = patientService;

export default function DoctorAuthorization() {
  const { token } = useAuth();
  const { token: tokenAuthorization } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = async () => {
    if (!token) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No tienes permiso para realizar esta acción.',
      });
      return;
    }

    if (typeof tokenAuthorization !== 'string') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Token de autorización inválido. Por favor, intente nuevamente.',
      });
      return;
    }

    setIsLoading(true);

    try {
      await authorizeDoctorPatient(token, tokenAuthorization);
      toast({
        variant: 'default',
        title: 'Éxito',
        description: 'El doctor ha sido autorizado correctamente.',
      });
      router.push('/');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Hubo un problema al autorizar al doctor. Por favor, intente nuevamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Autorización del Doctor</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">¿Deseas dar autorización al doctor?</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push('/')}>
            Cancelar
          </Button>
          <Button onClick={handleAccept} disabled={isLoading}>
            {isLoading ? 'Procesando...' : 'Aceptar'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
