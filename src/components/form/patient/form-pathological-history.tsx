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
} from '@/schemas/schemas-profile';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { pathologicalPatientAction } from '@/actions/patient-actions';
import { renderField } from '../render-field';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type PathologicalFormProps = {
  initialValues?: Partial<PathologicalFormType>;
};

const pathologicalTypes = [
  { name: 'hospitalization', label: 'Hospitalización Previa' },
  { name: 'diabetes', label: 'Diabetes' },
  { name: 'thyroidDiseases', label: 'Enfermedades Tiroideas' },
  { name: 'hypertension', label: 'Hipertensión Arterial' },
  { name: 'heartDiseases', label: 'Cardiopatías' },
  { name: 'trauma', label: 'Traumatismo' },
  { name: 'cancer', label: 'Cáncer' },
  { name: 'tuberculosis', label: 'Tuberculosis' },
  { name: 'transfusions', label: 'Transfusiones' },
  { name: 'respiratoryDiseases', label: 'Patologías respiratorias' },
  { name: 'gastrointestinalDiseases', label: 'Patologías gastrointestinales' },
  {
    name: 'sexuallyTransmittedDiseases',
    label: 'Enfermedades de transmisión sexual',
  },
  { name: 'chronicKidneyDisease', label: 'Enfermedad renal crónica' },
  { name: 'other', label: 'Otros' },
] as const;

export default function PathologicalForm({
  initialValues,
}: PathologicalFormProps) {
  const [state, formAction] = useFormState(pathologicalPatientAction, null);

  const form = useForm<PathologicalFormType>({
    resolver: zodResolver(pathologicalSchema),
    defaultValues: buildFormInitialValues<PathologicalFormType>(
      [...pathologicalTypes],
      initialValues
    ),
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Datos sobre ANTECEDENTES PATOLOGICOS actualizado con Exitoso!!',
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
        pathologicalTypes.map(({ name }) => [name, 'false'])
      ) as Partial<PathologicalFormType>
    );
  };

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {pathologicalTypes.map(({ name, label }) => (
          <div key={name}>
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
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
