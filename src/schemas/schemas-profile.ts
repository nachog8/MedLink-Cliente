import { z } from 'zod';

export const editProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  aboutMe: z
    .string()
    .max(200, { message: 'La descripción no debe exceder 500 caracteres.' })
    .optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: 'Correo electrónico no válido.' }),
  location: z.string().optional(),
  avatar: z.string().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  bloodType: z.string().optional(),
  bloodPressureTrend: z.string().optional(),
  isDonor: z.boolean().optional(),
  hasAllergies: z.boolean().optional(),
  hasChronicDiseases: z.boolean().optional(),
  hasHealthyLifestyle: z.boolean().optional(),
});

export type EditProfileFormType = z.infer<typeof editProfileSchema>;

export const allergieSchema = z.object({
  foodAllergy: z.string().optional(),
  foodAllergyDetails: z.string().optional(),
  insectAllergy: z.string().optional(),
  insectAllergyDetails: z.string().optional(),
  medicineAllergy: z.string().optional(),
  medicineAllergyDetails: z.string().optional(),
  otherAllergies: z.string().optional(),
  otherAllergiesDetails: z.string().optional(),
});

export type AllergieFormType = z.infer<typeof allergieSchema>;

export const familyInheritanceSchema = z.object({
  diabetes: z.string().optional(),
  diabetesDetails: z.string().optional(),
  heartDiseases: z.string().optional(),
  heartDiseasesDetails: z.string().optional(),
  hypertension: z.string().optional(),
  hypertensionDetails: z.string().optional(),
  thyroidDiseases: z.string().optional(),
  thyroidDiseasesDetails: z.string().optional(),
  chronicKidneyDisease: z.string().optional(),
  chronicKidneyDiseaseDetails: z.string().optional(),
  other: z.string().optional(),
  otherDetails: z.string().optional(),
});

export type FamilyInheritanceFormType = z.infer<typeof familyInheritanceSchema>;

export const noPathologicalSchema = z.object({
  physicalActivity: z.string().optional(),
  physicalActivityDetails: z.string().optional(),
  smoking: z.string().optional(),
  smokingDetails: z.string().optional(),
  alcoholism: z.string().optional(),
  alcoholismDetails: z.string().optional(),
  otherSubstances: z.string().optional(),
  otherSubstancesDetails: z.string().optional(),
  recentVaccination: z.string().optional(),
  recentVaccinationDetails: z.string().optional(),
  other: z.string().optional(),
  otherDetails: z.string().optional(),
});

export type NoPathologicalFormType = z.infer<typeof noPathologicalSchema>;

export const pathologicalSchema = z.object({
  hospitalization: z.string().optional(),
  hospitalizationDetails: z.string().optional(),
  diabetes: z.string().optional(),
  diabetesDetails: z.string().optional(),
  thyroidDiseases: z.string().optional(),
  thyroidDiseasesDetails: z.string().optional(),
  hypertension: z.string().optional(),
  hypertensionDetails: z.string().optional(),
  heartDiseases: z.string().optional(),
  heartDiseasesDetails: z.string().optional(),
  trauma: z.string().optional(),
  traumaDetails: z.string().optional(),
  cancer: z.string().optional(),
  cancerDetails: z.string().optional(),
  tuberculosis: z.string().optional(),
  tuberculosisDetails: z.string().optional(),
  transfusions: z.string().optional(),
  transfusionsDetails: z.string().optional(),
  respiratoryDiseases: z.string().optional(),
  respiratoryDiseasesDetails: z.string().optional(),
  gastrointestinalDiseases: z.string().optional(),
  gastrointestinalDiseasesDetails: z.string().optional(),
  sexuallyTransmittedDiseases: z.string().optional(),
  sexuallyTransmittedDiseasesDetails: z.string().optional(),
  chronicKidneyDisease: z.string().optional(),
  chronicKidneyDiseaseDetails: z.string().optional(),
  other: z.string().optional(),
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
    bcg: z.string().optional(),
    hepatitisB1: z.string().optional(),
  }),
  twoMonths: z.object({
    pentavalent1: z.string().optional(),
    hepatitisB2: z.string().optional(),
    rotavirus1: z.string().optional(),
    pneumococcal1: z.string().optional(),
  }),
  fourMonths: z.object({
    pentavalent2: z.string().optional(),
    rotavirus2: z.string().optional(),
    pneumococcal2: z.string().optional(),
  }),
  sixMonths: z.object({
    pentavalent3: z.string().optional(),
    hepatitisB3: z.string().optional(),
    rotavirus3: z.string().optional(),
    influenza1: z.string().optional(),
  }),
  sevenMonths: z.object({
    influenza2: z.string().optional(),
  }),
  twelveMonths: z.object({
    srp1: z.string().optional(),
    pneumococcal3: z.string().optional(),
  }),
  eighteenMonths: z.object({
    pentavalent4: z.string().optional(),
  }),
  twoYears: z.object({
    influenzaAnnual1: z.string().optional(),
  }),
  threeYears: z.object({
    influenzaAnnual2: z.string().optional(),
  }),
  fourYears: z.object({
    dpt: z.string().optional(),
    influenzaAnnual3: z.string().optional(),
  }),
  fiveYears: z.object({
    influenzaAnnual4: z.string().optional(),
    vopOpv: z.string().optional(),
  }),
  elevenYears: z.object({
    vph: z.string().optional(),
  }),
  other: z.string().optional(),
  otherDetails: z.string().optional(),
});

export type VaccinationFormType = z.infer<typeof vaccinationSchema>;

export const medicationSchema = z
  .object({
    medication: z.string().min(2, {
      message: 'El nombre del medicamento debe tener al menos 2 caracteres.',
    }),
    dosage: z.string().min(1, {
      message: 'La dosis es requerida.',
    }),
    frequency: z.string({
      required_error: 'La frecuencia es requerida.',
    }),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'La fecha de inicio no es válida.',
    }),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'La fecha de finalización no es válida.',
    }),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message:
      'La fecha de finalización debe ser posterior a la fecha de inicio.',
    path: ['endDate'],
  });

export type MedicationFormType = z.infer<typeof medicationSchema>;
