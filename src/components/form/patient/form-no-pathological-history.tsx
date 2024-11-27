'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  NoPathologicalFormType,
  noPathologicalSchema,
} from '@/schemas/schemas-profile';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonForm } from '@/components/buttons/button-submit-form';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { noPathologicalPatientAction } from '@/actions/patient-actions';
import { noPathologicalTypes } from '@/data/form-options';
import { renderField } from '../fields/render-field';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

type NoPathologicalFormProps = {
  initialValues?: Partial<NoPathologicalFormType>;
};

export default function NoPathologicalForm({
  initialValues,
}: NoPathologicalFormProps) {
  const [state, formAction] = useFormState(noPathologicalPatientAction, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const form = useForm<NoPathologicalFormType>({
    resolver: zodResolver(noPathologicalSchema),
    defaultValues: buildFormInitialValues<NoPathologicalFormType>(
      [...noPathologicalTypes],
      initialValues
    ),
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
        title: 'Error en la edición.',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state, router]);

  const handleNoToAll = () => {
    form.reset(
      Object.fromEntries(
        noPathologicalTypes.map(({ name }) => [name, false])
      ) as Partial<NoPathologicalFormType>
    );
  };

  if (isSubmitted) return <MessageSuccesfull />;

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {noPathologicalTypes.map(({ name, label }) => (
          <div key={name} className="space-y-4">
            {renderField({
              control: form.control,
              fieldName: name,
              label: label,
            })}
            {form.watch(name) && (
              <FormField
                control={form.control}
                name={`${name}Details` as keyof NoPathologicalFormType}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={`Detalles sobre ${label.toLowerCase().replace('¿Tienes ', '').replace('?', '')}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Separator className="my-2" />
          </div>
        ))}

        <div className="flex justify-evenly py-2">
          <Button type="button" variant="outline" onClick={handleNoToAll}>
            No a todo
          </Button>
          <ButtonForm text="Guardar" />
        </div>
      </form>
    </Form>
  );
}
