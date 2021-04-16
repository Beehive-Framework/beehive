import { template } from 'lodash'

/**
 * index.html 引入模版引擎能力
 * @example
 * // index.html 源码
 * <script><%= indexHtmlTemplateData.inlineCode %></script>
 * // vite.config.js 初始化插件
 * {
 *  plugins: [
 *    indexHtmlTemplate({ data: { inlineCode: "alert(1)" } })
 *  ]
 * }
 * // index.html 编译后
 * <script>alert(1)</script>
 * @description 使用 lodash template 作为模版引擎（模仿 HTML Webpack Plugin）
 * @param {Object} config 配置模版数据
 * @param {Object} config.data 静态模版数据
 * @param {Function} config.addData 动态添加模版数据，优先级更高
 * @param {Object} config.options 透传给 lodash template 方法，参考文档 https://lodash.com/docs/4.17.15#template
 * @returns vite 插件实例
 */
export const indexHtmlTemplate = config => {
  const { data = {}, addData = () => {}, options = {} } = config || {}
  return {
    name: 'html-transform',
    transformIndexHtml(html, ctx) {
      const compiled = template(html, options)
      return compiled({ indexHtmlTemplateData: Object.assign(
        {},
        data,
        addData(html, ctx)
      ) })
    }
  }
}

export default indexHtmlTemplate
