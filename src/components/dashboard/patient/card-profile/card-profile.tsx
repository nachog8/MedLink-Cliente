import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import EditProfileForm from '@/components/form/patient/form-profile-patient';
import Image from 'next/image';
import { PasswordChangeForm } from '@/components/form/patient/form-update-password';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {
  firstName?: string;
  lastName?: string;
  age?: number;
  location?: string;
  bio?: string;
  avatarUrl?: string;
}
export const CardProfile = ({
  firstName,
  lastName,
  age,
  location,
  bio,
  avatarUrl,
}: Props) => {
  return (
    <Card className="w-full max-w-[500px] overflow-hidden">
      <CardHeader>
        <picture className="h-40 rounded-lg">
          <Image
            src={'/images/profile/banner-profile.jpg'}
            width={720}
            height={480}
            alt="banner-profile"
            className="h-72 object-contain"
          />
        </picture>
      </CardHeader>

      {/* Profile Content */}
      <div className="relative px-6 pb-6 text-center">
        <Avatar className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-full border-4 border-white shadow-lg">
          <AvatarImage src={avatarUrl || 'https://via.placeholder.com/256'} />
          <AvatarFallback>{firstName ? firstName[0] : 'N/A'}</AvatarFallback>
        </Avatar>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold capitalize text-gray-900">
            {firstName && lastName ? firstName + ' ' + lastName : ''}
          </h2>
          <p className="mt-1 text-gray-600">
            {age && location ? `${age} años, ${location}` : ''}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">{bio}</p>

          <div className="mt-20 flex justify-between gap-5 lg:flex-col xl:flex-row"></div>
        </div>
      </div>
      <CardFooter className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Pencil className="h-4 w-4" />
              Editar Perfil
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex justify-start text-2xl">
                <Pencil className="mr-2 h-6 w-6" />
                Editar Perfil
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] w-full p-3">
              <EditProfileForm />
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
