import React from 'react';
import type { SiteContent } from '../types';

const defaultHero = {
  tagline: 'Desde Granada · Flamenco Contemporáneo',
  title: 'Albert',
  titleHighlight: 'Carmona',
  subtitle: 'Raíz flamenca. Sonido contemporáneo.',
  spotifyCta: 'Escuchar en Spotify',
  infoCta: 'Información',
  spotifyUrl: 'https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA',
  verticalText: 'La pureza del quejío'
};

const defaultSocials = {
  instagram: 'https://www.instagram.com/albertcarmonaoficial?igsh=MTRscG9hODRja2U0cA==',
  tiktok: 'https://www.tiktok.com/@albertcarmonaoficial?_r=1&_t=ZN-92gdvZEm4YA',
  youtube: 'https://youtube.com/@albertcarmonaoficial?si=hqVoVFQaTl1qSHPw',
  spotify: 'https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA'
};

interface HeroProps {
  content?: SiteContent['hero'] | null;
  socials?: SiteContent['socials'] | null;
  objectId?: string;
}

const Hero: React.FC<HeroProps> = ({ content, socials, objectId }) => {
  const h = { ...defaultHero, ...content };
  const s = { ...defaultSocials, ...socials };
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/images/image-2.jpeg"
          alt="Albert Carmona Directo"
          className="w-full h-full object-cover grayscale brightness-50 scale-105 transition-transform duration-[20s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_85%)] z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-reveal" {...(objectId && { 'data-sb-object-id': objectId })}>
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.6em] uppercase mb-6 block text-[#762C26]" {...(objectId && { 'data-sb-field-path': 'hero.tagline' })}>{h.tagline}</span>
        <h1 className="font-serif text-7xl md:text-[10rem] mb-6 tracking-tight leading-none italic">
          <span {...(objectId && { 'data-sb-field-path': 'hero.title' })}>{h.title}</span>{' '}
          <span className="gold-gradient italic font-bold" {...(objectId && { 'data-sb-field-path': 'hero.titleHighlight' })}>{h.titleHighlight}</span>
        </h1>
        <p className="font-sans text-sm md:text-xl font-light tracking-[0.4em] uppercase mb-12 opacity-60 max-w-2xl mx-auto leading-relaxed" {...(objectId && { 'data-sb-field-path': 'hero.subtitle' })}>{h.subtitle}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <a href={h.spotifyUrl} target="_blank" rel="noopener noreferrer" className="group relative px-12 py-5 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full bg-[#762C26] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute inset-0 w-full h-full border border-[#762C26] translate-x-0 translate-y-0"></div>
            <span className="relative z-10 text-black font-sans font-bold uppercase tracking-widest text-xs" {...(objectId && { 'data-sb-field-path': 'hero.spotifyCta' })}>{h.spotifyCta}</span>
          </a>
          <a href="#contact" className="font-sans text-xs font-bold uppercase tracking-[0.3em] hover:text-[#762C26] transition-colors flex items-center gap-3 group">
            <span {...(objectId && { 'data-sb-field-path': 'hero.infoCta' })}>{h.infoCta}</span>
            <span className="w-12 h-px bg-[#762C26]/40 group-hover:w-16 transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href={s.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#762C26] transition-all duration-300 transform hover:scale-110" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href={s.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#762C26] transition-all duration-300 transform hover:scale-110" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
          <a href={s.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#762C26] transition-all duration-300 transform hover:scale-110" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
          <a href={s.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#762C26] transition-all duration-300 transform hover:scale-110" title="Spotify">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5a5.5 5.5 0 0 1 8 0"/><path d="M7 15a7.5 7.5 0 0 1 10 0"/><path d="M9 10a3.5 3.5 0 0 1 6 0"/></svg>
          </a>
        </div>
      </div>

      <div className="absolute left-12 bottom-12 hidden lg:block overflow-hidden">
        <p className="font-sans text-[10px] tracking-[0.8em] uppercase vertical-text opacity-30 select-none animate-pulse" style={{ writingMode: 'vertical-rl' }} {...(objectId && { 'data-sb-field-path': 'hero.verticalText' })}>{h.verticalText}</p>
      </div>
    </section>
  );
};

export default Hero;
