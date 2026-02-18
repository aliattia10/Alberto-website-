import React, { useState, useEffect } from 'react';
import type { SiteContent } from './types';
import { defaultSiteContent } from './content-defaults';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';

const CONTENT_OBJECT_ID = 'public/content/site.json';

function mergeContent(loaded: Partial<SiteContent> | null): SiteContent {
  if (!loaded) return defaultSiteContent;
  return {
    hero: { ...defaultSiteContent.hero, ...loaded.hero },
    about: { ...defaultSiteContent.about, ...loaded.about },
    music: { ...defaultSiteContent.music, ...loaded.music },
    gallery: { ...defaultSiteContent.gallery, ...loaded.gallery },
    contact: { ...defaultSiteContent.contact, ...loaded.contact },
    socials: { ...defaultSiteContent.socials, ...loaded.socials },
    footer: { ...defaultSiteContent.footer, ...loaded.footer }
  } as SiteContent;
}

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    fetch('/content/site.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setContent(mergeContent(data)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#C5A059] selection:text-black" data-sb-object-id={CONTENT_OBJECT_ID}>
      <Header scrolled={scrolled} />
      <main>
        <Hero content={content.hero} socials={content.socials} objectId={CONTENT_OBJECT_ID} />
        <About content={content.about} objectId={CONTENT_OBJECT_ID} />
        <Music content={content.music} objectId={CONTENT_OBJECT_ID} />
        <Gallery content={content.gallery} objectId={CONTENT_OBJECT_ID} />
        <Contact content={content.contact} objectId={CONTENT_OBJECT_ID} />
      </main>
      <Socials content={content.socials} objectId={CONTENT_OBJECT_ID} />
      <Footer content={content.footer} objectId={CONTENT_OBJECT_ID} />
    </div>
  );
};

export default App;
