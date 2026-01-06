
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-56 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[3/4] overflow-hidden relative shadow-2xl">
             <img 
              src="/images/image-3.jpeg" 
              alt="Estética Urbana Flamenca" 
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
            />
            {/* Cinematic overlay for the detail shot (tattoos/hands style) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 border-l border-b border-[#8B7355]/30 w-32 h-32 -z-10"></div>
        </div>
        
        <div className="lg:col-span-7 lg:pl-16">
          <h2 className="font-serif text-5xl md:text-7xl mb-12 italic leading-tight">
            Identidad <br/> <span className="gold-gradient tracking-tight">Granadina.</span>
          </h2>
          
          <div className="font-sans text-lg text-gray-400 space-y-6 leading-relaxed font-light max-w-2xl">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#8B7355] first-letter:mr-4 first-letter:float-left first-letter:leading-none">
              Nacido y criado en Andalucía.
            </p>
            <p>
              Granada-España. Copyright, Alberto Carmona. VC Sin muchas palabras. .... sin etiquetas. VC°
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8B7355] mb-2">Sello</p>
              <p className="font-serif text-xl italic text-white/90">Granada, Andalucía</p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8B7355] mb-2">Esencia</p>
              <p className="font-serif text-xl italic text-white/90">Flamenco Urbano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
