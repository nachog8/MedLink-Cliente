import Image from 'next/image';
import Link from 'next/link';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  img: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link
      href={`/professional/${doctor.id}`}
      className="flex flex-col items-center gap-2 rounded-lg shadow-[0px_12px_48px_0px_#0134821A]"
    >
      <div className="flex items-center justify-center rounded-t-lg bg-[#BDE3FF]">
        <Image src={doctor.img} alt={doctor.name} width={400} height={40} />
      </div>
      <div className="flex flex-col gap-4 p-6 text-center">
        <p className="text-xl font-semibold text-[#0234A1]">{doctor.name}</p>
        <span>{doctor.specialty}</span>
      </div>
    </Link>
  );
}
