'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ButtonCustomDialog } from '@/components/buttons/button-custom-dialog';
import { InformationNotAvailable } from '@/components/other/information-not-available';
import { MedicationForm } from '@/components/form/patient/form-medication';
import { PatientActiveMedicationsSkeleton } from '@/components/skeletons/patient';
import { Pill } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserPatient } from '@/interfaces/auth';
import { formatDate } from '@/lib/date-formatter';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function MedicationCard() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile } = useProfile();

  const isUser = profile?.id === id;
  if (!profile && !visitedProfile) return <PatientActiveMedicationsSkeleton />;
  const { medications } = (visitedProfile ?? profile) as UserPatient;
  const hasMedications = medications && medications.length > 0;

  return (
    <Card>
      <CardHeader className="rounded-t-lg border-b pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <Pill className="h-5 w-5 text-green-500" />
          Medicamentos Activos
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        {!hasMedications ? (
          <>
            <InformationNotAvailable />
          </>
        ) : (
          <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-3">
              {medications.map((medication, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Pill className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700">
                      {medication.medication}
                    </span>
                    <span className="text-sm text-gray-500">
                      {medication.dosage} - {medication.frequency}
                    </span>
                    <span className="text-xs text-gray-400">
                      {`Desde ${formatDate(medication.startDate)} - Hasta ${formatDate(medication.endDate)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
      {isUser && (
        <CardFooter className="mt-6">
          <ButtonCustomDialog buttonText="Añadir Medicamentos">
            <MedicationForm />
          </ButtonCustomDialog>
        </CardFooter>
      )}
    </Card>
  );
}
