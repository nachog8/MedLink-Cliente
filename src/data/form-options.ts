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
