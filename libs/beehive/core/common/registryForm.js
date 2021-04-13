import VueAntdForm from '../../components/Form/BasicForm.vue';
import VueElementForm from '@lljj/vue3-form-element';

const modeMap = {
  antd: VueAntdForm,
  ant: VueAntdForm,
  element: VueElementForm
}

export default (ctx) => {

  let form = {
    setup: () => { }
  }

  const formName = 'schema-form';

  const formConf = ctx.opts.formConf || {};

  const {open, mode = 'ant'} = formConf;

  if (open) {

    const formType = Object.keys(modeMap).includes(mode) ? mode : 'ant';

    form = modeMap[formType];

    if (!form.install) {
      form.install = (vueApp) => {
        vueApp.component(formName, form);
      }
    }
  }

  ctx.form = Object.assign(form, { name: formName });
}
