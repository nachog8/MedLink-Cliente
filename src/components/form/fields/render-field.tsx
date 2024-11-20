import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Control } from 'react-hook-form';
import React from 'react';

interface RenderFieldProps<T> {
  control: Control;
  fieldName: keyof T;
  label: string;
  options?: Array<{ value: string; label: string }>;
}

export const renderField = <T,>({
  control,
  fieldName,
  label,
  options = [
    { value: 'true', label: 'Sí' },
    { value: 'false', label: 'No' },
  ],
}: RenderFieldProps<T>) => (
  <FormField
    control={control}
    name={fieldName as string}
    render={({ field }) => (
      <FormItem className="flex items-center justify-between">
        <FormLabel className="font-semibold">{label}</FormLabel>
        <FormControl>
          <RadioGroup
            onValueChange={(value) => field.onChange(value === 'true')}
            value={String(field.value)}
            className="flex gap-5"
            name={fieldName as string}
          >
            {options.map((option) => (
              <FormItem
                key={option.value}
                className="flex items-center space-x-3 space-y-0"
              >
                <FormControl>
                  <RadioGroupItem value={option.value} />
                </FormControl>
                <FormLabel className="font-normal">{option.label}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
