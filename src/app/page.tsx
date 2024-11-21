import MedicalCenters from '@/components/medicalCenters/MedicalCenters';
import Services from '@/components/services/Services';
import Specialties from '@/components/specialties/Specialties';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <MedicalCenters />
      <Specialties />
    </div>
  );
}