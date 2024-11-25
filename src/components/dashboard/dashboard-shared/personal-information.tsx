import {
  Cake,
  Calendar,
  UserIcon as GenderMale,
  Mail,
  MapPin,
  Phone,
  UserCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { translateGender } from '@/lib/translate-gender';

interface InfoRowProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function InfoRow({ label, value, icon }: InfoRowProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between py-2">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
          {icon}
          {label}:
        </span>
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
        <InfoRow
          label="Fecha de nacimiento"
          value={birthDate}
          icon={<Calendar className="h-4 w-4 text-indigo-500" />}
        />
        <InfoRow
          label="Edad"
          value={`${age} años`}
          icon={<Cake className="h-4 w-4 text-indigo-500" />}
        />
        <InfoRow
          label="Género"
          value={genderTranslate}
          icon={<GenderMale className="h-4 w-4 text-indigo-500" />}
        />
        <InfoRow
          label="Locación"
          value={location}
          icon={<MapPin className="h-4 w-4 text-indigo-500" />}
        />
        <InfoRow
          label="Teléfono"
          value={phone}
          icon={<Phone className="h-4 w-4 text-indigo-500" />}
        />
        <InfoRow
          label="Email"
          value={email}
          icon={<Mail className="h-4 w-4 text-indigo-500" />}
        />
      </CardContent>
    </Card>
  );
}
