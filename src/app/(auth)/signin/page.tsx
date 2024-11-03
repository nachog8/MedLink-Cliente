import { Stethoscope, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import FormSignInPatient from '@/components/form/form-signin-patient';
import FormSignProfessional from '@/components/form/form-signin-professional';
import { TabSplitContainer } from '@/components/singin/tab-split-container';

export default function Page() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      {/* TODO: Resolver widht de tabs  */}
      <Tabs defaultValue="paciente" className="mx-auto md:w-[512px] lg:w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="paciente">Paciente</TabsTrigger>
          <TabsTrigger value="profesional">Profesional</TabsTrigger>
        </TabsList>
        <TabsContent value="paciente">
          <TabSplitContainer
            title="Registro de Paciente"
            icon={Users}
            description=" Accede a una plataforma diseñada para ayudarte a gestionar y consultar tu historial médico, 
                contactar con profesionales de salud y recibir recomendaciones personalizadas. Crea tu cuenta 
                como paciente y ten el control de tu bienestar."
            imageUrl="/banners/patient-security.jfif"
            imageAlt="form-patient"
            formComponent={<FormSignInPatient />}
          />
        </TabsContent>
        <TabsContent value="profesional">
          <TabSplitContainer
            title="Registro de Profesional"
            icon={Stethoscope}
            description="Únete a nuestra red de profesionales de la salud y ofrece tus servicios de manera fácil y accesible para los pacientes. Regístrate como profesional y amplía tu alcance, administra citas y mantén tus datos actualizados."
            imageUrl="/banners/professionales.jfif"
            imageAlt="form-professional"
            formComponent={<FormSignProfessional />}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
