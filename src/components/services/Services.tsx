import { Stethoscope, Clock, Ambulance, Calendar } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: 'Atención Médica',
    description: 'Profesionales altamente calificados para cuidar tu salud.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Guardias 24/7',
    description: 'Atención de emergencias las 24 horas, todos los días.',
  },
  {
    icon: <Ambulance className="h-8 w-8" />,
    title: 'Emergencias',
    description: 'Servicio de ambulancia y atención de urgencias.',
  },
];

export default function Services() {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Brindamos atención médica integral con los más altos estándares de calidad
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            <div className="text-blue-600 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}