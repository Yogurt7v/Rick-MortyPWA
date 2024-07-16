import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifestObject = {
  manifest: {
    name: "rick-and-morty",
    short_name: "rick-and-morty",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    description: "rick-and-morty",
    icons: [
      {
        src: "./src/assets/Icons/Windows/icons8-рик-санчес-color-hand-drawn-70.png",
        sizes: "70x70",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Windows/icons8-рик-санчес-color-hand-drawn-144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Windows/icons8-рик-санчес-color-hand-drawn-150.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Windows/icons8-рик-санчес-color-hand-drawn-310.png",
        sizes: "310x310",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "./src/assets/Icons/Web/icons8-рик-санчес-color-hand-drawn-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Web/icons8-рик-санчес-color-hand-drawn-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Web/icons8-рик-санчес-color-hand-drawn-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Web/icons8-рик-санчес-color-hand-drawn-120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/macOS/icons8-рик-санчес-color-hand-drawn-100.svg",
        sizes: "100x100",
        type: "image/svg",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/iOS Safari Web Clip/icons8-рик-санчес-color-hand-drawn-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Android Chrome/icons8-рик-санчес-color-hand-drawn-72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Android Chrome/icons8-рик-санчес-color-hand-drawn-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Android Chrome/icons8-рик-санчес-color-hand-drawn-144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Android Chrome/icons8-рик-санчес-color-hand-drawn-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./src/assets/Icons/Android Chrome/icons8-рик-санчес-color-hand-drawn-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestObject)],
});
