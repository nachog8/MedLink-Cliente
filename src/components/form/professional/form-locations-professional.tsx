import * as z from 'zod';

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

export const locationSchema = z.object({
  locations: z.array(
    z.object({
      name: z.string().min(2, 'Name must be at least 2 characters'),
      address: z.string().min(5, 'Address must be at least 5 characters'),
      schedule: z.string().min(5, 'Schedule must be at least 5 characters'),
      insurance: z.array(z.string()),
    })
  ),
});

type LocationsFormProps = {
  onSubmit: (values: z.infer<typeof locationSchema>) => void;
};

export function LocationsForm({ onSubmit }: LocationsFormProps) {
  const form = useForm<z.infer<typeof locationSchema>>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      locations: [{ name: '', address: '', schedule: '', insurance: [''] }],
    },
  });

  const addLocation = () => {
    const currentLocations = form.getValues('locations');
    form.setValue('locations', [
      ...currentLocations,
      { name: '', address: '', schedule: '', insurance: [] },
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
