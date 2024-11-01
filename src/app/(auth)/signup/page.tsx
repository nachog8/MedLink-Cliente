'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoginFormType, loginSchema } from '@/schemas';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonSubmit } from '@/components/buttons/button-submit';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { loginAction } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Page() {
  const [state, formAction] = useFormState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  //TODO: Modificar los toast - solo los puse para ver la funcionalidad

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Registro Exitoso!!',
        description:
          'Tu cuenta ya fue creada, serás redirigido a Inicio de Sesión.',
      });
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error en el registro',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  return (
    <Card className="z-10 mx-4 w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Iniciar Sesión
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-5">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeClosedIcon className="h-4 w-4" />
                        ) : (
                          <EyeOpenIcon className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonSubmit text="Iniciar Sesión" />
            <p className="text-center text-sm text-blue-600 text-muted-foreground">
              Don&apos;t have an account?
              <Link
                href="/auth/signin"
                className="mx-4 font-medium text-primary hover:underline"
                prefetch={false}
              >
                Register
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="#" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </CardFooter>
    </Card>
  );
}
