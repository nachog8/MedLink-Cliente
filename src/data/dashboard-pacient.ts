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
