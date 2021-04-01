import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv } from './build/utils';
import { createAlias } from './build/vite/alias';
import { createRollupPlugins } from './build/rollup/plugin';
import { createVitePlugins } from './build/vite/plugin';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig(({ command, mode }) => {

  const root = process.cwd();

  const env = loadEnv(mode, root);
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      // import as /@/xxx, it cannot start with @ because that's considered a package. link: https://github.com/vitejs/vite/issues/279
      alias: createAlias([
        ['/@/', 'src'],
        ['/@u/', 'src/utils']
        // todo: ...
      ]),
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        plugins: createRollupPlugins(viteEnv, mode),
        output: {
          manualChunks: {
            // todo: ...
          }
        }
      },
      sourcemap: true,
      chunkSizeWarningLimit: 500,
    },
    plugins: createVitePlugins(viteEnv, mode)
  }
})
