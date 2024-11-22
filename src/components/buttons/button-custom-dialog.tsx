'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import React from 'react';
import { ScrollArea } from '../ui/scroll-area';

interface CustomDialogProps {
  buttonText: string;
  dialogTitle?: string;
  children: React.ReactNode;
}

export function ButtonCustomDialog({
  buttonText,
  dialogTitle,
  children,
}: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="p-8 font-poppins">
        {dialogTitle && (
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
          </DialogHeader>
        )}
        <ScrollArea className="max-h-[400px] w-full rounded-xl border-2 border-muted">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
