"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const specialties = [
  {
    name: "Cardiología",
    description: "Diagnóstico y tratamiento de enfermedades del corazón.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pediatría",
    description: "Cuidado integral de la salud de niños y adolescentes.",
    image:
      "https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Traumatología",
    description:
      "Tratamiento de lesiones y enfermedades del sistema músculo-esquelético.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Ginecología",
    description: "Atención especializada en salud femenina.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
];

export default function MedicalPage() {
  return (
    <div className="bg-gray-80">
      {/* Banner */}
      <section className="relative bg-blue-500 group">
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src="/images/home.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Bienvenidos a MedLink</h1>
          <p className="mt-4 text-lg md:text-xl">
            Donde la atención médica de calidad está al alcance de todos
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <div
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/fondo1.jpg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Atención Compasiva */}
          <section className="container mx-auto my-20 flex flex-col items-start justify-between px-4 lg:flex-row">
            <div className="flex flex-col items-start lg:w-2/3 lg:flex-row">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
                <Image
                  src="/images/paciente.jpg"
                  alt="Doctor with patient"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-black via-transparent opacity-60"></div>
              </div>
              <div className="mt-8 lg:ml-10 lg:mt-0 lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800">
                  Atención compasiva para cada paciente
                </h2>
                <p className="mt-4 text-gray-600">
                  Nos dedicamos a ofrecer atención médica integral, adaptada a
                  las necesidades de cada paciente, con un equipo médico
                  comprometido a brindar apoyo. Ya sea en atención preventiva,
                  tratamiento de enfermedades crónicas o procedimientos
                  especializados, trabajamos para garantizar los mejores
                  resultados.
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <Card className="mt-10 w-full shadow-md lg:ml-10 lg:mt-0 lg:w-1/4 transition-shadow hover:shadow-lg">
  <CardHeader>
    <CardTitle className="rounded-lg bg-blue-500 text-center text-xl text-white">
      Horarios
    </CardTitle>
  </CardHeader>
  <CardContent className="overflow-auto text-gray-600 shadow-md transition-shadow hover:shadow-xl">
    <ul className="space-y-6">
      {[{ day: "Lunes - Viernes:", hours: "9:00 - 17:00" }, { day: "Sábado:", hours: "9:00 - 16:00" }, { day: "Domingo:", hours: "Cerrado" }].map((item, index) => (
        <li key={index} className="flex items-center justify-between">
          <span className="flex-1 font-semibold">{item.day}</span>
          <div className="mx-4 h-6 w-px bg-gray-300"></div>
          <span className="flex-1 text-right font-semibold">{item.hours}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8 text-center">
      <h3 className="text-xl font-bold text-gray-800">¿Necesitás ayuda?</h3>
      <p className="mt-4 text-gray-600">
        Contáctanos para obtener asistencia personalizada.
      </p>
      <Link
        href="/contacto"
        className="mt-6 inline-block rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
      >
        Contacto
      </Link>
    </div>
  </CardContent>
</Card>

          </section>

          {/* Especialidades Médicas */}
          <section className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Especialidades Médicas
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Contamos con especialistas en diversas áreas de la medicina.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600">{specialty.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
