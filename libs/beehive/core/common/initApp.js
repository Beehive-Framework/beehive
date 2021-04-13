import { createRouter, createWebHashHistory } from 'vue-router';
// import { beforeEach, afterEach } from '../../../../src/router.js';

import Antd from 'ant-design-vue';
import store from './store';

const globleRegistry = (ctx, app) => {
    const globleComponents = Object.assign(ctx.modules, ctx.blocks)
    for (let i in globleComponents) {
        app.component(i, globleComponents[i].default || globleComponents[i])
    }

    // app.use(ctx.ajaxPlugin);
    // app.use(ctx.loggerPlugin);
    // app.use(ctx.tipsPlugin);

    for (let i in ctx.vuePlugin) {
        app.use(ctx.vuePlugin[i])
    }

    app.use(store);
    app.use(ctx.services);
    app.use(ctx.router);
    app.use(Antd);
    app.use(ctx.form);
}


const initApp = (ctx) => {
    const createApp = ctx.opts.createApp;
    const dom = ctx.opts.dom || '#app';
    const root = ctx.opts.root;
    const router = createRouter({
        history: createWebHashHistory(),
        routes: ctx.routes
    });


    const app = createApp(root);


    //执行全局注册动作
    ctx.app = app;
    ctx.router = router;
    globleRegistry(ctx, app);
    app.mount(dom);

    // router.beforeEach(beforeEach);
    // router.afterEach(afterEach);
}

export {initApp, globleRegistry}