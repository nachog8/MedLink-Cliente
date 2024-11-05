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
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  foodAllergy: z.enum(['si', 'no']).optional(),
  foodAllergyDetails: z.string().optional(),
  insectAllergy: z.enum(['si', 'no']).optional(),
  insectAllergyDetails: z.string().optional(),
  medicineAllergy: z.enum(['si', 'no']).optional(),
  medicineAllergyDetails: z.string().optional(),
  otherAllergies: z.enum(['si', 'no']).optional(),
  otherAllergiesDetails: z.string().optional(),
});

export default function AllergyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const renderField = (
    field: keyof z.infer<typeof formSchema>,
    label: string
  ) => (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="flex items-center justify-between">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
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
    <Card className="w-full max-w-2xl p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-6">
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={handleNoToAll}>
              No a todo
            </Button>
            <Button type="button" variant="outline" onClick={handleClearAll}>
              Limpiar todo
            </Button>
            <Button type="submit">Guardar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
