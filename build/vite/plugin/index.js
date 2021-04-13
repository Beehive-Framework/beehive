import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve'

export function createVitePlugins (viteEnv, mode) {
  const vitePlugins = [
    vue(),
    resolve({
      moduleDirectories: ['node_modules', 'libs'],
      extensions: [ '.mjs', '.js', '.jsx', '.json', '.vue' ],
    })
  ];

  return vitePlugins;
}
