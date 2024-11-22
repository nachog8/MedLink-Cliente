import { Card, CardContent } from '../ui/card';

import { AlertCircle } from 'lucide-react';

export const InformationNotAvailable = () => {
  return (
    <Card className="h-[350px]">
      <CardContent className="flex h-full flex-col items-center justify-center py-8">
        <AlertCircle className="mb-4 h-16 w-16 text-muted-foreground" />
        <p className="mb-4 text-lg font-medium text-muted-foreground">
          No hay información disponible
        </p>
      </CardContent>
    </Card>
  );
};
