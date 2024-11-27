'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DoctorInfoCardSkeleton } from '@/components/skeletons/professional';
import { Share2 } from 'lucide-react';
import { UserDoctor } from '@/interfaces/auth';
import { Whatsapp } from '@/components/icons/whatsapp';
import { useAuth } from '@/context/auth-context';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { useToast } from '@/hooks/use-toast';

export default function ProfileCard() {
  const { id } = useParams();
  const { toast } = useToast();
  const { profile } = useAuth();
  const { visitedProfile } = useProfile();
  const isUser = profile?.id === id;

  if (!profile || (!isUser && !visitedProfile)) {
    return <DoctorInfoCardSkeleton />;
  }

  const userDoctor = (visitedProfile ?? profile) as UserDoctor;

  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: '¡URL copiada!',
        description: 'El enlace del perfil ha sido copiado al portapapeles',
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: 'Error al copiar',
        description: 'No se pudo copiar la URL. Por favor, inténtalo de nuevo.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <Card className="mx-auto max-w-6xl border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          <Avatar className="h-44 w-44">
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_URL_BASE_IMAGES || 'http://localhost:8081'}${userDoctor.avatar}`}
              alt={`Avatar of ${userDoctor.firstName}`}
              className="object-cover"
            />
            <AvatarFallback>
              {userDoctor.firstName ? userDoctor.firstName.charAt(0) : ''}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col items-center space-y-5 lg:items-start">
            <p className="text-sm font-medium text-gray-600 md:text-start">
              {userDoctor.gender === 'FEMALE'
                ? 'Médica Clínica'
                : 'Médico Clínico'}
            </p>

            {userDoctor.firstName && userDoctor.lastName && (
              <h1 className="mb-1 text-3xl font-bold capitalize md:text-start">
                {`${userDoctor.firstName} ${userDoctor.lastName}`}
              </h1>
            )}

            <Badge className="bg-sky-400 p-1 hover:bg-sky-600">
              {`M.P: ${userDoctor.licenseNumber}`}
            </Badge>
          </div>

          <div className="mt-4 flex gap-3 md:mt-0 md:flex-col">
            <Button
              variant="outline"
              className="gap-2 transition-all hover:bg-sky-100"
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola! Me gustaría hablar contigo.'
                );
                const whatsappUrl = `https://wa.me/${userDoctor.phone}?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Whatsapp />
              Mandar Mensaje
            </Button>
            <Button
              variant="outline"
              className="gap-2 transition-all hover:bg-sky-100"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              Compartir Perfil
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
