import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { translateGender } from '@/lib/translate-gender';
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

interface PersonalInfoCardProps {
  birthDate: string;
  gender: string;
  location: string;
  phone: string;
  email: string;
  age: string;
}

export function PersonalInfoCard({
  birthDate,
  gender,
  location,
  phone,
  email,
  age,
}: PersonalInfoCardProps) {
  const genderTranslate = translateGender(gender);
  return (
    <Card className="w-full shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <UserCircle className="h-5 w-5 text-indigo-500" />
          Información Personal
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <Separator />
        <InfoRow label="Fecha de nacimiento" value={birthDate} />
        <InfoRow label="Edad" value={age} />
        <InfoRow label="Género" value={genderTranslate} />
        <InfoRow label="Locación" value={location} />
        <InfoRow label="Teléfono" value={phone} />
        <InfoRow label="Email" value={email} />
      </CardContent>
    </Card>
  );
}
