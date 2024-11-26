'use client';

import { User, UserDoctor } from '@/interfaces/auth';

import AuthorizationPreview from '@/components/other/message-authorization-preview';
import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import MedicationCard from '@/components/dashboard/patient/card-active-medications';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function Page() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();

  const isDoctor = (profile: User): profile is UserDoctor =>
    profile.role === 'Doctor';

  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    if (profile && isDoctor(profile) && profile.patients?.includes(id)) {
      if (!visitedProfile || visitedProfile.id !== id) {
        loadVisitedProfile(id, 'patient');
      }
      return;
    }
    if (profile?.id === id) {
      clearVisitedProfile();
      return;
    }

    clearVisitedProfile();
  }, [id, profile, visitedProfile, loadVisitedProfile, clearVisitedProfile]);

  // Renderizado condicional: acceso no autorizado
  if (
    !id ||
    (typeof id === 'string' &&
      profile?.id !== id &&
      profile &&
      isDoctor(profile) &&
      !profile.patients?.includes(id))
  ) {
    return <AuthorizationPreview />;
  }

  return (
    <section className="container mx-auto space-y-5 py-20 font-poppins">
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
    </section>
  );
}
