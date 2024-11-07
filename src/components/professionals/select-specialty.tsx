'use client';
import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { specialties } from '@/data/specialties';

interface SelectSpecialtyProps {
  onSpecialtyChange: (specialty: string) => void;
}

export function SelectSpecialty({ onSpecialtyChange }: SelectSpecialtyProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    setValue(newValue);
    setOpen(false);

    const selectedSpecialty = specialties.find(
      (specialty) => specialty.value === newValue
    )?.label;

    onSpecialtyChange(selectedSpecialty || '');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? specialties.find((specialty) => specialty.value === value)?.label
            : 'Seleccionar especialidad'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar Especialidad" />
          <CommandList>
            <CommandEmpty>Especialidad no encontrada.</CommandEmpty>
            <CommandGroup>
              {specialties.map((specialty) => (
                <CommandItem
                  key={specialty.value}
                  value={specialty.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === specialty.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {specialty.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
