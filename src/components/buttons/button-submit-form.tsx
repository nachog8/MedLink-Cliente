'use client';

import { Button } from '@/components/ui/button';
import Loading from '../loading/loading';
import { useFormStatus } from 'react-dom';

interface ButtonSubmitProps {
  text: string;
}

export const ButtonForm = ({ text }: ButtonSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loading color="accent" size="sm" /> : text}
    </Button>
  );
};
