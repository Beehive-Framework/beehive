import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve'
import indexHtmlTemplate from './plugin-index-html-template';
import { initInlineCode } from './init-inline-code';
import { indexJSReplace } from './plugin-index-js-replace';

export function createVitePlugins (viteEnv, mode) {
  const vitePlugins = [
    vue(),
    resolve({
      moduleDirectories: ['node_modules', 'libs'],
      extensions: [ '.mjs', '.js', '.jsx', '.json', '.vue' ],
    }),
    indexHtmlTemplate({
      data: {
        inlineCode: initInlineCode()
      },
      addData(html, ctx) {
        return {
          cssBundles: Object.keys(ctx.bundle || {}).filter(b => /.*\.css$/.test(b)).map(b => `${viteEnv.VITE_PUBLIC_PATH}${b}`),
        }
      },
      options: {
        // 使用 {{}} 作为模版插入标识
        interpolate: /{{([\s\S]+?)}}/g,
      }
    }),
    indexJSReplace(),
  ];

  return vitePlugins;
}
