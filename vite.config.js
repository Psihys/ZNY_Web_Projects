import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import handlebars from 'vite-plugin-handlebars'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src', 'partials'),
      context: {
        siteName: 'Labo-6',
        labName: ' Labo_Number6',
        studentGroup: '6-1213-1',
        studentEmail: 'student@example.com',
      },
      pages: [
        {
          input: resolve(__dirname, 'index.html'),
          context: { pageTitle: 'Home' },
        },
        {
          input: resolve(__dirname, 'pages/about.html'),
          context: { pageTitle: 'About' },
        },
        {
          input: resolve(__dirname, 'pages/contact.html'),
          context: { pageTitle: 'Contact' },
        },
      ],
      reloadOnPartialChange: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contacts.html'),
      },
    },
  },
})
