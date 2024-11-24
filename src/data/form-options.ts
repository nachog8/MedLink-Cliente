import {
  BloodPressureTrend,
  BloodTypes,
  Genders,
  Specialties,
} from '@/interfaces/auth';

export const specialties = [
  {
    label: 'Cardiología',
    value: 'Cardiology',
    description: 'Diagnóstico y tratamiento de enfermedades del corazón.',
  },
  {
    label: 'Pediatría',
    value: 'Pediatrics',
    description: 'Cuidado integral de la salud de niños y adolescentes.',
  },
  {
    label: 'Dermatología',
    value: 'Dermatology',
    description: 'Diagnóstico y tratamiento de enfermedades de la piel.',
  },
  {
    label: 'Ginecología',
    value: 'Gynecology',
    description: 'Atención especializada en salud femenina.',
  },
  {
    label: 'Neurología',
    value: 'Neurology',
    description:
      'Diagnóstico y tratamiento de enfermedades del sistema nervioso.',
  },
  {
    label: 'Oncología',
    value: 'Oncology',
    description: 'Diagnóstico y tratamiento de cáncer.',
  },
  {
    label: 'Traumatología',
    value: 'Traumatology',
    description:
      'Tratamiento de lesiones y enfermedades del sistema músculo-esquelético.',
  },
  {
    label: 'Oftalmología',
    value: 'Ophthalmology',
    description: 'Diagnóstico y tratamiento de enfermedades de los ojos.',
  },
  {
    label: 'Psiquiatría',
    value: 'Psychiatry',
    description: 'Diagnóstico y tratamiento de trastornos mentales.',
  },
  {
    label: 'Endocrinología',
    value: 'Endocrinology',
    description: 'Diagnóstico y tratamiento de enfermedades hormonales.',
  },
  {
    label: 'Infectología',
    value: 'Infectiology',
    description: 'Diagnóstico y tratamiento de enfermedades infecciosas.',
  },
  {
    label: 'Medicina Interna',
    value: 'Internal Medicine',
    description: 'Atención integral de adultos con enfermedades complejas.',
  },
  {
    label: 'Reumatología',
    value: 'Rheumatology',
    description: 'Diagnóstico y tratamiento de enfermedades reumáticas.',
  },
  {
    label: 'Urología',
    value: 'Urology',
    description:
      'Diagnóstico y tratamiento de enfermedades del sistema urinario.',
  },
  {
    label: 'Otorrinolaringología',
    value: 'Otorhinolaryngology',
    description:
      'Diagnóstico y tratamiento de enfermedades de oído, nariz y garganta.',
  },
  {
    label: 'Gastroenterología',
    value: 'Gastroenterology',
    description:
      'Diagnóstico y tratamiento de enfermedades del sistema digestivo.',
  },
  {
    label: 'Cirugía General',
    value: 'General Surgery',
    description: 'Procedimientos quirúrgicos generales.',
  },
  {
    label: 'Neumonología',
    value: 'Pulmonology',
    description: 'Diagnóstico y tratamiento de enfermedades respiratorias.',
  },
  {
    label: 'Nutrición',
    value: 'Nutrition',
    description: 'Asesoramiento y tratamiento nutricional.',
  },
  {
    label: 'Medicina Familiar',
    value: 'Family Medicine',
    description: 'Atención integral y continua para individuos y familias.',
  },
  {
    label: 'Otros',
    value: 'Others',
    description: 'Otras especialidades médicas no especificadas.',
  },
];

