import CardMedicalProfessional from '@/components/dashboard/professional/card-tabs';

import ProfileCard from '@/components/dashboard/professional/card-profile';
import CardListPatients from '@/components/dashboard/professional/card-list-patients';

export default function DoctorProfile() {
  return (
    <div className="relative font-poppins">
      <div
        className="h-[350px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/icons/banner.svg')`,
        }}
      />
      <div className="container mx-auto">
        <ProfileCard />
        <div className="m-10 grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CardMedicalProfessional />
          </div>
          <CardListPatients />
        </div>
      </div>
    </div>
  );
}
