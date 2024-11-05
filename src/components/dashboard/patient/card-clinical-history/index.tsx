import {
  Card,
  CardContent,
  CardDescription,
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
import { FileText, Plus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { sectionsHistoryMedical } from '@/data/dashboard-pacient';
import FormNoPathologicalHistory from '@/components/form/patient/form-no-pathological-history';

export default function ClinicalHistoryCard() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <FileText className="h-5 w-5 text-indigo-500" />
          Historia Clínica
        </CardTitle>
        <CardDescription>
          Registro completo del estado de salud del paciente, con antecedentes,
          diagnósticos y tratamientos, para una atención continua y
          personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={'allergies'} className="w-full">
          <ScrollArea className="w-full">
            <TabsList className="mb-4 h-auto w-full flex-wrap justify-stretch">
              <TabsTrigger
                value={'allergies'}
                className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Alergias
              </TabsTrigger>
              <TabsTrigger
                value={'pathological'}
                className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Antecedentes Patologicos
              </TabsTrigger>
              <TabsTrigger
                value={'no-pathological'}
                className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Antecedentes No Patologicos
              </TabsTrigger>
              <TabsTrigger
                value={'vaccination schedule'}
                className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Esquema de Vacunación
              </TabsTrigger>
              <TabsTrigger
                value={'family inheritance '}
                className="px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Antecedente Heredo Familiar
              </TabsTrigger>
            </TabsList>
          </ScrollArea>

          <TabsContent
            key={section.title}
            value={section.title}
            className="mt-4"
          >
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
                      <TableCell className="font-medium">{item.name}</TableCell>
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
                      <FormNoPathologicalHistory />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
