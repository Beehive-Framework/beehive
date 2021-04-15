<template>
  <h1>module11111111</h1>
  <h1>{{name}}</h1>
  <h1>{{teacherName}}</h1>
  <button @click="openModal">打开模态框</button>
  <button @click="openMessage">打开message</button>
  <button @click="openConfirm">打开Confirm</button>
  <button @click="openNotify">打开Notify</button>
  <button @click="openModal">打开Modal</button>
  <button @click="callLogic">调用业务逻辑</button>

</template>

<script>
    export default {
        // data() {
        //     return {
        //         name: this.$store.state.Students.name
        //     }
        // },
        methods: {
            openModal() {
                this.$modal({
                    moduleName: 'modal-modalTest',
                    title: '创建用户',
                    params: {stuid: 1111},
                    width: 800,
                    onOk: () => {
                      //顺序是先执行内部组件的submit方法，再执行onOk方法
                      console.log('999999999999999')
                    }
                });
                // this.$singleModal('/modal/module1');
                // console.log(this);
            },

            openMessage() {
                this.$message.info('hhhhh1111111111111hhhhhhhh')
            },

            openConfirm() {
                this.$confirm({
                    title: '确定要删除吗？'
                })
            },

            openNotify() {
                this.$notify.info({
                    message: "午午给你发来一条消息",
                    description: "晚上回来吃饭吗？"
                })
            },

            callLogic() {
                console.log(this.$services.Students);
                var random = Math.random() + '';
                this.$services.Students.changeName(random)

                // this.$services.Students.setState('name', random);
            },

            submit() {
              return new Promise((r1, r2) => {
                setTimeout(()=> {
                  r1('submit111111111')
                }, 1000)
              })
            },

            cancel() {
              console.log('cancel11111111')
            }


        },
        computed: {
            name () {
              // return this.$store.getters['Students/showName']
              // return this.$store.state.Students.name;
              return this.$services.Students.getComputed('showName')
              // return this.$services.Students.getState('name')
              // return this.$store.getters['showName']
            },

            teacherName() {
              return this.$services.Teacher.getState('teacherName')
            }
        }
    }

</script>

<style scoped>
a {
  color: #42b983;
}
</style>