'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DoctorInfoCardSkeleton } from '@/components/skeletons/professional';
import { UserDoctor } from '@/interfaces/auth';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function ProfileCard() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();

  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    if (profile?.id === id) {
      // Si el usuario está viendo su propio perfil
      clearVisitedProfile();
    } else if (!visitedProfile || visitedProfile.id !== id) {
      // Solo llama a `loadVisitedProfile` si no se ha cargado ya el perfil visitado
      loadVisitedProfile(id, 'doctor');
    }
  }, [
    id,
    profile?.id,
    visitedProfile,
    loadVisitedProfile,
    clearVisitedProfile,
  ]);

  // Si el perfil está cargando o no hay perfil, muestra un loading
  if (!profile && !visitedProfile) return <DoctorInfoCardSkeleton />;

  // Determinar qué perfil usar, el del usuario logueado o el visitado
  const userDoctor = (visitedProfile ?? profile) as UserDoctor; // Si no hay `visitedProfile`, usamos el perfil logueado
  return (
    <Card className="mx-auto -mt-16 max-w-6xl border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          {/* Avatar */}
          <Avatar className="h-44 w-44">
            <AvatarImage
              src={userDoctor.avatar}
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
