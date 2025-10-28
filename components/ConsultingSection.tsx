
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ConsultingSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#121212] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <img 
              className="rounded-lg shadow-2xl w-full"
              src="https://picsum.photos/seed/consulting/800/600" 
              alt="Team discussing AI solutions"
            />
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 to-transparent rounded-lg"></div>
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
              Potencie su Negocio con <span className="gradient-text">Inteligencia Artificial</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Ofrecemos asesoramiento experto en IA y soluciones de automatización personalizadas para ayudar a las pequeñas y medianas empresas a innovar, optimizar procesos y crecer de manera sostenible.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-300">
                  <strong className="text-white">Análisis y Estrategia de IA:</strong> Identificamos oportunidades clave para implementar IA en su negocio.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-300">
                  <strong className="text-white">Automatización de Procesos:</strong> Ahorre tiempo y reduzca costos automatizando tareas repetitivas.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-300">
                  <strong className="text-white">Desarrollo de Soluciones a Medida:</strong> Creamos herramientas de IA adaptadas a sus necesidades específicas.
                </span>
              </li>
            </ul>
             <div className="mt-10">
                <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white button-gradient rounded-md shadow-lg transition-transform transform hover:scale-105">
                    Agendar una Consulta Gratuita
                    <ArrowRightIcon />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
