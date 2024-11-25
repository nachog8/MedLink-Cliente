import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import MedicationCard from '@/components/dashboard/patient/card-active-medications';

export default async function Page() {
  return (
    <main className="container mx-auto space-y-5 py-20 font-poppins">
      <div className="grid justify-items-center gap-5 lg:grid-cols-3 lg:justify-items-start">
        <CardProfile />
        <div className="grid w-full gap-5 lg:col-span-2">
          <ClinicalHistoryCard />
          <div className="grid gap-5 lg:grid-cols-2">
            <MedicalDocList />
            <MedicationCard />
          </div>
        </div>
      </div>
    </main>
  );
}
