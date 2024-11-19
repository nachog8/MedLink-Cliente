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
type Document = {
  name: string;
  type: 'pdf' | 'image' | 'other';
  date: string;
};
export const documents: Document[] = [
  {
    name: 'Radiografía de Tórax',
    type: 'image',
    date: '15 Mar 2024',
  },
  {
    name: 'Resultados Análisis de Sangre',
    type: 'pdf',
    date: '12 Mar 2024',
  },
  {
    name: 'Resonancia Magnética',
    type: 'image',
    date: '10 Mar 2024',
  },
  {
    name: 'Historia Clínica',
    type: 'pdf',
    date: '05 Mar 2024',
  },
  {
    name: 'Ecografía Abdominal',
    type: 'image',
    date: '01 Mar 2024',
  },
  {
    name: 'Informe Cardiológico',
    type: 'pdf',
    date: '28 Feb 2024',
  },
  {
    name: 'Tomografía Computarizada',
    type: 'image',
    date: '25 Feb 2024',
  },
  {
    name: 'Recetas Médicas',
    type: 'pdf',
    date: '20 Feb 2024',
  },
];
