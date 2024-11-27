import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

import { Button } from '../ui/button';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

interface DoctorCardProps {
  title: string;
  subtitle: string;
  stats: string;
  imageUrl: string;
  doctorId: string;
}

const DoctorCard = ({
  doctorId,
  title,
  subtitle,
  stats,
  imageUrl,
}: DoctorCardProps) => {
  return (
    <Card className="relative mx-auto mb-20 overflow-visible rounded-xl bg-gradient-to-tr p-6 shadow-lg md:w-80">
      {' '}
      <CardHeader className="absolute left-1/2 top-[-60px] flex h-[200px] w-[200px] -translate-x-1/2 justify-center">
        <Avatar className="mx-auto h-40 w-40 border-4 border-white shadow-lg">
          <AvatarImage src={imageUrl} alt={`${title}'s avatar`} />
          <AvatarFallback className="text-4xl">
            {title ? title[0] : 'D'}
          </AvatarFallback>
        </Avatar>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="mt-40 text-center">
        <h3 className="font-semibold text-gray-800 md:text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <div className="my-4 flex justify-center text-center">
          <p className="text-sm text-gray-600">{stats}</p>{' '}
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild>
            <Link href={`/profesional/${doctorId}`}>
              <UserPlus className="h-4 w-4" /> Ver Perfil
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
