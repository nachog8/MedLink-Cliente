import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';

interface RenderFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  options: { label: string; value: string }[];
}

export const FieldSelect = <T extends FieldValues>({
  control,
  fieldName,
  label,
  options,
}: RenderFieldProps<T>) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="font-semibold">{label}</FormLabel>
        <Select
          onValueChange={field.onChange}
          value={field.value}
          name={field.name}
        >
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);
