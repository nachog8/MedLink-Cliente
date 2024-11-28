import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { specialtiesTranslationMap } from '@/data/form-options';
import { translateSpecialization } from '@/lib/translate-data';

interface DoctorCardProps {
  title: string;
  subtitle: string;
  stats: string;
  imageUrl: string;
  doctorId: string;
  tuition: string;
}

const DoctorCard = ({
  doctorId,
  title,
  subtitle,
  stats,
  imageUrl,
  tuition,
}: DoctorCardProps) => {
  return (
    <Card className="relative mx-auto mb-20 flex w-full flex-col overflow-visible rounded-xl bg-gradient-to-tr shadow-lg md:w-80">
      <CardHeader className="absolute left-1/2 top-[-60px] flex h-[200px] w-[200px] -translate-x-1/2 justify-center">
        <Avatar className="mx-auto h-32 w-32 border-4 border-white shadow-lg md:h-40 md:w-40">
          <AvatarImage src={imageUrl} alt={`${title}'s avatar`} />
          <AvatarFallback className="text-4xl">
            {title ? title[0] : 'D'}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="mt-32 flex flex-1 flex-col justify-end p-4">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 md:text-lg">{title}</h3>

          <p className="text-sm text-gray-500">{subtitle}</p>

          <p className="mt-4 flex justify-center text-center">
            <Badge>
              {translateSpecialization(stats, specialtiesTranslationMap)}
            </Badge>
          </p>

          <p className="mt-4 flex justify-center text-center">
            <Badge variant={'outline'}>M.P: {tuition}</Badge>
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={`/profesional/${doctorId}`}>
            <Eye className="mr-2 h-4 w-4" /> Ver Perfil
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
