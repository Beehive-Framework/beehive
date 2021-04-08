export default (ctx) => {
    const originModules = import.meta.globEager('/src/modules/**');
    const modules = {};
    for(let i in originModules) {
        if (/\.(vue|js)$/.test(i)) {
            const key = i
            .replace(/(\.|\/|\w)+modules\//, '')
            .replace(/\.(vue|js)$/, '')
            .replace(/\//, '-');
            modules[key] = originModules[i];
        }
    }
    console.log('modules', modules)
    ctx.modules = modules
}