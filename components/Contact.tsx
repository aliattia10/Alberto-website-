import React from 'react';
import type { SiteContent } from '../types';

const defaultContact = {
  managementEmail: 'management@albertcarmona.es',
  pressEmail: 'contact@albertcarmona.es',
  mainEmail: 'contact@albertcarmona.es'
};

interface ContactProps {
  content?: SiteContent['contact'] | null;
  objectId?: string;
}

const Contact: React.FC<ContactProps> = ({ content, objectId }) => {
  const c = { ...defaultContact, ...content };
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#0A0A0A] flex flex-col items-center" {...(objectId && { 'data-sb-object-id': objectId })}>
      <div className="max-w-4xl w-full px-6 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8 italic">Booking <span className="text-[#762C26]">&</span> Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-[#0D0D0D] p-12 border border-white/5">
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs text-[#762C26] mb-4">Management</h4>
            <p className="font-sans text-sm text-gray-500" {...(objectId && { 'data-sb-field-path': 'contact.managementEmail' })}>{c.managementEmail}</p>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs text-[#762C26] mb-4">Prensa</h4>
            <p className="font-sans text-sm text-gray-500" {...(objectId && { 'data-sb-field-path': 'contact.pressEmail' })}>{c.pressEmail}</p>
          </div>
          <div className="md:col-span-2 pt-8 border-t border-white/5 text-center">
            <a href={`mailto:${c.mainEmail}`} className="inline-block text-3xl md:text-5xl font-serif italic text-white hover:text-[#762C26] transition-colors" {...(objectId && { 'data-sb-field-path': 'contact.mainEmail' })}>{c.mainEmail}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
