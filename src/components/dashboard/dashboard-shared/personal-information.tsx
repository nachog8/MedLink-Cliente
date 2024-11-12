import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { UserCircle } from 'lucide-react';

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between py-2">
        <span className="text-sm font-medium text-gray-700">{label}:</span>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
      <Separator />
    </div>
  );
}

export function PersonalInfoCard() {
  return (
    <Card className="w-full shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <UserCircle className="h-5 w-5 text-indigo-500" />
          Información Personal
        </CardTitle>
        <CardDescription>
          Datos básicos del paciente esenciales para su identificación y
          atención.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <Separator />

        <InfoRow label="Nombre" value="Barreto Blanca" />
        <InfoRow label="Fecha de nacimiento" value="18-09-1985" />
        <InfoRow label="Genero" value="Femenino" />
        <InfoRow label="Locación" value="Corrientes, Corrientes" />
        <InfoRow label="Telefono" value="+54-3718-441861" />
        <InfoRow label="Email" value="palmirabarrett@hotmail.com" />
      </CardContent>
    </Card>
  );
}
