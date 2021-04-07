import { extRouter, attachInfo } from '../../../../src/router.js';

export default (ctx) => {
    //import.meta.glob取代webpack中的require.context
    //https://vitejs.dev/guide/features.html#glob-import
    //vite-plugin-import-context  vite中也可以使用该插件
    const addAttachInfo = (routes) => {
        routes.forEach((item) => {
            if (attachInfo[item.path]) {
                Object.assign(item, attachInfo[item.path])
            }
        })
    };

    const originPages = import.meta.glob('/src/pages/**');
    let routes = [{
        path: '/:pathMatch(.*)*',
        component: () => import ('../../components/default/404.vue')
    }];
    for(let i in originPages) {
        if (/.(vue|js)$/.test(i)) {
            routes.push({
                path: i.replace(/(\.|\/|\w)+pages/, '').replace('.vue', ''),
                component: originPages[i]
            })
        }
    }

    addAttachInfo(routes);
    routes = routes.concat(extRouter)
    // console.log('routes', routes)

    ctx.routes = routes
}