import { z } from 'zod';

export const editProfileSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  last_name: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  birth_date: z.date(),
  genre: z.enum(['male', 'female', 'other']),
  about_me: z
    .string()
    .max(500, { message: 'About me must not exceed 500 characters.' }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-()]+$/, { message: 'Invalid phone number format.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  province: z.string(),
  city: z.string(),
  avatar_image: z.string().url({ message: 'Invalid URL for avatar image.' }),
  banner_image: z
    .string()
    .url({ message: 'Invalid URL for banner image.' })
    .optional(),
  height: z.string(),
  weight: z.string(),
  bloodType: z.string(),
  bloodPressure: z.string(),
  isDonor: z.boolean(),
  hasAllergies: z.boolean(),
  hasChronicDiseases: z.boolean(),
  hasHealthyLifestyle: z.boolean(),
});

export type EditProfileFormType = z.infer<typeof editProfileSchema>;
