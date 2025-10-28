
import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-400">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-bold text-white">Nexus AI</span>
    </div>
);


const Footer: React.FC = () => {
  const sections = {
    'Soluciones': ['Noticias', 'Consultoría IA', 'Automatización', 'Contacto'],
    'Recursos': ['Blog', 'Estudios de Caso', 'Whitepapers', 'Sobre Nosotros'],
    'Legal': ['Privacidad', 'Términos', 'Cookies']
  };

  return (
    <footer id="footer" className="bg-[#121212] border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm text-gray-400">
              Analizando el futuro de la inteligencia artificial, la ciencia y la tecnología.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Soluciones</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {sections.Soluciones.map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                   {sections.Recursos.map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                   {sections.Legal.map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Nexus AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
