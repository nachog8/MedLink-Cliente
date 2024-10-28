import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Header />

      <Link
        href="/"
        className="my-5 ml-10 flex h-[107px] w-[219px] items-center"
      >
        <Image
          src="/images/icons/Logo.svg"
          alt="Logo of the project"
          width={219}
          height={107}
        />
      </Link>

      <div className="relative mb-14 flex flex-col items-center justify-center">
        <Image
          src="/images/Hero.jpg"
          className="relative h-[400px] w-full object-cover"
          alt="Hero image"
          width={1366}
          height={400}
        />
        <div className="absolute top-[155px] flex flex-col items-center text-center">
          <h1 className="mb-20 text-[56px] font-light text-white">
            Toma de exámenes
          </h1>
          <p className="text-base font-normal text-white">
            Nos preocupamos de brindar el mejor servicio
          </p>
        </div>
      </div>

      <article className="mb-40 flex items-center justify-center gap-6 max-lg:mb-20 max-lg:flex-col">
        <div className="flex rounded-[4px] border border-solid border-[#0000002D] max-lg:flex-col">
          <Image
            src="/images/DoctorTyping.svg"
            className="rounded-[4px] max-lg:h-[300px] max-lg:w-[400px] max-lg:object-cover"
            alt="Doctor typing on a notebook keyboard"
            width={250}
            height={375}
          />
          <div className="flex flex-col pl-4 pr-[110px] pt-4 max-lg:pb-4">
            <h2 className="mb-2 text-xl font-medium text-[#212529]">
              Historial médico
            </h2>
            <p className="mb-4 text-base font-normal text-[#212529]">
              Ver detalles del historial médico
            </p>
            <button className="h-[38px] w-[109px] rounded-[4px] bg-[#0D6EFD] px-3 py-[6px] text-center text-white">
              Ver historial
            </button>
          </div>
        </div>

        <div className="flex rounded-[4px] border border-solid border-[#0000002D] max-lg:flex-col">
          <Image
            src="/images/DoctorSealing.svg"
            className="rounded-[4px] max-lg:h-[300px] max-lg:w-full max-lg:object-cover"
            alt="Doctor typing on a notebook keyboard"
            width={250}
            height={375}
          />
          <div className="flex flex-col pl-4 pr-[110px] pt-4 max-lg:pb-4">
            <h2 className="mb-2 text-xl font-medium text-[#212529]">
              Exámenes
            </h2>
            <p className="mb-4 text-base font-normal text-[#212529]">
              Ver resultados de exámenes realizados
            </p>
            <button className="h-[38px] w-[127px] rounded-[4px] bg-[#0D6EFD] px-3 py-[6px] text-center text-white">
              Ver exámenes
            </button>
          </div>
        </div>
      </article>

      <footer className="bg-[#950DFC]">
        <article className="mb-16 ml-40 flex gap-10 pt-10 max-lg:ml-8">
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-medium text-white">Servicios</h3>
            <Link href="" className="text-base font-normal text-white">
              Consultas médicas
            </Link>
            <Link href="" className="text-base font-normal text-white">
              Exámenes médicos
            </Link>
            <Link href="" className="text-base font-normal text-white">
              Resultados exámenes
            </Link>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-medium text-white">Contacto</h3>
            <p className="text-base font-normal text-white">+569 251531851</p>
            <p className="text-base font-normal text-white">
              contacto@centrocousin.cl
            </p>
          </div>
        </article>

        <p className="pb-4 text-center text-[13px] font-normal text-white">
          ©Centro médico Cousin todos los derechos reservados
        </p>
      </footer>
    </>
  );
};

export default Home;