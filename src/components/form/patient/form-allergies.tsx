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
import { AllergieFormType, allergieSchema } from '@/schemas/schemas-profile';
import { Separator } from '@/components/ui/separator';

export default function AllergyForm() {
  const form = useForm<AllergieFormType>({
    resolver: zodResolver(allergieSchema),
    defaultValues: {
      foodAllergy: undefined,
      insectAllergy: undefined,
      medicineAllergy: undefined,
      otherAllergies: undefined,
    },
  });

  const handleNoToAll = () => {
    form.reset({
      foodAllergy: 'no',
      insectAllergy: 'no',
      medicineAllergy: 'no',
      otherAllergies: 'no',
    });
  };

  const handleClearAll = () => {
    form.reset();
  };

  function onSubmit(values: AllergieFormType) {
    console.log(values);
  }

  const renderField = (field: keyof AllergieFormType, label: string) => (
    <>
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
                  <FormLabel>No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 p-5">
        {renderField('foodAllergy', 'Alergia a alimentos')}
        {form.watch('foodAllergy') === 'si' && (
          <FormField
            control={form.control}
            name="foodAllergyDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre alergia a alimentos"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('insectAllergy', 'Alergia a insectos')}
        {form.watch('insectAllergy') === 'si' && (
          <FormField
            control={form.control}
            name="insectAllergyDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre alergia a insectos"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('medicineAllergy', 'Alergia a medicamentos')}
        {form.watch('medicineAllergy') === 'si' && (
          <FormField
            control={form.control}
            name="medicineAllergyDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre alergia a medicamentos"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('otherAllergies', 'Otras alergias')}
        {form.watch('otherAllergies') === 'si' && (
          <FormField
            control={form.control}
            name="otherAllergiesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre otras alergias"
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
