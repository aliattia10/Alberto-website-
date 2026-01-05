
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#0A0A0A] flex flex-col items-center">
      <div className="max-w-4xl w-full px-6 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8 italic">Booking <span className="text-[#B8860B]">&</span> Contacto</h2>
        <p className="font-sans text-gray-400 text-lg md:text-xl mb-16 font-light">
          Para contrataciones, colaboraciones artísticas o prensa, por favor ponte en contacto con nuestra oficina técnica en Granada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-[#0D0D0D] p-12 border border-white/5">
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs text-[#B8860B] mb-4">Management</h4>
            <p className="font-serif text-2xl italic mb-1">Marta Soler</p>
            <p className="font-sans text-sm text-gray-500">management@albertcarmona.com</p>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs text-[#B8860B] mb-4">Prensa</h4>
            <p className="font-serif text-2xl italic mb-1">Comunicación</p>
            <p className="font-sans text-sm text-gray-500">press@albertcarmona.com</p>
          </div>
          <div className="md:col-span-2 pt-8 border-t border-white/5 text-center">
             <a 
              href="mailto:hola@albertcarmona.com"
              className="inline-block text-3xl md:text-5xl font-serif italic text-white hover:text-[#B8860B] transition-colors"
            >
              hola@albertcarmona.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
