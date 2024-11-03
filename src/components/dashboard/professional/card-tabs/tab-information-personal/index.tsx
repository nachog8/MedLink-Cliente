import {
  Building2,
  FileText,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';

interface ContactInfo {
  phone: string;
  email: string;
}

interface LocationInfo {
  province: string;
  city: string;
}

interface DoctorInfo {
  name: string;
  last_name: string;
  about_me: string;
  gender: string;
  contact: ContactInfo;
  location: LocationInfo;
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{icon}</span>
          <span className="text-sm font-medium text-gray-700">{label}:</span>
        </div>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
      <Separator />
    </div>
  );
}

export function PersonalInformationTab({ info }: { info: DoctorInfo }) {
  const renderInfoRows = (data: DoctorInfo) => {
    return (
      <>
        <InfoRow
          icon={<User className="h-4 w-4" />}
          label="Nombre"
          value={`${data.name} ${data.last_name}`}
        />

        <InfoRow
          icon={<Users className="h-4 w-4" />}
          label="Género"
          value={data.gender === 'male' ? 'Masculino' : 'Femenino'}
        />
        <InfoRow
          icon={<Phone className="h-4 w-4" />}
          label="Teléfono"
          value={data.contact.phone}
        />
        <InfoRow
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          value={data.contact.email}
        />
        <InfoRow
          icon={<Building2 className="h-4 w-4" />}
          label="Provincia"
          value={data.location.province}
        />
        <InfoRow
          icon={<MapPin className="h-4 w-4" />}
          label="Ciudad"
          value={data.location.city}
        />
      </>
    );
  };

  return (
    <div className="space-y-5 px-5">
      <Separator />
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Sobre mí</h2>
        </div>
        <p className="text-muted-foreground">{info.about_me}</p>
      </div>
      <Separator />
      <div className="space-y-2">{renderInfoRows(info)}</div>
    </div>
  );
}
