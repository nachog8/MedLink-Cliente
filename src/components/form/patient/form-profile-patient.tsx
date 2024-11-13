'use client';

import {
  Bike,
  Calendar as CalendarIcon,
  CircleAlert,
  Droplet,
  Heart,
  HeartHandshake,
  Image as ImageIcon,
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { edithProfilePatientAction } from '@/actions/patient-actions';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  genre?: 'male' | 'female' | 'other';
  aboutMe?: string;
  phone?: string;
  email?: string;
  location?: string;
  avatar?: string | null;
  height?: string;
  weight?: string;
  bloodType?: string;
  bloodPressure?: string;
  isDonor?: boolean;
  hasAllergies?: boolean;
  hasChronicDiseases?: boolean;
  hasHealthyLifestyle?: boolean;
}

export default function EditProfileForm({
  firstName,
  lastName,
  birthDate,
  genre,
  aboutMe,
  phone,
  email,
  location,
  height,
  weight,
  bloodType,
  bloodPressure,
  isDonor,
  hasAllergies,
  hasChronicDiseases,
  hasHealthyLifestyle,
}: Props) {
  const [state, formAction] = useFormState(edithProfilePatientAction, null);
  const [fileName, setFileName] = useState<string | null>(null);
  const form = useForm<EditProfileFormType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName,
      lastName,
      birthDate,
      genre,
      aboutMe,
      phone,
      email,
      location,
      avatar: undefined,
      height,
      weight,
      bloodType,
      bloodPressure,
      isDonor,
      hasAllergies,
      hasChronicDiseases,
      hasHealthyLifestyle,
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Edicion de Perfil Exitoso!!',
        description: 'Tu perfil ya fue editado. Gracias!!',
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

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-5 px-3">
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
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'relative w-[240px] pl-10 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Elige una Fecha</span>
                      )}
                      <CalendarIcon
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        size={18}
                      />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Femenino</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="avatar"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Imagen de Avatar</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Input
                      {...field}
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          onChange(file);
                          setFileName(file.name);
                        }
                      }}
                      className="hidden"
                      id="avatar-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="pl-10"
                      onClick={() =>
                        document.getElementById('avatar-upload')?.click()
                      }
                    >
                      Seleccionar Archivo
                    </Button>
                    <ImageIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      size={18}
                    />
                  </div>
                  {fileName && (
                    <span className="text-sm text-muted-foreground">
                      {fileName}
                    </span>
                  )}
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
          name="bloodPressure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tendencia de Presión Arterial</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="pl-10" />
                  <Heart
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
