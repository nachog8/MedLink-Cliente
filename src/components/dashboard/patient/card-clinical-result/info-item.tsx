import { LucideIcon } from 'lucide-react';

interface DataItemProps {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}

export function InfoItem({ icon: Icon, label, value = '-' }: DataItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-primary/10 p-2">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
