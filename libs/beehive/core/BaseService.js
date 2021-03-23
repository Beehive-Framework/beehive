class BaseService {
    constructor(name, ctx) {
        this.name = name;
        this.state = {};
        this.getters = {};
        this.actions = {};
        this.mutations = {};
        this.init();
        if (ctx) {
            this.beehive = ctx;
            this.ajax = ctx.ajax;
            this.tips = ctx.tips;
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
}

export default BaseService
// this.$services.Student.fetchStudentInfo({})