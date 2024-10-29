'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileIcon, FileText, Image } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Document = {
  name: string;
  type: 'pdf' | 'image' | 'other';
  date: string;
};

interface MedicalDocListProps {
  documents: Document[];
}

export function MedicalDocList({ documents }: MedicalDocListProps) {
  const getIcon = (type: Document['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-4 w-4 text-red-600" />;
      case 'image':
        return <Image className="h-4 w-4 text-blue-600" />;
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

  return (
    <Card>
      <CardHeader className="rounded-t-lg border-b bg-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <FileText className="h-5 w-5 text-indigo-500" />
          Documentación Médica
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[250px] pr-4">
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
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
