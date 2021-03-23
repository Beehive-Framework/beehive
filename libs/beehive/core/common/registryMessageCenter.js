const messageCenter = {};

export default (ctx) =>{
    messageCenter.on('router', (params) => {
        ctx.router.push(params.path)
    })

    messageCenter.on('module', (params) => {

    })

    messageCenter.on('logger', (params) => {

    })
}