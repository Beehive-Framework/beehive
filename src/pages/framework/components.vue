<template>
  <div class="components-layout-container">
    <h1>框架内置组件111111</h1>
    <div class="form-container">
      <a-button @click="handleFormShow(true)">表单测试</a-button>
      <a-modal
        :visible="modelProps.modelVisible"
        title="Schema-Form Demo"
        @cancel="handleFormShow(false)">
        <vue-form
          v-model="formData"
          :schema="schema"
          :uiSchema="uiSchema"
          :form-props="formProps"
          :error-schema="errorSchema"
        />
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import formDemo from '../../../libs/beehive/components/Form/demo/demo.json';
import { ModelFormProps, FormSchema } from '../../../libs/beehive/components/Form/src/types/form';
import { useSchemaForm } from '../../../libs/beehive/components/Form/src/hooks/useForm';

export default defineComponent({
  setup(props) {
    const modelProps = reactive<ModelFormProps>({
      modelVisible: false,
    });

    const { schema, uiSchema, formProps, errorSchema, formData } = useSchemaForm(formDemo as FormSchema);

    function handleFormShow(state: boolean) {
      modelProps.modelVisible = state;
    };

    return {
      handleFormShow,
      modelProps,
      schema,
      uiSchema,
      formProps,
      errorSchema,
      formData
    };
  }
})
</script>

<style lang="scss" scoped>
.components-layout-container {

}
</style>
