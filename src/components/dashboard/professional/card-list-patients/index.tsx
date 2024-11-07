'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Trash2, Eye, AlertCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Patient {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

export default function CardListPatients({
  patients: patientsIniciales = [],
}: {
  patients?: Patient[];
}) {
  const [patients, setPatients] = useState(patientsIniciales);

  const deletePatient = (id: string) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <Card className="h-max">
      <CardHeader className="rounded-t-lg border-b bg-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          Lista de Pacientes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {!patients || patients.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <AlertCircle className="mb-4 h-16 w-16 text-muted-foreground" />
              <p className="mb-4 text-lg font-medium text-muted-foreground">
                No hay información disponible
              </p>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-[250px]">
            <div className="space-y-2">
              {patients.map((patient, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border-2 border-muted p-3"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={patient.avatar}
                      alt={`${patient.firstName} ${patient.lastName}`}
                    />
                    <AvatarFallback>{patient.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-sm font-medium">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <div className="space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size={'icon'} asChild variant="outline">
                            <Link href={`/perfil/${patient.id}`}>
                              <Eye />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver Perfil</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="destructive"
                            size={'icon'}
                            onClick={() => deletePatient(patient.id)}
                          >
                            <Trash2 />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Eliminar Paciente</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
