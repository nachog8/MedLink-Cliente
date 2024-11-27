import { Building, CalendarDays, Clock, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LocationProfessionalType,
  locationProfessionalSchema,
} from '@/schemas/professionalSchema';

import { ButtonSubmit } from '@/components/buttons/button-submit';
import { FieldInput } from '../fields/field-input';
import { Form } from '@/components/ui/form';
import { locationsProfessionalAction } from '@/actions/professional-actions';
import { toast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export function LocationsForm() {
  const [state, formAction] = useFormState(locationsProfessionalAction, null);
  const form = useForm<LocationProfessionalType>({
    resolver: zodResolver(locationProfessionalSchema),
    defaultValues: {
      name: '',
      address: '',
      days: '',
      hours: '',
    },
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Actualizacion de Informacion Exitoso!!',
      });
    } else if (state?.error) {
      const errorMessage = Array.isArray(state.error)
        ? state.error.map((err) => `${err.message}`).join('\n')
        : state.error;

      toast({
        title: 'Error en la Actualizacion',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  }, [state]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configura tu Lugar de Trabajo</CardTitle>
        <CardDescription>
          Completa los detalles de tu lugar de trabajo, incluyendo dirección,
          horarios de atención, y opciones de seguro. Esta información ayudará a
          los pacientes a conocer tu ubicación y disponibilidad para programar
          citas fácilmente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-5">
            <div className="space-y-3">
              <FieldInput<LocationProfessionalType>
                control={form.control}
                fieldName={`name`}
                label="Nombre del Establecimiento"
                icon={<Building size={18} />}
                placeholder="Hospital Central"
              />
              <FieldInput<LocationProfessionalType>
                control={form.control}
                fieldName={`address`}
                label="Dirección del establecimieto"
                icon={<MapPin size={18} />}
                placeholder="Hospital Central"
              />
              <FieldInput<LocationProfessionalType>
                control={form.control}
                fieldName={`days`}
                label="Días que atiende"
                icon={<CalendarDays size={18} />}
                placeholder="Lunes - Viernes"
              />
              <FieldInput<LocationProfessionalType>
                control={form.control}
                fieldName={`hours`}
                label="Horarios de atención"
                icon={<Clock size={18} />}
                placeholder="8 a 20"
              />
            </div>

            <div className="grid gap-5 md:justify-items-end">
              <ButtonSubmit text="Subir Locación" />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
