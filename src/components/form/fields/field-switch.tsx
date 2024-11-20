import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React, { ReactNode } from 'react';

import { Switch } from '@/components/ui/switch';

interface RenderSwitchProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  description?: string;
  icon?: ReactNode;
}

export const FieldSwitch = <T extends FieldValues>({
  control,
  fieldName,
  label,
  description,
  icon,
}: RenderSwitchProps<T>) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <FormLabel className="flex items-center gap-3">
            {icon && <span>{icon}</span>}
            {label}
          </FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
        </div>
        <FormControl>
          <Switch
            name={field.name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
