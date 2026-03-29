import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // Externalize everything the consumer must provide
      external: ['solid-js', 'solid-js/web', 'solid-js/store', '@solidjs/router'],
    },
    target: 'esnext',
    sourcemap: true,
  },
})
