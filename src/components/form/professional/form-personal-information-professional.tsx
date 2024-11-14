import * as z from 'zod';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
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

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const personalInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  avatar: z.string().url('Must be a valid URL'),
  bannerImg: z.string().url('Must be a valid URL'),
  about_me: z.string().min(10, 'About me must be at least 10 characters'),
  genre: z.enum(['male', 'female', 'other']),
  location: z.object({
    province: z.string().min(2, 'Province must be at least 2 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
  }),
  contact: z.object({
    phone: z.string().min(10, 'Phone must be at least 10 characters'),
    email: z.string().email('Must be a valid email'),
  }),
  galleryImage: z.array(z.string().url('Must be a valid URL')),
});

type PersonalInfoFormProps = {
  onSubmit: (values: z.infer<typeof personalInfoSchema>) => void;
};

export function PersonalInfoForm({ onSubmit }: PersonalInfoFormProps) {
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      last_name: '',
      avatar: '',
      bannerImg: '',
      about_me: '',
      genre: undefined,
      location: { province: '', city: '' },
      contact: { phone: '', email: '' },
      galleryImage: [''],
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actualiza tu Perfil Profesional</CardTitle>
        <CardDescription>
          Completa tu información personal y profesional para ofrecer a los
          pacientes una visión clara de tu experiencia, especialidades y
          trayectoria. Un perfil completo transmite confianza y profesionalismo,
          facilitando el contacto y la conexión con quienes buscan tus
          servicios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
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
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Foto de Perfil</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/avatar.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bannerImg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Imagen de Fondo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/banner.jpg"
                      {...field}
                    />
                  </FormControl>
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
                    <Textarea
                      placeholder="Escribe algo sobre ti."
                      className="h-40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-3 md:grid-cols-3">
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Género</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu género" />
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
                name="location.province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provincia</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu provincia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu ciudad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="contact.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefóno</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu número de telefóno" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:justify-items-end">
              <Button type="submit">Guardar Información</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
