import React from 'react';
import { Check, X, AlertCircle, Plus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import HealthForm from '@/components/form/patient/form-no-pathological-history';
interface StatusItem {
  title: string;
  status: boolean;
  description?: string;
}

interface StatusCardProps {
  items: StatusItem[];
  title: string;
  description: string;
}

export function LayoutContentTab({
  items,
  description,
  title,
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
          <DialogTrigger>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar más información
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-96 w-full">
              <HealthForm />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
