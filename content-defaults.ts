import type { SiteContent } from "./types";

/** Default content used when /content/site.json is not available (e.g. first load or offline) */
export const defaultSiteContent: SiteContent = {
  hero: {
    tagline: "Desde Granada · Flamenco Contemporáneo",
    title: "Albert",
    titleHighlight: "Carmona",
    subtitle: "Raíz flamenca. Sonido contemporáneo.",
    spotifyCta: "Escuchar en Spotify",
    infoCta: "Información",
    spotifyUrl: "https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA",
    verticalText: "La pureza del quejío"
  },
  about: {
    paragraph1: "Nacido y criado en Andalucía.",
    paragraph2: "Granada-España. Copyright, Alberto Carmona. ∀C Sin muchas palabras. .... sin etiquetas. ∀C°",
    image: "/images/image-3.jpeg",
    sello: "Granada, Andalucía",
    esencia: "Flamenco Urbano"
  },
  music: {
    spotifyEmbedUrl: "https://open.spotify.com/embed/artist/4b7LJ1fXdYyjk4exh9jogf?utm_source=generator&theme=0",
    spotifyLinkText: "Seguir en Spotify +",
    spotifyLinkUrl: "https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf"
  },
  gallery: {
    heading: "Mirada",
    headingHighlight: "Cercana.",
    intro: "Una colección visual de la estética y el sentimiento que define a Albert Carmona.",
    items: [
      { url: "/images/image-1.jpeg", caption: "El Pulso", desc: "Escena y Sombra" },
      { url: "/images/image-3.jpeg", caption: "La Voz", desc: "Micro y Quejío" },
      { url: "/images/image-2.jpeg", caption: "El Detalle", desc: "Oro y Piel" },
      { url: "/images/image-1.jpeg", caption: "Directo", desc: "Madera y Alma" }
    ]
  },
  contact: {
    managementEmail: "management@albertcarmona.es",
    pressEmail: "contact@albertcarmona.es",
    mainEmail: "contact@albertcarmona.es"
  },
  socials: {
    instagram: "https://www.instagram.com/albertcarmonaoficial?igsh=MTRscG9hODRja2U0cA==",
    tiktok: "https://www.tiktok.com/@albertcarmonaoficial?_r=1&_t=ZN-92gdvZEm4YA",
    youtube: "https://youtube.com/@albertcarmonaoficial?si=hqVoVFQaTl1qSHPw",
    spotify: "https://open.spotify.com/artist/4b7LJ1fXdYyjk4exh9jogf?si=F-aPtFK7R5eWnMiO7pvOEA"
  },
  footer: {
    copyrightName: "Albert Carmona",
    privacyLabel: "Privacidad",
    termsLabel: "Términos",
    location: "Granada, Andalucía"
  }
};
