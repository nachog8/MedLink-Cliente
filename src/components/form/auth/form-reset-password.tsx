'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { ResetPasswordType, resetPasswordSchema } from '@/schemas';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock } from 'lucide-react';
import Link from 'next/link';
import { resetPasswordAction } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { FieldInput } from '../fields/field-input';
import { ButtonSubmit } from '@/components/buttons/button-submit';

export const ResetPasswordForm = () => {
  const [state, formAction] = useFormState(resetPasswordAction, null);
  const { token } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error en la Actualización',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  if (isSuccess) {
    return (
      <Card>
        <CardContent>
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Contraseña cambiada</h3>
                <p className="text-sm text-muted-foreground">
                  Felicitaciones, su contraseña ya fue actualizada. Ahora puede
                  volver a la página de Inicio de Sesión.
                </p>
              </div>
              <Button asChild>
                <Link href="/signup">Ir a Inicio de Sesión</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contraseña de la cuenta</CardTitle>
        <CardDescription>
          Maneja la seguridad de tu cuenta aquí.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Agregamos la apertura de Form aquí */}
        <Form {...form}>
          <form action={formAction}>
            <FieldInput<ResetPasswordType>
              control={form.control}
              fieldName="newPassword"
              label="Nueva Contraseña"
              icon={<Lock />}
            />
            <FieldInput<ResetPasswordType>
              control={form.control}
              fieldName="confirmPassword"
              label="Confirmar Contraseña"
              icon={<Lock />}
            />
            {/* Input falso para mandar el token junto con el valor de la contraseña */}
            <input type="hidden" name="token" value={token} />
            <div className="grid md:justify-items-end">
              <ButtonSubmit text="Cambiar contraseña" />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
