<template>
  <h1>modal test</h1>
  <p>modal test modal testmodal testmodal testmodal testmodal test</p>

</template>

<script>
    export default {
        props: {
            'params': Object
        },
        methods: {
            submit() {
              return new Promise((resolve, reject) => {
                setTimeout(()=> {
                  console.log( this.params, '000000000000000000000')
                  resolve('submit111111111')
                }, 1000)
              })
            },

            cancel() {
              console.log('cancel11111111')
            }


        }
    }

</script>

<style scoped>

</style>