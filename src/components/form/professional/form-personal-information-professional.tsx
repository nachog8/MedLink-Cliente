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
  PersonalInfoType,
  personalInfoSchema,
} from '@/schemas/professionalSchema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { personalInfoProfessionalAction } from '@/actions/professional-actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export function PersonalInfoForm() {
  const [skillInput, setSkillInput] = useState('');
  const [state, formAction] = useFormState(
    personalInfoProfessionalAction,
    null
  );
  useEffect(() => {
    if (state?.success) {
      console.log(state.data);
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
      firstName: '',
      lastName: '',
      avatar: '',
      aboutMe: '',
      genre: 'male',
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
                name="firstName"
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
                name="lastName"
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
              name="aboutMe"
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
              <Button
                type="submit"
                onClick={() => console.log(form.getValues())}
              >
                Guardar Información
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
