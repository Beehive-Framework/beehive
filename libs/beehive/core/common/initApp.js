import {createRouter, createWebHashHistory} from 'vue-router';
// import { beforeEach, afterEach } from '../../../../src/router.js';

import Antd from 'ant-design-vue';
import store from './store';

export default (ctx) => {
    const createApp = ctx.opts.createApp;
    const dom = ctx.opts.dom || '#app';
    const root = ctx.opts.root;
    const router = createRouter({
      history: createWebHashHistory(),
      routes: ctx.routes
    });


    const app = createApp(root);


    //执行全局注册动作
    for (let i in ctx.modules) {
        app.component(i, ctx.modules[i].default || ctx.modules[i])
    }

    app.use(store);
    app.use(ctx.ajaxPlugin);
    app.use(ctx.services);
    app.use(router);
    app.use(ctx.tipsPlugin);
    app.use(Antd);
    app.mount(dom);
    ctx.app = app;
    ctx.routr = router;
    // router.beforeEach(beforeEach);
    // router.afterEach(afterEach);
}