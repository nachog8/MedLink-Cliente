export default function Page() {
  return (
    <>
      <div className="font-Inter flex flex-col items-center text-black">
        <div className="flex h-[250px] w-full max-w-7xl bg-[url('/images/nosotros.png')] bg-cover bg-center">
          <div className="font-Inter flex flex-col gap-4 pl-4 pt-16 text-4xl font-bold text-[#0234a1]">
            <h2>Tu salud, nuestra prioridad.</h2>
            <h2>Descubrí MedLink</h2>
          </div>
        </div>

        <div className="mb-32 flex max-w-6xl flex-col gap-8 px-4 pt-8 text-[16px] font-medium">
          <p>
            En MedLink, nuestra misión es ofrecer atención médica de excelencia,
            centrada en cada paciente, apoyándonos en tecnología avanzada y en
            un enfoque humano y profesional.
          </p>
          <p>
            Nuestro equipo multidisciplinario está compuesto por profesionales
            dedicados y capacitados que se enfocan en brindar cuidados
            personalizados. Trabajamos con la visión de mejorar la calidad de
            vida de nuestros pacientes, abordando sus necesidades de salud de
            manera integral.
          </p>
          <p>
            Nuestras instalaciones modernas están equipadas con tecnología de
            punta y están diseñadas para ofrecer una experiencia cómoda y de
            confianza. En MedLink, nos comprometemos a proporcionar un entorno
            seguro y acogedor donde nuestros pacientes puedan recibir la mejor
            atención médica.
          </p>
          <p>
            Además de los servicios médicos, en MedLink creemos en la prevención
            y en la importancia de educar a nuestros pacientes sobre el cuidado
            de la salud. Ofrecemos programas y recursos que promueven estilos de
            vida saludables, ayudando a prevenir enfermedades y a mejorar el
            bienestar general.
          </p>
          <p className="text-[#0234a1]">
            Bienvenidos a MedLink, un lugar donde su salud y bienestar son
            nuestro compromiso.
          </p>
        </div>
      </div>
    </>
  );
}
