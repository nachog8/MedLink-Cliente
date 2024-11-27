'use client';

import { useEffect, useRef, useState } from 'react';

import { Stethoscope } from 'lucide-react'; // Ejemplo de icono de lucide-react
import { specialties } from '@/data/form-options';

export default function SpecialtiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [duplicatedSpecialties, setDuplicatedSpecialties] =
    useState(specialties);

  // Efecto para duplicar el contenido y crear el efecto infinito
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Desplazar el carrusel hacia la derecha
        carouselRef.current.scrollBy({ left: 1, behavior: 'smooth' });

        // Verificar si el carrusel ha llegado al final
        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          // Si llegó al final, mover el carrusel al principio
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 10); // Cambiar el intervalo si es necesario para velocidad del movimiento

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Especialidades Médicas
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Contamos con especialistas en diversas áreas de la medicina
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          {/* Carrusel */}
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {/* Duplicamos las especialidades para crear el efecto infinito */}
            {[...specialties, ...duplicatedSpecialties].map((specialty) => (
              <div
                key={specialty.value}
                className="w-64 flex-shrink-0 rounded-lg bg-white shadow-lg transition-transform duration-500 hover:scale-105"
              >
                {/* Se puede dejar como sacar lo que más les guste */}
                <div className="relative flex h-48 items-center justify-center rounded-t-lg bg-indigo-100">
                  {/* Icono */}
                  <Stethoscope className="h-16 w-16 text-indigo-500" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {specialty.label}
                  </h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
