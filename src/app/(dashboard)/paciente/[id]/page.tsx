import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { FullScreenLoader } from '@/components/loading';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import { calculateAge } from '@/lib/calculate-age';
import { cookies } from 'next/headers';
import { documents } from '@/data/dashboard-pacient';
import { patientService } from '@/services/patient-service';

const { getPatient } = patientService;
interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token?.value) {
    return <FullScreenLoader />;
  }

  const { payload: data } = await getPatient(params.id, token.value);
  console.log(calculateAge(data.dateOfBirth));
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
          <ClinicalHistoryCard
            allergiesData={data.allergiesData}
            familyInheritanceData={data.familyInheritance}
            pathologicalData={data.pathologicalData}
          />
          <MedicalDocList documents={documents} />
        </div>
      </div>
    </main>
  );
}
