'use client';

import * as z from 'zod';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  atBirth: z.object({
    bcg: z.boolean().default(false),
    hepatitisB1: z.boolean().default(false),
  }),
  twoMonths: z.object({
    pentavalent1: z.boolean().default(false),
    hepatitisB2: z.boolean().default(false),
    rotavirus1: z.boolean().default(false),
    pneumococcal1: z.boolean().default(false),
  }),
  fourMonths: z.object({
    pentavalent2: z.boolean().default(false),
    rotavirus2: z.boolean().default(false),
    pneumococcal2: z.boolean().default(false),
  }),
  sixMonths: z.object({
    pentavalent3: z.boolean().default(false),
    hepatitisB3: z.boolean().default(false),
    rotavirus3: z.boolean().default(false),
    influenza1: z.boolean().default(false),
  }),
  sevenMonths: z.object({
    influenza2: z.boolean().default(false),
  }),
  twelveMonths: z.object({
    srp1: z.boolean().default(false),
    pneumococcal3: z.boolean().default(false),
  }),
  eighteenMonths: z.object({
    pentavalent4: z.boolean().default(false),
  }),
  twoYears: z.object({
    influenzaAnnual1: z.boolean().default(false),
  }),
  threeYears: z.object({
    influenzaAnnual2: z.boolean().default(false),
  }),
  fourYears: z.object({
    dpt: z.boolean().default(false),
    influenzaAnnual3: z.boolean().default(false),
  }),
  fiveYears: z.object({
    influenzaAnnual4: z.boolean().default(false),
    vopOpv: z.boolean().default(false),
  }),
  elevenYears: z.object({
    vph: z.boolean().default(false),
  }),
  otherVaccines: z.enum(['si', 'no']).optional(),
});

export default function VaccinationScheduleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
      <Separator />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex w-40 flex-col gap-4">{children}</div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-6">
            {renderSection(
              'Nacimiento',
              <>
                {renderCheckbox('atBirth', 'bcg', 'BCG')}
                {renderCheckbox('atBirth', 'hepatitisB1', '1ª Hepatitis B')}
              </>
            )}

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

            {renderSection(
              '12 meses',
              <>
                {renderCheckbox('twelveMonths', 'srp1', '1ª SRP')}
                {renderCheckbox(
                  'twelveMonths',
                  'pneumococcal3',
                  '3ª Neumococo'
                )}
              </>
            )}

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

            {renderSection(
              '11 años / 5to primaria',
              <>{renderCheckbox('elevenYears', 'vph', 'VPH')}</>
            )}

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
                        value={field.value}
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
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onReset}>
              Limpiar
            </Button>
            <Button type="submit">Guardar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
