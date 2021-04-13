import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv } from './build/utils';
import { createRollupPlugins } from './build/rollup/plugin';
import { createVitePlugins } from './build/vite/plugin';
import visualizer from 'rollup-plugin-visualizer';
import { resolve } from 'path';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({ command, mode }) => {

  const root = process.cwd();

  const env = loadEnv(mode, root);
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const {
    VITE_PUBLIC_PATH,
    VITE_DROP_CONSOLE,
    VITE_DROP_DEBUGGER,
    VITE_KEEP_INFINITY
  } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      // import as /@/xxx, it cannot start with @ because that's considered a package. link: https://github.com/vitejs/vite/issues/279
      alias: [{
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      }],
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: VITE_KEEP_INFINITY,
          // Used to delete console in production environment
          drop_console: VITE_DROP_CONSOLE,
          drop_debugger: VITE_DROP_DEBUGGER
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
