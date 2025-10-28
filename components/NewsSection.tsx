
import React from 'react';
import type { Article } from '../types';
import ArrowRightIcon from './icons/ArrowRightIcon';

const newsData: Article[] = [
  {
    id: 1,
    category: 'IA',
    title: 'Gemini 2.5 Pro: El nuevo modelo que redefine la IA conversacional',
    excerpt: 'Google presenta su último avance en modelos de lenguaje, prometiendo una comprensión y generación de texto sin precedentes.',
    imageUrl: 'https://picsum.photos/seed/ai1/600/400',
  },
  {
    id: 2,
    category: 'Ciencia',
    title: 'Descubren un nuevo exoplaneta con potencial para albergar vida',
    excerpt: 'El telescopio James Webb captura imágenes de un planeta rocoso en la zona habitable de su estrella.',
    imageUrl: 'https://picsum.photos/seed/science1/600/400',
  },
  {
    id: 3,
    category: 'Tecnología',
    title: 'La computación cuántica alcanza un hito de 1000 qubits estables',
    excerpt: 'Investigadores logran un avance clave que podría acelerar la llegada de ordenadores cuánticos funcionales.',
    imageUrl: 'https://picsum.photos/seed/tech1/600/400',
  },
];

const CategoryPill: React.FC<{ category: Article['category'] }> = ({ category }) => {
    const colors = {
        IA: 'bg-emerald-900/50 text-emerald-300 border-emerald-700',
        Ciencia: 'bg-sky-900/50 text-sky-300 border-sky-700',
        Tecnología: 'bg-indigo-900/50 text-indigo-300 border-indigo-700'
    }
    return (
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${colors[category]}`}>
            {category}
        </span>
    );
};

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="group relative bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-900/50 transform hover:-translate-y-2">
    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-6">
      <CategoryPill category={article.category} />
      <h3 className="mt-4 text-xl font-bold text-white leading-tight">{article.title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{article.excerpt}</p>
      <a href="#" className="inline-flex items-center mt-6 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
        Leer más <ArrowRightIcon />
      </a>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  return (
    <section id="noticias" className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
            Últimas <span className="gradient-text">Noticias</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Manténgase a la vanguardia con los desarrollos más recientes en IA, ciencia y tecnología.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
