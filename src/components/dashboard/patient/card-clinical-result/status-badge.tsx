import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  value?: boolean;
  labels?: { true: string; false: string };
  variants?: { true: string; false: string };
  invertColors?: boolean;
}

export function StatusBadge({
  value,
  labels = { true: 'Sí', false: 'No' },
  variants = { true: 'bg-green-600', false: 'bg-red-600' },
  invertColors = false,
}: StatusBadgeProps) {
  const getColorClass = () => {
    if (value === undefined) {
      return 'bg-gray-400'; // Color para "N/A"
    }
    if (invertColors) {
      return value ? variants.false : variants.true;
    }
    return value ? variants.true : variants.false;
  };

  return (
    <Badge className={cn('mt-1 text-white', getColorClass())}>
      {value === undefined ? '-' : value ? labels.true : labels.false}
    </Badge>
  );
}
