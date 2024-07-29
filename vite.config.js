import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const projectName = "brainwave";

export default defineConfig({
  base: `/${projectName}/`,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
      manifest: {
        short_name: "Brainwave",
        name: "Brainwave App",
        icons: [
          {
            src: `/${projectName}/android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: `/${projectName}/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: `/${projectName}/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: `/${projectName}/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: `/${projectName}/`,
        display: "standalone",
        scope: `/${projectName}/`,
        theme_color: "#0E0C15",
        background_color: "#ffffff",
      },
    }),
  ],
});
