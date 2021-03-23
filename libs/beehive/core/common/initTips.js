import { message } from 'ant-design-vue'; //中上提示信息
import { notification } from 'ant-design-vue'; //右上角消息
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent } from 'vue';

export default (ctx) => {
    let defaultConfirmConf = {
        icon: createVNode(ExclamationCircleOutlined),
    }

    let confirmConf = Object.assign(defaultConfirmConf, ctx.opts.confirmConf)
    ctx.tips = {
        install:  (app, options) => {
            app.config.globalProperties.$message = message
            app.config.globalProperties.$notify = notification
            app.config.globalProperties.$confirm = (opts) => {
                return Modal.confirm(Object.assign(confirmConf, opts))
            }
        }
    }
}

