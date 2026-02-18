import React from 'react';
import type { SiteContent } from '../types';

const defaultSocials = {
  instagram: 'https://www.instagram.com/albertcarmonaoficial?igsh=MTRscG9hODRja2U0cA==',
  tiktok: 'https://www.tiktok.com/@albertcarmonaoficial?_r=1&_t=ZN-92gdvZEm4YA',
  youtube: 'https://youtube.com/@albertcarmonaoficial?si=hqVoVFQaTl1qSHPw',
  spotify: 'https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA'
};

const icons = {
  Instagram: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  TikTok: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
  YouTube: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>,
  Spotify: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5a5.5 5.5 0 0 1 8 0"/><path d="M7 15a7.5 7.5 0 0 1 10 0"/><path d="M9 10a3.5 3.5 0 0 1 6 0"/></svg>
};

const socialLinks: { name: keyof typeof icons; key: keyof typeof defaultSocials }[] = [
  { name: 'Instagram', key: 'instagram' },
  { name: 'TikTok', key: 'tiktok' },
  { name: 'YouTube', key: 'youtube' },
  { name: 'Spotify', key: 'spotify' }
];

interface SocialsProps {
  content?: SiteContent['socials'] | null;
  objectId?: string;
}

const Socials: React.FC<SocialsProps> = ({ content, objectId }) => {
  const s = { ...defaultSocials, ...content };
  return (
    <div className="fixed right-6 bottom-12 z-40 flex flex-col gap-8 items-center md:right-10" {...(objectId && { 'data-sb-object-id': objectId })}>
      <div className="flex flex-col gap-6">
        {socialLinks.map(({ name, key }) => (
          <a key={name} href={s[key]} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#762C26] transition-all duration-300 transform hover:-translate-x-2 active:scale-95 bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-[#762C26]/30" title={name} {...(objectId && { 'data-sb-field-path': `socials.${key}` })}>
            {icons[name]}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-[#762C26]/60 to-[#762C26]/60 mt-4"></div>
    </div>
  );
};

export default Socials;
