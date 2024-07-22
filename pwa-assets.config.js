import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: [
    'public/logo.png',
    'public/icons96.png',
    'public/icons192.png',
    'public/icons512.png'
  ]
})