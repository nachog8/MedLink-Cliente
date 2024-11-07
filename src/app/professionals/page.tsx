'use client';
import Image from 'next/image';
import { listDocts } from '@/data/list-docts';
import { SelectSpecialty } from '@/components/professionals/select-specialty';
import { useState, useMemo } from 'react';
import { DoctorCard } from '@/components/professionals/card-doctor';

export default function Page() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = useMemo(() => {
    if (!selectedSpecialty || selectedSpecialty === 'Otros') {
      return listDocts.filter((doctor) =>
        searchTerm
          ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
          : true
      );
    }

    return listDocts.filter((doctor) => {
      const matchesSpecialty = selectedSpecialty
        ? doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
        : true;

      const matchesSearch = searchTerm
        ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesSpecialty && matchesSearch;
    });
  }, [selectedSpecialty, searchTerm]);

  return (
    <div className="bg-[#fff] text-black">
      <div className="relative">
        <Image
          src="/images/doctors-img.svg"
          width="1295"
          height="404"
          alt="services"
          className="w-full"
        />
        <h2 className="absolute left-[5%] top-[40%] text-4xl font-semibold leading-normal text-[#1745E8] max-md:top-[20%] max-md:text-2xl">
          Conoce nuestros <br className="mt-4" /> Doctores
        </h2>
      </div>
      <div className="container mx-auto mb-8 mt-8 flex flex-col gap-8">
        <div className="flex items-center gap-4 max-lg:justify-center">
          <SelectSpecialty onSpecialtyChange={setSelectedSpecialty} />
          <input
            type="text"
            className="w-[200px] rounded-sm border bg-white px-4 py-1"
            placeholder="Buscar doctor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {filteredDoctors.map((doctor, idx) => (
            <DoctorCard key={idx} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
