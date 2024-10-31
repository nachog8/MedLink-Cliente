import Image from 'next/image';

const listDocts = [
  {
    name: 'Dra. Amanda Pozo',
    especialidad: 'Cardiología',
    img: '/images/doctors/docPozo.svg',
  },
  {
    name: 'Dr. Lucas Peña',
    especialidad: 'Nefrología',
    img: '/images/doctors/docPeña.svg',
  },
  {
    name: 'Dr. Mario Estevez',
    especialidad: 'Traumatólogo',
    img: '/images/doctors/docEstevez.svg',
  },
  {
    name: 'Dra. Melany Villa',
    especialidad: 'Pediatría',
    img: '/images/doctors/docVilla.svg',
  },
  {
    name: 'Dr. Angel Passini',
    especialidad: 'Dermatología',
    img: '/images/doctors/docPassini.svg',
  },
  {
    name: 'Dra. Amanda Pozo',
    especialidad: 'Neumología',
    img: '/images/doctors/docPozo.svg',
  },
];
export default function Doctors() {
  return (
    <>
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
          <h3 className="ml-5 w-fit border-b-[1px] border-[#1745E8] text-[#1745E8]">
            Especialidades de nuestros profesionales
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {listDocts.map((item, position) => (
              <div
                key={position}
                className="flex flex-col items-center gap-2 rounded-lg shadow-[0px_12px_48px_0px_#0134821A]"
              >
                <div className="flex items-center justify-center bg-[#BDE3FF]">
                  <img src={item.img} alt={item.name} height={'40px'} />
                </div>
                <div className="flex flex-col gap-4 p-6 text-center">
                  <p className="text-xl font-semibold text-[#0234A1]">
                    {item.name}
                  </p>
                  <span>{item.especialidad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
