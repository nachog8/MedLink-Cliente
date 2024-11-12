import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { ClinicalSummary } from '@/components/dashboard/patient/card-clinical-result';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import { PersonalInfoCard } from '@/components/dashboard/dashboard-shared/personal-information';
import { documents } from '@/data/dashboard-pacient';

export default function Page() {
  return (
    <main className="container mx-auto space-y-5 py-20 font-poppins">
      <div className="grid justify-items-center gap-5 lg:grid-cols-3 lg:justify-items-start">
        <CardProfile
        // firstName="blanca"
        // lastName="barreto"
        // age={40}
        // location="Corrientes, Capital"
        // bio="Comprometida con el seguimiento de mi bienestar..."
        // avatarUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&fit=crop"
        />
        <div className="w-full lg:col-span-2">
          <ClinicalHistoryCard />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <PersonalInfoCard />
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
        <MedicalDocList documents={documents} />
      </div>
    </main>
  );
}
