'use client';

import { DragEvent, useCallback, useState } from 'react';

import { patientService } from '@/services/patient-service';
import { useAuth } from '@/context/auth-context';
import { useToast } from './use-toast';

const { uploadFilesPatient } = patientService;

export function useFileUpload() {
  const { token } = useAuth();
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (newFiles) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    }
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      handleFiles(event.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleRemoveFile = useCallback((fileToRemove: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  }, []);

  const handleUpload = useCallback(async () => {
    if (!token) {
      toast({
        title: 'Error',
        description:
          'No estas autenticado. Por favor, inicia sesión e intentalo nuevamente',
        variant: 'destructive',
      });
      return;
    }
    try {
      setIsUploading(true);
      const formData = new FormData();

      files.forEach((file) => {
        formData.append('studies', file);
      });

      const result = await uploadFilesPatient(formData, token);

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Archivos suibidos con exito',
        });
        setFiles([]);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log((error as Error).message);
      toast({
        title: 'Error',
        description:
          'Ocurrio un error al subir los archivos, verifique los mismos.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  }, [files, toast, token]);

  return {
    files,
    isDragging,
    isUploading,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFiles,
    handleRemoveFile,
    handleUpload,
  };
}
