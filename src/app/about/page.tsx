import { Github, Linkedin, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Bruno Catterino',
    role: 'Front End',
    imageUrl:
      'https://ui-avatars.com/api/?name=Bruno+Catterino&background=random',
    linkedin: 'https://www.linkedin.com/in/bruno-catterino',
    github: 'https://github.com/brunocatterino',
  },
  {
    name: 'Saul Belbey',
    role: 'Back End',
    imageUrl: 'https://ui-avatars.com/api/?name=Saul+Belbey&background=random',
    linkedin: 'https://www.linkedin.com/in/saulbelbey',
    github: 'https://github.com/sbelbey',
  },
  {
    name: 'Ignacio Guridi',
    role: 'Front End',
    imageUrl:
      'https://ui-avatars.com/api/?name=Ignacio+Guridi&background=random',
    linkedin: 'https://www.linkedin.com/in/guridi-ignacio',
    github: 'https://github.com/nachog8',
  },
  {
    name: 'Jose Maria Candia',
    role: 'Back End',
    imageUrl:
      'https://ui-avatars.com/api/?name=Jose+Maria+Candia&background=random',
    linkedin: 'https://www.linkedin.com/in/jose-maria-candia-527bb3202',
    github: 'https://github.com/joss-dev',
  },
  {
    name: 'Emmanuel Santiago Barreto',
    role: 'Front End',
    imageUrl:
      'https://ui-avatars.com/api/?name=Emmanuel+Santiago+Barreto&background=random',
    linkedin: 'https://www.linkedin.com/in/santiago-emmanuel-barreto',
    github: 'https://github.com/JamesBarr456',
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[url('/images/fondo1.jpg')] from-gray-100 to-blue-50 bg-cover bg-center px-6 py-24">
      <div className="mb-36 text-center">
        <h1 className="flex items-center justify-center gap-2 text-4xl font-extrabold text-gray-800">
          <Users size={50} className="text-blue-400" />
          Nuestro Equipo
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Conoce a las personas que hacen posible este proyecto.
        </p>
        <div className="mx-auto mt-8 h-1 w-36 rounded-full bg-blue-400"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-72 transform rounded-lg bg-white p-6 text-center shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 transform">
              <div className="h-28 w-28 overflow-hidden rounded-full border-4 shadow-lg">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-400"></div>

              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
