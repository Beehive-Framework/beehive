import ajax from '../utils/ajax.js';

export default (ctx) => {
    const ajaxInstance = ajax(ctx.opts.ajaxConf={});
    ctx.ajax = ajaxInstance;
    ctx.ajaxPlugin = {
        install:  (app, options) => {
            app.config.globalProperties.$ajax = ajaxInstance
        }
    }
}

