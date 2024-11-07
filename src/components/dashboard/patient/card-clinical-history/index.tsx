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
import VaccinationScheduleForm from '@/components/form/patient/form-vaccination-schedule';

export default function ClinicalHistoryCard() {
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
              value={'vaccination schedule'}
              className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Esquema de Vacunación
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
              items={[]}
              description="Registra aquí tus alergias conocidas, como a medicamentos, alimentos o productos químicos. Mantener esta información actualizada es clave para evitar reacciones adversas y asegurar un cuidado seguro en caso de emergencias."
              title="Antecedentes de Alergias"
              form_dialog_information={<AllergyForm />}
              title_dialog_information="Alergias"
            />
          </TabsContent>
          <TabsContent value={'pathological'}>
            <LayoutContentTab
              items={[]}
              description="Registra aquí tus enfermedades previas o condiciones de salud diagnosticadas, como hipertensión, diabetes o asma. Esta información es esencial para un seguimiento médico adecuado."
              title="Antecedentes Patologicos"
              form_dialog_information={<PathologicalForm />}
              title_dialog_information="Enfermedades Patologicas"
            />
          </TabsContent>
          <TabsContent value={'no-pathological'}>
            <LayoutContentTab
              items={[]}
              description="Incluye información sobre tus hábitos diarios que impactan tu salud, como alimentación, ejercicio, consumo de tabaco o alcohol, y estilo de vida general."
              title="Antecedentes No Patologicos"
              form_dialog_information={<NoPathologicalForm />}
              title_dialog_information="Enfermedades No Patologicas"
            />
          </TabsContent>
          <TabsContent value={'vaccination schedule'}>
            <LayoutContentTab
              items={[]}
              description="Mantén un registro de tus vacunas recibidas, fechas y refuerzos. Un esquema de vacunación actualizado es clave para prevenir enfermedades y fortalecer tu sistema inmunológico."
              title="Esquema de Vacunación"
              form_dialog_information={<VaccinationScheduleForm />}
              title_dialog_information="Esquema de Vacunación"
            />
          </TabsContent>
          <TabsContent value={'family inheritance'}>
            <LayoutContentTab
              items={[]}
              description="Registra condiciones de salud presentes en tu familia, como enfermedades cardíacas o diabetes. Estos antecedentes ayudan a comprender factores de riesgo y a tomar precauciones."
              title="Antecedentes Heredo Familiar"
              form_dialog_information={<FamilyInheritanceForm />}
              title_dialog_information="Enfermedades Hereditarias"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
