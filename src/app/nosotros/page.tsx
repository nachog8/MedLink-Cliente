import { Card, CardContent } from '@/components/ui/card';

import CardDeveloper from '@/components/other/card-developers';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { teamMembers } from '@/data/abouts';

const Page = () => {
  return (
    <section
      className="min-h-screen px-6 py-24 font-poppins"
      aria-labelledby="about-us-title"
    >
      <Card className="mx-auto max-w-7xl p-4 lg:p-24">
        <CardContent>
          <picture className="flex justify-center">
            <Image
              alt="programadores-about"
              src={'/images/programadores.png'}
              width={626}
              height={430}
            />
          </picture>
          <header className="text-center">
            <h1
              id="about-us-title"
              className="flex items-center justify-center gap-2 text-lg font-extrabold text-gray-800 md:text-3xl"
            >
              <Users className="h-8 w-8 text-blue-400 md:h-12 md:w-12" />
              Nuestro Equipo
            </h1>
            <p className="mt-4 text-sm text-gray-600 md:text-lg">
              Conoce a las personas que hacen posible este proyecto.
            </p>
            <div className="mx-auto h-1 w-36 rounded-full bg-blue-400"></div>
          </header>
        </CardContent>
      </Card>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <CardDeveloper
            key={index}
            avatarSrc={member.avatarSrc}
            description={member.description}
            name={member.name}
            role={member.role}
            skills={member.skills}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
