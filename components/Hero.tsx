
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://picsum.photos/seed/tech/1920/1080"
      >
        {/* Find a royalty free video, e.g. from pexels.com */}
        <source src="https://videos.pexels.com/video-files/8570384/8570384-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight">
          El Futuro es Ahora: <br/> Noticias de <span className="gradient-text">IA, Ciencia y Tecnología</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-300">
          Su portal de confianza para las últimas innovaciones y análisis profundos que están moldeando nuestro mañana.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#noticias" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white button-gradient rounded-md shadow-lg transition-transform transform hover:scale-105">
            Explorar Noticias
          </a>
           <a href="#servicios" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-800/50 border border-gray-700 rounded-md backdrop-blur-sm hover:bg-gray-700/70 transition-colors">
            Nuestros Servicios <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
