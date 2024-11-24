import CardListPatients from '@/components/dashboard/professional/card-list-patients';
import CardMedicalProfessional from '@/components/dashboard/professional/card-tabs';
import ProfileCard from '@/components/dashboard/professional/card-profile';

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
        <div className="m-10 mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row">
          {/* <div className="lg:col-span-2"> */}
          <CardMedicalProfessional />
          {/* </div> */}
          <CardListPatients />
        </div>
      </div>
    </div>
  );
}
