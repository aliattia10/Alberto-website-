
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/images/image-2.jpeg" 
          alt="Albert Carmona Directo" 
          className="w-full h-full object-cover grayscale brightness-50 scale-105 transition-transform duration-[20s] hover:scale-100"
        />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_85%)] z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-reveal">
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.6em] uppercase mb-6 block text-[#8B7355]">Desde Granada · Flamenco Contemporáneo</span>
        <h1 className="font-serif text-7xl md:text-[10rem] mb-6 tracking-tight leading-none italic">
          Albert <span className="gold-gradient italic font-bold">Carmona</span>
        </h1>
        <p className="font-sans text-sm md:text-xl font-light tracking-[0.4em] uppercase mb-12 opacity-60 max-w-2xl mx-auto leading-relaxed">
          Raíz flamenca. Sonido contemporáneo.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <a 
            href="https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-[#8B7355] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute inset-0 w-full h-full border border-[#8B7355] translate-x-0 translate-y-0"></div>
            <span className="relative z-10 text-black font-sans font-bold uppercase tracking-widest text-xs">Escuchar en Spotify</span>
          </a>
          
          <a 
            href="#contact"
            className="font-sans text-xs font-bold uppercase tracking-[0.3em] hover:text-[#8B7355] transition-colors flex items-center gap-3 group"
          >
            Información 
            <span className="w-12 h-px bg-[#8B7355]/40 group-hover:w-16 transition-all duration-300"></span>
          </a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://www.instagram.com/albertcarmonaoficial?igsh=MTRscG9hODRja2U0cA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8B7355] transition-all duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://www.tiktok.com/@albertcarmonaoficial?_r=1&_t=ZN-92gdvZEm4YA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8B7355] transition-all duration-300 transform hover:scale-110"
            title="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
          <a 
            href="https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8B7355] transition-all duration-300 transform hover:scale-110"
            title="Spotify"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5a5.5 5.5 0 0 1 8 0"/><path d="M7 15a7.5 7.5 0 0 1 10 0"/><path d="M9 10a3.5 3.5 0 0 1 6 0"/></svg>
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
