class BaseService {
    constructor(name, ctx) {
        this.name = name;
        this.state = {};
        this.getters = {};
        this.actions = {};
        this.mutations = {
            defaultSetState: (state, obj) => {
                for (let i in obj) {
                    state[i] = obj[i]
                }
            }
        };
        this.init();
        if (ctx) {
            this.beehive = ctx;
            // this.ajax = ctx.ajax;
            // this.tips = ctx.tips;
            // this.logger = ctx.logger;
            Object.assign(this, ctx.inject)
        }

    }

    init() {

    }

    createState(store) {
        this.store = store;
        return {
            namespaced: true,
            state: this.state,
            getters: this.getters,
            actions: this.actions,
            mutations: this.mutations
        }
    }

    getState(key) {
        return this.store.state[this.name][key]
    }

    setState(key, value) {
        const obj = {};
        obj[key] = value
        this.store.commit(this.name + '/defaultSetState', obj)
    }

    getComputed(key) {
        return this.store.getters[this.name + '/' + key ]
    }
}

export default BaseService
// this.$services.Student.fetchStudentInfo({})