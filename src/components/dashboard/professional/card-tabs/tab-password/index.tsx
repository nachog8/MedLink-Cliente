import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { seguritySchema, SegurityType } from '@/schemas/professionalSchema';
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useFormState } from 'react-dom';
import { segurityProfessionalAction } from '@/actions/professional-actions';

export const PasswordChangeForm = () => {
  const [state, formAction] = useFormState(segurityProfessionalAction, null);
  const form = useForm<SegurityType>({
    resolver: zodResolver(seguritySchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Actualizacion de Informacion Exitoso!!',
      });
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error en la Actualizacion',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contraseña de la cuenta</CardTitle>
        <CardDescription>
          Maneja la seguridad de tu cuenta aquí.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-5">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña Actual</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nueva Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Nueva Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:justify-items-end">
              <Button type="submit">Cambiar Contraseña</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
