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
} from '@/schemas/schemas-professional';
import { Specialties, UserDoctor } from '@/interfaces/auth';
import { genderOptions, specialtiesOptions } from '@/data/form-options';
import { useEffect, useState } from 'react';

import { ButtonForm } from '@/components/buttons/button-submit-form';
import { FieldInput } from '../fields/field-input';
import { FieldSelect } from '../fields/field-select';
import { ImageUpload } from '@/components/buttons/button-image-upload';
import { Textarea } from '@/components/ui/textarea';
import { personalInfoProfessionalAction } from '@/actions/professional-actions';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

// import { Button } from '@/components/ui/button';

// import { Input } from '@/components/ui/input';

// import { X } from 'lucide-react';

// import { X } from 'lucide-react';

interface Props {
  profileData: Partial<UserDoctor>;
  reload: () => void;
}
export function PersonalInfoForm({ profileData, reload }: Props) {
  // const [skillInput, setSkillInput] = useState('');
  const [state, formAction] = useFormState(
    personalInfoProfessionalAction,
    null
  );

  const form = useForm<PersonalInfoType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      avatar: undefined,
      aboutMe: profileData.aboutMe,
      gender: profileData.gender,
      location: profileData.location,
      phone: profileData.phone,
      email: profileData.email,
      licenseNumber: profileData.licenseNumber,
      specialization: Object.values(Specialties).includes(
        profileData.specialization?.[0] as Specialties
      )
        ? (profileData.specialization?.[0] as Specialties)
        : undefined,

      // skills: [],
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Actualizacion de Informacion Exitoso!!',
      });
      reload();
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

  // const addSkill = () => {
  //   if (skillInput.trim() !== '') {
  //     const currentSkills = form.getValues('skills') || [];

  //     form.setValue('skills', [...currentSkills, skillInput.trim()]);
  //     setSkillInput('');
  //   }
  // };

  // const removeSkill = (index: number) => {
  //   const currentSkills = form.getValues('skills') || [];
  //   form.setValue(
  //     'skills',
  //     currentSkills.filter((_, i) => i !== index)
  //   );
  // };

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
              <FieldInput<PersonalInfoType>
                control={form.control}
                fieldName="firstName"
                label="Nombre"
                placeholder="Jhon"
              />
              <FieldInput<PersonalInfoType>
                control={form.control}
                fieldName="lastName"
                label="Apellido"
                placeholder="Doe"
              />
            </div>

            <ImageUpload<PersonalInfoType>
              control={form.control}
              fieldName="avatar"
              setValue={form.setValue}
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

            <div className="grid gap-3 md:grid-cols-3">
              <FieldSelect<PersonalInfoType>
                control={form.control}
                fieldName="gender"
                label="Género"
                options={genderOptions}
              />
              <FieldSelect<PersonalInfoType>
                control={form.control}
                fieldName="specialization"
                label="Especialización"
                options={specialtiesOptions}
              />
              <FieldInput<PersonalInfoType>
                control={form.control}
                fieldName="licenseNumber"
                label="Matricula"
                placeholder="00000"
              />
            </div>
            <FieldInput<PersonalInfoType>
              control={form.control}
              fieldName="location"
              label="Lugar de Trabajo"
              placeholder="Example: Corrientes, Corrientes"
            />

            <FieldInput<PersonalInfoType>
              control={form.control}
              fieldName="phone"
              label="Telefóno"
              placeholder="Tu número de telefóno"
            />

            <FieldInput<PersonalInfoType>
              control={form.control}
              fieldName="email"
              label="Email"
              placeholder="your.email@example.com"
            />

            {/* <FormField
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
            /> */}

            <div className="grid md:justify-items-end">
              <ButtonForm text="Guardar Información" />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
