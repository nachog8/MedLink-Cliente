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

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { edithProfilePatientAction } from '@/actions/patient-actions';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export default function EditProfileForm() {
  const [state, formAction] = useFormState(edithProfilePatientAction, null);
  const form = useForm<EditProfileFormType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: 'blanca',
      last_name: 'barreto',
      birth_date: new Date('1986-02-03'),
      genre: 'female',
      about_me:
        'Comprometida con el seguimiento de mi bienestar y la consulta de información médica en tiempo real, facilitando la comunicación y el intercambio de información con profesionales de la salud. Mi objetivo es gestionar de manera proactiva mi salud y mantener un registro actualizado para una mejor atención médica.',
      phone: '+54-3718-441861',
      email: 'barrett@hotmail.com',
      province: 'Corrientes',
      city: 'Corrientes',
      avatar_image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&fit=crop',
      banner_image: '',
      height: '175 cm',
      weight: '70 kg',
      bloodType: 'O+',
      bloodPressure: 'normal',
      isDonor: true,
      hasAllergies: false,
      hasChronicDiseases: false,
      hasHealthyLifestyle: true,
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="birth_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'relative w-[240px] bg-sky-50 pl-10 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Elige una Fecha</span>
                      )}
                      <CalendarIcon
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <SelectTrigger className="bg-sky-50">
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
          name="about_me"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobre mi</FormLabel>
              <FormControl>
                <Textarea {...field} className="h-32 bg-sky-50" />
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="province"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provincia</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciudad</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="avatar_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen de Avatar</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <ImageIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
          name="banner_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen para Banner</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <ImageIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Ruler
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Weight
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Droplet
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Heart
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-green-200 p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3 text-green-800">
                  <HeartHandshake className="text-green-400" size={18} />
                  Donador de Organos
                </FormLabel>
                <FormDescription className="text-green-800">
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-green-200 p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3 text-green-800">
                  <Bike className="text-green-400" size={18} />
                  Estilo de Vida
                </FormLabel>
                <FormDescription className="text-green-800">
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-orange-400 p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3 text-orange-800">
                  <CircleAlert className="text-orange-700" size={18} />
                  Alergias
                </FormLabel>
                <FormDescription className="text-orange-800">
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-orange-400 p-4">
              <div className="space-y-0.5">
                <FormLabel className="flex gap-3 text-orange-800">
                  <CircleAlert className="text-orange-700" size={18} />
                  Enfermedades Cronicas
                </FormLabel>
                <FormDescription className="text-orange-800">
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
