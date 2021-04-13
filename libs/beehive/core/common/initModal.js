import { Modal } from 'ant-design-vue';
import { createApp } from 'vue';
import Block from '../../blocks/block-base.vue';
import { globleRegistry } from './initApp.js';

export default (ctx) => {
    let defaultModalConf = {
        confirmLoading: true,
        okText: '确认',
        cancelText: '取消'
    };
    let modalConf = Object.assign(defaultModalConf, ctx.opts.modalConf);
    let modal = (opts, data) => {

        const defaultCallback = {
            onOk: () => {},
            onCancel: () => {}
        };

        const _onCancel = opts.onCancel;
        const _onOk = opts.onOk;

        opts.onCancel = () => defaultCallback.onCancel();
        opts.onOk = () => defaultCallback.onOk();

        Modal.confirm(Object.assign(modalConf, opts))

        if (opts.moduleName) {

            let app = createApp(Block, {module: opts.moduleName, params: opts.params});

            globleRegistry(ctx, app);

            let flag = 0;
            let contentInstance;
            const timer = setInterval(() => {
                flag++;
                let modalContainer = document.getElementsByClassName('.ant-modal-confirm-content');
                if (modalContainer) {
                    contentInstance = app.mount('.ant-modal-confirm-content')

                    defaultCallback.onOk = () => {
                        const submitResult = contentInstance.submit()
                        if (_onOk) {
                            if (submitResult instanceof Promise) {
                                return submitResult.then(_onOk)
                            }
                            else {
                                return _onOk(submitResult)
                            }
                        }
                        return submitResult
                    }

                    defaultCallback.onCancel = () => {
                        const cancelResult = contentInstance.cancel()
                        if (_onCancel) {
                            if (cancelResult instanceof Promise) {
                                return cancelResult.then(_onCancel)
                            }
                            else {
                                return _onCancel(cancelResult)
                            }
                        }
                        return cancelResult
                    }
                    clearInterval(timer);
                }
                if (flag > 20) {
                    clearInterval(timer);
                }
            }, 10)
        }



    }

    ctx.app.config.globalProperties.$modal = modal
}

