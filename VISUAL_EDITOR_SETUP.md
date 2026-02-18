# Netlify Visual Editor (NVE) – Setup & usage

This project is set up so your client can edit the site content visually with **Netlify Visual Editor** (formerly Stackbit). Content is stored in **Git CMS** (a JSON file in the repo) and stays in sync with your Netlify/GitHub pipeline.

## What the client can edit

- **Hero:** tagline, title, subtitle, CTAs, vertical text
- **About:** paragraphs, image path, “Sello” and “Esencia” labels
- **Music:** Spotify embed URL, link text and URL
- **Gallery:** heading, intro, and each image’s caption and description
- **Contact:** management, press, and main email addresses
- **Socials:** Instagram, TikTok, YouTube, Spotify URLs
- **Footer:** copyright name, privacy/terms labels, location

All of this is driven by **`public/content/site.json`**. Edits in the Visual Editor update that file and go through your normal Git/Netlify flow.

## Enable Visual Editor on Netlify

1. **Netlify dashboard**  
   - Open your site (e.g. **albertcarmona.es**).  
   - Go to **Site configuration** (or **Integrations** / **Visual Editor** depending on your Netlify UI).

2. **Enable Visual Editor**  
   - Find **Netlify Visual Editor** and enable it.  
   - Connect the site to the **GitHub** repo if not already.  
   - NVE uses a **preview** branch by default for editor changes; you can change this in settings.

3. **Open the editor**  
   - Use the link Netlify shows (e.g. **Open Visual Editor** or **Edit in Visual Editor**).  
   - Your client logs in with Netlify (or the identity provider you use) and edits content in the visual UI; changes are written to `public/content/site.json` and committed to the preview branch.

4. **Publishing**  
   - When ready, merge the preview branch to `main` (or your production branch). Netlify will build and deploy as usual.

## Run Visual Editor locally (optional)

Useful for testing the editing experience before enabling it on Netlify.

1. **Install dependencies** (includes NVE packages):

   ```bash
   npm install
   ```

2. **Start the Visual Editor dev server** (in one terminal):

   ```bash
   npm run stackbit:dev
   ```

   This starts the Stackbit/NVE UI (often at `http://localhost:8090/_stackbit`).

3. **Start the site** (in another terminal):

   ```bash
   npm run dev
   ```

   NVE will use this dev server as the preview. Edit content in the NVE UI; it writes to `public/content/site.json`. Refreshing the preview shows the updated content (the app loads `/content/site.json` at runtime).

## Content file and build

- **Content path:** `public/content/site.json`  
- **Build:** Vite copies `public/` into `dist/`, so the live site serves `/content/site.json` and the app fetches it on load.  
- **Fallback:** If the fetch fails, the app uses built-in default content so the site still works.

## Requirements (from Netlify docs)

- **Node** v16+ for the framework and NVE.
- **Git:** repo on **GitHub** (or Bitbucket). NVE needs a **working branch** for editor changes (default: `preview`).
- **Content:** Editable content is in files (Git CMS), not hardcoded in components.

## Troubleshooting

- **“Content not updating”:** Ensure `public/content/site.json` exists and is valid JSON. After NVE saves, refresh the preview (or reload the dev server).
- **NVE not opening:** Confirm Visual Editor is enabled for the site in Netlify and the repo is connected. Check Netlify’s [NVE docs](https://docs.netlify.com/visual-editor/get-started/) and [troubleshooting](https://docs.netlify.com/manage/visual-editor/get-started/troubleshoot-visual-editor-setup/).
- **Local `stackbit dev`:** Ensure both `npm run stackbit:dev` and `npm run dev` are running, and the port NVE expects for the preview matches your Vite dev server (usually 5173).
