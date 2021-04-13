import 'ant-design-vue/dist/antd.css';

import checkOptions from './core/common/checkOptions.js';
import {initApp} from './core/common/initApp.js';
import registryRoutes from './core/common/registryRoutes.js';
import registryModules from './core/common/registryModules.js';
import registryBlocks from './core/common/registryBlocks.js';
import registryForm from './core/common/registryForm.js';
import initLogger from './core/common/initLogger.js';
import initTips from './core/common/initTips.js';
import initUtils from './core/common/initUtils.js';
import initModal from './core/common/initModal.js';
import initServices from './core/common/initServices.js';
// import BaseLogic from './core/BaseLogic.js';

class Beehive {

    constructor (options) {
        checkOptions(this, options);
        this.inject = {};
        this.vuePlugin = {};
        this.injectAttr = (k, v) => {
            this.inject[k] = v;
            this.vuePlugin[k] = {
                install: (app, options) => {
                    app.config.globalProperties['$' + k] = v
                }
            }
        }
        this._init();
    }

    _init() {
        const ctx = this;
        ctx.inject = Object.assign(ctx.inject, ctx.opts.inject); //业务需要自行注入到service中的内容
        ctx.vuePlugin = Object.assign(ctx.vuePlugin, ctx.opts.vuePlugin); //业务需要使用的vuePlugin
        //initDefaultView(ctx)    //初始化默认展现：Loading, 路由404, 全局500, 全局异常
        initLogger(ctx)         //初始化日志

        initUtils(ctx)           //初始化提示组件
        // initDialog(ctx)         //初始化弹窗组件

        initServices(ctx)          //初始化所有业务类
        // registryComponents(ctx) //全局注册框架提供的展现交互组件库
        // registryBlocks(ctx)     //全局注册框架提供的Block组件库
        registryModules(ctx)    //全局注册业务组件
        registryBlocks(ctx)     //全局注册block组件
        initTips(ctx)           //初始化提示组件
        registryRoutes(ctx)     //根据目录结构全局注册路由,并合并自定义路由
        registryForm(ctx)     //全局注册表格组件

        // registryMessageCenter(ctx) //注册框架标准化事件，模块加载类事件

        // initSSOLogin(ctx)       //初始化SSO登录
        initApp(ctx)            //执行new Vue({})动作以及触发相应生命周期
        initModal(ctx)

    }
}

// Beehive.utils = utils
// Beehive.BaseLogic = BaseLogic

export default Beehive



