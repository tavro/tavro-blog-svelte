import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://isakhorvath.me/tavro-blog-svelte/",
  plugins: [svelte()],
  server: {
    cors: true
  },
})
