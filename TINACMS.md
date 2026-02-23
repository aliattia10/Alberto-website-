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

## Tina live: share the editor via ngrok

You can expose your local Tina dev server so someone can edit content from a public URL (e.g. on a phone or from another place).

1. **Start the dev server with Tina** (in the project folder):
   ```bash
   npm run dev:tina
   ```
   Or use `npm run dev:live` (same command).

2. **In a second terminal**, start ngrok pointing at the Vite port:
   ```bash
   npx ngrok http 5173
   ```
   Or install ngrok and run: `ngrok http 5173`.

3. **Use the URLs ngrok prints** (e.g. `https://abc123.ngrok-free.app`):
   - **Site:** `https://<your-ngrok-url>/`
   - **Editor:** `https://<your-ngrok-url>/admin`

The project is set up so that one tunnel to port **5173** is enough: the admin and GraphQL requests use relative URLs and Vite proxies them to the Tina server (4001). Edits still save to `public/content/site.json` on your machine; the other person is editing your local content through the tunnel.

**Note:** If you regenerate Tina’s client (`tina/__generated__/client.ts`) and the admin stops working over ngrok, set the client `url` back to `'/graphql'` (relative) instead of `'http://localhost:4001/graphql'`.

## Tina live on Render (preview environment)

Render can host a **preview** instance where the site and Tina admin run together. That gives you a stable URL for editing without running your laptop.

1. **Create a Web Service** (not a static site) so you can run the dev server.
2. **Build command:** `npm install`
3. **Start command:** `npm run dev:live` (or `npm run dev:tina`)
4. **Environment:** Set `HOST=0.0.0.0`. Render sets `PORT` automatically; the `dev:live` script passes it to Vite (`vite --port ${PORT:-5173}`), so the preview will listen on Render’s port.
5. **Persistent disk (optional):** If you want edits to survive restarts, add a persistent disk and point your content (e.g. `public/content`) to that path, or rely on Git (commit from the Render shell or a separate flow).

**Limitation:** Render free tier may sleep the service; the “live” editor URL will only work while the instance is awake. For always-on editing with auth, use [TinaCloud](https://app.tina.io) and keep Netlify/Render for static builds.

## Using TinaCloud (recommended for production editing)

TinaCloud gives you **always-on editing** on your deployed site (e.g. Netlify): editors open `https://yoursite.com/admin` and sign in with GitHub; changes are written to your repo. No need to run ngrok or keep a dev server open.

### 1. Create a TinaCloud project

1. Go to **[app.tina.io](https://app.tina.io)** and sign in with GitHub.
2. **Create a project** and connect your **GitHub repo** (the one that hosts this site).
3. In the project:
   - **Overview** tab → copy your **Client ID**.
   - **Tokens** tab → create a **Read-only token** and copy it.
4. Under **Site URL(s)** add your production URL (e.g. `https://albertcarmona.es`) and local (e.g. `http://localhost:5173`).
5. (Optional) **Media** tab → **Sync Media** to import existing images into Tina’s media manager.

### 2. Add environment variables

Copy `.env.example` to `.env` and set:

```bash
TINA_CLIENT_ID=your-client-id-from-overview
TINA_TOKEN=your-read-only-token
TINA_BRANCH=main
```

Keep `.env` out of Git (it’s in `.gitignore`). For **local** use, this is enough.

### 3. Set env vars in production (Netlify)

So the **admin on the live site** can talk to TinaCloud:

1. Netlify → **Site configuration** → **Environment variables**.
2. Add:
   - `TINA_CLIENT_ID` = your Client ID  
   - `TINA_TOKEN` = your Read-only token  
   - `TINA_BRANCH` = `main` (or your default branch)

Redeploy after saving. Then open `https://your-site.netlify.app/admin` (or your custom domain `/admin`); you should get the TinaCloud sign-in and editing.

### 4. Regenerate the client (after first-time setup)

After setting the env vars, run once:

```bash
npm run dev:tina
```

Tina will regenerate the client to use TinaCloud when `TINA_CLIENT_ID` and `TINA_TOKEN` are set. Without them, the project stays in **local-only** mode (no TinaCloud).

### Summary

- **No TinaCloud:** Don’t set `TINA_CLIENT_ID` / `TINA_TOKEN`; use `npm run dev:tina` locally and edit at `http://localhost:5173/admin`.
- **With TinaCloud:** Set the three env vars locally and in Netlify; run `npm run dev:tina` once to regenerate; then use `https://yoursite.com/admin` for editing with GitHub auth.

## Troubleshooting

- **“Collection not found” or schema errors:** Run `npm run dev:tina` again so Tina can regenerate the schema.
- **Edits not showing:** Refresh the browser; the app loads `site.json` on page load.
- **Admin page blank:** Ensure you ran `npm run dev:tina` (not only `npm run dev`) so the Tina server and admin assets are available.
