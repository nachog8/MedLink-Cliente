import DashboardCard from '@/components/list-docs/DashboardCard';
import { User } from 'lucide-react';

const doctors = [
  { name: 'Dr. Eduardo Gomez', specialties: 'Cardiología, Neurología', imageUrl: '/images/doctor.jpg' },
  { name: 'Dr. Analia Carmona', specialties: 'Dermatología, Estética', imageUrl: '/images/analia.jpg' },
  { name: 'Dr. Emilia Gonzales', specialties: 'Pediatría, Inmunología', imageUrl: '/images/Emilia.jpg' },
  { name: 'Dr. Daniel Toledo', specialties: 'Ortopedia, Traumatología', imageUrl: '/images/Daniel.jpg' },
  { name: 'Dr. Sara Fernandez', specialties: 'Cirugía General, Oncología', imageUrl: '/images/Sara.jpg' },
  { name: 'Dr. Cristina Perez', specialties: 'Psiquiatría, Psicología', imageUrl: '/images/cristina.jpg' },

];

const DoctorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('/images/fondo1.jpg')" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 mx-auto max-w-screen-xl">
        {/* Tarjetas */}
        {doctors.map((doctor, index) => (
          <DashboardCard
            key={index}
            title={doctor.name} // Usar el nombre del médico
            subtitle="Especialista"
            stats={[ 
              { value: doctor.specialties }, // Especialidades del médico
            ]}
            icon={<User className="text-gray-500" />}
            imageUrl={doctor.imageUrl} // Usar la imagen correspondiente de cada médico
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
