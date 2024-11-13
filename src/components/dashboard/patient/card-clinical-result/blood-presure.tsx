import { Activity } from 'lucide-react';
import { BloodPressureTrend } from '@/interfaces/auth';
import { InfoItem } from './info-item';
import { cn } from '@/lib/utils';

interface BloodPressureProps {
  status?: string;
}

export function BloodPressure({ status }: BloodPressureProps) {
  // Verifica si status tiene un valor válido
  const statusEnum =
    status && BloodPressureTrend[status as keyof typeof BloodPressureTrend]
      ? BloodPressureTrend[status as keyof typeof BloodPressureTrend]
      : null;

  const getStatusColor = (status: BloodPressureTrend | null): string => {
    if (!status) return 'text-gray-500'; // Color para "N/A" si no hay status
    switch (status) {
      case BloodPressureTrend.NORMAL:
        return 'text-green-500';
      case BloodPressureTrend.RISING:
      case BloodPressureTrend.FALLING:
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getDisplayStatus = (status: BloodPressureTrend | null): string => {
    if (!status) return 'N/A';
    switch (status) {
      case BloodPressureTrend.NORMAL:
        return 'Normal';
      case BloodPressureTrend.RISING:
        return 'Rising';
      case BloodPressureTrend.FALLING:
        return 'Falling';
      default:
        return 'Unknown';
    }
  };

  const color = getStatusColor(statusEnum);
  const displayStatus = getDisplayStatus(statusEnum);

  return (
    <InfoItem
      icon={Activity}
      label="Tendencia de Presión Arterial"
      value={
        <span className={cn('font-semibold', color)}>{displayStatus}</span>
      }
    />
  );
}
