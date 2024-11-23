import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Loading from '@/components/loading/loading';
import { LocationsForm } from '@/components/form/professional/form-locations-professional';
import { PasswordChangeForm } from '../tab-password';
import { PersonalInfoForm } from '@/components/form/professional/form-personal-information-professional';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/auth-context';

export default function SettingsTabs() {
  const { profile } = useAuth();
  if (!profile) return <Loading />;
  return (
    <div className="space-y-5">
      <Separator />

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="flex h-auto flex-wrap justify-around">
          <TabsTrigger value="personal" className="flex-1">
            Perfil
          </TabsTrigger>
          <TabsTrigger value="locations" className="flex-1">
            Lugares de Atención
          </TabsTrigger>

          <TabsTrigger value="password" className="flex-1">
            Contraseña
          </TabsTrigger>
        </TabsList>

        <Card className="mt-4 border-none shadow-none">
          <CardContent className="p-0 pt-6">
            <TabsContent value="personal">
              <PersonalInfoForm profileData={profile} />
            </TabsContent>

            <TabsContent value="locations">
              <LocationsForm />
            </TabsContent>

            <TabsContent value="password">
              <PasswordChangeForm />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
