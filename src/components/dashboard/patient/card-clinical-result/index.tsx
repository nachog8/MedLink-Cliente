import {
  Activity,
  AlertTriangle,
  Bike,
  ClipboardList,
  Droplet,
  Heart,
  Ruler,
  Weight,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { BloodPressure } from './blood-presure';
import { InfoItem } from './info-item';
import { Separator } from '@/components/ui/separator';
import { StatusBadge } from './status-badge';

interface ClinicalSummaryProps {
  height?: number;
  weight?: number;
  bloodType?: string;
  bloodPressure?: string;
  isDonor?: boolean;
  hasAllergies?: boolean;
  hasChronicDiseases?: boolean;
  hasHealthyLifestyle?: boolean;
}

export function ClinicalSummary({
  height,
  weight,
  bloodType,
  bloodPressure,
  isDonor,
  hasAllergies,
  hasChronicDiseases,
  hasHealthyLifestyle,
}: ClinicalSummaryProps) {
  const renderValue = (value) => (value !== undefined ? value : 'N/A');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <ClipboardList className="h-5 w-5 text-indigo-500" />
          Resumen Clínico
        </CardTitle>
        <CardDescription>
          Información médica relevante del paciente
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between gap-5">
            <InfoItem icon={Ruler} label="Altura" value={renderValue(height)} />
            <InfoItem icon={Weight} label="Peso" value={renderValue(weight)} />
            <InfoItem
              icon={Droplet}
              label="Grupo Sanguíneo"
              value={renderValue(bloodType)}
            />
            <BloodPressure status={renderValue(bloodPressure)} />
          </div>

          <div className="flex flex-col justify-between gap-5">
            <InfoItem
              icon={Heart}
              label="Donador"
              value={
                isDonor !== undefined ? <StatusBadge value={isDonor} /> : 'N/A'
              }
            />
            <InfoItem
              icon={AlertTriangle}
              label="Alergias"
              value={
                hasAllergies !== undefined ? (
                  <StatusBadge value={hasAllergies} invertColors={true} />
                ) : (
                  'N/A'
                )
              }
            />
            <InfoItem
              icon={Activity}
              label="Enfermedades Crónicas"
              value={
                hasChronicDiseases !== undefined ? (
                  <StatusBadge value={hasChronicDiseases} invertColors={true} />
                ) : (
                  'N/A'
                )
              }
            />
            <InfoItem
              icon={Bike}
              label="Estilo de Vida Saludable"
              value={
                hasHealthyLifestyle !== undefined ? (
                  <StatusBadge value={hasHealthyLifestyle} />
                ) : (
                  'N/A'
                )
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
