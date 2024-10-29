import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Edit, Mail, Phone } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ProfileCard() {
  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar className="h-44 w-44">
              <AvatarImage
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Button
              size="icon"
              className="absolute bottom-2 right-2 rounded-full"
              variant="secondary"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 space-y-2">
            <h1 className="text-2xl font-bold">Dr. Mario González</h1>
            <p className="text-lg text-muted-foreground">Cardiólogo</p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">Mat. Nacional 123456</Badge>
              <Badge variant="secondary">Mat. Provincial 7890</Badge>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="w-full space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información de Contacto</h2>
              <div className="grid gap-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +54 11 4567-8900
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Mail className="h-4 w-4" />
                  dr.gonzalez@hospital.com
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Clock className="h-4 w-4" />
                  Agendar Cita
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Datos Personales</h2>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-muted-foreground">DNI</p>
                  <p className="font-medium">30.123.456</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Edad</p>
                  <p className="font-medium">35 años</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Fecha de Nacimiento
                  </p>
                  <p className="font-medium">15/03/1988</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nacionalidad</p>
                  <p className="font-medium">Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
