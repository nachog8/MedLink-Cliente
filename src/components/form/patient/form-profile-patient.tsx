'use client';

import {
  Bike,
  CircleAlert,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Ruler,
  User,
  Weight,
} from 'lucide-react';
import {
  EditProfileFormType,
  editProfileSchema,
} from '@/schemas/schemas-profile';
import { FieldInput, InputTypes } from '../fields/field-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  bloodPressureOptions,
  bloodTypeOptions,
  genderOptions,
} from '@/data/form-options';
import { useEffect, useState } from 'react';

import { ButtonForm } from '@/components/buttons/button-submit-form';
import { FieldSelect } from '../fields/field-select';
import { FieldSwitch } from '../fields/field-switch';
import ImageUpload from '@/components/buttons/button-image-upload';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Textarea } from '@/components/ui/textarea';
import { UserPatient } from '@/interfaces/auth';
import { edithProfilePatientAction } from '@/actions/patient-actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

export default function EditProfileForm({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  aboutMe,
  phone,
  email,
  location,
  clinicalData,
}: Partial<UserPatient>) {
  const {
    height,
    weight,
    bloodType,
    bloodPressureTrend,
    isDonor,
    hasAllergies,
    hasChronicDiseases,
    hasHealthyLifestyle,
  } = clinicalData || {};
  const [state, formAction] = useFormState(edithProfilePatientAction, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const form = useForm<EditProfileFormType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      aboutMe,
      phone,
      email,
      location,
      avatar: undefined,
      height,
      weight,
      bloodType,
      bloodPressureTrend,
      isDonor,
      hasAllergies,
      hasChronicDiseases,
      hasHealthyLifestyle,
    },
  });

  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
      router.refresh();
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
  }, [state, router]);

  if (isSubmitted) return <MessageSuccesfull />;
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-5 px-3">
        <ImageUpload form={form} name="avatar" />

        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="firstName"
          label="Nombre"
          icon={<User size={18} />}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="lastName"
          label="Apellido"
          icon={<User size={18} />}
        />
        <div className="grid grid-cols-2 items-center gap-5">
          <FieldInput<EditProfileFormType>
            control={form.control}
            fieldName="dateOfBirth"
            label="Fecha de Nacimiento"
            type={InputTypes.DATE}
          />

          <FieldSelect<EditProfileFormType>
            control={form.control}
            fieldName="gender"
            label="Genero"
            options={genderOptions}
          />
        </div>
        <FormField
          control={form.control}
          name="aboutMe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobre mi</FormLabel>
              <FormControl>
                <Textarea {...field} className="h-32" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="phone"
          label="Teléfono"
          icon={<Phone size={18} />}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="email"
          label="Email"
          icon={<Mail size={18} />}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="location"
          label="Localización"
          icon={<MapPin size={18} />}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="height"
          label="Altura"
          icon={<Ruler size={18} />}
        />
        <FieldInput<EditProfileFormType>
          control={form.control}
          fieldName="weight"
          label="Peso"
          icon={<Weight size={18} />}
        />
        <FieldSelect<EditProfileFormType>
          control={form.control}
          fieldName="bloodType"
          label="Tipo de sangre"
          options={bloodTypeOptions}
        />
        <FieldSelect<EditProfileFormType>
          control={form.control}
          fieldName="bloodPressureTrend"
          label="Presión"
          options={bloodPressureOptions}
        />
        <FieldSwitch<EditProfileFormType>
          control={form.control}
          fieldName="isDonor"
          label="Donador de Órganos"
          description="¿Estás registrado como donante de órganos?"
          icon={<HeartHandshake size={18} />}
        />
        <FieldSwitch<EditProfileFormType>
          control={form.control}
          fieldName="hasHealthyLifestyle"
          label="Estilo de Vida"
          description="¿Mantienes un estilo de vida saludable?"
          icon={<Bike size={18} />}
        />
        <FieldSwitch<EditProfileFormType>
          control={form.control}
          fieldName="hasAllergies"
          label="Alergias"
          description="Posees alguna alergia a medicamentos u de otro tipo?"
          icon={<CircleAlert size={18} />}
        />
        <FieldSwitch<EditProfileFormType>
          control={form.control}
          fieldName="hasChronicDiseases"
          label="Enfermedades Cronicas"
          description="Tienes alguna enfermedad cronica?"
          icon={<CircleAlert size={18} />}
        />

        <ButtonForm text="Actualizar Perfil" />
      </form>
    </Form>
  );
}
