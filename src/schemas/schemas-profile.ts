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

export const allergieSchema = z.object({
  foodAllergy: z.enum(['si', 'no']).optional(),
  foodAllergyDetails: z.string().optional(),
  insectAllergy: z.enum(['si', 'no']).optional(),
  insectAllergyDetails: z.string().optional(),
  medicineAllergy: z.enum(['si', 'no']).optional(),
  medicineAllergyDetails: z.string().optional(),
  otherAllergies: z.enum(['si', 'no']).optional(),
  otherAllergiesDetails: z.string().optional(),
});

export type AllergieFormType = z.infer<typeof allergieSchema>;

export const familyInheritanceSchema = z.object({
  diabetes: z.enum(['si', 'no']).optional(),
  diabetesDetails: z.string().optional(),
  heartDiseases: z.enum(['si', 'no']).optional(),
  heartDiseasesDetails: z.string().optional(),
  hypertension: z.enum(['si', 'no']).optional(),
  hypertensionDetails: z.string().optional(),
  thyroidDiseases: z.enum(['si', 'no']).optional(),
  thyroidDiseasesDetails: z.string().optional(),
  chronicKidneyDisease: z.enum(['si', 'no']).optional(),
  chronicKidneyDiseaseDetails: z.string().optional(),
  other: z.enum(['si', 'no']).optional(),
  otherDetails: z.string().optional(),
});

export type FamilyInheritanceFormType = z.infer<typeof familyInheritanceSchema>;

export const noPathologicalSchema = z.object({
  physicalActivity: z.enum(['si', 'no']).optional(),
  physicalActivityDetails: z.string().optional(),
  smoking: z.enum(['si', 'no']).optional(),
  smokingDetails: z.string().optional(),
  alcoholism: z.enum(['si', 'no']).optional(),
  alcoholismDetails: z.string().optional(),
  otherSubstances: z.enum(['si', 'no']).optional(),
  otherSubstancesDetails: z.string().optional(),
  recentVaccination: z.enum(['si', 'no']).optional(),
  recentVaccinationDetails: z.string().optional(),
  other: z.enum(['si', 'no']).optional(),
  otherDetails: z.string().optional(),
});

export type NoPathologicalFormType = z.infer<typeof noPathologicalSchema>;

export const pathologicalSchema = z.object({
  hospitalization: z.enum(['si', 'no']).optional(),
  hospitalizationDetails: z.string().optional(),
  diabetes: z.enum(['si', 'no']).optional(),
  diabetesDetails: z.string().optional(),
  thyroidDiseases: z.enum(['si', 'no']).optional(),
  thyroidDiseasesDetails: z.string().optional(),
  hypertension: z.enum(['si', 'no']).optional(),
  hypertensionDetails: z.string().optional(),
  heartDiseases: z.enum(['si', 'no']).optional(),
  heartDiseasesDetails: z.string().optional(),
  trauma: z.enum(['si', 'no']).optional(),
  traumaDetails: z.string().optional(),
  cancer: z.enum(['si', 'no']).optional(),
  cancerDetails: z.string().optional(),
  tuberculosis: z.enum(['si', 'no']).optional(),
  tuberculosisDetails: z.string().optional(),
  transfusions: z.enum(['si', 'no']).optional(),
  transfusionsDetails: z.string().optional(),
  respiratoryDiseases: z.enum(['si', 'no']).optional(),
  respiratoryDiseasesDetails: z.string().optional(),
  gastrointestinalDiseases: z.enum(['si', 'no']).optional(),
  gastrointestinalDiseasesDetails: z.string().optional(),
  sexuallyTransmittedDiseases: z.enum(['si', 'no']).optional(),
  sexuallyTransmittedDiseasesDetails: z.string().optional(),
  chronicKidneyDisease: z.enum(['si', 'no']).optional(),
  chronicKidneyDiseaseDetails: z.string().optional(),
  other: z.enum(['si', 'no']).optional(),
  otherDetails: z.string().optional(),
});

export type PathologicalFormType = z.infer<typeof pathologicalSchema>;

export const securitySchema = z
  .object({
    currentPassword: z.string().min(1, 'La contraseña actual es requerida'),
    newPassword: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(1, 'Por favor confirma tu nueva contraseña'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type SecurityFormType = z.infer<typeof securitySchema>;


export const vaccinationSchema = z.object({
  atBirth: z.object({
    bcg: z.boolean().default(false),
    hepatitisB1: z.boolean().default(false),
  }),
  twoMonths: z.object({
    pentavalent1: z.boolean().default(false),
    hepatitisB2: z.boolean().default(false),
    rotavirus1: z.boolean().default(false),
    pneumococcal1: z.boolean().default(false),
  }),
  fourMonths: z.object({
    pentavalent2: z.boolean().default(false),
    rotavirus2: z.boolean().default(false),
    pneumococcal2: z.boolean().default(false),
  }),
  sixMonths: z.object({
    pentavalent3: z.boolean().default(false),
    hepatitisB3: z.boolean().default(false),
    rotavirus3: z.boolean().default(false),
    influenza1: z.boolean().default(false),
  }),
  sevenMonths: z.object({
    influenza2: z.boolean().default(false),
  }),
  twelveMonths: z.object({
    srp1: z.boolean().default(false),
    pneumococcal3: z.boolean().default(false),
  }),
  eighteenMonths: z.object({
    pentavalent4: z.boolean().default(false),
  }),
  twoYears: z.object({
    influenzaAnnual1: z.boolean().default(false),
  }),
  threeYears: z.object({
    influenzaAnnual2: z.boolean().default(false),
  }),
  fourYears: z.object({
    dpt: z.boolean().default(false),
    influenzaAnnual3: z.boolean().default(false),
  }),
  fiveYears: z.object({
    influenzaAnnual4: z.boolean().default(false),
    vopOpv: z.boolean().default(false),
  }),
  elevenYears: z.object({
    vph: z.boolean().default(false),
  }),
  otherVaccines: z.enum(['si', 'no']).optional(),
});

export type VaccinationFormType = z.infer<typeof vaccinationSchema>;