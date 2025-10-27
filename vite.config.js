import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import handlebars from 'vite-plugin-handlebars'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/ZNY_Web_Projects/',
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src', 'partials'),
      context: {
        siteName: 'Labo-6',
        labName: ' Labo_Number-6',
      },

      reloadOnPartialChange: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    outDir:'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contacts.html'),
      },
    },
  },
})
