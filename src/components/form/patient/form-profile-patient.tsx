'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';

import {
  Calendar as CalendarIcon,
  User,
  Phone,
  Mail,
  MapPin,
  Image,
  Ruler,
  Weight,
  Droplet,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  last_name: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  birth_date: z.date(),
  genre: z.enum(['male', 'female', 'other']),
  about_me: z
    .string()
    .max(500, { message: 'About me must not exceed 500 characters.' }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-()]+$/, { message: 'Invalid phone number format.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  province: z.string(),
  city: z.string(),
  avatar_image: z.string().url({ message: 'Invalid URL for avatar image.' }),
  banner_image: z
    .string()
    .url({ message: 'Invalid URL for banner image.' })
    .optional(),
  height: z.string(),
  weight: z.string(),
  bloodType: z.string(),
  bloodPressure: z.string(),
  isDonor: z.boolean(),
  hasAllergies: z.boolean(),
  hasChronicDiseases: z.boolean(),
  hasHealthyLifestyle: z.boolean(),
});

export default function EditProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Last Name</FormLabel>
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
              <FormLabel>Date of birth</FormLabel>
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
                        <span>Pick a date</span>
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
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-sky-50" />
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
              <FormLabel>Phone</FormLabel>
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
              <FormLabel>Province</FormLabel>
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
              <FormLabel>City</FormLabel>
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
              <FormLabel>Avatar Image URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Image
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
              <FormLabel>Banner Image URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} className="bg-sky-50 pl-10" />
                  <Image
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
              <FormLabel>Height</FormLabel>
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
              <FormLabel>Weight</FormLabel>
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
              <FormLabel>Blood Type</FormLabel>
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
              <FormLabel>Blood Pressure</FormLabel>
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-sky-50 p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Organ Donor</FormLabel>
                <FormDescription>
                  Are you registered as an organ donor?
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-sky-50 p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Allergies</FormLabel>
                <FormDescription>Do you have any allergies?</FormDescription>
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-sky-50 p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Chronic Diseases</FormLabel>
                <FormDescription>
                  Do you have any chronic diseases?
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
            <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-sky-50 p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Healthy Lifestyle</FormLabel>
                <FormDescription>
                  Do you maintain a healthy lifestyle?
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
        <Button type="submit" className="bg-sky-400 hover:bg-sky-500">
          Update Profile
        </Button>
      </form>
    </Form>
  );
}
