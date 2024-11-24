import { Building, Clock, CreditCard, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function AtentionMedicalTab({ locations, mapSrc }) {
  return (
    <div className="space-y-5">
      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold">Consultorios</h2>
        <p className="text-muted-foreground">
          Podrás ver el lugar de atención y los horarios disponibles del doctor
          para programar tu cita. Encuentra fácilmente la dirección del
          consultorio, los días y horas de atención, y el número de contacto
          para más información.
        </p>
      </div>

      {locations.map((location, index) => (
        <Card key={index} className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col gap-6 md:flex-row">
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
                      <span>{location.schedule}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span>Obras Sociales:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {location.insurance.map((ins) => (
                          <Badge key={ins} variant="secondary">
                            {ins}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src={`${mapSrc}&q=${encodeURIComponent(location.address)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
