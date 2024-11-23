'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Share2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Loading from '@/components/loading/loading';
import { useAuth } from '@/context/auth-context';

// import { Badge } from '@/components/ui/badge';

export default function ProfileCard() {
  const { profile } = useAuth();
  if (!profile) return <Loading />;

  return (
    <Card className="mx-auto -mt-16 max-w-6xl border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          {/* Avatar */}
          <Avatar className="h-44 w-44">
            <AvatarImage
              src={profile.avatar}
              alt={`Avatar of ${profile.firstName}`}
              className="object-cover"
            />
            <AvatarFallback>
              {profile.firstName ? profile.firstName.charAt(0) : 'N/A'}
            </AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1 space-y-5">
            <h1 className="mb-1 text-center text-3xl font-bold md:text-start">
              {profile.firstName}
            </h1>

            {/* Abilities */}
            {/* <div className="mx-auto flex w-3/4 flex-wrap justify-around gap-2 md:mx-0 md:justify-start">
              {.map((ability, index) => (
                <Badge key={index} className="bg-sky-400 p-1 hover:bg-sky-600">
                  {ability}
                </Badge>
              ))}
            </div> */}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3 md:mt-0">
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
