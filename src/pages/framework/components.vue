<template>
  <div class="components-layout-container">
    <h1>框架内置组件111111</h1>
    <div class="form-container">
      <a-button @click="handleFormShow(true)">表单测试</a-button>
      <a-modal
        :visible="modelProps.visible"
        title="Schema-Form Demo"
        @cancel="handleFormShow(false)">
        <!-- <vue-form
          v-model="formData"
          :schema="schema"
          :uiSchema="uiSchema"
          :form-props="formProps"
          :error-schema="errorSchema"
        /> -->
        <schema-form ref="dynamicForm" :fields="fields" :form-schema="formSchema" />
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import formDemo from 'beehive/components/Form/demo/schema1.ts';
import { ModelFormProps } from 'beehive/components/Form/src/types/schema';
// import { useSchemaForm } from 'beehive/components/Form/src/hooks/useForm.ts';

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
