'use client';

import { FieldInput, InputTypes } from '../fields/field-input';
import {
  SendEmailPatientType,
  sendEmailPatientSchema,
} from '@/schemas/professionalSchema';
import { useEffect, useState } from 'react';

import { ButtonSubmit } from '@/components/buttons/button-submit';
import { Form } from '@/components/ui/form';
import { Mail } from 'lucide-react';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { sendEmailPatientProfessionalAction } from '@/actions/professional-actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

export function SendEmailPatient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, formAction] = useFormState(
    sendEmailPatientProfessionalAction,
    null
  );
  const router = useRouter();
  const form = useForm<SendEmailPatientType>({
    resolver: zodResolver(sendEmailPatientSchema),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
      router.refresh();
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
  if (isSubmitted) return <MessageSuccesfull />;
  return (
    <Form {...form}>
      <form action={formAction} className="m-5 space-y-8">
        <FieldInput<SendEmailPatientType>
          control={form.control}
          fieldName={'email'}
          label="Correo"
          icon={<Mail />}
          placeholder="Ingrese el correo del paciente"
        />

        <ButtonSubmit text="Enviar Solicitud" />
      </form>
    </Form>
  );
}
