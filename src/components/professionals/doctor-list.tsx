'use client';

import { Button } from '../ui/button';
import DoctorCard from './card-doctor';
import { UserDoctor } from '@/interfaces/auth';
import { useState } from 'react';

interface DoctorsListProps {
  doctors: UserDoctor[];
}

export default function DoctorsList({ doctors }: DoctorsListProps) {
  const [displayCount, setDisplayCount] = useState(10);
  const hasMore = displayCount < doctors.length;
  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, doctors.length));
  };

  return (
    <div className="space-y-8">
      <div className="container mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.slice(0, displayCount).map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctorId={doctor.id}
            title={
              doctor.firstName && doctor.lastName
                ? `Dr. ${doctor.firstName} ${doctor.lastName}`
                : ''
            }
            subtitle={'Especialista'}
            imageUrl={`${process.env.NEXT_PUBLIC_URL_BASE_IMAGES || 'http://localhost:8081'}${doctor.avatar}`}
            stats={doctor.specialization[0]}
          />
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button onClick={handleShowMore} className="w-80 p-8">
            Mostrar más
          </Button>
        </div>
      )}
    </div>
  );
}
