/*
 * 自定义路由
 */
const extRouter = [{
    path: '/',
    component: () => import('./pages/test.vue')
}];

/*
 * 给自动化路由增添相应功能
 */
const attachInfo = {
    '/test': {
        title: '测试',
        name: '测试',
        // beforeEnter: (to, from, next) => {},
    },
    '/home': {
        title: '首页',
        name: '首页',
        // beforeEnter: (to, from, next) => {},
    },
    '/framework/components': {
        name: '框架内置组件'
    },
    '/framework/utils': {
        name: '框架工具函数'
    },
    '/framework/functional': {
        name: '框架特色功能'
    },
    '/framework/dependence': {
        name: '框架依赖'
    },
}

/*
 * 全局路由钩子
 */
// const beforeEach = (to, from, next) => {

// }

// const afterEach = (to, from, next) => {

// }

export{ extRouter, attachInfo,
    // beforeEach, afterEach
}