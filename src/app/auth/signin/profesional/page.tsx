'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Controller, useForm } from 'react-hook-form';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ProfessionalFormType, professionalSchema } from '@/schemas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonSubmit } from '@/components/buttons/button-submit';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { registerProfessionalAction } from '@/actions';
import { specialties } from '@/data/specialties';
import { toast } from '@/hooks/use-toast';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Page() {
  const [state, formAction] = useFormState(registerProfessionalAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<ProfessionalFormType>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      document: '',
      specialty: undefined,
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      registrationNumber: '',
      registrationType: undefined,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Registration Successful!',
        description:
          'Your account has been created. You will be redirected to the Login page.',
      });
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Registration Error',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  return (
    <div className="container mx-auto grid gap-10 px-4 py-8 lg:grid-cols-2">
      <aside>
        <Skeleton className="h-[350px] w-full lg:h-full" />
      </aside>
      <section>
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Registro de Profesional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
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
                        <Input placeholder="Pérez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Documento (Sin puntos)</FormLabel>
                      <FormControl>
                        <Input placeholder="11111111" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  name="specialty"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Su especialidad</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        name="specialty"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccioná tu especialidad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {specialties.map(({ name }, i) => (
                            <SelectItem key={i} value={name}>
                              {name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        <Input
                          type="email"
                          placeholder="juan@example.com"
                          {...field}
                        />
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
                      <FormLabel>Teléfono: Cod. + Número</FormLabel>
                      <FormControl>
                        <Input placeholder="370445654" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeClosedIcon className="h-4 w-4" />
                            ) : (
                              <EyeOpenIcon className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Contraseña</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeClosedIcon className="h-4 w-4" />
                            ) : (
                              <EyeOpenIcon className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Matrícula</FormLabel>
                      <FormControl>
                        <Input placeholder="M12345" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Matrícula</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        name="registrationType"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione el tipo de matrícula" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="nacional">Nacional</SelectItem>
                          <SelectItem value="provincial">Provincial</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ButtonSubmit text="Registarse" />
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
