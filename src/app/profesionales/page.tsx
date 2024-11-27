import DoctorsList from '@/components/professionals/doctor-list';
import { Users } from 'lucide-react';
import { professionalService } from '@/services/professional-service';

const { getAllProfessional } = professionalService;
export default async function Page() {
  let doctors;

  try {
    doctors = await getAllProfessional();
  } catch (e) {
    console.error(e);
  }

  return (
    <section
      className="px-6 py-24 font-poppins"
      aria-labelledby="doctors-title"
    >
      <header className="text-center">
        <h1
          id="doctors-title"
          className="flex items-center justify-center gap-2 text-lg font-extrabold text-gray-800 md:text-3xl"
        >
          <Users className="h-8 w-8 text-blue-400 md:h-12 md:w-12" />
          Nuestro Equipo Médico
        </h1>
        <p className="mt-4 text-sm text-gray-600 md:text-lg">
          Conoce a nuestros profesionales de la salud altamente calificados.
        </p>
        <div className="mx-auto h-1 w-36 rounded-full bg-blue-400"></div>
      </header>

      <DoctorsList doctors={doctors || []} />
    </section>
  );
}
