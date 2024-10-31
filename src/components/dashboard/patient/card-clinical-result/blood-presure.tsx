import { Activity } from 'lucide-react';
import { InfoItem } from './info-item';
import { cn } from '@/lib/utils';

interface BloodPressureProps {
  status: 'hipotensión' | 'normal' | 'hipertensión';
}

export function BloodPressure({ status }: BloodPressureProps) {
  const getStatusColor = (status: BloodPressureProps['status']): string => {
    if (status === 'normal') return 'text-green-500';
    return 'text-red-500';
  };

  const color = getStatusColor(status);
  const displayStatus = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <InfoItem
      icon={Activity}
      label=" Tendencia de Presión Arterial"
      value={
        <span className={cn('font-semibold', color)}>{displayStatus}</span>
      }
    />
  );
}
