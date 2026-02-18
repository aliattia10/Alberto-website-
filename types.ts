export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  desc: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Site content loaded from public/content/site.json for Netlify Visual Editor */
export interface SiteContent {
  type?: string;
  hero?: {
    tagline: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    spotifyCta: string;
    infoCta: string;
    spotifyUrl: string;
    verticalText: string;
  };
  about?: {
    paragraph1: string;
    paragraph2: string;
    image: string;
    sello: string;
    esencia: string;
  };
  music?: {
    spotifyEmbedUrl: string;
    spotifyLinkText: string;
    spotifyLinkUrl: string;
  };
  gallery?: {
    heading: string;
    headingHighlight: string;
    intro: string;
    items: GalleryItem[];
  };
  contact?: {
    managementEmail: string;
    pressEmail: string;
    mainEmail: string;
  };
  socials?: {
    instagram: string;
    tiktok: string;
    youtube: string;
    spotify: string;
  };
  footer?: {
    copyrightName: string;
    privacyLabel: string;
    termsLabel: string;
    location: string;
  };
}
