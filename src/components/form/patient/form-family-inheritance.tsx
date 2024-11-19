'use client';

import {
  FamilyInheritanceFormType,
  familyInheritanceSchema,
} from '@/schemas/schemas-profile';
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
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { familyInheritancePatientAction } from '@/actions/patient-actions';
import { renderField } from '../render-field';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

type FamilyInheritanceFormProps = {
  initialValues?: Partial<FamilyInheritanceFormType>;
};
const familyInheritanceTypes = [
  { name: 'diabetes', label: '¿Tienes antecedentes familiares de diabetes?' },
  {
    name: 'heartDiseases',
    label: '¿Tienes antecedentes familiares de enfermedades del corazón?',
  },
  {
    name: 'hypertension',
    label: '¿Tienes antecedentes familiares de hipertensión?',
  },
  {
    name: 'chronicKidneyDisease',
    label: '¿Tienes antecedentes familiares de enfermedad renal crónica?',
  },
  { name: 'other', label: '¿Tienes otros antecedentes familiares de salud?' },
] as const;

export default function FamilyInheritanceForm({
  initialValues,
}: FamilyInheritanceFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, formAction] = useFormState(
    familyInheritancePatientAction,
    null
  );
  const router = useRouter();
  const form = useForm<FamilyInheritanceFormType>({
    resolver: zodResolver(familyInheritanceSchema),
    defaultValues: buildFormInitialValues<FamilyInheritanceFormType>(
      [...familyInheritanceTypes],
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
        familyInheritanceTypes.map(({ name }) => [name, false])
      ) as Partial<FamilyInheritanceFormType>
    );
  };
  if (isSubmitted) return <MessageSuccesfull />;
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {familyInheritanceTypes.map(({ name, label }) => (
          <div key={name} className="space-y-4">
            {renderField({
              control: form.control,
              fieldName: name,
              label: label,
            })}
            {form.watch(name) && (
              <FormField
                control={form.control}
                name={`${name}Details` as keyof FamilyInheritanceFormType}
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
        <Separator />

        <div className="flex justify-evenly py-2">
          <Button type="button" onClick={handleNoToAll} variant="outline">
            No a todos
          </Button>

          <ButtonForm text="Guardar" />
        </div>
      </form>
    </Form>
  );
}
