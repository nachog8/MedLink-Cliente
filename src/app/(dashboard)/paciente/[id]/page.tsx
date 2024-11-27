'use client';

import { User, UserDoctor, UserPatient } from '@/interfaces/auth';
import { useEffect, useState } from 'react';

import AuthorizationPreview from '@/components/other/message-authorization-preview';
import { CardProfile } from '@/components/dashboard/patient/card-profile/card-profile';
import ClinicalHistoryCard from '@/components/dashboard/patient/card-clinical-history';
import { MedicalDocList } from '@/components/dashboard/patient/card-doc-list';
import MedicationCard from '@/components/dashboard/patient/card-active-medications';
import { ProfileError } from '@/components/other/profile-error';
import { useAuth } from '@/context/auth-context';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function Page() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();

  const [error, setError] = useState<boolean | null>(false);

  const isDoctor = (profile: User): profile is UserDoctor =>
    profile.role === 'Doctor';

  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    const loadProfile = async () => {
      try {
        if (profile && isDoctor(profile)) {
          const isPatientInList = profile.patients?.some(
            (patient: UserPatient) => patient.id === id
          );
          if (isPatientInList) {
            if (!visitedProfile || visitedProfile.id !== id) {
              await loadVisitedProfile(id, 'patient');
            }
            return;
          }
        }
        if (profile?.id === id) {
          clearVisitedProfile();
          return;
        }
        clearVisitedProfile();
      } catch (err) {
        setError(true);
      }
    };
    loadProfile();
  }, [id, profile, visitedProfile, loadVisitedProfile, clearVisitedProfile]);

  if (error) {
    return <ProfileError />;
  }

  if (
    !id ||
    (typeof id === 'string' &&
      profile?.id !== id &&
      profile &&
      isDoctor(profile) &&
      !profile.patients?.some((patient: UserPatient) => patient.id === id))
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
