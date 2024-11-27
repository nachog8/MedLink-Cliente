import { AlertCircle, Building, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

import { InformationNotAvailable } from '@/components/other/information-not-available';
import { Location } from '@/interfaces/auth';
import { geocodeAddress } from '@/services/google-maps-service';

interface GeocodedLocation extends Location {
  lat: number | null;
  lng: number | null;
}

export function AtentionMedicalTab({ locations }: { locations: Location[] }) {
  const [geoLocations, setGeoLocations] = useState<GeocodedLocation[]>([]);
  useEffect(() => {
    const fetchGeoLocations = async () => {
      const results = await Promise.all(
        locations.map(async (location) => {
          try {
            const geocoded = await geocodeAddress(location.address);
            return {
              _id: location._id,
              name: location.name,
              address: location.address,
              openingHours: location.openingHours,
              lat: geocoded.lat,
              lng: geocoded.lng,
            };
          } catch (error) {
            console.error(
              `Error obteniendo coordenadas para ${location.address}:`,
              error
            );
            return {
              ...location,
              lat: null,
              lng: null,
            };
          }
        })
      );
      setGeoLocations(results);
    };

    fetchGeoLocations();
  }, [locations]);

  if (!geoLocations.length) {
    return <p>Cargando ubicaciones...</p>;
  }

  return (
    <div className="space-y-5 p-4">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Consultorios</h2>
        <p className="text-muted-foreground">
          Podrás ver el lugar de atención y los horarios disponibles del doctor
          para programar tu cita. Encuentra fácilmente la dirección del
          consultorio, los días y horas de atención, y el número de contacto
          para más información.
        </p>
      </div>

      {geoLocations.map((location, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{location.openingHours}</span>
                    </div>
                    <div className="space-y-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                  {location.lat && location.lng ? (
                    <iframe
                      src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center py-8">
                      <AlertCircle className="mb-4 h-16 w-16 text-muted-foreground" />
                      <p className="mb-4 text-lg font-medium text-muted-foreground">
                        No hay información disponible
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
