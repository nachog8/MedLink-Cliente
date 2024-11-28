'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Pencil, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ClinicalSummary } from '../card-clinical-result';
import EditProfileForm from '@/components/form/patient/form-profile-patient';
import { PasswordChangeForm } from '@/components/form/auth/form-change-password';
import PatientProfileCardSkeleton from '@/components/skeletons/patient';
import { PersonalInfoCard } from '../../dashboard-shared/personal-information';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserPatient } from '@/interfaces/auth';
import { calculateAge } from '@/lib/calculate-age';
import { formatDate } from '@/lib/date-formatter';
import { useAuth } from '@/context/auth-context';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export const CardProfile = () => {
  const { id } = useParams();
  const { profile, handleUpdateSuccess } = useAuth();
  const { visitedProfile } = useProfile();

  const isUser = profile?.id === id;
  if (!profile || (!isUser && !visitedProfile)) {
    return <PatientProfileCardSkeleton />;
  }
  const dataPatient = (visitedProfile ?? profile) as UserPatient;
  const formattedDate = formatDate(dataPatient.dateOfBirth);
  const fullName =
    `${dataPatient.firstName || ''} ${dataPatient.lastName || ''}`.trim() ||
    null;

  const renderDialog = (
    triggerLabel: string,
    icon: React.ReactNode,
    content: React.ReactNode
  ) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {icon}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg lg:max-w-2xl">
        {content}
      </DialogContent>
    </Dialog>
  );
  return (
    <Card className="w-full overflow-hidden lg:max-w-[500px]">
      <CardHeader className="flex justify-center pb-0 pt-6">
        <Avatar className="mx-auto h-40 w-40 border-4 border-white shadow-lg">
          <AvatarImage
            src={`${process.env.NEXT_PUBLIC_URL_BASE_IMAGES}${dataPatient.avatar}`}
            alt={`${dataPatient.firstName}'s avatar`}
          />
          <AvatarFallback className="text-4xl">
            {dataPatient.firstName ? dataPatient.firstName[0] : ''}
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="space-y-5">
        <section className="space-y-5 p-3 text-center">
          <h2 className="text-2xl font-semibold capitalize text-gray-900">
            {fullName || 'Usuario'}
          </h2>
          {dataPatient.aboutMe && (
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
              {dataPatient.aboutMe}
            </p>
          )}
        </section>

        <PersonalInfoCard
          birthDate={formattedDate}
          gender={dataPatient.gender || '-'}
          location={dataPatient.location || '-'}
          phone={dataPatient.phone || '-'}
          email={dataPatient.email || '-'}
          age={String(calculateAge(dataPatient.dateOfBirth)) || '-'}
        />
        <ClinicalSummary {...dataPatient.clinicalData} />
      </CardContent>

      {isUser && (
        <CardFooter className="flex items-center justify-between">
          {renderDialog(
            'Editar Perfil',
            <Pencil className="h-4 w-4" />,
            <>
              <ScrollArea className="mt-5 max-h-[70vh] w-full p-3">
                <EditProfileForm
                  patientData={dataPatient}
                  reload={handleUpdateSuccess}
                />
              </ScrollArea>
            </>
          )}

          {renderDialog(
            'Cambiar Contraseña',
            <Settings className="h-4 w-4" />,
            <PasswordChangeForm reload={handleUpdateSuccess} />
          )}
        </CardFooter>
      )}
    </Card>
  );
};
