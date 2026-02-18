import React from 'react';
import type { SiteContent } from '../types';
import type { GalleryItem } from '../types';

const defaultGallery = {
  heading: 'Mirada',
  headingHighlight: 'Cercana.',
  intro: 'Una colección visual de la estética y el sentimiento que define a Albert Carmona.',
  items: [
    { url: '/images/image-1.jpeg', caption: 'El Pulso', desc: 'Escena y Sombra' },
    { url: '/images/image-3.jpeg', caption: 'La Voz', desc: 'Micro y Quejío' },
    { url: '/images/image-2.jpeg', caption: 'El Detalle', desc: 'Oro y Piel' },
    { url: '/images/image-1.jpeg', caption: 'Directo', desc: 'Madera y Alma' }
  ] as GalleryItem[]
};

interface GalleryProps {
  content?: SiteContent['gallery'] | null;
  objectId?: string;
}

const Gallery: React.FC<GalleryProps> = ({ content, objectId }) => {
  const g = { ...defaultGallery, ...content };
  const items = g.items ?? defaultGallery.items;
  return (
    <section id="gallery" className="py-32 bg-[#050505]" {...(objectId && { 'data-sb-object-id': objectId })}>
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="font-serif text-6xl italic leading-none">
            <span {...(objectId && { 'data-sb-field-path': 'gallery.heading' })}>{g.heading}</span> <br/> <span className="gold-gradient" {...(objectId && { 'data-sb-field-path': 'gallery.headingHighlight' })}>{g.headingHighlight}</span>
          </h2>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gray-500 max-w-xs text-right" {...(objectId && { 'data-sb-field-path': 'gallery.intro' })}>{g.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((img, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group shadow-2xl" {...(objectId && { 'data-sb-field-path': `gallery.items.${idx}` })}>
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
                <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#762C26] mb-3" {...(objectId && { 'data-sb-field-path': `gallery.items.${idx}.caption` })}>{img.caption}</span>
                <span className="font-serif text-2xl italic text-white text-center border-t border-[#762C26]/30 pt-4" {...(objectId && { 'data-sb-field-path': `gallery.items.${idx}.desc` })}>{img.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
