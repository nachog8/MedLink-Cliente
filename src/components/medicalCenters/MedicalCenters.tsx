"use client";

import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const centers = [
  {
    id: 1,
    name: 'Sanatorio de la Trinidad Palermo',
    address: 'Av. Cerviño 4720, CABA',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    phone: '0800-555-1234',
    schedule: 'Lunes a Domingo 24hs',
    specialties: ['Cardiología', 'Pediatría', 'Traumatología', 'Ginecología'],
    emergencies: '24hs',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8862423724244!2d-58.4120277!3d-34.5768485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c0b6c8b1e3%3A0x8b3fa7d0e8c40e16!2sSanatorio%20De%20La%20Trinidad%20Palermo!5e0!3m2!1ses!2sar!4v1647913844159!5m2!1ses!2sar'
  },
  {
    id: 2,
    name: 'Sanatorio de la Trinidad Mitre',
    address: 'Bartolomé Mitre 2553, CABA',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
    phone: '0800-555-5678',
    schedule: 'Lunes a Domingo 24hs',
    specialties: ['Neurología', 'Oftalmología', 'Urología', 'Dermatología'],
    emergencies: '24hs',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167542352877!2d-58.4082778!3d-34.6047222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c8c4444f7%3A0x8b3fa7d0e8c40e16!2sSanatorio%20De%20La%20Trinidad%20Mitre!5e0!3m2!1ses!2sar!4v1647913844159!5m2!1ses!2sar'
  },
  {
    id: 3,
    name: 'Sanatorio de la Trinidad Quilmes',
    address: 'C. Pellegrini 498, Quilmes',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    phone: '0800-555-9012',
    schedule: 'Lunes a Domingo 24hs',
    specialties: ['Pediatría', 'Obstetricia', 'Traumatología', 'Cardiología'],
    emergencies: '24hs',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8982423724244!2d-58.2551277!3d-34.7218485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x8b3fa7d0e8c40e16!2sSanatorio%20De%20La%20Trinidad%20Quilmes!5e0!3m2!1ses!2sar!4v1647913844159!5m2!1ses!2sar'
  },
];

export default function MedicalCenters() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Centros Médicos de Excelencia
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => (
            <Dialog key={center.id}>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-48">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {center.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{center.address}</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{center.name}</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="info">Información</TabsTrigger>
                    <TabsTrigger value="map">Ubicación</TabsTrigger>
                  </TabsList>
                  <TabsContent value="info" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{center.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>{center.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{center.schedule}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Especialidades:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {center.specialties.map((specialty) => (
                            <div
                              key={specialty}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                            >
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>Guardias: {center.emergencies}</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="map" className="mt-4">
                    <div className="aspect-video w-full">
                      <iframe
                        src={center.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}