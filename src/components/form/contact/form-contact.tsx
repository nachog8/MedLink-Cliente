'use client';

import { Card, CardContent } from '../../ui/card';
import { CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { ContactFormType, contactSchema } from '@/schemas/schemas-auth';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { ButtonSubmit } from '@/components/buttons/button-submit';
import { FieldInput } from '../fields/field-input';
import { Textarea } from '@/components/ui/textarea';
import { contactAction } from '@/actions/contact-action';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

export function ContactForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [state, formAction] = useFormState(contactAction, null);
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: '',
    },
  });
  useEffect(() => {
    if (state?.success) {
      setOpenDialog(true);
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error de Contacto',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FieldInput<ContactFormType>
              control={form.control}
              fieldName={'firstName'}
              label="Nombre"
              icon={<User />}
            />
            <FieldInput<ContactFormType>
              control={form.control}
              fieldName={'lastName'}
              label="Apellido"
              icon={<User />}
            />
          </div>
          <FieldInput<ContactFormType>
            control={form.control}
            fieldName={'email'}
            label="Correo"
            icon={<Mail />}
          />
          <FieldInput<ContactFormType>
            control={form.control}
            fieldName={'phone'}
            label="Número de Contacto"
            icon={<Phone />}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comentario</FormLabel>
                <FormControl>
                  <Textarea placeholder="Dejanos tu comentario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonSubmit text="Ponerme en contacto" />
        </form>
      </Form>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <Card className="m-4">
            <CardContent>
              <div className="space-y-4 py-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Mensaje Enviado</h3>
                    <p className="text-sm text-muted-foreground">
                      Nos pondremos en contacto con uds en la brevedad. Este
                      atento a su correo.
                    </p>
                  </div>
                  <DialogClose asChild>
                    <Button>Cerrar</Button>
                  </DialogClose>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}
