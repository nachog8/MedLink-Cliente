'use client';

import CardListPatients from '@/components/dashboard/professional/card-list-patients';
import CardMedicalProfessional from '@/components/dashboard/professional/card-tabs';
import ProfileCard from '@/components/dashboard/professional/card-profile';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProfile } from '@/context/profile-context';

export default function DoctorProfile() {
  const { id } = useParams();
  const { profile } = useAuth();
  const { visitedProfile, loadVisitedProfile, clearVisitedProfile } =
    useProfile();

  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    if (profile?.id === id) {
      clearVisitedProfile();
    } else if (!visitedProfile || visitedProfile.id !== id) {
      loadVisitedProfile(id, 'doctor');
    }
  }, [
    id,
    profile?.id,
    visitedProfile,
    loadVisitedProfile,
    clearVisitedProfile,
  ]);

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
          <CardMedicalProfessional />

          <CardListPatients />
        </div>
      </div>
    </div>
  );
}
