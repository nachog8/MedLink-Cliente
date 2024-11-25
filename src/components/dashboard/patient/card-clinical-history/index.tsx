'use client';

import {
  AllergieFormType,
  FamilyInheritanceFormType,
  NoPathologicalFormType,
  PathologicalFormType,
} from '@/schemas/schemas-profile';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AllergyForm from '@/components/form/patient/form-allergies';
import FamilyInheritanceForm from '@/components/form/patient/form-family-inheritance';
import { FileText } from 'lucide-react';
import { LayoutContentTab } from './layout-content-tab';
import NoPathologicalForm from '@/components/form/patient/form-no-pathological-history';
import PathologicalForm from '@/components/form/patient/form-pathological-history';
import { PatientMedicalHistorySkeleton } from '@/components/skeletons/patient';
import { UserPatient } from '@/interfaces/auth';
import { fieldTranslationMap } from '@/data/form-options';
import { translateData } from '@/lib/translate-data';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function ClinicalHistoryCard() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();
  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    if (profile?.id === id) {
      clearVisitedProfile();
    } else if (!visitedProfile || visitedProfile.id !== id) {
      loadVisitedProfile(id, 'patient');
    }
  }, [
    id,
    profile?.id,
    visitedProfile,
    loadVisitedProfile,
    clearVisitedProfile,
  ]);
  const isUser = profile?.id === id;
  if (!profile && !visitedProfile) return <PatientMedicalHistorySkeleton />;
  const {
    allergiesData,
    familyInheritance,
    nonPathologicalData,
    pathologicalData,
  } = (visitedProfile ?? profile) as UserPatient;
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <FileText className="h-5 w-5 text-indigo-500" />
          Historia Clínica
        </CardTitle>
        <CardDescription>
          Registro completo del estado de salud del paciente, con antecedentes,
          diagnósticos y tratamientos, para una atención continua y
          personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={'allergies'} className="w-full">
          <TabsList className="mb-4 h-auto w-full flex-wrap justify-stretch">
            <TabsTrigger
              value={'allergies'}
              className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Alergias
            </TabsTrigger>
            <TabsTrigger
              value={'pathological'}
              className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Antecedentes Patologicos
            </TabsTrigger>
            <TabsTrigger
              value={'no-pathological'}
              className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Antecedentes No Patologicos
            </TabsTrigger>
            <TabsTrigger
              value={'family inheritance'}
              className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Antecedente Heredo Familiar
            </TabsTrigger>
          </TabsList>

          <TabsContent value={'allergies'}>
            <LayoutContentTab
              items={translateData(allergiesData, fieldTranslationMap)}
              title="Antecedentes de Alergias"
              form_dialog_information={
                <AllergyForm initialValues={allergiesData} />
              }
              title_dialog_information="Alergias"
            />
          </TabsContent>
          <TabsContent value={'pathological'}>
            <LayoutContentTab
              items={translateData(pathologicalData, fieldTranslationMap)}
              title="Antecedentes Patologicos"
              form_dialog_information={
                <PathologicalForm initialValues={pathologicalData} />
              }
              title_dialog_information="Enfermedades Patologicas"
            />
          </TabsContent>
          <TabsContent value={'no-pathological'}>
            <LayoutContentTab
              items={translateData(nonPathologicalData, fieldTranslationMap)}
              title="Antecedentes No Patologicos"
              form_dialog_information={
                <NoPathologicalForm initialValues={nonPathologicalData} />
              }
              title_dialog_information="Enfermedades No Patologicas"
            />
          </TabsContent>

          <TabsContent value={'family inheritance'}>
            <LayoutContentTab
              items={translateData(familyInheritance, fieldTranslationMap)}
              title="Antecedentes Heredo Familiar"
              form_dialog_information={
                <FamilyInheritanceForm initialValues={familyInheritance} />
              }
              title_dialog_information="Enfermedades Hereditarias"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
