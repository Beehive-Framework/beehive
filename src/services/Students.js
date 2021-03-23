import BaseService from '../../libs/beehive/core/BaseService.js';

class Students extends BaseService {
    constructor() {
        super()
    }

    /*
     * 在init中定义该业务实体的state初始值, mutations, getters
     */
    init() {
        this.state = {
            name: 'Tom',
            nickName: 'Jerry'
        }
        this.mutations.changeName = (state, name) => {
            state.name = name
        }

        this.getters.showName = (state, getters) => {
            return '【' + (state.name || state.nickname) + '】';
        }
    }

    changeName(name) {
        setTimeout(() => {
            this.store.commit('Students/changeName', name)
        }, 500);
    }
}

export default Students