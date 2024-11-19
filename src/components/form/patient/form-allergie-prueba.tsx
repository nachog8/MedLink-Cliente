'use client';

import * as z from 'zod';

import { UseFormRegister, UseFormSetValue, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormSchema } from '@/schemas/schemas-profile';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { allergiePatientAction } from '@/actions/patient-actions';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof FormSchema>;

interface AllergyFormProps {
  initValues?: Partial<FormData>;
}

export function AllergyForm({ initValues }: AllergyFormProps) {
  const [state, formAction] = useFormState(allergiePatientAction, null);

  const {
    register,

    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      foodAllergy: initValues?.foodAllergy ?? null,
      insectAllergy: initValues?.insectAllergy ?? null,
      insectAllergyDetails: initValues?.insectAllergyDetails ?? '',
      medicineAllergy: initValues?.medicineAllergy ?? null,
      medicineAllergyDetails: initValues?.medicineAllergyDetails ?? '',
      otherAllergies: initValues?.otherAllergies ?? null,
      otherAllergiesDetails: initValues?.otherAllergiesDetails ?? '',
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

  const watchAllFields = watch();

  const handleNoToAll = () => {
    setValue('foodAllergy', false);
    setValue('insectAllergy', false);
    setValue('medicineAllergy', false);
    setValue('otherAllergies', false);
  };

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-4">
        <AllergyField
          label="¿Tienes alergias alimentarias?"
          name="foodAllergy"
          register={register}
          setValue={setValue}
          value={watchAllFields.foodAllergy}
        />

        <AllergyField
          label="¿Tienes alergias a insectos?"
          name="insectAllergy"
          register={register}
          setValue={setValue}
          value={watchAllFields.insectAllergy}
          detailsName="insectAllergyDetails"
          error={errors.insectAllergyDetails?.message}
        />

        <AllergyField
          label="¿Tienes alergias a medicamentos?"
          name="medicineAllergy"
          register={register}
          setValue={setValue}
          value={watchAllFields.medicineAllergy}
          detailsName="medicineAllergyDetails"
          error={errors.medicineAllergyDetails?.message}
        />

        <AllergyField
          label="¿Tienes otras alergias?"
          name="otherAllergies"
          register={register}
          setValue={setValue}
          value={watchAllFields.otherAllergies}
          detailsName="otherAllergiesDetails"
          error={errors.otherAllergiesDetails?.message}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="secondary" onClick={handleNoToAll}>
          No a todo
        </Button>
        <Button type="submit">Actualizar Información</Button>
      </div>
    </form>
  );
}

interface AllergyFieldProps {
  label: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  value: boolean | null;
  detailsName?: keyof FormData;
  error?: string;
}

function AllergyField({
  label,
  name,
  register,
  setValue,
  value,
  detailsName,
  error,
}: AllergyFieldProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>{label}</Label>
        <div className="flex gap-4">
          {[
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ].map((option) => (
            <div key={option.label} className="flex items-center space-x-2">
              <input
                {...register(name)} // Registra el campo con React Hook Form
                type="radio"
                id={`${name}-${option.label}`}
                value={`${option.value}`} // Asegura que el valor sea `true` o `false`
                checked={value === option.value}
                onChange={() => setValue(name, option.value)}
                className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border-primary text-primary before:absolute before:left-1/2 before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-100 focus:ring-primary"
              />
              <Label
                htmlFor={`${name}-${option.label}`}
                className="cursor-pointer text-sm font-medium leading-none"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {value === true && detailsName && (
        <div className="space-y-2">
          <Textarea
            {...register(detailsName)}
            placeholder="Ingrese detalles aquí..."
            className={cn(error && 'border-destructive')}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      )}
    </div>
  );
}
