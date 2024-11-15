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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
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
            <InfoItem icon={Ruler} label="Altura" value={height} />
            <InfoItem icon={Weight} label="Peso" value={weight} />
            <InfoItem
              icon={Droplet}
              label="Grupo Sanguíneo"
              value={bloodType}
            />
            <BloodPressure status={bloodPressure} />
          </div>

          <div className="flex flex-col justify-between gap-5">
            <InfoItem
              icon={Heart}
              label="Donador"
              value={<StatusBadge value={isDonor} />}
            />
            <InfoItem
              icon={AlertTriangle}
              label="Alergias"
              value={<StatusBadge value={hasAllergies} invertColors={true} />}
            />
            <InfoItem
              icon={Activity}
              label="Enfermedades Crónicas"
              value={
                <StatusBadge value={hasChronicDiseases} invertColors={true} />
              }
            />
            <InfoItem
              icon={Bike}
              label="Estilo de Vida Saludable"
              value={<StatusBadge value={hasHealthyLifestyle} />}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
