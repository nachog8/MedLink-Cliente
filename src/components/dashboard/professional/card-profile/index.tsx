'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DoctorInfoCardSkeleton } from '@/components/skeletons/professional';
import { UserDoctor } from '@/interfaces/auth';
import { useAuth } from '@/context/auth-context';
import { useProfile } from '@/context/profile-context';

export default function ProfileCard() {
  const { profile } = useAuth();
  const { visitedProfile } = useProfile();

  if (!profile && !visitedProfile) return <DoctorInfoCardSkeleton />;

  const userDoctor = (visitedProfile ?? profile) as UserDoctor;
  return (
    <Card className="mx-auto -mt-16 max-w-6xl border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          {/* Avatar */}
          <Avatar className="h-44 w-44">
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_URL_BASE_IMAGES || 'http://localhost:8081'}${userDoctor.avatar}`}
              alt={`Avatar of ${userDoctor.firstName}`}
              className="object-cover"
            />
            <AvatarFallback>
              {userDoctor.firstName ? userDoctor.firstName.charAt(0) : 'N/A'}
            </AvatarFallback>
          </Avatar>

          {/* userDoctor Info */}
          <div className="flex flex-1 flex-col items-center space-y-5 lg:items-start">
            {/* Subtítulo dinámico */}
            <p className="text-sm font-medium text-gray-600 md:text-start">
              {userDoctor.gender === 'FEMALE'
                ? 'Médica Clínica'
                : 'Médico Clínico'}
            </p>

            {/* Nombre */}
            {userDoctor.firstName && userDoctor.lastName && (
              <h1 className="mb-1 text-3xl font-bold capitalize md:text-start">
                {`${userDoctor.firstName} ${userDoctor.lastName}`}
              </h1>
            )}

            {/*Licence Number  */}
            <Badge className="bg-sky-400 p-1 hover:bg-sky-600">
              {`M.P: ${userDoctor.licenseNumber}`}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3 md:mt-0 md:flex-col">
            <Button variant="outline" className="gap-2">
              <Send className="h-4 w-4" />
              Enviar Correo
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Compartir Perfil
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
