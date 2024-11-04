'use client';

import 'react-phone-number-input/style.css';

import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

//TODO: FORM CONTACT YA EXISTE EN EL FOOTER CAMBIAR NOMBRE PARA QUE SEA MAS ORIENTATIVO DE DONDE ES EL FORM
// EL FORMULARIO DEBE SER HECHO CON SHADCN Y DEBE TENER SU SCHEMA DE ZOD CON CONTROL DE ACTIONS CON EL TOAST DE AVISO DE CONFIRMACION
export function FormContact() {
  const router = useRouter();
  const [value, setValue] = useState<string | undefined>(undefined);
  const [openCart, setOpenCart] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setOpenCart(true);
      }}
    >
      <div className="flex justify-between gap-2">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Maria"
            className="block w-full rounded-lg border-[1px] border-[#BCC1CD] p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Gomez"
            className="block w-full rounded-lg border-[1px] border-[#BCC1CD] p-2"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Maria@gmail.com"
          className="block w-full rounded-lg border-[1px] border-[#BCC1CD] p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="tlf">Número celular</label>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          className="block w-full rounded-lg border-[1px] border-[#BCC1CD] p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="comentario">Comentario</label>
        <textarea
          id="comentario"
          placeholder="Dejanos tu comentario"
          className="block h-[120px] max-h-[120px] w-full rounded-lg border-[1px] border-[#BCC1CD] p-2"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="checkbox" required />
        <label htmlFor="checkbox" className="block">
          Estoy de acuerdo con la política de privacidad
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="h-[48px] w-full rounded-lg border-[#950dfc] bg-gradient-to-t from-[#124ccc] to-[#06207C] font-bold text-white hover:opacity-90 max-md:h-[40px]"
        >
          Enviar
        </button>
      </div>
      {openCart && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-2xl">
          <div className="relative flex h-[90%] w-[90%] flex-col items-center gap-8 rounded-lg bg-white p-4 text-center">
            <button
              onClick={() => {
                setOpenCart(false);
                router.refresh();
              }}
              className="absolute right-[2%] top-[2%]"
            >
              <Image src="/close.svg" alt="close" width={40} height={40} />
            </button>
            <div>
              <Image src="/check.svg" alt="check" width={100} height={100} />
            </div>
            <h2 className="text-2xl font-semibold">
              Gracias por ponerte en contacto con nosotros
            </h2>
            <p>
              Tu opinión es muy valiosa para nosotros y nos esforzaremos por
              responderte lo más pronto posible
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
