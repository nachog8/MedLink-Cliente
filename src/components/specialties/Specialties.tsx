'use client';

import { specialties } from '@/data/form-options';
import { useEffect, useRef, useState } from 'react';
import { Stethoscope } from 'lucide-react'; // Ejemplo de icono de lucide-react

export default function SpecialtiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [duplicatedSpecialties, setDuplicatedSpecialties] = useState(specialties);

  // Efecto para duplicar el contenido y crear el efecto infinito
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Desplazar el carrusel hacia la derecha
        carouselRef.current.scrollBy({ left: 1, behavior: 'smooth' });

        // Verificar si el carrusel ha llegado al final
        if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth) {
          // Si llegó al final, mover el carrusel al principio
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 10); // Cambiar el intervalo si es necesario para velocidad del movimiento

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Especialidades Médicas</h2>
          <p className="mt-4 text-xl text-gray-600">
            Contamos con especialistas en diversas áreas de la medicina
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          {/* Carrusel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {/* Duplicamos las especialidades para crear el efecto infinito */}
            {[...specialties, ...duplicatedSpecialties].map((specialty) => (
              <div
                key={specialty.value}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              >
                {/* Se puede dejar como sacar lo que más les guste */}
                <div className="relative h-48 flex items-center justify-center bg-indigo-100 rounded-t-lg">
                  {/* Icono */}
                  <Stethoscope className="w-16 h-16 text-indigo-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
