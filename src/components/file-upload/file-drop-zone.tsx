'use client';

import { DragEvent } from 'react';
import { Upload } from 'lucide-react';

interface DropZoneProps {
  isDragging: boolean;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: DragEvent<HTMLDivElement>) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onFileSelect: (files: FileList | null) => void;
}

export function DropZone({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
}: DropZoneProps) {
  return (
    <div
      className={`mt-4 cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition-colors ${
        isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">Drag and drop files here, or</p>
      <label
        htmlFor="file-upload"
        className="mt-2 inline-flex cursor-pointer items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Select files
        <input
          id="file-upload"
          type="file"
          multiple
          className="sr-only"
          onChange={(e) => onFileSelect(e.target.files)}
        />
      </label>
    </div>
  );
}
