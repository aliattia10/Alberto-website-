
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-8 flex justify-between items-center ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-md py-6 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col">
        <span className="font-serif text-2xl md:text-3xl tracking-tighter text-white font-bold italic leading-none">
          <span className="text-[#762C26]">∀C®</span>
        </span>
        <span className="font-sans text-[8px] tracking-[0.5em] uppercase text-gray-500 mt-1">Granada</span>
      </div>
      
      <nav className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-sans font-semibold">
        <a href="#about" className="hover:text-[#762C26] transition-colors relative group py-2">
          Sobre él
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#762C26] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#music" className="hover:text-[#762C26] transition-colors relative group py-2">
          Música
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#762C26] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#gallery" className="hover:text-[#762C26] transition-colors relative group py-2">
          Miradas
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#762C26] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="hover:text-[#762C26] transition-colors relative group py-2">
          Booking
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#762C26] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      
      <div className="flex items-center gap-6">
        <button className="hidden md:block px-6 py-2 border border-[#762C26]/40 text-[10px] uppercase tracking-widest text-[#762C26] hover:bg-[#762C26] hover:text-black transition-all">
          Directo
        </button>
        <button className="text-[#762C26] md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
