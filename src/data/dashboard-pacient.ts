export const sectionsHistoryMedical = [
  {
    id: 'allergies',
    title: 'ALERGIAS',
    items: [{ name: 'Polen', value: '' }],
  },
  {
    id: 'pathological',
    title: 'ANTECEDENTES PATOLOGICOS',
    items: [
      { name: 'Enfermedades Tiroidales', value: 'Hipotiroidismo' },
      { name: 'Traumatismo', value: 'Fractura de Piramidal' },
    ],
  },
  {
    id: 'family',
    title: 'ANTECEDENTES FAMILIARES',
    items: [{ name: 'Presion arterial', value: 'Hipertension' }],
  },
  {
    id: 'psychiatric',
    title: 'ANTECEDENTES PSIQUIATRICOS',
    items: [{ name: 'Depresion', value: '' }],
  },
  {
    id: 'vaccination',
    title: 'ESQUEMA DE VACUNACION',
    items: [
      { name: 'Hepatitis B', value: '3er dosis', date: '12/08/1998' },
      { name: 'Influenza', value: '', date: '18/11/2010' },
    ],
  },
];

export const medications = [
  'Paracetamol 500mg',
  'Amoxicilina 875mg',
  'Omeprazol 20mg',
  'Ibuprofeno 400mg',
  'Loratadina 10mg',
  'Metformina 850mg',
  'Atorvastatina 20mg',
  'Losartán 50mg',
  'Escitalopram 10mg',
  'Levotiroxina 50mcg',
  'Vitamina D3 2000UI',
  'Ácido Fólico 5mg',
];
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

// Example patient data
export const patientInfo = {
  fullName: 'Javier Martin Rodriguez',
  birthDate: '11/03/1996',
  age: 27,
  gender: 'Masculino',
  civilStatus: 'Soltero',
  phone: '+34 612 345 678',
  emergencyPhone: '+34 698 765 432',
  email: 'javier.rodriguez@email.com',
  address: 'Calle Principal 123, Madrid, España',
  documentId: '12345678A',
  nationality: 'Española',
  occupation: 'Ingeniero de Software',
  emergencyContact: {
    name: 'Ana Rodriguez',
    relation: 'Madre',
    phone: '+34 698 765 432',
  },
};
