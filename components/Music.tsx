
import React from 'react';

const Music: React.FC = () => {
  return (
    <section id="music" className="py-32 md:py-56 px-6 md:px-12 bg-[#080808] border-y border-[#8B7355]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#8B7355] mb-4 block">Discografía</span>
            <h2 className="font-serif text-6xl md:text-7xl mb-8 italic">El <br/> <span className="gold-gradient">Sonido.</span></h2>
            <p className="font-sans text-gray-400 font-light leading-relaxed mb-12">
              Luz y Carbón es un viaje sensorial por las calles de Granada. Una producción que captura la esencia del directo con la precisión del estudio contemporáneo.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-[#8B7355]/30 flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-[#8B7355] rounded-full"></div>
              </div>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500">Último lanzamiento disponible</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B5D4A] to-[#8B7355] opacity-10 group-hover:opacity-20 transition duration-1000 blur"></div>
              <div className="relative bg-[#0A0A0A] border border-white/5 rounded-none p-2 shadow-2xl overflow-hidden">
                <iframe 
                  src="https://open.spotify.com/embed/artist/4b7LJ1fXdYyjk4exh9jogf?utm_source=generator&theme=0" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <a 
                href="https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf" 
                target="_blank"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7355] hover:underline"
              >
                Seguir en Spotify +
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Music;
