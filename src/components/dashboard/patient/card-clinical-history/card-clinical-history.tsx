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

import { Button } from '@/components/ui/button';
import { sectionsHistoryMedical } from '@/data/dashboard-pacient';

export default function ClinicalHistoryCard() {
  return (
    <Card className="rounded-lg border shadow-sm">
      <div className="border-b bg-white p-4">
        <h2 className="text-xl font-semibold">Historia Clinica</h2>
      </div>
      <CardContent className="space-y-5 p-0">
        {sectionsHistoryMedical.map((section) => (
          <Collapsible key={section.id} className="border-b last:border-b-0">
            <CollapsibleTrigger className="flex w-full items-center justify-between bg-white p-4 hover:bg-gray-50">
              <h3 className="font-medium">{section.title}</h3>
              <ChevronDown className="collapsible-open:rotate-180 h-4 w-4 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="bg-white px-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600">{item.name}</span>
                      <div className="text-gray-800">
                        {item.value && <span>{item.value}</span>}
                        {/* {item.date && (
                          <span className="ml-4 text-gray-500">{item.date}</span>
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mt-4 w-full border-dashed border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/5 hover:text-[#0F766E]"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Agregar más información
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{section.title}</DialogTitle>
                      <DialogDescription>
                        Agregar nuevo registro a {section.title.toLowerCase()}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-muted-foreground">
                        Aquí irá el formulario para agregar{' '}
                        {section.title.toLowerCase()}.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}
