import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  locationProfessionalSchema,
  LocationProfessionalType,
} from '@/schemas/professionalSchema';
import { useFormState } from 'react-dom';
import { locationsProfessionalAction } from '@/actions/professional-actions';
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export function LocationsForm() {
  const [state, formAction] = useFormState(locationsProfessionalAction, null);
  const form = useForm<LocationProfessionalType>({
    resolver: zodResolver(locationProfessionalSchema),
    defaultValues: {
      locations: [{ name: '', address: '', schedule: '' }],
    },
  });
  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Actualizacion de Informacion Exitoso!!',
      });
    } else if (state?.error) {
      console.log(state?.error);
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
  const addLocation = () => {
    const currentLocations = form.getValues('locations');
    form.setValue('locations', [
      ...currentLocations,
      { name: '', address: '', schedule: '' },
    ]);
  };

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
            {form.watch('locations').map((_, index) => (
              <div key={index} className="space-y-3">
                <FormField
                  control={form.control}
                  name={`locations.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Establecimiento</FormLabel>
                      <FormControl>
                        <Input placeholder="Hospital Central" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`locations.${index}.address`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Necochea 248, Corrientes - Capital"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`locations.${index}.schedule`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horarios</FormLabel>
                      <FormControl>
                        <Input placeholder="Lun-Vie: 9AM-5PM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <div className="grid gap-5 md:justify-items-end">
              <Button type="button" variant="outline" onClick={addLocation}>
                Agregar Locación
              </Button>
              <Button type="submit">Subir Locación</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
