import ajax from '../utils/ajax.js';
import * as utils from '../utils/index.js';

export default (ctx) => {
    const ajaxInstance = ajax(ctx.opts.ajaxConf={});
    ctx.injectAttr('ajax', ajaxInstance);
    ctx.injectAttr('utils', utils);
}

