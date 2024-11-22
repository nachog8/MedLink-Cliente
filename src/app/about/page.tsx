import { FaLinkedin, FaGithub, FaUsers } from 'react-icons/fa';

const teamMembers = [
  { 
    name: 'Bruno Catterino', 
    role: 'Front End', 
    imageUrl: 'https://ui-avatars.com/api/?name=Bruno+Catterino&background=random',
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
    imageUrl: 'https://ui-avatars.com/api/?name=Ignacio+Guridi&background=random',
    linkedin: 'https://www.linkedin.com/in/guridi-ignacio', 
    github: 'https://github.com/nachog8', 
  },
  { 
    name: 'Jose Maria Candia', 
    role: 'Back End', 
    imageUrl: 'https://ui-avatars.com/api/?name=Jose+Maria+Candia&background=random',
    linkedin: 'https://www.linkedin.com/in/jose-maria-candia-527bb3202', 
    github: 'https://github.com/joss-dev', 
  },
  { 
    name: 'Emmanuel Santiago Barreto', 
    role: 'Front End', 
    imageUrl: 'https://ui-avatars.com/api/?name=Emmanuel+Santiago+Barreto&background=random',
    linkedin: 'https://www.linkedin.com/in/santiago-emmanuel-barreto', 
    github: 'https://github.com/JamesBarr456', 
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-100 to-blue-50 py-24 px-6 bg-[url('/images/fondo1.jpg')] bg-cover bg-center">
      
      <div className="mb-36 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-2">
          <FaUsers size={50} className="text-blue-400" />
          Nuestro Equipo
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Conoce a las personas que hacen posible este proyecto.
        </p>
        <div className="mt-8 h-1 w-36 bg-blue-400 mx-auto rounded-full"></div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-xl rounded-lg p-6 w-72 text-center transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
           
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
              <div className="rounded-full border-4 shadow-lg w-28 h-28 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           
            <div className="mt-16">
              <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>
              
              <div className="mt-4 h-1 w-16 bg-blue-400 mx-auto rounded-full"></div>
              
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  <FaGithub size={24} />
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
