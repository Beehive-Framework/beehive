import { Modal } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import { defineComponent,createApp } from 'vue';
import Block from '../../blocks/block-base.vue';

export default (ctx) => {
    let defaultModalConf = {};
    let modalConf = Object.assign(defaultModalConf, ctx.opts.modalConf);
    let modal = (opts, data) => {
        // if (!opts.moduleName || !opts.content) {
        //     throw '必须指定modal内容，内容为组件或已全局注册的模块'
        // }
        console.log(Modal.confirm(Object.assign(modalConf, opts)), 8888888888888888)
        if (opts.moduleName) {
            let modalContentComp = defineComponent({
                extends: Block,
                data() {
                    return {
                        module: opts.moduleName
                    }
                }
            })

            const modalContentWrapper = document.getElementById('modalContentWrapper')
            if (!modalContentWrapper) {
                const wrapperDom = document.createElement('div');
                wrapperDom.setAttribute('id', 'modalContentWrapper');
                wrapperDom.style.display = 'hidden';
                document.body.appendChild(wrapperDom);
            }
            let app = createApp(modalContentComp);
            app.use(Antd)
            const globleComponents = Object.assign(ctx.modules, ctx.blocks)
            for (let i in globleComponents) {
                app.component(i, globleComponents[i].default || globleComponents[i])
            }
            setTimeout(() => {
                let modalContent = app.mount('.ant-modal-confirm-content')
            }, 50)

            // console.log(modalContent.$.vnode, '*********************')
            // opts.content = modalContent.$.vnode
            // console.log('66666666666666666666666666')
        }



    }

    ctx.app.config.globalProperties.$modal = modal
}

