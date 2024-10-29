import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

export const CardProfile = () => {
  return (
    <Card>
      <CardContent className="flex space-x-4 p-6 text-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src="" alt="Foto de perfil" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div className="flex-1 items-center justify-center space-y-1.5">
          <h2 className="text-lg font-semibold capitalize text-primary">
            Javier Martin Rodriguez
          </h2>
          <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
            <p>11/03/1996</p>
            <Separator orientation="vertical" className="h-4" />
            <p className="capitalize">Masculino</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
