/**
 * 重置 index.js 位置，并添加 defer
 * @example
 * // vite.config.js 初始化插件
 * {
 *  plugins: [
 *    indexJSReplace()
 *  ]
 * }
 * @description vite build 目前默认把入口 js 放在了 head 标签中 https://github.com/vitejs/vite/blob/8c51bc03de8ed58029ade80a4437874d441f8bfd/packages/vite/src/node/plugins/html.ts#L362 https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 * @returns vite 插件实例
 */
export const indexJSReplace = () => {
  const indexJSRegex = /<script.*src=.*\/index.*\.js.*><\/script>/im
  return {
    name: 'index-js-replace',
    transformIndexHtml(html) {
      // 提取 script 并添加 defer 属性
      const script = html.match(indexJSRegex)?.[0]?.replace('<script ', '<script defer ') || ''
      // 删除原入口
      html = html.replace(indexJSRegex, '')
      // 放入 body 前
      const i = html.search('</body>')
      html = html.slice(0, i) + script + html.slice(i)
      return html
    }
  }
}
