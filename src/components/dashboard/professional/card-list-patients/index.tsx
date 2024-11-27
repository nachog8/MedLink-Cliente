'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Eye, Trash2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserDoctor, UserPatient } from '@/interfaces/auth';

import { Button } from '@/components/ui/button';
import { ButtonCustomDialog } from '@/components/buttons/button-custom-dialog';
import { DoctorPatientListCardSkeleton } from '@/components/skeletons/professional';
import { InformationNotAvailable } from '@/components/other/information-not-available';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SendEmailPatient } from '@/components/form/professional/form-send-email-patient';
import { useAuth } from '@/context/auth-context';
import { useParams } from 'next/navigation';

export default function CardListPatients() {
  const { id } = useParams();
  const { profile } = useAuth();

  const isDoctor = profile?.id === id;

  if (!isDoctor) return null;

  const userDoctor = profile as UserDoctor;
  if (!profile) return <DoctorPatientListCardSkeleton />;
  const patients = userDoctor.patients;
  return (
    <Card className="mb-10 h-max lg:w-3/4">
      <CardHeader className="rounded-t-lg border-b bg-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          Lista de Pacientes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {!patients || patients.length === 0 ? (
          <InformationNotAvailable />
        ) : (
          <ScrollArea className="h-[250px]">
            <div className="space-y-2">
              {patients.map((patient, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border-2 border-muted p-3"
                >
                  {/* TODO: HABLAR CON SAUL PORQUE CON SOLO EL ID DE LOS PATIENTS NO HAGO MUCHO */}
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={`http://localhost:8081${patient.avatar}`}
                      alt={`${patient.firstName} ${patient.lastName}`}
                    />
                    <AvatarFallback>{patient.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-sm font-medium">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <div className="space-x-2">
                    <TooltipsButtonsPatient id={patient.id} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
      <CardFooter>
        <ButtonCustomDialog
          buttonText="Agregar Paciente"
          dialogTitle="Solicitar Permiso a Paciente"
        >
          <SendEmailPatient />
        </ButtonCustomDialog>
      </CardFooter>
    </Card>
  );
}

function TooltipsButtonsPatient({ id }: { id: string }) {
  // const deletePatient = (id: string) => {
  //   console.log(id);
  // };
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size={'icon'} asChild variant="outline">
              <Link href={`/paciente/${id}`}>
                <Eye />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ver Perfil</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="destructive"
              size={'icon'}
              onClick={() => deletePatient(id)}
            >
              <Trash2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Eliminar Paciente</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </>
  );
}
