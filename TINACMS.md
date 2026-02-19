# TinaCMS – Visual editor for this site

This project uses [TinaCMS](https://tina.io) so your client can edit content in a **Wix-style visual editor** (forms + live preview). Content is stored in **`public/content/site.json`** and stays in your Git repo.

## What can be edited

- **Hero:** tagline, title, subtitle, buttons, Spotify URL, vertical text  
- **About:** two paragraphs, image path, Sello, Esencia  
- **Music:** Spotify embed URL, link text and URL  
- **Gallery:** heading, intro, and each item (image URL, caption, description)  
- **Contact:** management, press, and main email  
- **Socials:** Instagram, TikTok, YouTube, Spotify URLs  
- **Footer:** copyright name, privacy/terms labels, location  

All of this is driven by **`public/content/site.json`**. Edits in Tina save to that file; commit and push to deploy.

## Run the site with the visual editor (local)

1. **Install dependencies** (if you haven’t):
   ```bash
   npm install
   ```

2. **Start the dev server with Tina:**
   ```bash
   npm run dev:tina
   ```
   This starts the Tina backend and Vite. It can take a moment the first time (Tina generates the schema).

3. **Open the site and editor:**
   - **Site:** http://localhost:5173  
   - **Editor:** http://localhost:5173/admin  
   Or use the **“Edit”** link in the footer to open the editor.

4. **Edit content** in the Tina sidebar/forms. Changes are written to `public/content/site.json`. Refresh the main window to see updates (or use live preview if configured).

5. **Commit and push** the updated `site.json` (and any new images under `public/images`) to deploy to Netlify.

## Run without the editor (plain dev)

```bash
npm run dev
```

Then open http://localhost:5173 . Content is still loaded from `public/content/site.json`.

## Production build

```bash
npm run build
```

Tina is **not** required for the build. The site fetches `/content/site.json` at runtime; that file is copied from `public/` into `dist/` by Vite.

## Optional: TinaCloud (hosted preview + auth)

For a hosted editing experience (e.g. shareable preview links, GitHub-based auth), you can connect [TinaCloud](https://app.tina.io). Set `clientId`, `token`, and `branch` in `tina/config.ts` and add the env vars. Local editing works without TinaCloud.

## Troubleshooting

- **“Collection not found” or schema errors:** Run `npm run dev:tina` again so Tina can regenerate the schema.
- **Edits not showing:** Refresh the browser; the app loads `site.json` on page load.
- **Admin page blank:** Ensure you ran `npm run dev:tina` (not only `npm run dev`) so the Tina server and admin assets are available.
