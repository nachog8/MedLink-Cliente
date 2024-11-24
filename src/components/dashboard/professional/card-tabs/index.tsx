'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

import { AtentionMedicalTab } from './tab-attencion-medical';
import { Button } from '@/components/ui/button';
import { DoctorProfileCardSkeleton } from '@/components/skeletons/professional';
import { LocationsForm } from '@/components/form/professional/form-locations-professional';
import { PasswordChangeForm } from './tab-password';
import { PersonalInfoForm } from '@/components/form/professional/form-personal-information-professional';
import { PersonalInformationTab } from './tab-information-personal';
import { Separator } from '@/components/ui/separator';
import { UserDoctor } from '@/interfaces/auth';
import { locations } from '@/data/dashboard-professional';
import { useAuth } from '@/context/auth-context';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function CardMedicalProfessional() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();
  const [isSettingsView, setIsSettingsView] = useState(false);
  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    if (profile?.id === id) {
      clearVisitedProfile();
    } else if (!visitedProfile || visitedProfile.id !== id) {
      loadVisitedProfile(id, 'doctor');
    }
  }, [
    id,
    profile?.id,
    visitedProfile,
    loadVisitedProfile,
    clearVisitedProfile,
  ]);
  if (!profile && !visitedProfile) return <DoctorProfileCardSkeleton />;
  const isUser = profile?.id === id;
  const userDoctor = (visitedProfile ?? profile) as UserDoctor;
  const toggleView = () => {
    setIsSettingsView(!isSettingsView);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
              {isSettingsView ? (
                <Settings className="h-5 w-5" />
              ) : (
                <FileText className="h-5 w-5" />
              )}
              {isSettingsView ? 'Opciones' : 'Perfil'}
            </CardTitle>
            {isUser && ( // Solo mostrar botón si el perfil es del usuario logueado
              <Button variant="ghost" size="icon" onClick={toggleView}>
                {isSettingsView ? (
                  <FileText size={40} />
                ) : (
                  <Settings size={40} />
                )}
              </Button>
            )}
          </div>
          <CardDescription className="text-sm md:text-base">
            {isSettingsView
              ? 'Administra y personaliza los detalles de tu cuenta para optimizar tu perfil profesional. En esta sección, puedes actualizar tu información personal y modificar tu contraseña para proteger tus datos. Asegúrate de mantener tu perfil actualizado para mejorar la visibilidad y brindar una experiencia completa a quienes buscan tus servicios.'
              : isUser
                ? null
                : 'Explora el perfil del médico con información completa, desde sus datos personales y especialidades hasta los lugares y horarios de atención. Encuentra todo lo necesario para programar tu cita de forma rápida y sencilla.'}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {isSettingsView && isUser ? (
          <SettingsTabs userDoctor={userDoctor} />
        ) : (
          <DoctorProfileTabs userDoctor={userDoctor} />
        )}
      </CardContent>
    </Card>
  );
}

const DoctorProfileTabs = ({ userDoctor }: { userDoctor: UserDoctor }) => {
  return (
    <div className="space-y-5">
      <Separator />
      <Tabs defaultValue={'personal'} className="w-full">
        <TabsList className="flex h-auto flex-wrap justify-around">
          <TabsTrigger value="personal" className="flex-1">
            Información Personal
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex-1">
            Atención Médica
          </TabsTrigger>
        </TabsList>
        <Card className="mt-4 shadow-none">
          <CardContent className="p-0 pt-6">
            <TabsContent value="personal">
              <PersonalInformationTab dataProfile={userDoctor} />
            </TabsContent>
            <TabsContent value="medical">
              <AtentionMedicalTab
                locations={locations}
                mapSrc={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895474!2d-58.4315899!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca099b0e2be7%3A0x389ca1a7bd839!2sHospital%20Italiano%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1650000000000!5m2!1sen!2sar'
                }
              />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

function SettingsTabs({ userDoctor }: { userDoctor: UserDoctor }) {
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
              <PersonalInfoForm profileData={userDoctor} />
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
