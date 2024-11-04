'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';

// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Separator } from '@/components/ui/separator';
// import { patientInfo } from '@/data/dashboard-pacient';
// import { useState } from 'react';

export const CardProfile = () => {
  // const [isEditing, setIsEditing] = useState(false);
  return (
    <Card className="w-full max-w-[500px] overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      {/* Profile Content */}
      <div className="relative px-6 pb-6 text-center">
        <Avatar className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-full border-4 border-white shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&fit=crop" />
          <AvatarFallback>CK</AvatarFallback>
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

          <Button className="mt-6" variant="outline">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>
    </Card>
    // <Card>
    //   <CardContent className="flex space-x-4 p-6 text-center">
    //     <Avatar className="h-20 w-20">
    //       <AvatarImage src="" alt="Foto de perfil" />
    //       <AvatarFallback>J</AvatarFallback>
    //     </Avatar>
    //     <div className="flex-1 items-center justify-center space-y-1.5">
    //       <h2 className="text-lg font-semibold capitalize text-primary">
    //         {patientInfo.fullName}
    //       </h2>
    //       <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
    //         <p>{patientInfo.birthDate}</p>
    //         <Separator orientation="vertical" className="h-4" />
    //         <p className="capitalize">{patientInfo.gender}</p>
    //       </div>
    //       <Dialog>
    //         <DialogTrigger asChild>
    //           <Button variant="outline" className="mt-2">
    //             Ver más información
    //           </Button>
    //         </DialogTrigger>
    //         <DialogContent className="max-w-2xl">
    //           <DialogHeader>
    //             <DialogTitle className="mr-5 flex items-center justify-between">
    //               <span>Información del Paciente</span>
    //               <Button
    //                 variant="outline"
    //                 size="icon"
    //                 onClick={() => setIsEditing(!isEditing)}
    //                 className="h-8 w-8"
    //               >
    //                 <Edit2Icon className="h-4 w-4" />
    //               </Button>
    //             </DialogTitle>
    //           </DialogHeader>
    //           {/* TODO: Todo este formulario hay que hcer un schema y hacerlo con componentes de shadcn y server action */}
    //           <div className="grid grid-cols-2 gap-4 py-4">
    //             <div className="space-y-2">
    //               <Label>Nombre completo</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.fullName}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Fecha de nacimiento</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={`${patientInfo.birthDate} (${patientInfo.age} años)`}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Género</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.gender}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Estado civil</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.civilStatus}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Teléfono</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.phone}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Email</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.email}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Dirección</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.address}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>DNI/Pasaporte</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.documentId}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Nacionalidad</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.nationality}
    //               />
    //             </div>
    //             <div className="space-y-2">
    //               <Label>Ocupación</Label>
    //               <Input
    //                 disabled={!isEditing}
    //                 defaultValue={patientInfo.occupation}
    //               />
    //             </div>
    //             <div className="col-span-2 space-y-2">
    //               <Label className="font-semibold">
    //                 Contacto de Emergencia
    //               </Label>
    //               <div className="grid grid-cols-3 gap-2">
    //                 <Input
    //                   disabled={!isEditing}
    //                   defaultValue={patientInfo.emergencyContact.name}
    //                   placeholder="Nombre"
    //                 />
    //                 <Input
    //                   disabled={!isEditing}
    //                   defaultValue={patientInfo.emergencyContact.relation}
    //                   placeholder="Relación"
    //                 />
    //                 <Input
    //                   disabled={!isEditing}
    //                   defaultValue={patientInfo.emergencyContact.phone}
    //                   placeholder="Teléfono"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           {isEditing && (
    //             <div className="flex justify-end space-x-2">
    //               <Button variant="outline" onClick={() => setIsEditing(false)}>
    //                 Cancelar
    //               </Button>
    //               <Button
    //                 onClick={() => {
    //                   // Here you would handle the save logic
    //                   setIsEditing(false);
    //                 }}
    //               >
    //                 Guardar cambios
    //               </Button>
    //             </div>
    //           )}
    //         </DialogContent>
    //       </Dialog>
    //     </div>
    //   </CardContent>
    // </Card>
  );
};
