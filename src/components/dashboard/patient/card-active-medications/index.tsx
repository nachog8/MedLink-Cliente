import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Pill } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { medications } from '@/data/dashboard-pacient';

export default function MedicationActiveCard() {
  return (
    <Card>
      <CardHeader className="rounded-t-lg border-b bg-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <Pill className="h-5 w-5 text-green-500" />
          Medicamentos Activos
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[250px] pr-4">
          <div className="space-y-3">
            {medications.map((medication, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-colors hover:bg-gray-50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <Pill className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">{medication}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
