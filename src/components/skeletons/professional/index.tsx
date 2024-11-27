import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Whatsapp } from '@/components/icons/whatsapp';

export function DoctorInfoCardSkeleton() {
  return (
    <Card className="mx-auto -mt-16 max-w-6xl border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          <Skeleton className="h-44 w-44 rounded-full" />

          <div className="flex-1 space-y-5">
            <Skeleton className="mx-auto h-4 w-32 md:mx-0" />

            <Skeleton className="mx-auto h-9 w-64 md:mx-0" />

            <Skeleton className="h-6 w-24" />
          </div>

          <div className="mt-4 flex flex-col gap-3 md:mt-0">
            <Button variant="outline" className="gap-2" disabled>
              <Whatsapp />
              Mandar Mensaje
            </Button>
            <Button variant="outline" className="gap-2" disabled>
              <Share2 className="h-4 w-4" />
              Compartir Perfil
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DoctorProfileCardSkeleton() {
  const DoctorProfileTabsSkeleton = () => {
    const PersonalInformationTabSkeleton = () => {
      return (
        <div className="space-y-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      );
    };

    return (
      <div className="space-y-5">
        <Separator />
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="flex h-auto flex-wrap justify-around">
            <TabsTrigger value="personal" className="flex-1" disabled>
              Información Personal
            </TabsTrigger>
            <TabsTrigger value="medical" className="flex-1" disabled>
              Atención Médica
            </TabsTrigger>
          </TabsList>
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0 pt-6">
              <TabsContent value="personal">
                <PersonalInformationTabSkeleton />
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-8 w-24" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <div>
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-5/6" />
            <Skeleton className="mt-2 h-4 w-4/6" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DoctorProfileTabsSkeleton />
      </CardContent>
    </Card>
  );
}

export function DoctorPatientListCardSkeleton() {
  return (
    <Card className="h-max">
      <CardHeader className="rounded-t-lg border-b bg-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <Skeleton className="h-6 w-40" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[250px]">
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border-2 border-muted p-3"
              >
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-32" />
                <div className="space-x-2">
                  <Skeleton className="inline-block h-8 w-8 rounded-full" />
                  <Skeleton className="inline-block h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export function DoctorsListSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
