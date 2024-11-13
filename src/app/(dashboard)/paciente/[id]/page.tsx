import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import { calculateAge } from '@/lib/calculate-age';
import { documents } from '@/data/dashboard-pacient';

export default function Page() {
  const data = {
    id: '60d0fe4f5311236168a109ca',
    firstName: 'Blanca',
    lastName: 'Barreto',
    dateOfBirth: '1986-12-03',
    gender: 'FEMALE',
    aboutMe:
      'Paciente femenina de 35 años, activa y saludable, con historial de migrañas y controlada para hipertensión. No fumadora, hábitos alimenticios equilibrados, y realiza ejercicio moderado.',
    email: 'blanca.barreto@example.com',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&fit=crop',
    phone: '1234567890',
    location: 'New York',
    clinicalData: {
      height: 180,
      weight: 75,
      bloodType: 'O+',
      bloodPressureTrend: 'RISING',
      isDonor: true,
      hasAllergies: false,
      hasChronicDiseases: false,
      hasHealthyLifestyle: true,
    },
  };

  return (
    <main className="container mx-auto space-y-5 py-20 font-poppins">
      <div className="grid justify-items-center gap-5 lg:grid-cols-3 lg:justify-items-start">
        <CardProfile
          firstName={data.firstName}
          lastName={data.lastName}
          age={calculateAge(data.dateOfBirth)}
          location={data.location}
          bio={data.aboutMe}
          avatarUrl={data.avatar}
          dateOfBirth={data.dateOfBirth}
          email={data.email}
          gender={data.gender}
          phone={data.phone}
          clinical={data.clinicalData}
        />
        <div className="grid w-full gap-5 lg:col-span-2">
          <ClinicalHistoryCard />
          <MedicalDocList documents={documents} />
        </div>
      </div>
    </main>
  );
}
