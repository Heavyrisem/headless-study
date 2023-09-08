import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'], // your library path
    treeshake: true,
    minify: true,
    // verbose: true,
    dts: true,
    external: ['react', 'react-dom'],
    clean: true,
    outDir: './dist', // build output
    format: ['cjs', 'esm'],
  },
]);
