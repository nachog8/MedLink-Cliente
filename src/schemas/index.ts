// Schemas Zod Form

import { z } from 'zod';

// Regex
const numberRegex = /^\d+$/;
const matriculaRegex = /^(M|m)\d{4,6}$/;

// Login User Schema
export const loginSchema = z.object({
  email: z
    .string({ message: 'El email es requerido' })
    .email({ message: 'Debe ser un email válido.' }),
  password: z
    .string({ message: 'El password es requerido' })
    .min(6, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
});

export type LoginFormType = z.infer<typeof loginSchema>;

//Patient Schema
export const patientSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    lastName: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
    document: z
      .string({ message: 'El documento es requerido' })
      .min(7, { message: 'El documento no puede ser menor a 7 dígitos' })
      .max(8, { message: 'El documento no puede ser mayor a 8 dígitos' })
      .regex(numberRegex, {
        message: 'El documento solo debe contener números',
      }),
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),
    phone: z
      .string()
      .min(8, { message: 'El teléfono debe tener al menos 8 dígitos' })
      .max(14, { message: 'El teléfono no puede tener más de 14 dígitos' })
      .regex(numberRegex, 'El número de teléfono solo debe contener números'),
    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
    gender: z.enum(['masculino', 'femenino', 'otro']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type PatientFormType = z.infer<typeof patientSchema>;

// Professional Schema

export const professionalSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    lastName: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
    document: z
      .string({ message: 'El documento es requerido' })
      .min(7, { message: 'El documento no puede ser menor a 7 dígitos' })
      .max(8, { message: 'El documento no puede ser mayor a 8 dígitos' })
      .regex(numberRegex, {
        message: 'El documento solo debe contener números',
      }),
    specialty: z.string({
      message: 'La especialidad es requerida',
    }),
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),
    phone: z
      .string()
      .min(8, { message: 'El teléfono debe tener al menos 8 dígitos' })
      .max(14, { message: 'El teléfono no puede tener más de 14 dígitos' })
      .regex(numberRegex, 'El número de teléfono solo debe contener números'),
    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
    registrationNumber: z
      .string()
      .min(4, {
        message: 'El número de matrícula debe tener al menos 4 caracteres.',
      })
      .regex(
        matriculaRegex,
        'El número de matrícula no coincide con los estándares Argentinos'
      ),
    registrationType: z.enum(['nacional', 'provincial']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type ProfessionalFormType = z.infer<typeof professionalSchema>;
