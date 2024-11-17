'use client';

import { AllergieFormType, allergieSchema } from '@/schemas/schemas-profile';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { allergiePatientAction } from '@/actions/patient-actions';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { renderField } from '../render-field';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type AllergyFormProps = {
  initialValues?: Partial<AllergieFormType>;
};

const allergyTypes = [
  { name: 'foodAllergy', label: '¿Tienes alergia a alimentos?' },
  { name: 'insectAllergy', label: '¿Tienes alergia a insectos?' },
  { name: 'medicineAllergy', label: '¿Tienes alergia a medicamentos?' },
  { name: 'otherAllergies', label: '¿Tienes otras alergias?' },
] as const;

export default function AllergyForm({ initialValues }: AllergyFormProps) {
  const [state, formAction] = useFormState(allergiePatientAction, null);

  const form = useForm<AllergieFormType>({
    resolver: zodResolver(allergieSchema),
    defaultValues: buildFormInitialValues<AllergieFormType>(
      [...allergyTypes],
      initialValues
    ),
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Datos sobre ALERGIA actualizado con Exitoso!!',
        description: 'El campo ya fue editado. Gracias!!',
      });
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
  }, [state]);

  const handleNoToAll = () => {
    form.reset(
      Object.fromEntries(
        allergyTypes.map(({ name }) => [name, 'false'])
      ) as Partial<AllergieFormType>
    );
  };

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {allergyTypes.map(({ name, label }) => (
          <div key={name}>
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
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
