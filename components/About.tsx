import React from 'react';
import type { SiteContent } from '../types';

const defaultAbout = {
  paragraph1: 'Nacido y criado en Andalucía.',
  paragraph2: 'Granada-España. Copyright, Alberto Carmona. ∀C Sin muchas palabras. .... sin etiquetas. ∀C°',
  image: '/images/image-3.jpeg',
  sello: 'Granada, Andalucía',
  esencia: 'Flamenco Urbano'
};

interface AboutProps {
  content?: SiteContent['about'] | null;
  objectId?: string;
}

const About: React.FC<AboutProps> = ({ content, objectId }) => {
  const c = { ...defaultAbout, ...content };
  return (
    <section id="about" className="py-32 md:py-56 px-6 md:px-12 bg-[#050505]" {...(objectId && { 'data-sb-object-id': objectId })}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[3/4] overflow-hidden relative shadow-2xl">
            <img src={c.image} alt="Estética Urbana Flamenca" className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" {...(objectId && { 'data-sb-field-path': 'about.image' })} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 border-l border-b border-[#762C26]/30 w-32 h-32 -z-10"></div>
        </div>
        <div className="lg:col-span-7 lg:pl-16">
          <div className="font-sans text-lg text-gray-400 space-y-6 leading-relaxed font-light max-w-2xl">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#762C26] first-letter:mr-4 first-letter:float-left first-letter:leading-none" {...(objectId && { 'data-sb-field-path': 'about.paragraph1' })}>{c.paragraph1}</p>
            <p {...(objectId && { 'data-sb-field-path': 'about.paragraph2' })}>{c.paragraph2}</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#762C26] mb-2">Sello</p>
              <p className="font-serif text-xl italic text-white/90" {...(objectId && { 'data-sb-field-path': 'about.sello' })}>{c.sello}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#762C26] mb-2">Esencia</p>
              <p className="font-serif text-xl italic text-white/90" {...(objectId && { 'data-sb-field-path': 'about.esencia' })}>{c.esencia}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
