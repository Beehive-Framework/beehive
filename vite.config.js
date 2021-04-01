import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { wrapperEnv } from './build/utils';
import { createAlias } from './build/vite/alias';

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
        ['/@/', 'src']
        // todo: ...
      ]),
    },
    plugins: [vue()]
  }
})
