import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineStackbitConfig({
  stackbitVersion: "~0.7.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["public/content"],
      models: [
        {
          name: "Site",
          type: "page",
          urlPath: "/",
          filePath: "site.json",
          label: "Site content",
          fields: [
            { name: "hero", type: "object", label: "Hero", fields: [
              { name: "tagline", type: "string" },
              { name: "title", type: "string" },
              { name: "titleHighlight", type: "string" },
              { name: "subtitle", type: "string" },
              { name: "spotifyCta", type: "string" },
              { name: "infoCta", type: "string" },
              { name: "spotifyUrl", type: "string" },
              { name: "verticalText", type: "string" }
            ]},
            { name: "about", type: "object", label: "About", fields: [
              { name: "paragraph1", type: "string" },
              { name: "paragraph2", type: "string" },
              { name: "image", type: "string" },
              { name: "sello", type: "string" },
              { name: "esencia", type: "string" }
            ]},
            { name: "music", type: "object", label: "Music", fields: [
              { name: "spotifyEmbedUrl", type: "string" },
              { name: "spotifyLinkText", type: "string" },
              { name: "spotifyLinkUrl", type: "string" }
            ]},
            { name: "gallery", type: "object", label: "Gallery", fields: [
              { name: "heading", type: "string" },
              { name: "headingHighlight", type: "string" },
              { name: "intro", type: "string" },
              { name: "items", type: "list", items: { type: "object", fields: [
                { name: "url", type: "string" },
                { name: "caption", type: "string" },
                { name: "desc", type: "string" }
              ]}
            ]},
            { name: "contact", type: "object", label: "Contact", fields: [
              { name: "managementEmail", type: "string" },
              { name: "pressEmail", type: "string" },
              { name: "mainEmail", type: "string" }
            ]},
            { name: "socials", type: "object", label: "Social links", fields: [
              { name: "instagram", type: "string" },
              { name: "tiktok", type: "string" },
              { name: "youtube", type: "string" },
              { name: "spotify", type: "string" }
            ]},
            { name: "footer", type: "object", label: "Footer", fields: [
              { name: "copyrightName", type: "string" },
              { name: "privacyLabel", type: "string" },
              { name: "termsLabel", type: "string" },
              { name: "location", type: "string" }
            ]}
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
