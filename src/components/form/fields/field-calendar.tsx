import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

interface RenderFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>; // Permite rutas como "atBirth.bcg"
  label: string;
  //   name: string;
}

export const FieldCalendar = <T extends FieldValues>({
  control,
  fieldName,
  //   name,
  label,
}: RenderFieldProps<T>) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem className="flex flex-col items-start space-y-3">
        <FormLabel
          className="font-bold"
          // htmlFor={name}
        >
          {label}
        </FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                // name={name}
                variant={'outline'}
                className={cn(
                  'w-full text-left font-normal',
                  !field.value && 'text-muted-foreground'
                )}
              >
                {field.value ? (
                  <span className="w-28 truncate">
                    {format(field.value, 'PPP', { locale: es })}
                  </span>
                ) : (
                  <span className="w-28 truncate">Seleccione una fecha</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => date < new Date('1900-01-01')}
              initialFocus
              locale={es}
            />
          </PopoverContent>
        </Popover>
        <FormDescription>
          La fecha para comenzar a tomar el medicamento.
        </FormDescription>
        <FormMessage />
        {/* Input invisible para enviar el valor */}
        <input
          type="hidden"
          name={fieldName} // Asigna el nombre al campo
          value={field.value ? format(field.value, 'yyyy-MM-dd') : ''} // Formatea el valor de la fecha para enviar
        />
      </FormItem>
    )}
  />
);
