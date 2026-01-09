import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Auto-discover component files (*.js, excluding *.stories.js)
const storiesDir = resolve(__dirname, 'stories');
const componentFiles = readdirSync(storiesDir)
  .filter(file => file.endsWith('.js') && !file.endsWith('.stories.js'))
  .reduce((entries, file) => {
    const name = file.replace('.js', '').toLowerCase();
    entries[name] = resolve(storiesDir, file);
    return entries;
  }, {});

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        ...componentFiles,
        styles: resolve(__dirname, 'src/tailwind.css'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'styles' ? 'js/[name].js' : '[name].js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'main.css';
          }
          if (assetInfo.name && /\.(ttf|otf|eot|woff2?)$/.test(assetInfo.name)) {
            return 'fonts/[name][extname]';
          }
          if (assetInfo.name && /\.(svg|png|jpe?g)$/.test(assetInfo.name)) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
