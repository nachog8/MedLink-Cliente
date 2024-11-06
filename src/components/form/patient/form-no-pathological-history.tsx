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

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NoPathologicalFormType,
  noPathologicalSchema,
} from '@/schemas/schemas-profile';
import { Separator } from '@/components/ui/separator';

//TODO: Revisar el porque al resetear el formulario, los checkbox me siguen marcando el valor seleccionado
export default function NoPathologicalForm() {
  const form = useForm<NoPathologicalFormType>({
    resolver: zodResolver(noPathologicalSchema),
    defaultValues: {
      physicalActivity: undefined,
      smoking: undefined,
      alcoholism: undefined,
      otherSubstances: undefined,
      recentVaccination: undefined,
      other: undefined,
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

  const handleClearAll = () => {
    form.reset();
  };

  function onSubmit(values: NoPathologicalFormType) {
    console.log(values);
  }

  const renderField = (field: keyof NoPathologicalFormType, label: string) => (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="flex items-center justify-between">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value || ''}
              className="flex gap-5"
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 p-5">
        {renderField('physicalActivity', 'Actividad física')}
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
        <Separator />
        {renderField('smoking', 'Tabaquismo')}
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
        <Separator />
        {renderField('alcoholism', 'Alcoholismo')}
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
        <Separator />
        {renderField('otherSubstances', 'Uso de otras sustancias (drogas)')}
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
        <Separator />
        {renderField('recentVaccination', 'Vacuna o inmunización reciente')}
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
        <Separator />
        {renderField('other', 'Otros')}
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
        <Separator />

        <div className="flex justify-evenly py-2">
          <Button type="button" variant="outline" onClick={handleNoToAll}>
            No a todo
          </Button>
          <Button type="button" variant="outline" onClick={handleClearAll}>
            Limpiar todo
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
