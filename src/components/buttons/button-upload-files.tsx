'use client';

import { useState, useCallback, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Upload, Send, FileIcon } from 'lucide-react';

export default function FileUploadDialog() {
  const [files, setFiles] = useState<File[]>([]);
  const [open, setOpen] = useState(false);

  const [isDragging, setIsDragging] = useState(false);

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

  const handleUpload = useCallback(() => {
    console.log(files);
    setFiles([]);
  }, [files]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Subir Archivos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div
          className={`mt-4 cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition-colors ${
            isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Arrastra y suelta archivos aquí, o
          </p>
          <label
            htmlFor="file-upload"
            className="mt-2 inline-flex cursor-pointer items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Selecciona archivos
            <input
              id="file-upload"
              type="file"
              multiple
              className="sr-only"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </label>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">
              Archivos seleccionados:
            </h4>
            <ScrollArea className="h-[150px] w-full rounded-md border p-2">
              <ul className="m-2 flex flex-col space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="relative flex items-center rounded-xl bg-secondary p-2"
                  >
                    <FileIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                    <div className="w-52">
                      <p className="truncate text-sm font-medium">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveFile(file)}
                            className="absolute -right-2 -top-2 h-6 w-6"
                          >
                            <X className="h-4 w-4 rounded-full border border-black" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Eliminar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        )}

        <Button
          onClick={handleUpload}
          disabled={files.length === 0}
          className="mt-4"
        >
          <Send className="mr-2 h-4 w-4" /> Subir Archivos
        </Button>
      </DialogContent>
    </Dialog>
  );
}
