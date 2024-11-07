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
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  personalInfoSchema,
  PersonalInfoType,
} from '@/schemas/professionalSchema';
import { useFormState } from 'react-dom';
import { personalInfoProfessionalAction } from '@/actions/professional-actions';
import { toast } from '@/hooks/use-toast';

export function PersonalInfoForm() {
  const [skillInput, setSkillInput] = useState('');
  const [state, formAction] = useFormState(
    personalInfoProfessionalAction,
    null
  );
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Actualizacion de Informacion Exitoso!!',
      });
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error en la Actualizacion',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  const form = useForm<PersonalInfoType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      avatar: '',
      about_me: '',
      genre: undefined,
      location: '',
      phone: '',
      email: '',
      skills: [],
    },
  });

  const addSkill = () => {
    if (skillInput.trim() !== '') {
      const currentSkills = form.getValues('skills') || [];
      form.setValue('skills', [...currentSkills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    const currentSkills = form.getValues('skills') || [];
    form.setValue(
      'skills',
      currentSkills.filter((_, i) => i !== index)
    );
  };

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
          <form action={formAction} className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <FormField
                control={form.control}
                name="first_name"
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

            <div className="grid gap-3 md:grid-cols-2">
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
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lugar de Trabajo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example: Corrientes, Corrientes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
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
              name="email"
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
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Habilidades</FormLabel>
                  <div className="flex space-x-2">
                    <FormControl>
                      <Input
                        placeholder="Añade una habilidad"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                      />
                    </FormControl>
                    <Button type="button" onClick={addSkill}>
                      Añadir
                    </Button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {field.value?.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center rounded-full bg-secondary px-3 py-1 text-secondary-foreground"
                      >
                        {skill}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-auto p-0"
                          onClick={() => removeSkill(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
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
