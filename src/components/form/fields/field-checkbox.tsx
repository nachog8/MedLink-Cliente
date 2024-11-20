import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Control, FieldValues, Path } from 'react-hook-form';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface RenderFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>; // Permite rutas como "atBirth.bcg"
  label: string;
  name: string;
}

export const FieldCheckBox = <T extends FieldValues>({
  control,
  fieldName,
  name,
  label,
}: RenderFieldProps<T>) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <Checkbox
            checked={field.value}
            name={name}
            onCheckedChange={field.onChange}
          />
        </FormControl>
        <FormLabel className="font-normal">{label}</FormLabel>
      </FormItem>
    )}
  />
);
