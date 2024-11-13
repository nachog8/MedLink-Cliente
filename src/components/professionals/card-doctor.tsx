import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon, UserPlus, MessageSquare } from 'lucide-react';
import Image from 'next/image';

interface DoctorCardProps {
  title: string;
  subtitle: string;
  stats: { value: string | number }[]; // Solo los valores, sin etiquetas
  icon: React.ReactElement<LucideIcon>;
  imageUrl: string;
}

const DoctorCard = ({ title, subtitle, stats, imageUrl }: DoctorCardProps) => {
  return (
    <Card className="rounded-xl p-6 shadow-lg w-80 mx-auto relative overflow-visible bg-gradient-to-tr mb-20"> {/* Se añadió mb-20 para margen inferior */}
      {/* Contenedor con sombra para la imagen */}
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white rounded-xl shadow-2xl overflow-hidden">
        <Image 
          height={300}
          width={300}
          src={imageUrl} 
          alt="Profile Image" 
          className="w-full h-full object-cover"
        />
      </div>

      <CardContent className="mt-40 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>

        {/* Mostrar solo los valores de las especialidades */}
        <div className="flex justify-center my-4 text-center">
          <p className="text-sm text-gray-600">{stats[0]?.value}</p> {/* Solo mostramos el valor de las especialidades */}
        </div>

        {/* Botones de acción con íconos */}
        <div className="flex gap-4 justify-center mt-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Perfil
          </button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Mensaje
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
