<template>
  <div class="beehive-form-container">
    <a-form
      ref="schemaFormRef"
      v-bind="formItemLayout"
    >
      <template
        v-for="(formItem, index) in formSchema.formItem.filter(item => !item.hidden)"
        :key="formItem.field + index">
        <a-spin :spinning="formItem.loading || false">
          <a-form-item
            :help="formItem.help"
            :extra="formItem.extra"
            :label="formItem.label"
            :name="formItem.field"
            v-bind="{...formItem.props,...validateInfos[formItem.field]}"
          >
            <component
              v-model:value="modelRef[formItem.field]"
              :form-item="formItem"
              v-on="{...getTriggerEvent(formItem)}"
              :is="getComponent(formItem.type)"/>
          </a-form-item>
        </a-spin>
      </template>
      <template v-if="$slots['operate-button']">
        <a-form-item :wrapper-col="{ span: formItemLayout.wrapperCol.span, offset: formItemLayout.labelCol.span,  }">
          <slot name="operate-button"/>
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, getCurrentInstance, isReactive, ref, isRef, createVNode, PropType} from 'vue'
import { Form, Spin } from 'ant-design-vue';
import { useForm } from "@ant-design-vue/use";
import is from 'is_js';
import {FormItem, FormSchema} from './src/types/schema';
import components from './components'

export default defineComponent({
  name: 'schema-form',
  components: {
    ...components,
    [Spin.name]: Spin,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
  },
  props: {
    formSchema: { // 动态验证表单
      required: true,
      type: Object as PropType<FormSchema>
    },
    fields: { // 预置字段默认值
      type: Object,
      default: () => ({})
    }
  },
  setup(props, cxt) {
    const schemaFormRef = ref<any>(null);
    const formInstance = getCurrentInstance();

    const isAsyncFunction = type => {
      return toString.call(type) === '[object AsyncFunction]'
    }

    const formItemLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 20},
      ...props.formSchema.formItemLayout
    }

    const modelRef = reactive(props.formSchema.formItem.reduce((previousValue, currentValue) => {
      currentValue.eventObject ??= {}
      previousValue[currentValue.field] = currentValue.value
      return previousValue
    }, {}))

    props.fields && Object.assign(modelRef, props.fields)

    props.formSchema.formItem.forEach(async (item: FormItem) => {
      // 是否需要loading
      if (item?.hasOwnProperty('loading')) {
        item.loading = true
      }
      // 异步选项
      if (is.function(item.asyncOptions) || isAsyncFunction(item.asyncOptions)) {
        item.options = await item.asyncOptions(item, formInstance).finally(() => item.loading = false)
      } else if (is.function(item.asyncValue) || isAsyncFunction(item.asyncValue)) { // 异步默认值
        modelRef[item.field] = await item.asyncValue(item, formInstance).finally(() => item.loading = false)
      }
    })

    const rulesRef = reactive(props.formSchema.formItem.filter(item => !item.hidden).reduce((previousValue, currentValue) => {
      currentValue.rules && (previousValue[currentValue.field] = currentValue.rules)
      return previousValue
    }, {}))

    const {resetFields, validate, validateInfos, validateField} = useForm(modelRef, rulesRef);

    const preset = Object.keys(components);

    const getComponent = (type) => {
      const fieldName = `schema-${type}`;
      if (preset.includes(fieldName)) {
        return fieldName
      } else if (isReactive(type) || isRef(type)) {
        return createVNode(type)
      } else {
        return type
      }
    }

    const setTriggerEvent = ({field,trigger}) => () => validate(field, { trigger}).catch(() => ({}))

    const getTriggerEvent = (formItem) => {
      const events = {}
      const field = formItem.field
      if (Array.isArray(formItem.rules)) {
        formItem.rules.forEach(ruleItem => {
          if (Array.isArray(ruleItem.trigger)) {
            ruleItem.trigger.forEach(triggerItem => events[triggerItem] = setTriggerEvent({field, trigger: triggerItem}))
          } else if (is.string(ruleItem.trigger)) {
            events[ruleItem.trigger] = setTriggerEvent({field, trigger: ruleItem.trigger})
          }
        })
      } else if (formItem.rules?.trigger) {
        const trigger = formItem.rules?.trigger
        events[trigger] = setTriggerEvent({field, trigger})
        if (Array.isArray(trigger)) {
          trigger.forEach(triggerItem => events[triggerItem] = setTriggerEvent({field, trigger: triggerItem}))
        } else if (is.string(trigger)) {
          events[trigger] = setTriggerEvent({field, trigger: trigger})
        }
      }
      return events
    }

    return {
      formItemLayout,
      validate,
      resetFields,
      validateField,
      validateInfos,
      modelRef,
      schemaFormRef,
      getTriggerEvent,
      getComponent,
    }
  }
})
</script>
<style lang="scss" scope>
.beehive-form-container {
  .ant-form {
    .ant-input-group {
      display: flex;
    }

    .ant-checkbox-wrapper {
    }
  }
}
</style>
