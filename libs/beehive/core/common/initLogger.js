import xesLogger from '../xes/logger.js';
import { is } from '../utils/index.js';

const emptyLogger = {
    showMsg: (obj) => {
        //展现日志上报
    },
    clickMsg: (obj) => {
        //交互日志上报
    },
    sysMsg: (obj) => {
        //系统日志上报
    }
}

export default (ctx) => {
    let logger = emptyLogger;
    const loggerInstance = ctx.loggerInstance;

    if (is.object(loggerInstance)) {
        let loggerInstanceChecker = true;
        for (i in emptyLogger) {
            if (!is.function(loggerInstance[i])) {
                loggerInstanceChecker = false;
                throw `loggerInstance必须包含${i}方法`;
                break;
            }
        }
        if (loggerInstanceChecker) {
            logger = ctx.loggerInstance; //业务自定义logger实例
        }
    }
    if (ctx.loggerConf && ctx.loggerConf.appid) {
         //传入相关配置，使用网校统一日志SDK
        const xesLoggerInstance = xesLogger(ctx.loggerConf);
        logger = xesLoggerInstance
    }


    ctx.injectAttr('logger', logger);
}