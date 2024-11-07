import { AlertCircle, Check, Plus, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface StatusItem {
  title: string;
  status: boolean;
  description?: string;
}

interface StatusCardProps {
  items: StatusItem[];
  title: string;
  description: string;
  form_dialog_information: JSX.Element;
  title_dialog_information?: string;
  description_dialog_information?: string;
}

export function LayoutContentTab({
  items,
  description,
  title,
  form_dialog_information: Form,
  description_dialog_information,
  title_dialog_information,
}: StatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!items || items.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <AlertCircle className="mb-4 h-16 w-16 text-muted-foreground" />
              <p className="mb-4 text-lg font-medium text-muted-foreground">
                No hay información disponible
              </p>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-52 w-full">
            <Table>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {item.status ? (
                          <div className="flex items-center text-green-600">
                            <Check className="h-4 w-4" />
                            {item.description && (
                              <span className="ml-2 text-sm">
                                {item.description}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center text-destructive">
                            <X className="h-4 w-4" />
                            {item.description && (
                              <span className="ml-2 text-sm">
                                {item.description}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar más información
            </Button>
          </DialogTrigger>
          <DialogContent className="font-poppins">
            <DialogHeader>
              <DialogTitle>{title_dialog_information}</DialogTitle>
              <DialogDescription>
                {description_dialog_information}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[400px] w-full rounded-xl border-2 border-muted">
              {Form}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
