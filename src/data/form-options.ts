import { BloodPressureTrend, BloodTypes, Genders } from '@/interfaces/auth';

export const specialties = [
  { label: 'Cardiología', value: 'Cardiology' },
  { label: 'Pediatría', value: 'Pediatrics' },
  { label: 'Dermatología', value: 'Dermatology' },
  { label: 'Ginecología', value: 'Gynecology' },
  { label: 'Neurología', value: 'Neurology' },
  { label: 'Oncología', value: 'Oncology' },
  { label: 'Traumatología', value: 'Traumatology' },
  { label: 'Oftalmología', value: 'Ophthalmology' },
  { label: 'Psiquiatría', value: 'Psychiatry' },
  { label: 'Endocrinología', value: 'Endocrinology' },
  { label: 'Infectología', value: 'Infectiology' },
  { label: 'Medicina Interna', value: 'Internal Medicine' },
  { label: 'Reumatología', value: 'Rheumatology' },
  { label: 'Urología', value: 'Urology' },
  { label: 'Otorrinolaringología', value: 'Otorhinolaryngology' },
  { label: 'Gastroenterología', value: 'Gastroenterology' },
  { label: 'Cirugía General', value: 'General Surgery' },
  { label: 'Neumonología', value: 'Pulmonology' },
  { label: 'Nutrición', value: 'Nutrition' },
  { label: 'Medicina Familiar', value: 'Family Medicine' },
  { label: 'Otros', value: 'Others' },
];

export const genderOptions = [
  { label: 'Masculino', value: Genders.MALE },
  { label: 'Femenino', value: Genders.FEMALE },
  { label: 'Otro', value: Genders.OTHER },
];

export const bloodPressureOptions = [
  { label: 'Alto', value: BloodPressureTrend.RISING },
  { label: 'Normal', value: BloodPressureTrend.NORMAL },
  { label: 'Bajo', value: BloodPressureTrend.FALLING },
];

export const bloodTypeOptions = [
  { label: 'A+', value: BloodTypes.A_POSITIVE },
  { label: 'A-', value: BloodTypes.A_NEGATIVE },
  { label: 'B+', value: BloodTypes.B_POSITIVE },
  { label: 'B-', value: BloodTypes.B_NEGATIVE },
  { label: 'AB+', value: BloodTypes.AB_POSITIVE },
  { label: 'AB-', value: BloodTypes.AB_NEGATIVE },
  { label: 'O+', value: BloodTypes.O_POSITIVE },
  { label: 'O-', value: BloodTypes.O_NEGATIVE },
];

export const allergyTypes = [
  { name: 'foodAllergy', label: '¿Tienes alergia a alimentos?' },
  { name: 'insectAllergy', label: '¿Tienes alergia a insectos?' },
  { name: 'medicineAllergy', label: '¿Tienes alergia a medicamentos?' },
  { name: 'otherAllergies', label: '¿Tienes otras alergias?' },
] as const;

export const fieldTranslationMap = {
  foodAllergy: 'Alergia a la comida',
  foodAllergyDetails: 'Detalles de alergia a la comida',
  insectAllergy: 'Alergia a los insectos',
  insectAllergyDetails: 'Detalles de alergia a los insectos',
  medicineAllergy: 'Alergia a la medicina',
  medicineAllergyDetails: 'Detalles de alergia a la medicina',
  otherAllergies: 'Otras alergias',
  otherAllergiesDetails: 'Detalles de otras alergias',
  hospitalization: 'Hospitalización',
  hospitalizationDetails: 'Detalles de hospitalización',
  diabetes: 'Diabetes',
  diabetesDetails: 'Detalles de diabetes',
  thyroidDiseases: 'Enfermedades tiroideas',
  thyroidDiseasesDetails: 'Detalles de enfermedades tiroideas',
  hypertension: 'Hipertensión',
  hypertensionDetails: 'Detalles de hipertensión',
  heartDiseases: 'Enfermedades cardíacas',
  heartDiseasesDetails: 'Detalles de enfermedades cardíacas',
  trauma: 'Trauma',
  traumaDetails: 'Detalles de trauma',
  cancer: 'Cáncer',
  cancerDetails: 'Detalles de cáncer',
  tuberculosis: 'Tuberculosis',
  tuberculosisDetails: 'Detalles de tuberculosis',
  transfusions: 'Transfusiones',
  transfusionsDetails: 'Detalles de transfusiones',
  respiratoryDiseases: 'Enfermedades respiratorias',
  respiratoryDiseasesDetails: 'Detalles de enfermedades respiratorias',
  gastrointestinalDiseases: 'Enfermedades gastrointestinales',
  gastrointestinalDiseasesDetails:
    'Detalles de enfermedades gastrointestinales',
  sexuallyTransmittedDiseases: 'Enfermedades de transmisión sexual',
  sexuallyTransmittedDiseasesDetails:
    'Detalles de enfermedades de transmisión sexual',
  chronicKidneyDisease: 'Enfermedad renal crónica',
  chronicKidneyDiseaseDetails: 'Detalles de enfermedad renal crónica',
  other: 'Otro',
  otherDetails: 'Detalles de otro',
};

