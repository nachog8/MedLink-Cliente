// Schemas Zod Form

import { z } from 'zod';

// Regex
const numberRegex = /^\d+$/;
// const matriculaRegex = /^(M|m)\d{4,6}$/;

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
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),
    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type PatientFormType = z.infer<typeof patientSchema>;

// Professional Schema

export const professionalSchema = z
  .object({
    specialization: z.string({
      message: 'La especialidad es requerida',
    }),
    email: z.string().email({
      message: 'Debe ser un email válido.',
    }),

    password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    }),
    confirmPassword: z.string(),
    licenseNumber: z
      .string()
      .min(4, {
        message: 'El número de matrícula debe tener al menos 4 caracteres.',
      })
      .regex(
        numberRegex,
        'El número de matrícula no coincide con los estándares Argentinos'
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type ProfessionalFormType = z.infer<typeof professionalSchema>;

//Contact Form
export const contactSchema = z.object({
  email: z.string().email({
    message: 'Por favor, introduce un email válido.',
  }),
});

export type ContactFormType = z.infer<typeof contactSchema>;

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z
    .string({ message: 'El email es requerido' })
    .email({ message: 'Debe ser un email válido.' }),
});

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(1, 'Please confirm your new password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
