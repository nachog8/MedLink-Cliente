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
  PathologicalFormType,
  pathologicalSchema,
} from '@/schemas/schemas-profile';
import { Separator } from '@/components/ui/separator';

export default function PathologicalForm() {
  const form = useForm<PathologicalFormType>({
    resolver: zodResolver(pathologicalSchema),
    defaultValues: {
      hospitalization: undefined,
      diabetes: undefined,
      thyroidDiseases: undefined,
      hypertension: undefined,
      heartDiseases: undefined,
      trauma: undefined,
      cancer: undefined,
      tuberculosis: undefined,
      transfusions: undefined,
      respiratoryDiseases: undefined,
      gastrointestinalDiseases: undefined,
      sexuallyTransmittedDiseases: undefined,
      chronicKidneyDisease: undefined,
      other: undefined,
    },
  });

  const handleNoToAll = () => {
    form.reset({
      hospitalization: 'no',
      diabetes: 'no',
      thyroidDiseases: 'no',
      hypertension: 'no',
      heartDiseases: 'no',
      trauma: 'no',
      cancer: 'no',
      tuberculosis: 'no',
      transfusions: 'no',
      respiratoryDiseases: 'no',
      gastrointestinalDiseases: 'no',
      sexuallyTransmittedDiseases: 'no',
      chronicKidneyDisease: 'no',
      other: 'no',
    });
  };

  const handleClearAll = () => {
    form.reset();
  };

  function onSubmit(values: PathologicalFormType) {
    console.log(values);
  }

  const renderField = (field: keyof PathologicalFormType, label: string) => (
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
        {renderField('hospitalization', 'Hospitalización previa')}
        {form.watch('hospitalization') === 'si' && (
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
        {form.watch('diabetes') === 'si' && (
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
        {form.watch('thyroidDiseases') === 'si' && (
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
        {form.watch('hypertension') === 'si' && (
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
        {form.watch('heartDiseases') === 'si' && (
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
        {form.watch('trauma') === 'si' && (
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
        {form.watch('cancer') === 'si' && (
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
        {form.watch('tuberculosis') === 'si' && (
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
        {form.watch('transfusions') === 'si' && (
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
        {form.watch('respiratoryDiseases') === 'si' && (
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
        {form.watch('gastrointestinalDiseases') === 'si' && (
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
        {form.watch('sexuallyTransmittedDiseases') === 'si' && (
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
        {form.watch('chronicKidneyDisease') === 'si' && (
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
        {form.watch('other') === 'si' && (
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
