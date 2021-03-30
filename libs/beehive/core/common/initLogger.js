import xesLogger from '../xes/logger.js';
export default (ctx) => {
    let logger;
    if (ctx.loggerInstance) {
        logger = ctx.loggerInstance; //业务自定义logger实例
    }
    if (!ctx.loggerConf || !ctx.loggerConf.appid) {
        logger = () => {
            console.log('未进行日志相关配置')
        }
    }

    //传入相关配置，使用网校统一日志SDK
    const xesLoggerInstance = xesLogger(ctx.loggerConf);
    logger = xesLoggerInstance

    ctx.injectAttr('logger', logger);
}