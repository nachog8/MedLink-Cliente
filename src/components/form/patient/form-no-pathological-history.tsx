'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const formSchema = z.object({
  physicalActivity: z.enum(['si', 'no']),
  physicalActivityDetails: z.string().optional(),
  smoking: z.enum(['si', 'no']),
  smokingDetails: z.string().optional(),
  alcoholism: z.enum(['si', 'no']),
  alcoholismDetails: z.string().optional(),
  otherSubstances: z.enum(['si', 'no']),
  otherSubstancesDetails: z.string().optional(),
  recentVaccination: z.enum(['si', 'no']),
  recentVaccinationDetails: z.string().optional(),
  other: z.enum(['si', 'no']),
  otherDetails: z.string().optional(),
});

export default function HealthForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      physicalActivity: 'no',
      smoking: 'no',
      alcoholism: 'no',
      otherSubstances: 'no',
      recentVaccination: 'no',
      other: 'no',
    },
  });

  const handleNoToAll = () => {
    form.reset({
      physicalActivity: 'no',
      smoking: 'no',
      alcoholism: 'no',
      otherSubstances: 'no',
      recentVaccination: 'no',
      other: 'no',
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const renderField = (
    field: keyof z.infer<typeof formSchema>,
    label: string,
    detailsField: keyof z.infer<typeof formSchema>
  ) => (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="si" />
                </FormControl>
                <FormLabel className="font-normal">Sí</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
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
  );

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Formulario de Salud</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-6">
            {renderField(
              'physicalActivity',
              'Actividad física',
              'physicalActivityDetails'
            )}
            {form.watch('physicalActivity') === 'si' && (
              <FormField
                control={form.control}
                name="physicalActivityDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles sobre actividad física"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {renderField('smoking', 'Tabaquismo', 'smokingDetails')}
            {form.watch('smoking') === 'si' && (
              <FormField
                control={form.control}
                name="smokingDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles sobre tabaquismo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {renderField('alcoholism', 'Alcoholismo', 'alcoholismDetails')}
            {form.watch('alcoholism') === 'si' && (
              <FormField
                control={form.control}
                name="alcoholismDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles sobre alcoholismo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {renderField(
              'otherSubstances',
              'Uso de otras sustancias (drogas)',
              'otherSubstancesDetails'
            )}
            {form.watch('otherSubstances') === 'si' && (
              <FormField
                control={form.control}
                name="otherSubstancesDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles sobre uso de otras sustancias"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {renderField(
              'recentVaccination',
              'Vacuna o inmunización reciente',
              'recentVaccinationDetails'
            )}
            {form.watch('recentVaccination') === 'si' && (
              <FormField
                control={form.control}
                name="recentVaccinationDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles sobre vacuna o inmunización reciente"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {renderField('other', 'Otros', 'otherDetails')}
            {form.watch('other') === 'si' && (
              <FormField
                control={form.control}
                name="otherDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Otros detalles" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={handleNoToAll}>
              No a todo
            </Button>
            <Button type="submit">Guardar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
