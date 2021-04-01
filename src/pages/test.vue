<template>
  <h1>Home</h1>
  <block module="module1"></block>
  <block v-for="(item, index) in arr" :key="index" :span="12">这里是区块{{item}}</block>
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