'use client';

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
} from '../ui/select';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonSubmit } from '@/components/buttons/button-submit';
import { Input } from '@/components/ui/input';
import { registerProfessionalAction } from '@/actions';
import { specialties } from '@/data/specialties';
import { toast } from '@/hooks/use-toast';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export default function FormSignProfessional() {
  const [state, formAction] = useFormState(registerProfessionalAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<ProfessionalFormType>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      specialty: undefined,
      email: '',
      password: '',
      confirmPassword: '',
      registrationNumber: '',
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
    <Form {...form}>
      <form action={formAction} className="space-y-2 p-1">
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
                  {specialties.map(({ name, nameEn }, i) => (
                    <SelectItem key={i} value={nameEn}>
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
                <Input type="email" placeholder="juan@example.com" {...field} />
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
                  <Input type={showPassword ? 'text' : 'password'} {...field} />
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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

        <ButtonSubmit text="Registarse" />
      </form>
    </Form>
  );
}
