import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Plus, X } from 'lucide-react';
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
import { InformationNotAvailable } from '@/components/other/information-not-available';
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { boolean } from 'zod';

interface ItemsDetails {
  [key: string]: boolean | string | undefined;
}

interface StatusCardProps {
  protect: boolean;
  items: ItemsDetails;
  title: string;
  description?: string;
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
  protect,
}: StatusCardProps) {
  const parsedItems = Object.keys(items)
    .filter((key) => !key.endsWith('Details'))
    .map((key) => ({
      title: key,
      status: items[key] as boolean,
      description: items[`${key}Details`] as string,
    }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!parsedItems || parsedItems.length === 0 ? (
          <InformationNotAvailable />
        ) : (
          <ScrollArea className="h-72 w-full">
            <Table>
              <TableBody>
                {parsedItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {item.status ? (
                          <div className="flex items-center">
                            <Check className="h-4 w-4 text-destructive" />

                            <span className="ml-2 text-sm">
                              {item.description
                                ? item.description
                                : 'No se añadió detalles'}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center text-green-500">
                            <X className="h-4 w-4" />

                            <span className="ml-2 text-sm">No Posee</span>
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
      {protect && (
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
      )}
    </Card>
  );
}
