import { defineConfig } from 'tinacms';

// TinaCloud: set TINA_CLIENT_ID, TINA_TOKEN, TINA_BRANCH in .env (see .env.example)
const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.NETLIFY_HEAD ||
  process.env.HEAD ||
  'main';
const clientId = process.env.TINA_CLIENT_ID ?? null;
const token = process.env.TINA_TOKEN ?? null;

export default defineConfig({
  branch,
  clientId,
  token,
  schema: {
    collections: [
      {
        name: 'site',
        label: 'Site content',
        path: 'public/content',
        format: 'json',
        match: { include: 'site' },
        ui: {
          allowedActions: { create: false, delete: false, createNestedFolder: false },
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            fields: [
              { type: 'string', name: 'tagline', label: 'Tagline' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'titleHighlight', label: 'Title highlight' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              { type: 'string', name: 'spotifyCta', label: 'Spotify CTA text' },
              { type: 'string', name: 'infoCta', label: 'Info CTA text' },
              { type: 'string', name: 'spotifyUrl', label: 'Spotify URL', ui: { description: 'Full Spotify artist or track URL' } },
              { type: 'string', name: 'verticalText', label: 'Vertical decoration text' },
            ],
          },
          {
            type: 'object',
            name: 'about',
            label: 'About',
            fields: [
              { type: 'string', name: 'paragraph1', label: 'Paragraph 1', ui: { component: 'textarea' } },
              { type: 'string', name: 'paragraph2', label: 'Paragraph 2', ui: { component: 'textarea' } },
              { type: 'string', name: 'image', label: 'Image path', ui: { description: 'e.g. /images/image-3.jpeg' } },
              { type: 'string', name: 'sello', label: 'Sello' },
              { type: 'string', name: 'esencia', label: 'Esencia' },
            ],
          },
          {
            type: 'object',
            name: 'music',
            label: 'Music',
            fields: [
              { type: 'string', name: 'spotifyEmbedUrl', label: 'Spotify embed URL' },
              { type: 'string', name: 'spotifyLinkText', label: 'Link text' },
              { type: 'string', name: 'spotifyLinkUrl', label: 'Spotify link URL' },
            ],
          },
          {
            type: 'object',
            name: 'gallery',
            label: 'Gallery',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'headingHighlight', label: 'Heading highlight' },
              { type: 'string', name: 'intro', label: 'Intro', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'items',
                label: 'Gallery items',
                list: true,
                fields: [
                  { type: 'string', name: 'url', label: 'Image URL' },
                  { type: 'string', name: 'caption', label: 'Caption' },
                  { type: 'string', name: 'desc', label: 'Description' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact',
            fields: [
              { type: 'string', name: 'managementEmail', label: 'Management email' },
              { type: 'string', name: 'pressEmail', label: 'Press email' },
              { type: 'string', name: 'mainEmail', label: 'Main contact email' },
            ],
          },
          {
            type: 'object',
            name: 'socials',
            label: 'Social links',
            fields: [
              { type: 'string', name: 'instagram', label: 'Instagram URL' },
              { type: 'string', name: 'tiktok', label: 'TikTok URL' },
              { type: 'string', name: 'youtube', label: 'YouTube URL' },
              { type: 'string', name: 'spotify', label: 'Spotify URL' },
            ],
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [
              { type: 'string', name: 'copyrightName', label: 'Copyright name' },
              { type: 'string', name: 'privacyLabel', label: 'Privacy link label' },
              { type: 'string', name: 'termsLabel', label: 'Terms link label' },
              { type: 'string', name: 'location', label: 'Location text' },
            ],
          },
        ],
      },
    ],
  },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'images',
    },
  },
});
