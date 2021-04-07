<template>
  <div class="components-layout-container">
    <h1>框架内置组件111111</h1>
    <div class="form-container">
      <a-button @click="handleFormShow(true)">表单测试</a-button>
      <a-modal :visible="formShow" title="Schema-Form Demo" @cancel="handleFormShow(false)">
        <vue-form>

        </vue-form>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const formShow = ref<boolean>(false);

    function handleFormShow(state: boolean) {
      formShow.value = state;
    }

    return {
      formShow,
      handleFormShow
    }
  }
})
</script>

<style lang="scss" scoped>
.components-layout-container {

}
</style>
