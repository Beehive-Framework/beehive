import XesLoggerSDK from '@xes/xes_fe_log'
export default (options={}) => {
    const xesLoggerInstance = new XesLoggerSDK({
        cacheUploader: {
            interval: 10000,
            batch: options.uploadBatch || 5,
        },
        common: {
            eventid: options.eventid || 'NoEventId'
        },
        network: {
            open: true,
            sample: 1
        },
        clickMsg: {
            open: true
        },
        loadMsg: {
            open: false                      // 自动展现日志开关
        },
        runtime: {
            open: true,
            sample: 1
        },
        resource: {
            open: true,
            sample: 1
        },
        hashchange: {
            open: false,                     // hashchange自动展现日志开关
            pvid: 'hash'
        },
        performance: {
            open: true,
            sample: 1
        },
        vue: {
            errorHandler: true
        },
        trace: {
            open: true
        },
        appid: {
            'xxx.xueersi.com': {
                'appid': options.appid,
            }
        },
        param: options.commonParams
    });
    return xesLoggerInstance;
}