'use client';

import {
  Bike,
  CircleAlert,
  Droplet,
  Heart,
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import ImageUpload from '@/components/buttons/button-image-upload';
import { Input } from '@/components/ui/input';
import { MessageSuccesfull } from '@/components/other/message-succesfull';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { edithProfilePatientAction } from '@/actions/patient-actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  aboutMe?: string;
  phone?: string;
  email?: string;
  location?: string;
  avatar?: string;
  height?: number;
  weight?: number;
  bloodType?: string;
  bloodPressureTrend?: string;
  isDonor?: boolean;
  hasAllergies?: boolean;
  hasChronicDiseases?: boolean;
  hasHealthyLifestyle?: boolean;
}

export default function EditProfileForm({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  aboutMe,
  phone,
  email,
  location,
  height,
  weight,
  bloodType,
  bloodPressureTrend,
  isDonor,
  hasAllergies,
  hasChronicDiseases,
  hasHealthyLifestyle,
}: Props) {
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
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 items-center gap-5">
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="date"
                      {...field}
                      value={field.value}
                      placeholder="DD-MM-YYYY"
                      className={cn(
                        'w-auto',
                        form.formState.errors.dateOfBirth && 'border-red-500'
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Género</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  name={field.name}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu género" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="MALE">Masculino</SelectItem>
                    <SelectItem value="FEMALE">Femenino</SelectItem>
                    <SelectItem value="OTHER">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefono</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Locación</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Altura</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Ruler
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peso</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Weight
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bloodType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Sangre</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Droplet
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bloodPressureTrend"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tendencia de Presión Arterial</FormLabel>
              <Select
                onValueChange={field.onChange}
                {...field}
                name={field.name}
              >
                <FormControl>
                  <SelectTrigger className="relative pl-10">
                    <Heart
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      size={18}
                    />
                    <SelectValue placeholder="Seleccione la tendencia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="RISING">ALTO</SelectItem>
                  <SelectItem value="NORMAL">NORMAL</SelectItem>
                  <SelectItem value="FALLING">BAJO</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isDonor"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3">
                  <HeartHandshake size={18} />
                  Donador de Organos
                </FormLabel>
                <FormDescription>
                  ¿Estás registrado como donante de órganos?
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  name={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasHealthyLifestyle"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3">
                  <Bike className="" size={18} />
                  Estilo de Vida
                </FormLabel>
                <FormDescription>
                  ¿Mantienes un estilo de vida saludable?
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  name={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasAllergies"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3">
                  <CircleAlert size={18} />
                  Alergias
                </FormLabel>
                <FormDescription>
                  Posees alguna alergia a medicamentos u de otro tipo?
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  name={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasChronicDiseases"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3">
                  <CircleAlert size={18} />
                  Enfermedades Cronicas
                </FormLabel>
                <FormDescription>
                  Tienes alguna enfermedad cronica?
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  name={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Actualizar Perfil</Button>
      </form>
    </Form>
  );
}
