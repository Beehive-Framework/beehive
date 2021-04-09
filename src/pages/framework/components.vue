<template>
  <div class="components-layout-container">
    <h1>框架内置组件111111</h1>
    <div class="form-container">
      <a-button @click="handleFormShow(true)">表单测试</a-button>
      <a-modal
        :visible="modelProps.visible"
        title="Schema-Form Demo"
        @cancel="handleFormShow(false)">
        <schema-form ref="dynamicForm" :fields="fields" :form-schema="formSchema" />
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import formDemo from 'beehive/components/Form/demo/schema1.ts';
import { ModelFormProps } from 'beehive/components/Form/src/types/schema';

export default defineComponent({
  setup(props: any) {
    const modelProps = reactive<ModelFormProps>({
      visible: false,
    });

    const fields = reactive({});
    const formSchema = reactive(formDemo);

    function handleFormShow(state: boolean) {
      modelProps.visible = state;
    };

    return {
      handleFormShow,
      modelProps,
      fields,
      formSchema
    };
  }
})
</script>

<style lang="scss" scoped>
.components-layout-container {

}
</style>
