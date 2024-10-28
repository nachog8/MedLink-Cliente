import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t bg-[#950DFC]  to-[#1745E8] p-8 pl-4 pr-4 text-transparent text-white">
      <div className="mb-8 mt-8 flex justify-around max-md:flex-col">
        <div>
            <Link href="/">
            <Image src="/images/icons/Logo.svg" alt="logoFooter" layout="responsive" width={100} height={100} />
            </Link>
        </div>
        <div className="max-md:mt-4">
            <h2 className="font-bold text-white">Recursos</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Política y privacidad{" "}
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Preguntas frecuentes
            </Link>
            <Link href={"/contact"} className="opacity-70  hover:opacity-90">
              Contacto
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          {" "}
          <h2 className="font-bold">Servicios</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"/nosotros"} className="opacity-70  hover:opacity-90">
              Sobre nosotros
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Sucursales
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          <h2 className="font-bold">Social</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"https://github.com"} className="opacity-70  hover:opacity-90">
              Github
            </Link>
            <Link href={"https://www.linkedin.com"} className="opacity-70  hover:opacity-90">
              Linkedin
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          <h2 className="font-bold">¿Necesitás ayuda?</h2>
          <div className="mt-2 flex flex-col gap-2">
            <Link
              href={"https://www.whatsapp.com/"}
              className="flex items-center  gap-2 rounded-lg border-[1px]  border-[#950dfc] bg-gradient-to-t from-[#7d12cf] to-[#06207C] p-6  pb-[0.3rem] pt-[0.3rem] hover:opacity-90"
            >
              <img src="/images/icons/WhatsApp.svg" alt="WhatsApp" />
              WhatsApp
            </Link>
            <Link
              href={"/contact"}
              className="flex items-center  gap-2 rounded-lg border-[1px]  border-[#950dfc] bg-gradient-to-t from-[#7d12cf] to-[#06207C] p-6 pb-[0.3rem] pt-[0.3rem] hover:opacity-90"
            >
              <img src="/images/icons/Help.svg" alt="help" />
              Ayuda
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-[1px]  border-t-[#fff] pt-4">
        <p>Derechos reservados</p>
        <div className="flex items-center  gap-4">
          <Link href={"https://linkedin.com"}>
            <img src="/images/icons/Linkedin.svg" alt="linkedin" />
          </Link>
          <Link href={"https://github.com"}>
            <img src="/images/icons/Github.svg" alt="github" />
          </Link>
        </div>
      </div>
    </footer>
  );
}