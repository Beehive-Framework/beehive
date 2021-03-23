class BaseService {
    constructor(name, ctx) {
        this.name = name;
        this.beehive = ctx;
        this.state = {};
        this.getters = {};
        this.actions = {};
        this.mutations = {};
        this.init();
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