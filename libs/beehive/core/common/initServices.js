import store from './store'

export default (ctx) => {
    //import.meta.glob取代webpack中的require.context
    //https://vitejs.dev/guide/features.html#glob-import
    //vite-plugin-import-context  vite中也可以使用该插件
    const originLogics = import.meta.globEager('/src/services/**');
    const entities = {};

    for(let i in originLogics) {
        if (/\.js$/.test(i)) {
            const key = i.replace(/(\.|\/|\w)+services\//, '').replace(/\.js$/, '');
            entities[key] = new originLogics[i].default(key, ctx);
            if (entities[key].createState && entities[key].init) {
                const vuexModuleConf = entities[key].createState(store)
                store.registerModule(key, vuexModuleConf)
            }
        }
    }
    // ctx.entities = entities



    ctx.services = {
        install:  (app, options) => {
            app.config.globalProperties.$services = entities
        }
    }
}