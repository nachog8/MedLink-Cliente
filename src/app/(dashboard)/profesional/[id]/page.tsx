import LocationsCard from '@/components/dashboard/professional/card-location';
import ProfileCard from '@/components/dashboard/professional/card-profile';

export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <ProfileCard />
          <LocationsCard />
        </div>
      </main>
    </div>
  );
}
