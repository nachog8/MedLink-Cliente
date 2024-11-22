import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { FullScreenLoader } from '@/components/loading';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import MedicationCard from '@/components/dashboard/patient/card-active-medications';
import { cookies } from 'next/headers';
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
  // console.log(data);
  return (
    <main className="container mx-auto space-y-5 py-20 font-poppins">
      <div className="grid justify-items-center gap-5 lg:grid-cols-3 lg:justify-items-start">
        <CardProfile {...data} />
        <div className="grid w-full gap-5 lg:col-span-2">
          <ClinicalHistoryCard
            allergiesData={data.allergiesData}
            familyInheritanceData={data.familyInheritance}
            pathologicalData={data.pathologicalData}
            noPathologicalData={data.nonPathologicalData}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <MedicalDocList documents={data.documents} />
            <MedicationCard medications={data.medications} />
          </div>
        </div>
      </div>
    </main>
  );
}
