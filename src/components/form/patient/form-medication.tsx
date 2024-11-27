'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  MedicationFormType,
  medicationSchema,
} from '@/schemas/schemas-patient';
import { useEffect, useState } from 'react';

import { ButtonForm } from '@/components/buttons/button-submit-form';
import { FieldCalendar } from '../fields/field-calendar';
import { FieldInput } from '../fields/field-input';
import { FieldSelect } from '../fields/field-select';
import { Form } from '@/components/ui/form';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { addMedicationPatientAction } from '@/actions/patient-actions';
import { frequencyOptions } from '@/data/form-options';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

export function MedicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, formAction] = useFormState(addMedicationPatientAction, null);
  const router = useRouter();
  const form = useForm<MedicationFormType>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      medication: '',
      dosage: '',
      frequency: '',
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
        title: 'Error en la edición.',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state, router]);
  if (isSubmitted) return <MessageSuccesfull />;
  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-8 p-5">
            <FieldInput<MedicationFormType>
              control={form.control}
              fieldName="medication"
              label="Medicamento"
              placeholder="Ingrese el nombre del medicamento"
            />
            <FieldInput<MedicationFormType>
              control={form.control}
              fieldName="dosage"
              label="Dosis"
              placeholder="Ingrese la dosis (ej. 200mg)"
            />

            <FieldSelect
              control={form.control}
              fieldName="frequency"
              label="Frecuencia"
              options={frequencyOptions}
            />

            <div className="flex items-center justify-between gap-4">
              <FieldCalendar<MedicationFormType>
                control={form.control}
                fieldName="startDate"
                label="Fecha de Inicio"
                // name="startDate"
              />
              <FieldCalendar<MedicationFormType>
                control={form.control}
                fieldName="endDate"
                label="Fecha de Finalización"
                // name="startDate"
              />
            </div>
            <ButtonForm text="Guardar" />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
