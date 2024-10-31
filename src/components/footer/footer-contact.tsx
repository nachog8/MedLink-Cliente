'use client';

import { ContactFormType, contactSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//TODO: ESTO DEBERIAMOS MANEJAR CON UN ACTION SI ES NECESARIO Y EL SCHEMA LLEVAR A OTRO LADO

export default function ContactSection() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: ContactFormType) {
    // Aquí iría la lógica para manejar la suscripción
    console.log(values);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Contacto</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span>+1234567890</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 flex-shrink-0" />
          <span>info@medlink.com</span>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Tu email"
                    type="email"
                    className="bg-background/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Suscribirse
          </Button>
        </form>
      </Form>
      <p className="text-xs text-muted-foreground">
        Suscríbete para recibir nuestras últimas noticias y actualizaciones.
      </p>
    </div>
  );
}
