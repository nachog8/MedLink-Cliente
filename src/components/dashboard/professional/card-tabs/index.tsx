import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { doctorInfo, locations } from '@/data/dashboard-professional';

import { AtentionMedicalTab } from './tab-attencion-medical';
import { FileText } from 'lucide-react';

import MultiFormComponent from './tab-settings';
import { PersonalInformationTab } from './tab-information-personal';

export default function CardMedicalProfessional() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col p-4">
          <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
            <FileText className="h-5 w-5" />
            Perfil Médico
          </CardTitle>
          <CardDescription>
            Explora el perfil del médico con información completa, desde sus
            datos personales y especialidades hasta los lugares y horarios de
            atención. Encuentra todo lo necesario para programar tu cita de
            forma rápida y sencilla.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={'personal'} className="w-full">
          <TabsList className="flex h-auto w-full flex-wrap justify-around lg:grid lg:grid-cols-3">
            <TabsTrigger value="personal">Información Personal</TabsTrigger>
            <TabsTrigger value="medical">Atención Médica</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <PersonalInformationTab info={doctorInfo} />
          </TabsContent>
          <TabsContent value="medical">
            <AtentionMedicalTab
              locations={locations}
              mapSrc={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895474!2d-58.4315899!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca099b0e2be7%3A0x389ca1a7bd839!2sHospital%20Italiano%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1650000000000!5m2!1sen!2sar'
              }
            />
          </TabsContent>
          <TabsContent value="settings">
            <MultiFormComponent />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
