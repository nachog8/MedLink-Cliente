'use client';
// TODO: Es necesario que sea "use client", revisar eso para mejorar y evitar renderizar del lado del clientes

import { FormContact } from '@/components/form/form-contact';
import { Mapbox } from '@/components/mapbox/mapbox';

export default function Page() {
  return (
    <>
      <div className="m-auto mt-16 max-w-[1295px] bg-[#fff] font-poppins text-black max-xl:w-[95%]">
        <div className="relative">
          {/* TODO-1: El image deberia ser manejado con image de next no con el comun*/}
          {/* TODO-2: La imagen si va a ser un banner deberia de ocupar todo el ancho, sugiero sacarlo afuera, la relacion de aspecto n oes el correcto */}
          <img src="/images/contact-img.svg" alt="services" />
          <h2 className="absolute right-[5%] top-[40%] text-4xl font-semibold leading-normal text-[#1745E8] max-md:top-[20%] max-md:text-2xl">
            Contáctanos
          </h2>
        </div>
        <div className="mb-8 mt-8 flex gap-8 max-md:flex-wrap">
          <div className="flex w-3/4 flex-col justify-between gap-4 p-4 max-md:w-full max-md:p-2">
            <div className="">
              <h2 className="text-2xl font-semibold text-[#101828]">
                Ponte en contacto
              </h2>
              <p className="text-[#667085]">
                A nuestro equipo le encantaría conocerte.
              </p>
            </div>
            <div>
              <FormContact />
            </div>
          </div>
          <div className="w-full p-2">
            {/* TODO: El componente "Mapbox" se le puede pasar direcciones? como convierto las direcciones en coordenadas? Manejar eso */}
            {/* <Mapbox
              height={100}
              ubication={[-34.5750938, -58.4240719]}
              direction={'Sanatorio de la Trinidad -Palermo'}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
