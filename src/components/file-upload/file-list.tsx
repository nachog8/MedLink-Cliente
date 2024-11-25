'use client';

import { FileIcon, X } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatFileSize } from '@/lib/utils';

interface FileListProps {
  files: File[];
  onRemoveFile: (file: File) => void;
}

export function FileList({ files, onRemoveFile }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-2 text-sm font-medium">Selected files:</h4>
      <ScrollArea className="h-[150px] w-full rounded-md border p-2">
        <ul className="m-2 flex flex-col space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="relative flex items-center rounded-xl bg-secondary p-2"
            >
              <FileIcon className="mr-2 h-5 w-5 flex-shrink-0" />
              <div className="w-52">
                <p className="truncate text-sm font-medium">{file.name}</p>
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
                      onClick={() => onRemoveFile(file)}
                      className="absolute -right-2 -top-2 h-6 w-6"
                    >
                      <X className="h-4 w-4 rounded-full border border-black" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
