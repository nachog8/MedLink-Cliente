'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  PathologicalFormType,
  pathologicalSchema,
} from '@/schemas/schemas-patient';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonForm } from '@/components/buttons/button-submit-form';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { pathologicalPatientAction } from '@/actions/patient-actions';
import { pathologicalTypes } from '@/data/form-options';
import { renderField } from '../fields/render-field';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

type PathologicalFormProps = {
  initialValues?: Partial<PathologicalFormType>;
};

export default function PathologicalForm({
  initialValues,
}: PathologicalFormProps) {
  const [state, formAction] = useFormState(pathologicalPatientAction, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const form = useForm<PathologicalFormType>({
    resolver: zodResolver(pathologicalSchema),
    defaultValues: buildFormInitialValues<PathologicalFormType>(
      [...pathologicalTypes],
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
        pathologicalTypes.map(({ name }) => [name, false])
      ) as Partial<PathologicalFormType>
    );
  };
  if (isSubmitted) return <MessageSuccesfull />;
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {pathologicalTypes.map(({ name, label }) => (
          <div key={name} className="space-y-4">
            {renderField({
              control: form.control,
              fieldName: name,
              label: label,
            })}
            {form.watch(name) && (
              <FormField
                control={form.control}
                name={`${name}Details` as keyof PathologicalFormType}
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

        <div className="flex justify-between py-2">
          <Button type="button" onClick={handleNoToAll} variant="outline">
            No a todos
          </Button>
          <ButtonForm text="Guardar" />
        </div>
      </form>
    </Form>
  );
}
