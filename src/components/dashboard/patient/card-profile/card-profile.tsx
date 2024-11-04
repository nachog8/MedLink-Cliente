import { Pencil } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EditProfileForm from '@/components/form/patient/form-profile-patient';
import { ScrollArea } from '@/components/ui/scroll-area';

export const CardProfile = () => {
  return (
    <Card className="w-full max-w-[500px] overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      {/* Profile Content */}
      <div className="relative px-6 pb-6 text-center">
        <Avatar className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-full border-4 border-white shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&fit=crop" />
          <AvatarFallback>BB</AvatarFallback>
        </Avatar>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-900">
            Barreto Blanca
          </h2>
          <p className="mt-1 text-gray-600">40 años, Corrientes, Capital.</p>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
            Comprometida con el seguimiento de mi bienestar y la consulta de
            información médica en tiempo real, facilitando la comunicación y el
            intercambio de información con profesionales de la salud. Mi
            objetivo es gestionar de manera proactiva mi salud y mantener un
            registro actualizado para una mejor atención médica.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-6" variant="outline">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] w-full max-w-[90vw] sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh] w-full p-3 pr-4">
                <EditProfileForm />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};
