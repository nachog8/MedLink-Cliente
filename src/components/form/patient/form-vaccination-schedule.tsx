'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  VaccinationFormType,
  vaccinationSchema,
} from '@/schemas/schemas-profile';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { vaccinationPatientAction } from '@/actions/patient-actions';
import { zodResolver } from '@hookform/resolvers/zod';

export default function VaccinationScheduleForm() {
  const [state, formAction] = useFormState(vaccinationPatientAction, null);
  const form = useForm<VaccinationFormType>({
    resolver: zodResolver(vaccinationSchema),
    defaultValues: {
      atBirth: { bcg: false, hepatitisB1: false },
      twoMonths: {
        pentavalent1: false,
        hepatitisB2: false,
        rotavirus1: false,
        pneumococcal1: false,
      },
      fourMonths: {
        pentavalent2: false,
        rotavirus2: false,
        pneumococcal2: false,
      },
      sixMonths: {
        pentavalent3: false,
        hepatitisB3: false,
        rotavirus3: false,
        influenza1: false,
      },
      sevenMonths: { influenza2: false },
      twelveMonths: { srp1: false, pneumococcal3: false },
      eighteenMonths: { pentavalent4: false },
      twoYears: { influenzaAnnual1: false },
      threeYears: { influenzaAnnual2: false },
      fourYears: { dpt: false, influenzaAnnual3: false },
      fiveYears: { influenzaAnnual4: false, vopOpv: false },
      elevenYears: { vph: false },
      otherVaccines: undefined,
    },
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Datos sobre ESQUEMA DE VACUNACIÓN actualizado con Exitoso!!',
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

  function onReset() {
    form.reset();
  }

  const renderCheckbox = (section: string, field: string, label: string) => (
    <FormField
      control={form.control}
      name={`${section}.${field}`}
      render={({ field }) => (
        <FormItem className="flex items-center space-x-3 space-y-0">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel className="font-normal">{label}</FormLabel>
        </FormItem>
      )}
    />
  );

  const renderSection = (title: string, children: React.ReactNode) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex w-40 flex-col gap-4">{children}</div>
      </div>
    </div>
  );

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-5">
        {renderSection(
          'Nacimiento',
          <>
            {renderCheckbox('atBirth', 'bcg', 'BCG')}
            {renderCheckbox('atBirth', 'hepatitisB1', '1ª Hepatitis B')}
          </>
        )}
        <Separator />

        {renderSection(
          '2 meses',
          <>
            {renderCheckbox(
              'twoMonths',
              'pentavalent1',
              '1ª Pentavalente Acelular'
            )}
            {renderCheckbox('twoMonths', 'hepatitisB2', '2ª Hepatitis B')}
            {renderCheckbox('twoMonths', 'rotavirus1', '1ª Rotavirus')}
            {renderCheckbox('twoMonths', 'pneumococcal1', '1ª Neumococo')}
          </>
        )}
        <Separator />
        {renderSection(
          '4 meses',
          <>
            {renderCheckbox(
              'fourMonths',
              'pentavalent2',
              '2ª Pentavalente Acelular'
            )}
            {renderCheckbox('fourMonths', 'rotavirus2', '2ª Rotavirus')}
            {renderCheckbox('fourMonths', 'pneumococcal2', '2ª Neumococo')}
          </>
        )}
        <Separator />
        {renderSection(
          '6 meses',
          <>
            {renderCheckbox(
              'sixMonths',
              'pentavalent3',
              '3ª Pentavalente Acelular'
            )}
            {renderCheckbox('sixMonths', 'hepatitisB3', '3ª Hepatitis B')}
            {renderCheckbox('sixMonths', 'rotavirus3', '3ª Rotavirus')}
            {renderCheckbox(
              'sixMonths',
              'influenza1',
              '1ª Anti influenza (en temporada de frío)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '7 meses',
          <>
            {renderCheckbox(
              'sevenMonths',
              'influenza2',
              '2ª Anti influenza (en temporada de frío)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '12 meses',
          <>
            {renderCheckbox('twelveMonths', 'srp1', '1ª SRP')}
            {renderCheckbox('twelveMonths', 'pneumococcal3', '3ª Neumococo')}
          </>
        )}
        <Separator />
        {renderSection(
          '18 meses',
          <>
            {renderCheckbox(
              'eighteenMonths',
              'pentavalent4',
              '4ª Pentavalente Acelular'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '2 años',
          <>
            {renderCheckbox(
              'twoYears',
              'influenzaAnnual1',
              'Influenza Refuerzo Anual (oct-ene)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '3 años',
          <>
            {renderCheckbox(
              'threeYears',
              'influenzaAnnual2',
              'Influenza Refuerzo Anual (oct-ene)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '4 años',
          <>
            {renderCheckbox('fourYears', 'dpt', 'DPT')}
            {renderCheckbox(
              'fourYears',
              'influenzaAnnual3',
              'Influenza Refuerzo Anual (oct-ene)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '5 años',
          <>
            {renderCheckbox(
              'fiveYears',
              'influenzaAnnual4',
              'Influenza Refuerzo Anual (oct-ene)'
            )}
            {renderCheckbox(
              'fiveYears',
              'vopOpv',
              'VOP/OPV (Sabin, polio oral) en 1ª y 2ª Semana Nal. de Salud (después de 2 previas de Pentavalente Acelular)'
            )}
          </>
        )}
        <Separator />
        {renderSection(
          '11 años / 5to primaria',
          <>{renderCheckbox('elevenYears', 'vph', 'VPH')}</>
        )}
        <Separator />
        {renderSection(
          'Otras Vacunas',
          <FormField
            control={form.control}
            name="otherVaccines"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value || ''}
                    className="flex gap-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="si" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {form.watch('otherVaccines') === 'si' && (
          <FormField
            control={form.control}
            name="otherVaccines"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre otras vacunas."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        <div className="flex justify-evenly py-2">
          <Button type="button" variant="outline" onClick={onReset}>
            Limpiar
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
