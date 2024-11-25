import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FieldInput, InputTypes } from '@/components/form/fields/field-input';
import { SegurityType, seguritySchema } from '@/schemas/professionalSchema';
import { useEffect, useState } from 'react';

import { ButtonForm } from '@/components/buttons/button-submit-form';
import { Form } from '@/components/ui/form';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { changePasswordUserAction } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export const PasswordChangeForm = () => {
  const [state, formAction] = useFormState(changePasswordUserAction, null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      setIsDialogOpen(true);
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

  if (isDialogOpen) return <MessageSuccesfull />;
  return (
    <>
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
              <FieldInput<SegurityType>
                control={form.control}
                fieldName="newPassword"
                label="Nueva Contraseña"
                type={InputTypes.PASSWORD}
              />
              <FieldInput<SegurityType>
                control={form.control}
                fieldName="confirmPassword"
                label="Confirmar nueva contraseña"
                type={InputTypes.PASSWORD}
              />
              <div className="grid md:justify-items-end">
                <ButtonForm text="Cambiar la contraseña" />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
