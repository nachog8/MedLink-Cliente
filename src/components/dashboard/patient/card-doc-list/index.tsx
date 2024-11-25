'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Document, UserPatient } from '@/interfaces/auth';
import { Download, FileIcon, FileText, Trash2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import FileUploadDialog from '@/components/buttons/button-upload-files';
import { ImageIcon } from 'lucide-react';
import { InformationNotAvailable } from '@/components/other/information-not-available';
import { PatientDocumentationMedicalSkeleton } from '@/components/skeletons/patient';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export function MedicalDocList() {
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

  if (!profile && !visitedProfile)
    return <PatientDocumentationMedicalSkeleton />;

  const { documents } = (visitedProfile ?? profile) as UserPatient;
  const hasDocuments = documents && documents.length > 0;

  return (
    <Card className="h-auto">
      <CardHeader className="rounded-t-lg border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
            <FileText className="h-5 w-5 text-indigo-500" />
            Documentación Médica
          </CardTitle>
        </div>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        {!hasDocuments ? (
          <InformationNotAvailable />
        ) : (
          <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full',
                        getIconBackground(doc.type)
                      )}
                    >
                      {getIcon(doc.type)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-700">
                        {doc.name}
                      </span>
                      <span className="text-sm text-gray-500">{doc.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-700"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Descargar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {/* Proteger botón de eliminación */}
                    {isUser && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Eliminar</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
      {/* Proteger CardFooter */}
      {isUser && (
        <CardFooter className="mt-6">
          <FileUploadDialog />
        </CardFooter>
      )}
    </Card>
  );
}
const getIcon = (type: Document['type']) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-4 w-4 text-red-600" />;
    case 'image':
      return <ImageIcon className="h-4 w-4 text-blue-600" />;
    default:
      return <FileIcon className="h-4 w-4 text-gray-600" />;
  }
};

const getIconBackground = (type: Document['type']) => {
  switch (type) {
    case 'pdf':
      return 'bg-red-100';
    case 'image':
      return 'bg-blue-100';
    default:
      return 'bg-gray-100';
  }
};
