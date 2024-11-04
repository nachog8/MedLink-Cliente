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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const abilitySchema = z.object({
  abilities: z.array(
    z.object({
      title: z.string().min(2, 'Title must be at least 2 characters'),
      label: z
        .string()
        .min(2, 'Label must be at least 2 characters')
        .optional(),
      progress: z.number().min(0).max(100),
    })
  ),
});

type AbilitiesFormProps = {
  onSubmit: (values: z.infer<typeof abilitySchema>) => void;
};

export function AbilitiesForm({ onSubmit }: AbilitiesFormProps) {
  const form = useForm<z.infer<typeof abilitySchema>>({
    resolver: zodResolver(abilitySchema),
    defaultValues: {
      abilities: [{ title: '', label: '', progress: 0 }],
    },
  });

  const addAbility = () => {
    const currentAbilities = form.getValues('abilities');
    form.setValue('abilities', [
      ...currentAbilities,
      { title: '', label: '', progress: 0 },
    ]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestiona tus Habilidades</CardTitle>
        <CardDescription>
          Destaca tus áreas de especialización y fortalezas profesionales.
          Agregar y actualizar tus habilidades permite a los pacientes conocer
          mejor tu experiencia y el tipo de atención que puedes ofrecer,
          ayudándolos a tomar decisiones informadas sobre su salud.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {form.watch('abilities').map((_, index) => (
              <div key={index} className="space-y-3">
                <FormField
                  control={form.control}
                  name={`abilities.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titulo de la Habilidad</FormLabel>
                      <FormControl>
                        <Input placeholder="Medicina General" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`abilities.${index}.label`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="20 de años de experiencia en atención general"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`abilities.${index}.progress`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nivel de Experiencia</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="75"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Ingresa un valor entre 0 y 100
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <div className="grid gap-5 md:justify-items-end">
              <Button type="button" variant="outline" onClick={addAbility}>
                Agregar Habilidad
              </Button>
              <Button type="submit">Subir Habilidades</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
