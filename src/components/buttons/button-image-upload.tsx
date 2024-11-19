'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { EditProfileFormType } from '@/schemas/schemas-profile';
import Image from 'next/image';
import { UploadCloud } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

interface ImageUploadProps {
  form: UseFormReturn<EditProfileFormType>;
  name: keyof EditProfileFormType;
}

export default function ImageUpload({ form, name }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        form.setValue(name, file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex flex-col items-center space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
                name={field.name}
              />
              <Button
                type="button"
                onClick={handleButtonClick}
                variant="outline"
                className="h-40 w-40 overflow-hidden rounded-full border-dashed p-0 hover:border-sky-400"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-fill object-center"
                    height={500}
                    width={500}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <UploadCloud className="h-10 w-10 text-muted-foreground" />
                    <span className="mt-2 text-sm text-muted-foreground">
                      Upload Image
                    </span>
                  </div>
                )}
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
