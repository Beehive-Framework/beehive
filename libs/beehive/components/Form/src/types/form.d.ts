import type { Ref } from 'vue';

export interface ModelFormProps {
  modelVisible?: boolean,
  schema?: object,
  data?: any
}

type UiSchema = object;
type Schema = object;
type FormProps = object;
export type ErrorSchema = object;

export interface FormSchema {
  schema: Schema,
  uiSchema: UiSchema,
  formProps: FormProps,
  errorSchema?: ErrorSchema
}

export interface UseFormReturnType {
  schema: Ref<Schema>,
  uiSchema: Ref<UiSchema>,
  formProps: Ref<FormProps>,
  errorSchema?: Ref<ErrorSchema>,
  formData: Ref<Object>
}
