// import xesLogger from '../xes/logger.js';
export default (ctx) => {
    if (ctx.opts.logger) {
        ctx.logger = ctx.opts.logger
    }
    if (ctx.opts.xesLoggerConf) {
        xesLogger(ctx.opts.xesLoggerConf)
    }
}