export const familyInheritanceTypes = [
  { name: 'diabetes', label: '¿Tienes antecedentes familiares de diabetes?' },
  {
    name: 'heartDiseases',
    label: '¿Tienes antecedentes familiares de enfermedades del corazón?',
  },
  {
    name: 'hypertension',
    label: '¿Tienes antecedentes familiares de hipertensión?',
  },
  {
    name: 'chronicKidneyDisease',
    label: '¿Tienes antecedentes familiares de enfermedad renal crónica?',
  },
  { name: 'other', label: '¿Tienes otros antecedentes familiares de salud?' },
] as const;

export const pathologicalTypes = [
  { name: 'hospitalization', label: 'Hospitalización Previa' },
  { name: 'diabetes', label: 'Diabetes' },
  { name: 'thyroidDiseases', label: 'Enfermedades Tiroideas' },
  { name: 'hypertension', label: 'Hipertensión Arterial' },
  { name: 'heartDiseases', label: 'Cardiopatías' },
  { name: 'trauma', label: 'Traumatismo' },
  { name: 'cancer', label: 'Cáncer' },
  { name: 'tuberculosis', label: 'Tuberculosis' },
  { name: 'transfusions', label: 'Transfusiones' },
  { name: 'respiratoryDiseases', label: 'Patologías respiratorias' },
  { name: 'gastrointestinalDiseases', label: 'Patologías gastrointestinales' },
  {
    name: 'sexuallyTransmittedDiseases',
    label: 'Enfermedades de transmisión sexual',
  },
  { name: 'chronicKidneyDisease', label: 'Enfermedad renal crónica' },
  { name: 'other', label: 'Otros' },
] as const;

export const noPathologicalTypes = [
  { name: 'physicalActivity', label: 'Hospitalización Previa' },
  { name: 'smoking', label: 'Diabetes' },
  { name: 'alcoholism', label: 'Enfermedades Tiroideas' },
  { name: 'otherSubstances', label: 'Hipertensión Arterial' },
  { name: 'recentVaccination', label: 'Cardiopatías' },
   { name: 'other', label: 'Cardiopatías' },

] as const;

export const vaccinationScheduleLabels = [
  { name: 'atBirth.hepatitisB1', label: 'Hepatitis B (al nacer)' },
  { name: 'atBirth.bcg', label: 'BCG (al nacer)' },
  { name: 'twoMonths.pentavalent1', label: 'Pentavalente 1 (2 meses)' },
  { name: 'twoMonths.hepatitisB2', label: 'Hepatitis B 2 (2 meses)' },
  { name: 'twoMonths.rotavirus1', label: 'Rotavirus 1 (2 meses)' },
  { name: 'twoMonths.pneumococcal1', label: 'Neumococo 1 (2 meses)' },
  { name: 'fourMonths.pentavalent2', label: 'Pentavalente 2 (4 meses)' },
  { name: 'fourMonths.rotavirus2', label: 'Rotavirus 2 (4 meses)' },
  { name: 'fourMonths.pneumococcal2', label: 'Neumococo 2 (4 meses)' },
  { name: 'sixMonths.pentavalent3', label: 'Pentavalente 3 (6 meses)' },
  { name: 'sixMonths.hepatitisB3', label: 'Hepatitis B 3 (6 meses)' },
  { name: 'sixMonths.rotavirus3', label: 'Rotavirus 3 (6 meses)' },
  { name: 'sixMonths.influenza1', label: 'Influenza 1 (6 meses)' },
  { name: 'sevenMonths.influenza2', label: 'Influenza 2 (7 meses)' },
  { name: 'twelveMonths.srp1', label: 'SRP 1 (12 meses)' },
  { name: 'twelveMonths.pneumococcal3', label: 'Neumococo 3 (12 meses)' },
  { name: 'eighteenMonths.pentavalent4', label: 'Pentavalente 4 (18 meses)' },
  { name: 'twoYears.influenzaAnnual1', label: 'Influenza anual 1 (2 años)' },
  { name: 'threeYears.influenzaAnnual2', label: 'Influenza anual 2 (3 años)' },
  { name: 'fourYears.dpt', label: 'DPT (4 años)' },
  { name: 'fourYears.influenzaAnnual3', label: 'Influenza anual 3 (4 años)' },
  { name: 'fiveYears.influenzaAnnual4', label: 'Influenza anual 4 (5 años)' },
  { name: 'fiveYears.vopOpv', label: 'VOP/OPV (5 años)' },
  { name: 'elevenYears.vph', label: 'VPH (11 años)' },
  { name: 'otherVaccines', label: 'Otras vacunas' },
];