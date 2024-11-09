'use client';

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
import { loginAction } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

export default function FormSignUp() {
  const { login } = useAuth();
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
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Inicio de Sesión Exitoso!!',
        description: 'Tu cuenta ya fue creada, serás redirigido al Home',
      });
      setTimeout(() => {
        login(state.payload.token);
      }, 2000);
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((error) => `${error.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error al Iniciar Sesión',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state, router, login]);

  return (
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
                  <Input type={showPassword ? 'text' : 'password'} {...field} />
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
      </form>
    </Form>
  );
}
