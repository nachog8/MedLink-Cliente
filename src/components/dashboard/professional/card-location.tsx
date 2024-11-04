import { Building, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { locations } from '@/data/dashboard-professional';

export default function LocationsCard() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <h2 className="text-2xl font-semibold">Consultorios</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {locations.map((location, index) => (
          <div key={index}>
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
            {index < locations.length - 1 && <Separator className="my-6" />}
          </div>
        ))}

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895474!2d-58.4315899!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca099b0e2be7%3A0x389ca1a7bd839!2sHospital%20Italiano%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1650000000000!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </CardContent>
    </Card>
  );
}
