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
import { useEffect, useState } from 'react';

import { ButtonForm } from '@/components/buttons/button-submit-form';
import { FieldCheckBox } from '../fields/field-checkbox';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { buildFormInitialValues } from '@/lib/build-form-initial-values';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { vaccinationPatientAction } from '@/actions/patient-actions';
import { vaccinationScheduleTypes } from '@/data/form-options';
import { zodResolver } from '@hookform/resolvers/zod';

type VaccinationScheduleFormProps = {
  initialValues?: Partial<VaccinationFormType>;
};

export default function VaccinationScheduleForm({
  initialValues,
}: VaccinationScheduleFormProps) {
  const [state, formAction] = useFormState(vaccinationPatientAction, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const form = useForm<VaccinationFormType>({
    resolver: zodResolver(vaccinationSchema),
    defaultValues: buildFormInitialValues<VaccinationFormType>(
      [...vaccinationScheduleTypes],
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

  //verificar esto
  // const handleNoToAll = () => {
  //   form.reset(
  //     Object.fromEntries(
  //       vaccinationScheduleTypes.map(({ name }) => [name, false])
  //     ) as Partial<VaccinationFormType>
  //   );
  // };

  if (isSubmitted) return <MessageSuccesfull />;

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
            <FieldCheckBox
              control={form.control}
              fieldName="atBirth.bcg"
              label="Hepatitis B1"
              name="bcg"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="atBirth.hepatitisB1"
              label="1ª Hepatitis B"
              name="hepatitisB1"
            />
          </>
        )}

        <Separator />

        {renderSection(
          '2 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="twoMonths.pentavalent1"
              label="1ª Pentavalente Acelular"
              name="pentavalent1"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="twoMonths.hepatitisB2"
              label="2° Hepatitis B"
              name="hepatitisB2"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="twoMonths.rotavirus1"
              label="1ª Rotavirus"
              name="rotavirus1"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="twoMonths.pneumococcal1"
              label="1ª Neumococo"
              name="pneumococcal1"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '4 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="fourMonths.pentavalent2"
              label="2ª Pentavalente Acelular"
              name="pentavalent2"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="fourMonths.rotavirus2"
              label="2ª Rotavirus"
              name="rotavirus2"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="fourMonths.pneumococcal2"
              label="2ª Neumococo"
              name="pneumococcal2"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '6 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="sixMonths.pentavalent3"
              label="3ª Pentavalente Acelular"
              name="pentavalent3"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="sixMonths.hepatitisB3"
              label="3ª Hepatitis"
              name="hepatitisB3"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="sixMonths.rotavirus3"
              label="3ª Rotavirus"
              name="rotavirus3"
            />

            <FieldCheckBox
              control={form.control}
              fieldName="sixMonths.influenza1"
              label="1ª Anti influenza (en temporada de frío)"
              name="influenza1"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '7 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="sevenMonths.influenza2"
              label="2ª Anti influenza (en temporada de frío)"
              name="influenza2"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '12 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="twelveMonths.srp1"
              label="1ª SRP"
              name="srp1"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="twelveMonths.pneumococcal3"
              label="3ª Neumococo"
              name="pneumococcal3"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '18 meses',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="eighteenMonths.pentavalent4"
              label="4ª Pentavalente Acelular "
              name="pentavalent4"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '2 años',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="twoYears.influenzaAnnual1"
              label="Influenza Refuerzo Anual (oct-ene)"
              name="influenzaAnnual1"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '3 años',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="threeYears.influenzaAnnual2"
              label="Influenza Refuerzo Anual (oct-ene)"
              name="influenzaAnnual2"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '4 años',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="fourYears.dpt"
              label="DPT"
              name="dpt"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="fourYears.influenzaAnnual3"
              label="Influenza Refuerzo Anual (oct-ene)"
              name="influenzaAnnual3"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '5 años',
          <>
            <FieldCheckBox
              control={form.control}
              fieldName="fiveYears.influenzaAnnual4"
              label="Influenza Refuerzo Anual (oct-ene)"
              name="influenzaAnnual4"
            />
            <FieldCheckBox
              control={form.control}
              fieldName="fiveYears.vopOpv"
              label="VOP/OPV (Sabin, polio oral) en 1ª y 2ª Semana Nal. de Salud (después de 2 previas de Pentavalente Acelular)"
              name="vopOpv"
            />
          </>
        )}
        <Separator />
        {renderSection(
          '11 años / 5to primaria',
          <FieldCheckBox
            control={form.control}
            fieldName="elevenYears.vph"
            label="VPH"
            name="vph"
          />
        )}
        <Separator />
        {renderSection(
          'Otras Vacunas',
          <FormField
            control={form.control}
            name="other"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value || ''}
                    className="flex gap-4"
                    name={field.name}
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="false" />
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
        {form.watch('other') === 'true' && (
          <FormField
            control={form.control}
            name="otherDetails"
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
          {/* <Button type="button" variant="outline" onClick={onReset}>
            Limpiar
          </Button> */}
          <ButtonForm text="Guardar" />
        </div>
      </form>
    </Form>
  );
}
