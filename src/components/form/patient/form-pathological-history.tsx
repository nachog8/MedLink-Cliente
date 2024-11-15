'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  PathologicalFormType,
  pathologicalSchema,
} from '@/schemas/schemas-profile';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { pathologicalPatientAction } from '@/actions/patient-actions';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
type PathologicalFormProps = {
  initialValues?: Partial<PathologicalFormType>;
};

export default function PathologicalForm({
  initialValues,
}: PathologicalFormProps) {
  const [state, formAction] = useFormState(pathologicalPatientAction, null);
  const form = useForm<PathologicalFormType>({
    resolver: zodResolver(pathologicalSchema),
    defaultValues: {
      hospitalization: initialValues?.hospitalization || undefined,
      diabetes: initialValues?.diabetes || undefined,
      thyroidDiseases: initialValues?.thyroidDiseases || undefined,
      hypertension: initialValues?.hypertension || undefined,
      heartDiseases: initialValues?.heartDiseases || undefined,
      trauma: initialValues?.trauma || undefined,
      cancer: initialValues?.cancer || undefined,
      tuberculosis: initialValues?.tuberculosis || undefined,
      transfusions: initialValues?.transfusions || undefined,
      respiratoryDiseases: initialValues?.respiratoryDiseases || undefined,
      gastrointestinalDiseases:
        initialValues?.gastrointestinalDiseases || undefined,
      sexuallyTransmittedDiseases:
        initialValues?.sexuallyTransmittedDiseases || undefined,
      chronicKidneyDisease: initialValues?.chronicKidneyDisease || undefined,
      other: initialValues?.other || undefined,
    },
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Datos sobre ANTECEDENTES PATOLOGICOS actualizado con Exitoso!!',
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
      hospitalization: false,
      diabetes: false,
      thyroidDiseases: false,
      hypertension: false,
      heartDiseases: false,
      trauma: false,
      cancer: false,
      tuberculosis: false,
      transfusions: false,
      respiratoryDiseases: false,
      gastrointestinalDiseases: false,
      sexuallyTransmittedDiseases: false,
      chronicKidneyDisease: false,
      other: false,
    });
  };

  const handleClearAll = () => {
    form.reset();
  };

  const renderField = (field: keyof PathologicalFormType, label: string) => (
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
        {renderField('hospitalization', 'Hospitalización previa')}
        {form.watch('hospitalization') && (
          <FormField
            control={form.control}
            name="hospitalizationDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre hospitalización previa"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
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
        {renderField('trauma', 'Traumatismo')}
        {form.watch('trauma') && (
          <FormField
            control={form.control}
            name="traumaDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre traumatismo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('cancer', 'Cáncer')}
        {form.watch('cancer') && (
          <FormField
            control={form.control}
            name="cancerDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Detalles sobre cáncer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('tuberculosis', 'Tuberculosis')}
        {form.watch('tuberculosis') && (
          <FormField
            control={form.control}
            name="tuberculosisDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre tuberculosis"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('transfusions', 'Transfusiones')}
        {form.watch('transfusions') && (
          <FormField
            control={form.control}
            name="transfusionsDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre transfusiones"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField('respiratoryDiseases', 'Patologías respiratorias')}
        {form.watch('respiratoryDiseases') && (
          <FormField
            control={form.control}
            name="respiratoryDiseasesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre patologías respiratorias"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField(
          'gastrointestinalDiseases',
          'Patologías gastrointestinales'
        )}
        {form.watch('gastrointestinalDiseases') && (
          <FormField
            control={form.control}
            name="gastrointestinalDiseasesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre patologías gastrointestinales"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        {renderField(
          'sexuallyTransmittedDiseases',
          'Enfermedades de transmisión sexual'
        )}
        {form.watch('sexuallyTransmittedDiseases') && (
          <FormField
            control={form.control}
            name="sexuallyTransmittedDiseasesDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Detalles sobre enfermedades de transmisión sexual"
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
                    placeholder="Detalles sobre otras patologías"
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
