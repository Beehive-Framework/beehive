import { createApp } from 'vue'
import App from './App.vue'
import Beehive from '../libs/beehive/index.js';
const beehive = new Beehive({
    dom: '#app',
    root: App,
    createApp: createApp,
    ajaxConf: {
        //全局的ajax配置
    },
    tipsConf: {
        //全局的提示配置
    },
    inject: {
        //默认注入service中的属性
    },
    routerConf: {
        //路由配置
    },
    formConf: {
        open: true, // 默认为 false
        mode: 'antd' // 默认为 [antd], 可选项为 [element, antd]
    },
    xesLoggerConf: {
        //xeslogger配置
    },
    xesLoginConf: {
        //知音楼登录配置
    },
    xesUploaderConf: {
        //网校云文件上传配置
    },

    ajaxInstance: null, //ajax实例，完全自定义的情况
    loggerInstance: null, //日志实例，完全自定义的情况
    loginInstance: null, //登录实例，完全自定义的情况
    messageInstance: null, //message提示实例，完全自定义的情况
    notifyInstance: null, //notify提示实例，完全自定义的情况
    comfirmInstance: null, //comfirm提示实例，完全自定义的情况
    '404page': null, //传入一个vue组件
    '403page': null, //传入一个vue组件
    '500page': null, //传入一个vue组件
})


// 如果需要使用额外的vue插件，可以用以下方法添加
// beehive.app.use()
