import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Plus } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { sectionsHistoryMedical } from '@/data/dashboard-pacient';

export default function ClinicalHistoryCard() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-bold">Historia Clínica</h2>
        <div className="space-y-4">
          {sectionsHistoryMedical.map((section) => (
            <Collapsible key={section.title} className="rounded-lg border">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-t-lg p-4 text-start hover:bg-muted/50">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Valor</TableHead>
                        {section.items.some((item) => 'date' in item) && (
                          <TableHead>Fecha</TableHead>
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {section.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.name}
                          </TableCell>
                          <TableCell>{item.value || '-'}</TableCell>
                          {section.items.some((item) => 'date' in item) && (
                            <TableCell>{item.date || '-'}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Agregar más información
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Agregar nuevo registro a {section.title.toLowerCase()}
                        </DialogTitle>
                        <DialogDescription>
                          Aquí irá el formulario para agregar{' '}
                          {section.title.toLowerCase()}.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