export const specialtiesOptions = [
  { label: 'Cardiología', value: Specialties.CARDIOLOGY },
  { label: 'Pediatría', value: Specialties.PEDIATRICS },
  { label: 'Dermatología', value: Specialties.DERMATOLOGY },
  { label: 'Ginecología', value: Specialties.GYNECOLOGY },
  { label: 'Neurología', value: Specialties.NEUROLOGY },
  { label: 'Oncología', value: Specialties.ONCOLOGY },
  { label: 'Traumatología', value: Specialties.TRAUMATOLOGY },
  { label: 'Oftalmología', value: Specialties.OPHTHALMOLOGY },
  { label: 'Psiquiatría', value: Specialties.PSYCHIATRY },
  { label: 'Endocrinología', value: Specialties.ENDOCRINOLOGY },
  { label: 'Infectología', value: Specialties.INFECTIOLOGY },
  { label: 'Medicina Interna', value: Specialties.INTERNAL_MEDICINE },
  { label: 'Reumatología', value: Specialties.RHEUMATOLOGY },
  { label: 'Urología', value: Specialties.UROLOGY },
  { label: 'Otorrinolaringología', value: Specialties.OTORHINOLARYNGOLOGY },
  { label: 'Gastroenterología', value: Specialties.GASTROENTEROLOGY },
  { label: 'Cirugía General', value: Specialties.GENERAL_SURGERY },
  { label: 'Neumonología', value: Specialties.PULMONOLOGY },
  { label: 'Nutrición', value: Specialties.NUTRITION },
  { label: 'Medicina Familiar', value: Specialties.FAMILY_MEDICINE },
  { label: 'Otros', value: Specialties.OTHERS },
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

export const specialtiesTranslationMap = {
  [Specialties.CARDIOLOGY]: 'Cardiología',
  [Specialties.PEDIATRICS]: 'Pediatría',
  [Specialties.DERMATOLOGY]: 'Dermatología',
  [Specialties.GYNECOLOGY]: 'Ginecología',
  [Specialties.NEUROLOGY]: 'Neurología',
  [Specialties.ONCOLOGY]: 'Oncología',
  [Specialties.TRAUMATOLOGY]: 'Traumatología',
  [Specialties.OPHTHALMOLOGY]: 'Oftalmología',
  [Specialties.PSYCHIATRY]: 'Psiquiatría',
  [Specialties.ENDOCRINOLOGY]: 'Endocrinología',
  [Specialties.INFECTIOLOGY]: 'Infectología',
  [Specialties.INTERNAL_MEDICINE]: 'Medicina Interna',
  [Specialties.RHEUMATOLOGY]: 'Reumatología',
  [Specialties.UROLOGY]: 'Urología',
  [Specialties.OTORHINOLARYNGOLOGY]: 'Otorrinolaringología',
  [Specialties.GASTROENTEROLOGY]: 'Gastroenterología',
  [Specialties.GENERAL_SURGERY]: 'Cirugía General',
  [Specialties.PULMONOLOGY]: 'Neumonología',
  [Specialties.NUTRITION]: 'Nutrición',
  [Specialties.FAMILY_MEDICINE]: 'Medicina Familiar',
  [Specialties.OTHERS]: 'Otros',
};
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
  physicalActivity: 'Actividad Física',
  physicalActivityDetails: 'Detalles de tus actividades físicas',
  smoking: 'Tabaquismo',
  smokingDetails: 'Detalles sobre tu tabaquismo',
  alcoholism: 'Alcoholismo',
  alcoholismDetails: 'Detalles sobre tu consumo de alcohol',
  otherSubstances: 'Otras Sustancias',
  otherSubstancesDetails: 'Detalles sobre el uso de otras sustancias',
  recentVaccination: 'Vacunación Reciente',
  recentVaccinationDetails: 'Detalles sobre tu vacunación reciente',
  // Campos de vacunación
  atBirth: 'Al nacer',
  bcg: 'BCG',
  hepatitisB1: 'Hepatitis B1',
  twoMonths: 'A los dos meses',
  pentavalent1: 'Pentavalente 1',
  hepatitisB2: 'Hepatitis B2',
  rotavirus1: 'Rotavirus 1',
  pneumococcal1: 'Neumocócica 1',
  fourMonths: 'A los cuatro meses',
  pentavalent2: 'Pentavalente 2',
  rotavirus2: 'Rotavirus 2',
  pneumococcal2: 'Neumocócica 2',
  sixMonths: 'A los seis meses',
  pentavalent3: 'Pentavalente 3',
  hepatitisB3: 'Hepatitis B3',
  rotavirus3: 'Rotavirus 3',
  influenza1: 'Influenza 1',
  sevenMonths: 'A los siete meses',
  influenza2: 'Influenza 2',
  twelveMonths: 'A los doce meses',
  srp1: 'SRP 1',
  pneumococcal3: 'Neumocócica 3',
  eighteenMonths: 'A los dieciocho meses',
  pentavalent4: 'Pentavalente 4',
  twoYears: 'A los dos años',
  influenzaAnnual1: 'Influenza Anual 1',
  threeYears: 'A los tres años',
  influenzaAnnual2: 'Influenza Anual 2',
  fourYears: 'A los cuatro años',
  dpt: 'DPT',
  influenzaAnnual3: 'Influenza Anual 3',
  fiveYears: 'A los cinco años',
  influenzaAnnual4: 'Influenza Anual 4',
  vopOpv: 'VOP/OPV',
  elevenYears: 'A los once años',
  vph: 'VPH',
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
  { name: 'physicalActivity', label: 'Actividad Física' },
  { name: 'smoking', label: 'Tabaquismo' },
  { name: 'alcoholism', label: 'Alcoholismo' },
  { name: 'otherSubstances', label: 'Otras Sustancias' },
  { name: 'recentVaccination', label: 'Vacunación Reciente' },
  { name: 'other', label: 'Otros' },
] as const;

export const vaccinationScheduleTypes = [
  { name: 'atBirth', label: 'Al Nacer', hasDetails: false },
  { name: 'twoMonths', label: 'A los 2 Meses', hasDetails: false },
  { name: 'fourMonths', label: 'A los 4 Meses', hasDetails: false },
  { name: 'sixMonths', label: 'A los 6 Meses', hasDetails: false },
  { name: 'sevenMonths', label: 'A los 7 Meses', hasDetails: false },
  { name: 'twelveMonths', label: 'A los 12 Meses', hasDetails: false },
  { name: 'eighteenMonths', label: 'A los 18 Meses', hasDetails: false },
  { name: 'twoYears', label: 'A los 2 Años', hasDetails: false },
  { name: 'threeYears', label: 'A los 3 Años', hasDetails: false },
  { name: 'fourYears', label: 'A los 4 Años', hasDetails: false },
  { name: 'fiveYears', label: 'A los 5 Años', hasDetails: false },
  { name: 'elevenYears', label: 'A los 11 Años', hasDetails: false },
  { name: 'other', label: 'Otros', hasDetails: true },
] as const;

export const frequencyOptions = [
  { value: 'once_daily', label: 'Una vez al día' },
  { value: 'twice_daily', label: 'Dos veces al día' },
  { value: 'three_times_daily', label: 'Tres veces al día' },
  { value: 'four_times_daily', label: 'Cuatro veces al día' },
  { value: 'every_morning', label: 'Cada mañana' },
  { value: 'every_night', label: 'Cada noche' },
  { value: 'as_needed', label: 'Según sea necesario' },
];
