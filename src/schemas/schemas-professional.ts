import { Genders, Specialties } from '@/interfaces/auth';

import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  avatar: z.instanceof(File).optional(),
  aboutMe: z
    .string()
    .max(233, 'La descripción debe tener hasta 233 caracteres')
    .optional(),
  gender: z.nativeEnum(Genders).optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Debe ser un email válido'),
  licenseNumber: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value), { message: 'Debe ser un número válido' }),
  specialization: z.nativeEnum(Specialties),
});

export type PersonalInfoType = z.infer<typeof personalInfoSchema>;

export const locationProfessionalSchema = z.object({
  name: z.string(),
  address: z.string(),
  days: z
    .string()
    .regex(
      /^(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo)\s?-\s?(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo)$/,
      "El formato de los días no es válido (ej. 'Lunes - Viernes')"
    ),
  hours: z
    .string()
    .regex(
      /^\d{1,2}\s?[a]\s?\d{1,2}$/,
      "El formato del rango horario no es válido (ej. '8 a 20')"
    ),
});

export type LocationProfessionalType = z.infer<
  typeof locationProfessionalSchema
>;

export const seguritySchema = z
  .object({
    currentPassword: z.string().min(1, 'La contraseña actual es requerida'),
    newPassword: z
      .string({ required_error: 'La contraseña es requerida' })
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(1, 'Por favor confirma tu nueva contraseña'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type SegurityType = z.infer<typeof seguritySchema>;

export const sendEmailPatientSchema = z.object({
  email: z.string().email({
    message: 'Por favor, ingresa una dirección de email válida.',
  }),
});

export type SendEmailPatientType = z.infer<typeof sendEmailPatientSchema>;
