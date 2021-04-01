import vue from '@vitejs/plugin-vue';

export function createVitePlugins (viteEnv, mode) {
  const vitePlugins = [vue()];

  return vitePlugins;
}
