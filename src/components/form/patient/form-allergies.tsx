'use client';

import { AllergieFormType, allergieSchema } from '@/schemas/schemas-profile';
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
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { allergiePatientAction } from '@/actions/patient-actions';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type AllergyFormProps = {
  initialValues?: Partial<AllergieFormType>;
};

export default function AllergyForm({ initialValues }: AllergyFormProps) {
  const [state, formAction] = useFormState(allergiePatientAction, null);

  const form = useForm<AllergieFormType>({
    resolver: zodResolver(allergieSchema),
    defaultValues: {
      foodAllergy: initialValues?.foodAllergy || undefined,
      insectAllergy: initialValues?.insectAllergy || undefined,
      medicineAllergy: initialValues?.medicineAllergy || undefined,
      otherAllergies: initialValues?.otherAllergies || undefined,
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Datos sobre ALERGIA actualizado con Exitoso!!',
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
    form.reset({
      foodAllergy: false,
      insectAllergy: false,
      medicineAllergy: false,
      otherAllergies: false,
    });
  };

  const handleClearAll = () => {
    form.reset();
  };

  const renderField = (fieldName: keyof AllergieFormType, label: string) => (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex items-center justify-between">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={(value) => field.onChange(value === 'true')}
              value={field.value === undefined ? '' : String(field.value)}
              className="flex gap-5"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="true" />
                </FormControl>
                <FormLabel className="font-normal">Sí</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="false" />
                </FormControl>
                <FormLabel>No</FormLabel>
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
      <form action={formAction} className="space-y-2 p-5">
        {renderField('foodAllergy', 'Alergia a alimentos')}
        {form.watch('foodAllergy') && (
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
        {form.watch('insectAllergy') && (
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
        {form.watch('medicineAllergy') && (
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
        {form.watch('otherAllergies') && (
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
