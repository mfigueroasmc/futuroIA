
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ConsultingSection from './components/ConsultingSection';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0D0D0D] text-gray-300 antialiased">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <ConsultingSection />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
