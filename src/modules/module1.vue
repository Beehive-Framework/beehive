<template>
  <h1>module1</h1>
  <h1>{{name}}</h1>
  <button @click="openModal">打开模态框</button>
  <button @click="openMessage">打开message</button>
  <button @click="openConfirm">打开Confirm</button>
  <button @click="openNotify">打开Notify</button>
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
                // this.$modal('/modal/module1', {
                //     title: '创建用户',
                //     height: 400,
                //     width: 800
                // });
                // this.$singleModal('/modal/module1');
                console.log(this);
            },

            openMessage() {
                this.$message.info('hhhhhhhhhhhhh')
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
                // console.log(this.$store);
                var random = Math.random() + '';
                this.$services.Students.changeName(random)
            }
        },
        computed: {
            name () {
              return this.$store.getters['Students/showName']
              // return this.$store.getters['showName']
            }
        }
    }

</script>

<style scoped>
a {
  color: #42b983;
}
</style>