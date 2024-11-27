'use client';

import { CheckCircle2, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  ForgotPasswordType,
  forgotPasswordSchema,
} from '@/schemas/schemas-auth';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonSubmit } from '../buttons/button-submit';
import { DialogClose } from '@radix-ui/react-dialog';
import { FieldInput } from '../form/fields/field-input';
import { Form } from '@/components/ui/form';
import { forgotPasswordAction } from '@/actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export function ForgotPassword() {
  const [state, formAction] = useFormState(forgotPasswordAction, null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error al recuperar contraseña',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  const handleBackToLogin = () => {
    setIsSubmitted(false);
    form.reset();
  };

  const renderSuccessMessage = () => (
    <div className="space-y-4 py-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Revise su email</h3>
          <p className="text-sm text-muted-foreground">
            Hemos enviado instrucciones de recuperación a:
            <br />
            <span className="font-medium text-foreground">
              {form.getValues('email')}
            </span>
          </p>
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleBackToLogin} className="w-full">
          Probar con otro correo
        </Button>
        <DialogClose asChild>
          <Button className="w-full">Volver al Inicio de Sesión</Button>
        </DialogClose>
      </DialogFooter>
    </div>
  );

  const renderForm = () => (
    <Form {...form}>
      <form action={formAction} className="space-y-4 py-4">
        <FieldInput<ForgotPasswordType>
          control={form.control}
          fieldName="email"
          label="Email"
          icon={<Mail size={18} />}
        />
        <ButtonSubmit text="Recuperar Contraseña ➜" />
      </form>
    </Form>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="px-0 text-muted-foreground hover:text-primary"
        >
          ¿Olvidaste tu contraseña?
        </Button>
      </DialogTrigger>
      <DialogContent className="font-poppins">
        <DialogHeader>
          <DialogTitle>Recuperar Contraseña</DialogTitle>
          <DialogDescription>
            {!isSubmitted
              ? 'Ingrese su dirección de correo electrónico y le enviaremos instrucciones para restablecer su contraseña.'
              : 'Consulte su correo electrónico para obtener las instrucciones de reinicio.'}
          </DialogDescription>
        </DialogHeader>
        {isSubmitted ? renderSuccessMessage() : renderForm()}
      </DialogContent>
    </Dialog>
  );
}
