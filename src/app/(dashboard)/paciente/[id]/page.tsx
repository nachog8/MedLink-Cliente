import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import { calculateAge } from '@/lib/calculate-age';
import { data, documents } from '@/data/dashboard-pacient';

export default function Page() {
  return (
    <main className="container mx-auto space-y-5 py-20 font-poppins">
      <div className="grid justify-items-center gap-5 lg:grid-cols-3 lg:justify-items-start">
        <CardProfile
          firstName={data.firstName}
          lastName={data.lastName}
          age={+calculateAge(data.dateOfBirth)}
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
            familyInheritance={data.familyInheritance}
            pathologicalData={data.pathologicalData}
          />
          <MedicalDocList documents={documents} />
        </div>
      </div>
    </main>
  );
}
