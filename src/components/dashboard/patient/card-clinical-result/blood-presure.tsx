import { Activity } from 'lucide-react';
import { BloodPressureTrend } from '@/interfaces/auth';
import { InfoItem } from './info-item';
import { cn } from '@/lib/utils';

interface BloodPressureProps {
  status?: string;
}

export function BloodPressure({ status }: BloodPressureProps) {
  const statusEnum = Object.values(BloodPressureTrend).includes(
    status as BloodPressureTrend
  )
    ? (status as BloodPressureTrend)
    : null;

  const getStatusColor = (status: string | null): string => {
    if (!status) return 'text-gray-500';
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

  const getDisplayStatus = (status: string | null): string => {
    if (!status) return 'N/A';
    switch (status) {
      case BloodPressureTrend.NORMAL:
        return 'NORMAL';
      case BloodPressureTrend.RISING:
        return 'ALTO';
      case BloodPressureTrend.FALLING:
        return 'BAJO';
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
