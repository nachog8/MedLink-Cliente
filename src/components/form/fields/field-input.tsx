import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React, { ReactNode } from 'react';

import { Input } from '@/components/ui/input';

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEL = 'tel',
  URL = 'url',
  DATE = 'date',
}
interface RenderFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  icon?: ReactNode;
  type?: InputTypes;
}

export const FieldInput = <T extends FieldValues>({
  control,
  fieldName,
  label,
  icon,
  type,
}: RenderFieldProps<T>) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel className="font-semibold">{label}</FormLabel>
        <FormControl>
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {icon}
              </div>
            )}
            <Input
              type={type}
              {...field}
              className={`${icon ? 'pl-10' : 'pl-3'} ${
                fieldState.error ? 'border-red-600' : ''
              }`}
            />
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
