
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="font-serif text-3xl mb-8 italic tracking-tighter">
          Albert <span className="text-[#762C26]">Carmona</span>
        </div>
        
        <div className="flex space-x-12 mb-12">
           <a href="https://www.instagram.com/albertcarmonaoficial?igsh=MTRscG9hODRja2U0cA==" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-[#762C26] transition-colors">Instagram</a>
           <a href="https://www.tiktok.com/@albertcarmonaoficial?_r=1&_t=ZN-92gdvZEm4YA" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-[#762C26] transition-colors">TikTok</a>
           <a href="https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-[#762C26] transition-colors">Spotify</a>
        </div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-gray-600 text-[9px] font-sans uppercase tracking-[0.4em] opacity-40">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Albert Carmona. Todos los derechos reservados.
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-[#762C26] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#762C26] transition-colors">Términos</a>
          </div>
          <div className="mt-4 md:mt-0 italic">
            Granada, Andalucía.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
