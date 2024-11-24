'use client';

import {
  Award,
  FileText,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { UserDoctor } from '@/interfaces/auth';
import { specialtiesTranslationMap } from '@/data/form-options';
import { translateSpecialization } from '@/lib/translate-data';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | undefined;
}

export function PersonalInformationTab({
  dataProfile: profile,
}: {
  dataProfile: UserDoctor;
}) {
  const renderInfoRows = () => {
    return (
      <>
        <InfoRow
          icon={<User className="h-4 w-4" />}
          label="Nombre"
          value={
            profile.firstName && profile.lastName
              ? `${profile.firstName} ${profile.lastName}`
              : '-'
          }
        />
        <InfoRow
          icon={<Users className="h-4 w-4" />}
          label="Género"
          value={
            profile.gender
              ? profile.gender === 'MALE'
                ? 'Masculino'
                : 'Femenino'
              : '-'
          }
        />
        <InfoRow
          icon={<Phone className="h-4 w-4" />}
          label="Teléfono"
          value={profile.phone}
        />
        <InfoRow
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          value={profile.email}
        />
        <InfoRow
          icon={<MapPin className="h-4 w-4" />}
          label="Locación"
          value={profile.location}
        />
        <InfoRow
          icon={<Award className="h-4 w-4" />}
          label="Especialización"
          value={translateSpecialization(
            profile.specialization,
            specialtiesTranslationMap
          )}
        />
      </>
    );
  };

  return (
    <div className="space-y-5 px-5">
      {profile.aboutMe && ( // Condiciona la renderización de "Sobre mí"
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Sobre mí</h2>
          </div>
          <p className="text-xs text-muted-foreground md:text-base">
            {profile.aboutMe}
          </p>
        </div>
      )}

      <div className="space-y-2">{renderInfoRows()}</div>
    </div>
  );
}
function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{icon}</span>
          <span className="text-sm font-medium text-gray-700">{label}:</span>
        </div>
        <span className="text-sm text-gray-600">{value || '-'}</span>
      </div>
      <Separator />
    </div>
  );
}
