import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// import manifest from "./manifest.json";


export default defineConfig({
  plugins: [react(),

    VitePWA({
      includeAssets:['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Rick and Morty Routing, PWA',
        short_name: 'Rick and Morty Routing, PWA',
        description: 'Rick and Morty Routing, PWA',
        theme_color: '#000000',
        icons: [
          {
            src: 'logo.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './public/icons512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable"
          },
          
        ]
    }})
  ],

});

