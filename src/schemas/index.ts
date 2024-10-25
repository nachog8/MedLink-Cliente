// Schemas Zod Form

import { z } from 'zod';

//Patient Schema
export const patientSchema = z
  .object({
    nombre: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    apellido: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
    documento: z.string().min(5, {
      message: 'El documento debe tener al menos 5 caracteres.',
    }),
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),
    telefono: z.string().min(10, {
      message: 'El teléfono debe tener al menos 10 dígitos.',
    }),
    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
    sexo: z.enum(['masculino', 'femenino', 'otro']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type patientFormType = z.infer<typeof patientSchema>;

// Professional Schema

export const professionalSchema = z
  .object({
    nombre: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    apellido: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
    documento: z.string().min(5, {
      message: 'El documento debe tener al menos 5 caracteres.',
    }),
    especialidad: z.string().min(2, {
      message: 'La especialidad debe tener al menos 2 caracteres.',
    }),
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),
    telefono: z.string().min(10, {
      message: 'El teléfono debe tener al menos 10 dígitos.',
    }),
    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
    matricula: z.string().min(4, {
      message: 'El número de matrícula debe tener al menos 4 caracteres.',
    }),
    tipoMatricula: z.enum(['nacional', 'provincial']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type professionalFormType = z.infer<typeof professionalSchema>;
