import XesLoggerSDK from '@xes/xes_fe_log'
export default (options) => {
    return new XesLoggerSDK({
        cacheUploader: {
            interval: 10000,
            batch: 5,
        },
        common: {
            eventid: 'mallwww'
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
            pvid: 'hash',
            pageuid: {                       // 展现日志、交互日志pageuid路由映射
                'index': 'pageindex',        // 首页路由pageuid映射
                'path': 'path333',
                'path/a': 'path/a333'
            },
            loadParam: {                     // 展现日志私有字段路由映射
                'index': {'key1': 'xxx'},    // 首页路由展现日志私有字段映射
                'path': {'key1': 'yyy'},
                'path/a': {'key1': 'zzz'}
            }
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
                'appid': 'xxxxxxx',
                'appkey': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 2.0.0版本后删除此字段改为referer鉴权模式，需提前日志中心申请时填入referer信息鉴权
            }
        },
        param: {
            'key': '200021'                 // 展现日志、交互日志公共字段
        }
    })
}