import { Github, Instagram, Linkedin, Users } from 'lucide-react';

import CardDeveloper from '@/components/other/card-developers';

const teamMembers = [
  {
    avatarSrc: '',
    description:
      'Soy diseñador gráfico y hace un año comencé a explorar el mundo de la programación, ampliando mis habilidades en el desarrollo web.',
    skills: ['JavaScript', 'React', 'Next.js', 'Node.js'],
    socialLinks: [
      {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/bruno-catterino',
      },
      {
        icon: Github,
        url: 'https://github.com/BrunoCatterino',
      },
      {
        icon: Instagram,
        url: 'https://www.instagram.com/brunocatterino',
      },
    ],
    name: 'Bruno Emanuel Catterino',
    role: 'Desarrollador Front-End',
  },
  {
    avatarSrc:
      'https://media.licdn.com/dms/image/v2/C4D03AQHfWt4fd2TT5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663974778457?e=1738195200&v=beta&t=4LvPPRG9OVuvoewWig6zWqyOSSIM5G9jwbmG431DvJ8',
    description:
      'Soy un apasionado desarrollador de software con un conjunto diverso de habilidades y una sólida experiencia en informática. Mi enfoque principal es crear soluciones innovadoras y eficientes para abordar problemas de manera efectiva. Mis habilidades clave incluyen liderazgo, empatía, trabajo en equipo y capacidad analítica.',
    skills: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'TYPESCRIPT',
      'PYTHON',
      'NODEJS',
      'DJANGO',
      'GIT',
      'MYSQL',
      'SQL SERVER',
      'MONGODB',
      'SCRUM',
      'API REST',
      'MVC',
      'JSON',
      'REACT',
      'AWS',
    ],
    socialLinks: [
      {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/saulbelbey/',
      },
      {
        icon: Github,
        url: 'https://github.com/sbelbey',
      },
      {
        icon: Instagram,
        url: 'https://www.instagram.com/sbelbey/',
      },
    ],
    name: 'Belbey Saúl Iván',
    role: 'Backend Developer',
  },
  {
    avatarSrc:
      'https://media.licdn.com/dms/image/v2/D4D03AQEXdhYruhC-cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709860201608?e=1738195200&v=beta&t=g-6073R-dnshgREuy7ME53ekJ3gEqcO3m00eFZKBN_w',
    description:
      'Soy un apasionado desarrollador enfocado en el front-end, con ganas de expandir mis conocimientos hacia el desarrollo full-stack. Como estudiante avanzado de Ingeniería en Sistemas, combino una sólida formación técnica con habilidades prácticas para crear interfaces atractivas, intuitivas y funcionales. Mi enfoque está en diseñar soluciones innovadoras y eficientes, destacando por mi liderazgo, empatía, trabajo en equipo ycapacidad analítica.',
    skills: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'NEXTJS',
      'TYPESCRIPT',
      'PYTHON',
      'NODEJS',
      'DJANGO',
      'GIT',
      'MYSQL',
      'MONGODB',
      'SCRUM',
      'API REST',
      'REACT',
    ],
    socialLinks: [
      {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/guridi-ignacio/',
      },
      {
        icon: Github,
        url: 'https://github.com/nachog8',
      },
      {
        icon: Instagram,
        url: 'https://www.instagram.com/nachog8/',
      },
    ],
    name: 'Ignacio Javier Guridi',
    role: 'Frontend Developer',
  },
  {
    avatarSrc:
      'https://ui-avatars.com/api/?name=Jose+Maria+Candia&background=random',
    description: '',
    skills: [],
    socialLinks: [
      {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/jose-maria-candia-527bb3202',
      },
      {
        icon: Github,
        url: 'https://github.com/joss-dev',
      },
      {
        icon: Instagram,
        url: '/',
      },
    ],
    name: 'Jose Maria Candia',
    role: 'Back End',
  },
  {
    avatarSrc:
      'https://www.shutterstock.com/image-vector/vector-halloween-faces-nightmare-before-260nw-2047758854.jpg',
    description:
      'Ingeniero electromecánico iniciando mi carrera como desarrollador web front end, con entusiasmo por aprender y convertirme en full stack.',
    skills: [
      'SASS',
      'NODEJS',
      'TAILWIND',
      'MUI',
      'BOOSTRAP',
      'NEXTJS',
      'TYPESCRIPT',
      'SHADCN',
      'DOCKER',
      'GIT',
      'FIREBASE',
      'MONGODB',
      'SQLLITE',
      'MYSQL',
      'POSTGRESQL',
      'NEXTUI',
      'OAUTH',
      'ZOD',
      'API REST',
    ],
    socialLinks: [
      {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/santiago-emmanuel-barreto',
      },
      {
        icon: Github,
        url: 'https://github.com/JamesBarr456',
      },
      {
        icon: Instagram,
        url: 'https://www.instagram.com/barretoemmanuel',
      },
    ],
    name: 'Emmanuel Santiago Barreto',
    role: 'Front End',
  },
];

const Page = () => {
  return (
    <section
      className="min-h-screen bg-[url('/images/fondo1.jpg')] from-gray-100 to-blue-50 bg-cover bg-center px-6 py-24 font-poppins"
      aria-labelledby="about-us-title"
    >
      <header className="mb-36 text-center">
        <h1
          id="about-us-title"
          className="flex items-center justify-center gap-2 text-4xl font-extrabold text-gray-800"
        >
          <Users size={50} className="text-blue-400" />
          Nuestro Equipo
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Conoce a las personas que hacen posible este proyecto.
        </p>
        <div className="mx-auto mt-8 h-1 w-36 rounded-full bg-blue-400"></div>
      </header>

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
