import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { wrapperEnv } from './build/utils';
import { createAlias } from './build/vite/alias';

export default defineConfig(({ command, mode }) => {

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: createAlias([
        // @/xxxx => src/xxxx
        ['@/', 'src']
        // todo: ...
      ]),
    },
    plugins: [vue()]
  }
})
