
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2000" 
          alt="Albert Carmona Directo" 
          className="w-full h-full object-cover grayscale brightness-50 scale-105 transition-transform duration-[20s] hover:scale-100"
        />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_85%)] z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-reveal">
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.6em] uppercase mb-6 block text-[#C5A059]">Desde Granada · Flamenco Contemporáneo</span>
        <h1 className="font-serif text-7xl md:text-[10rem] mb-6 tracking-tight leading-none italic">
          Albert <span className="gold-gradient italic font-bold">Carmona</span>
        </h1>
        <p className="font-sans text-sm md:text-xl font-light tracking-[0.4em] uppercase mb-12 opacity-60 max-w-2xl mx-auto leading-relaxed">
          Raíz flamenca. Sonido contemporáneo.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C5A059] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute inset-0 w-full h-full border border-[#C5A059] translate-x-0 translate-y-0"></div>
            <span className="relative z-10 text-black font-sans font-bold uppercase tracking-widest text-xs">Escuchar en Spotify</span>
          </a>
          
          <a 
            href="#contact"
            className="font-sans text-xs font-bold uppercase tracking-[0.3em] hover:text-[#C5A059] transition-colors flex items-center gap-3 group"
          >
            Contratación 
            <span className="w-12 h-px bg-[#C5A059]/40 group-hover:w-16 transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      {/* Vertical text decoration */}
      <div className="absolute left-12 bottom-12 hidden lg:block overflow-hidden">
        <p className="font-sans text-[10px] tracking-[0.8em] uppercase vertical-text opacity-30 select-none animate-pulse" style={{ writingMode: 'vertical-rl' }}>
          La pureza del quejío
        </p>
      </div>
    </section>
  );
};

export default Hero;
