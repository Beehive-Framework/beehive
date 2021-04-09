<template>
  <a-checkbox-group v-model:value="modelValue" v-on="formItem.eventObject" style="width: 100%">
    <Row>
      <template v-for="option in formItem.options" :key="option.value">
        <Col :span="8">
          <a-checkbox :value="option.value">
            {{ option.label }}
          </a-checkbox>
        </Col>
      </template>
    </Row>
  </a-checkbox-group>
</template>
<script lang="ts">
import {defineComponent, PropType, computed} from 'vue'
import {Checkbox, Row, Col} from 'ant-design-vue'
import {FormItem} from "../src/types/schema";

export default defineComponent({
  name: 'schema-form-checkbox',
  emits: ['update:value'],
  components: {
    [Checkbox.name]: Checkbox,
    Row,
    Col,
    [Checkbox.Group.name]: Checkbox.Group,
  },
  props: {
    formItem: { // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({})
    },
    value: undefined as any // 表单项值
  },
  setup(props, {attrs, emit}) {

    const modelValue = computed({
      get: () => props.value,
      set: (val) => emit('update:value', val)
    })

    return {
      modelValue
    }
  }
})
</script>
