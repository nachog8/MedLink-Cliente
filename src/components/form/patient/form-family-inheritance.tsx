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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { familyInheritancePatientAction } from '@/actions/patient-actions';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type FamilyInheritanceFormProps = {
  initialValues?: Partial<FamilyInheritanceFormType>;
};

export default function FamilyInheritanceForm({
  initialValues,
}: FamilyInheritanceFormProps) {
  const [state, formAction] = useFormState(
    familyInheritancePatientAction,
    null
  );
  const form = useForm<FamilyInheritanceFormType>({
    resolver: zodResolver(familyInheritanceSchema),
    defaultValues: {
      diabetes: initialValues?.diabetes || undefined,
      heartDiseases: initialValues?.heartDiseases || undefined,
      hypertension: initialValues?.hypertension || undefined,
      thyroidDiseases: initialValues?.thyroidDiseases || undefined,
      chronicKidneyDisease: initialValues?.chronicKidneyDisease || undefined,
      other: initialValues?.other || undefined,
    },
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title:
          'Datos sobre ANTECEDENTES HEREDO FAMILIAR actualizado con Exitoso!!',
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
      diabetes: false,
      heartDiseases: false,
      hypertension: false,
      thyroidDiseases: false,
      chronicKidneyDisease: false,
      other: false,
    });
  };

  const handleClearAll = () => {
    form.reset({
      diabetes: undefined,
      heartDiseases: undefined,
      hypertension: undefined,
      thyroidDiseases: undefined,
      chronicKidneyDisease: undefined,
      other: undefined,
    });
  };

  const renderField = (
    field: keyof FamilyInheritanceFormType,
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
      <form action={formAction} className="space-y-2 p-5">
        {renderField('diabetes', 'Diabetes')}
        {form.watch('diabetes') && (
          <FormField
            control={form.control}
            name="diabetesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Detalles sobre diabetes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Separator />
        {renderField('heartDiseases', 'Cardiopatías')}
        {form.watch('heartDiseases') && (
          <FormField
            control={form.control}
            name="heartDiseasesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre cardiopatías"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />

        {renderField('hypertension', 'Hipertensión arterial')}
        {form.watch('hypertension') && (
          <FormField
            control={form.control}
            name="hypertensionDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre hipertensión arterial"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />

        {renderField('thyroidDiseases', 'Enfermedades tiroideas')}
        {form.watch('thyroidDiseases') && (
          <FormField
            control={form.control}
            name="thyroidDiseasesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre enfermedades tiroideas"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />

        {renderField('chronicKidneyDisease', 'Enfermedad renal crónica')}
        {form.watch('chronicKidneyDisease') && (
          <FormField
            control={form.control}
            name="chronicKidneyDiseaseDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre enfermedad renal crónica"
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
        {form.watch('other') && (
          <FormField
            control={form.control}
            name="otherDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre otros antecedentes"
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
          <Button type="button" onClick={handleNoToAll} variant="outline">
            No a todos
          </Button>
          <Button type="button" onClick={handleClearAll} variant="outline">
            Limpiar todos
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
