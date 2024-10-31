import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history/card-clinical-history';
import { ClinicalSummary } from '@/components/dashboard/patient/card-clinical-result/clinical-summary';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list/card-medical-doc-list';
import MedicationActiveCard from '@/components/dashboard/patient/card-active-medications/cart-active-medications';
import { documents } from '@/data/dashboard-pacient';

export default function Page() {
  return (
    <main className="container mx-auto my-10 space-y-5 px-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
      <div className="space-y-5 lg:col-span-1">
        <CardProfile />
        <ClinicalSummary
          height="175 cm"
          weight="70 kg"
          bloodType="O+"
          bloodPressure="normal"
          isDonor={true}
          hasAllergies={false}
          hasChronicDiseases={false}
          hasHealthyLifestyle={true}
        />
      </div>
      <div className="lg:col-span-1">
        <ClinicalHistoryCard />
      </div>
      <div className="space-y-5 lg:col-span-1">
        <MedicationActiveCard />
        <MedicalDocList documents={documents} />
      </div>
    </main>
  );
}
