// import { toRefs, ref } from 'vue';
// import { FormSchema, UseFormReturnType, ErrorSchema } from '../types/form';

// export const useSchemaForm = (formConf: FormSchema): UseFormReturnType => {
//   const { schema, uiSchema, formProps } = toRefs<FormSchema>(formConf);
//   const errorSchema = ref<ErrorSchema>(formConf['errorSchema'] || {});
//   const formData = ref({});

//   return {schema, uiSchema, formProps, errorSchema, formData};
// }
