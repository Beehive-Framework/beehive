
import BaseService from 'beehive/core/BaseService.js';

/*
 * 可以在该类中直接使用：
 * this.store  //vuex store
 * this.ajax   //封装并配置好的ajax方法
 * this.tips.message.error('error message') //封装好的message提示,默认配置同ant-design-vue
 * this.tips.notify(') //封装好的message提示, 默认配置同ant-design-vue
 * this.tips.comfirm({}) //封装好的comfirm提示, 默认配置同ant-design-vue
 */
class Teacher extends BaseService {
    constructor() {
        super(...arguments)
    }

    /*
     * 在init中定义该业务实体的state初始值, mutations, getters
     */
    init() {
        this.state = {
            teacherName: 'Tom`s teacherName',
        }
    }

    getTeacherNameByStuName(stuName) {
        setTimeout(() => {
            // this.store.commit('Students/changeName', name)
            this.setState('teacherName', stuName + '`s teacherName')
        }, 500);
    }
}

export default Teacher
