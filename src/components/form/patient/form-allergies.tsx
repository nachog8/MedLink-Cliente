'use client';

import { AllergieFormType, allergieSchema } from '@/schemas/schemas-profile';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonForm } from '@/components/buttons/button-submit-form';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { allergiePatientAction } from '@/actions/patient-actions';
import { allergyTypes } from '@/data/form-options';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { renderField } from '../fields/render-field';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

type AllergyFormProps = {
  initialValues?: Partial<AllergieFormType>;
  reload: () => void;
};

export default function AllergyForm({
  initialValues,
  reload,
}: AllergyFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, formAction] = useFormState(allergiePatientAction, null);
  const router = useRouter();
  const form = useForm<AllergieFormType>({
    resolver: zodResolver(allergieSchema),
    defaultValues: buildFormInitialValues<AllergieFormType>(
      [...allergyTypes],
      initialValues
    ),
  });

  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
      reload();
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
        allergyTypes.map(({ name }) => [name, false])
      ) as Partial<AllergieFormType>
    );
  };

  if (isSubmitted) return <MessageSuccesfull />;

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {allergyTypes.map(({ name, label }) => (
          <div key={name} className="space-y-4">
            {renderField({
              control: form.control,
              fieldName: name,
              label: label,
            })}
            {form.watch(name) && (
              <FormField
                control={form.control}
                name={`${name}Details` as keyof AllergieFormType}
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
