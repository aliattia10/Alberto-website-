
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800", 
      caption: "El Pulso",
      desc: "Escena y Sombra" 
    },
    { 
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", 
      caption: "La Voz",
      desc: "Micro y Quejío" 
    },
    { 
      url: "https://images.unsplash.com/photo-1550186082-670cdd0445b7?auto=format&fit=crop&q=80&w=800", 
      caption: "El Detalle",
      desc: "Oro y Piel" 
    },
    { 
      url: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800", 
      caption: "Directo",
      desc: "Madera y Alma" 
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-[#050505]">
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="font-serif text-6xl italic leading-none">Mirada <br/> <span className="gold-gradient">Cercana.</span></h2>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gray-500 max-w-xs text-right">
            Una colección visual de la estética y el sentimiento que define a Albert Carmona.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group shadow-2xl">
              <img 
                src={img.url} 
                alt={img.caption}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
                <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#C5A059] mb-3">{img.caption}</span>
                <span className="font-serif text-2xl italic text-white text-center border-t border-[#C5A059]/30 pt-4">{img.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
