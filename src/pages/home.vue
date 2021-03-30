<template>
  <h1>Home</h1>
  <block module="module1"></block>
  <a-row type="flex">
      <block v-for="i in arr" :span="12">这里是区块{{i}}</block>
  </a-row>
  <block>这里是面包屑导航</block>
  <block>这里是班级切换Tab + Tab内容=班级基础数据</block>
  <block>这里是SOP、班级、讲次、学员变化切换Tab</block>
  <block>这里是SOP、班级、讲次、学员变化分别对应的表格</block>


</template>

<script>
    export default {
        data() {
            return {
                arr: [1,2,3,4]
            }
        }
    }

</script>

<style scoped>
a {
  color: #42b983;
}
</style>