import { z } from "zod";

export const personalInfoSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  avatar: z.string().optional(),
  about_me: z
    .string()
    .max(233, 'About me must be at least 233 characters')
    .optional(),
  genre: z.enum(['male', 'female', 'other']).optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Must be a valid email'),
  skills: z.array(z.string()).optional(),
});

export type PersonalInfoType = z.infer<typeof personalInfoSchema>

export const locationProfessionalSchema = z.object({
  locations: z.array(
    z.object({
      name: z.string(),
      address: z.string(),
      schedule: z.string(),
      
    })
  ),
});

export type LocationProfessionalType = z.infer<typeof locationProfessionalSchema>

export const seguritySchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(1, 'Please confirm your new password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export type SegurityType = z.infer<typeof seguritySchema>