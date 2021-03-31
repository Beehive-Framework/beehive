import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { wrapperEnv } from './build/utils'

export default defineConfig(({ command, mode }) => {

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const isBuild = command === 'build';

  return {
    plugins: [vue()]
  }
})
