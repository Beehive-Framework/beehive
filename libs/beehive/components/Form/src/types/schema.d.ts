import {VNode, ComponentInternalInstance, HTMLAttributes} from 'vue'
import {RuleObject} from 'ant-design-vue/lib/form/interface'
import {FormItemProps} from 'ant-design-vue/lib/form/FormItem'
import {FormProps, ValidationRule} from 'ant-design-vue/lib/form/Form'

interface OptionItem {
    label: string;
    value: string | number;
    [key: string]: any;
}

type Rule = ValidationRule | {
    trigger?: 'blur' | 'change' | string['blur' | 'change'];
}

interface FormItem extends Partial<typeof FormItemProps>{
    type?: VNode | string;
    label?: string; // 表单标签
    field: string; // 表单字段
    value: any; // 表单默认值
    props?: Partial<HTMLAttributes | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any>; // 表单属性
    rules?: Rule[]; // 表单验证规则
    options?: any; // 可选项
    eventObject?: object; // 事件对象，例如：{ mousedown: doThis, mouseup: doThat } 将会动态绑定为：v-on="{ mousedown: doThis, mouseup: doThat }"
    loading?: boolean; // 异步数据是否加载
    asyncValue?: any; // 异步数据
    asyncOptions?: any; // 异步选项的数据
    hidden?: boolean; // 是否隐藏表单项
    placeholder?: string;
    extra?: any;
    help?: any;
}

interface FormSchema extends Partial<typeof FormProps>{
    style?: object; // 表单样式
    formItemLayout?: object; // 表单布局
    watchKeys?: string[];
    watchCallback?: (watchKeys: string[], {dynamicForm, modelRef}) => any;
    formItem:  FormItem[];
}

export interface ModelFormProps {
  visible?: boolean,
  schema?: FormSchema,
  data?: any
}
