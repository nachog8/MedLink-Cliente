import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Pencil, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ClinicalSummary } from '../card-clinical-result';
import EditProfileForm from '@/components/form/patient/form-profile-patient';
import { PasswordChangeForm } from '@/components/form/patient/form-update-password';
import { PersonalInfoCard } from '../../dashboard-shared/personal-information';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserPatient } from '@/interfaces/auth';
import { calculateAge } from '@/lib/calculate-age';
import { formatDate } from '@/lib/date-formatter';

export const CardProfile = ({
  firstName,
  lastName,
  location,
  aboutMe,
  avatar,
  dateOfBirth,
  email,
  gender,
  phone,
  clinicalData,
}: Partial<UserPatient>) => {
  const formattedDate = formatDate(dateOfBirth);
  const fullName = `${firstName} ${lastName}`.trim();
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
    <Card className="w-full max-w-[500px] overflow-hidden">
      <CardHeader className="flex justify-center pb-0 pt-6">
        <Avatar className="mx-auto h-40 w-40 border-4 border-white shadow-lg">
          <AvatarImage src={avatar} alt={`${firstName}'s avatar`} />
          <AvatarFallback className="text-4xl">
            {firstName ? firstName[0] : 'N/A'}
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="space-y-5">
        <section className="space-y-5 p-3 text-center">
          <h2 className="text-2xl font-semibold capitalize text-gray-900">
            {fullName || 'Usuario'}
          </h2>
          {aboutMe && (
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
              {aboutMe}
            </p>
          )}
        </section>

        <PersonalInfoCard
          birthDate={formattedDate}
          gender={gender || '-'}
          location={location || '-'}
          phone={phone || '-'}
          email={email || '-'}
          age={String(calculateAge(dateOfBirth)) || '-'}
        />
        <ClinicalSummary {...clinicalData} />
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {renderDialog(
          'Editar Perfil',
          <Pencil className="h-4 w-4" />,
          <>
            <DialogHeader>
              <DialogTitle className="flex justify-center text-2xl">
                <Pencil className="mr-2 h-6 w-6" />
                Editar Perfil
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] w-full p-3">
              <EditProfileForm
                firstName={firstName}
                lastName={lastName}
                dateOfBirth={formattedDate}
                gender={gender}
                aboutMe={aboutMe}
                phone={phone}
                email={email}
                location={location}
                avatar={avatar}
                clinicalData={clinicalData}
              />
            </ScrollArea>
          </>
        )}

        {renderDialog(
          'Cambiar Contraseña',
          <Settings className="h-4 w-4" />,
          <PasswordChangeForm />
        )}
      </CardFooter>
    </Card>
  );
};
