'use client';

import {
  AbilitiesForm,
  abilitySchema,
} from '@/components/form/professional/form-abilities-professional';
import { Card, CardContent } from '@/components/ui/card';
import {
  LocationsForm,
  locationSchema,
} from '@/components/form/professional/form-locations-professional';
import {
  PersonalInfoForm,
  personalInfoSchema,
} from '@/components/form/professional/form-personal-information-professional';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PasswordChangeForm } from '../tab-password';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';

export default function TabSettings() {
  const handlePersonalSubmit = (values: z.infer<typeof personalInfoSchema>) => {
    console.log(values);
  };

  const handleLocationSubmit = (values: z.infer<typeof locationSchema>) => {
    console.log(values);
  };

  const handleAbilitySubmit = (values: z.infer<typeof abilitySchema>) => {
    console.log(values);
  };

  return (
    <div className="space-y-5">
      <Separator />
      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold">Settings</h2>
        <p className="text-muted-foreground">
          Administra y personaliza los detalles de tu cuenta para optimizar tu
          perfil profesional. En esta sección, puedes actualizar tu información
          personal y modificar tu contraseña para proteger tus datos. Asegúrate
          de mantener tu perfil actualizado para mejorar la visibilidad y
          brindar una experiencia completa a quienes buscan tus servicios
        </p>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid h-full w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="personal">Perfil</TabsTrigger>
          <TabsTrigger value="locations">Lugares de Atención</TabsTrigger>
          <TabsTrigger value="abilities">Habilidades</TabsTrigger>
          <TabsTrigger value="password">Contraseña</TabsTrigger>
        </TabsList>

        <Card className="mt-4 border-none shadow-none">
          <CardContent className="pt-6">
            <TabsContent value="personal">
              <PersonalInfoForm onSubmit={handlePersonalSubmit} />
            </TabsContent>

            <TabsContent value="locations">
              <LocationsForm onSubmit={handleLocationSubmit} />
            </TabsContent>

            <TabsContent value="abilities">
              <AbilitiesForm onSubmit={handleAbilitySubmit} />
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
