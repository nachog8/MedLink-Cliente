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
  DialogDescription,
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

interface Props {
  firstName?: string;
  lastName?: string;
  age?: number;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  gender?: string;
  phone?: string;
  email?: string;
  dateOfBirth?: string;
  clinical?: {
    height?: number;
    weight?: number;
    bloodType?: string;
    BloodPressureTrend?: string;
    isDonor?: boolean;
    hasAllergies?: boolean;
    hasChronicDiseases?: boolean;
    hasHealthyLifestyle?: boolean;
  };
}
export const CardProfile = ({
  firstName,
  lastName,
  age,
  location,
  bio,
  avatarUrl,
  dateOfBirth,
  email,
  gender,
  phone,
  clinical,
}: Props) => {
  return (
    <Card className="l w-full max-w-[500px] space-y-5 overflow-hidden">
      <CardHeader className="flex justify-center pb-0 pt-6">
        <Avatar className="mx-auto h-40 w-40 border-4 border-white shadow-lg">
          <AvatarImage
            src={avatarUrl || 'https://via.placeholder.com/256'}
            alt={`${firstName}'s avatar`}
          />
          <AvatarFallback className="text-4xl">
            {firstName ? firstName[0] : 'N/A'}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="space-y-5">
        <Card>
          <CardContent className="space-y-5 p-3 text-center">
            <h2 className="text-2xl font-semibold capitalize text-gray-900">
              {firstName && lastName ? firstName + ' ' + lastName : ''}
            </h2>
            <p className="mt-1 text-gray-600">
              {age && location ? `${age} años` : ''}
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">{bio}</p>
          </CardContent>
        </Card>

        <PersonalInfoCard
          birthDate={dateOfBirth || ''}
          gender={gender || ''}
          location={location || ''}
          phone={phone || ''}
          email={email || ''}
        />
        <ClinicalSummary
          height={clinical?.height}
          weight={clinical?.weight}
          bloodType={clinical?.bloodType}
          bloodPressure={clinical?.BloodPressureTrend}
          isDonor={clinical?.isDonor}
          hasAllergies={clinical?.hasAllergies}
          hasChronicDiseases={clinical?.hasChronicDiseases}
          hasHealthyLifestyle={clinical?.hasHealthyLifestyle}
        />
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Pencil className="h-4 w-4" />
              Editar Perfil
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex justify-center text-2xl">
                <Pencil className="mr-2 h-6 w-6" />
                Editar Perfil
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] w-full p-3">
              <EditProfileForm
                firstName={firstName}
                lastName={lastName}
                birthDate={new Date(dateOfBirth)}
                genre={gender as 'male' | 'female' | 'other'}
                aboutMe={bio}
                phone={phone}
                email={email}
                location={location}  
                avatar={avatarUrl}
                height={`${clinical?.height}`}
                weight={`${clinical?.weight}`}
                bloodType={clinical?.bloodType}
                bloodPressure={clinical?.BloodPressureTrend}
                isDonor={clinical?.isDonor}
                hasAllergies={clinical?.hasAllergies}
                hasChronicDiseases={clinical?.hasChronicDiseases}
                hasHealthyLifestyle={clinical?.hasHealthyLifestyle}
              />
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Settings className="h-4 w-4" />
              Cambiar Contraseña
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <PasswordChangeForm />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
