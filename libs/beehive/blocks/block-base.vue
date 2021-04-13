<template>
  <a-col :span="span" :order="order" class="block-wrapper" v-bind:style="style">
      <component v-bind:is="currentView" ref="child" :params="params"></component>
      <slot></slot>
  </a-col>
</template>

<script>

export default {
  props: {
    'module': String,
    'moduleList': Array,
    'blockname': String,
    'logType': {
      validator: function(value) {
        return ['mounted', 'showed'].indexOf(value) !== -1
      }
    },
    'style': Object,
    'span': Number,
    'order': Number,
    'params': Object
  },
  // inject: ['conf'],
  data() {
    return {
      moduleName: ''
    }
  },
  mounted () {
    console.log(this, 'block, this')
    //动态加载chunk,并mount到当前wrapper之中
    if (this.moduleList && this.blockname) {
      for(let i in this.conf) {
          if (this.blockname == i) {
            console.log(i, this.conf[i].module)
            this.moduleName = this.conf[i].module
          }
      }
    }

    //如果不存在module且不存在blockname，则取moduleList第一个组件
    if (this.moduleList) {
      if (!this.blockname && !this.module) {
        this.moduleName = this.moduleList[0]
      }
    }


    if (this.logType === 'showed') {
      this.showLogger()
    } else {
      this.mountLogger()
    }


  },

  computed: {
    currentView() {
      return this.module || this.moduleName || 'emptyModule'
    }
  },

  methods: {
    mountComponent(moduleName) {
      // import('../modules/' + moduleName).then((component) => {
      //     component.props = this.store[conf[i].dependenceModal]
      //     component.$mount(this.$ref['wrapper'])
      // })
    },

    logger(name) {
      this?.$logger?.showMsg({moduleName: name});
    },

    //当这个区块出现在可视区内时，上报日志, 组件生命周期内只报一次
    showLogger() {

    },

    //当这个组件mount时，直接上报日志
    mountLogger() {
      const name = this.blockname || this.module || this.moduleName;
      this.logger(name);
    },

    //如果子组件有submit方法，执行子组件的submit方法
    submit() {
      if (this?.$refs?.child?.submit) {
        return this?.$refs?.child?.submit()
      }
    },

    //如果子组件有cancel方法，执行子组件的cancel方法
    cancel() {
      if (this?.$refs?.child?.cancel) {
        return this?.$refs?.child?.cancel()
      }
    }
  }
}
</script>

<style>
.block-wrapper {
    border: 1px dashed #333;
    margin: 10px 0;
    padding: 5px;
    overflow: auto;
}
</style>
