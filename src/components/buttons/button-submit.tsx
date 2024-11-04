'use client';

import { Button } from '@/components/ui/button';
import Loading from '../loading/loading';
import { useFormContext } from 'react-hook-form';
import { useFormStatus } from 'react-dom';

interface ButtonSubmitProps {
  text: string;
}

export const ButtonSubmit = ({ text }: ButtonSubmitProps) => {
  const { pending } = useFormStatus();
  const form = useFormContext();

  const isFormValid = form && form.formState.isValid;
  const isSubmitDisabled = pending || !isFormValid;

  return (
    <Button type="submit" className="my-10 w-full" disabled={isSubmitDisabled}>
      {pending ? <Loading color="accent" size="sm" /> : text}
    </Button>
  );
};
