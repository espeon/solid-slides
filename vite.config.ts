import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin(),
    tailwindcss(),
    Icons({
      compiler: 'solid',
      // Auto-collect any icon set installed under @iconify-json/*,
      // so adding `pnpm add -D @iconify-json/<set>` is the only step
      // required to start importing from `~icons/<set>/<name>`.
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    // Prevent duplicate solid-js instances across workspace packages
    dedupe: ['solid-js', '@solidjs/router'],
  },
});
