'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { DropZone } from './file-drop-zone';
import { FileList } from './file-list';
import { Send } from 'lucide-react';
import { useFileUpload } from '@/hooks/use-file-upload';

export function FileUploadDialog() {
  const {
    files,
    isDragging,
    isUploading,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFiles,
    handleRemoveFile,
    handleUpload,
  } = useFileUpload();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Upload Files</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DropZone
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onFileSelect={handleFiles}
        />
        <FileList files={files} onRemoveFile={handleRemoveFile} />
        <Button
          onClick={handleUpload}
          disabled={files.length === 0 || isUploading}
          className="mt-4"
        >
          <Send className="mr-2 h-4 w-4" />
          {isUploading ? 'Uploading...' : 'Upload Files'}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
