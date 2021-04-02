import VueAntdForm from '@lljj/vue3-form-ant';
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

  const formConf = ctx.opts.formConf || {};

  const {open, mode = 'ant'} = formConf;

  if (open) {

    const formType = Object.keys(modeMap).indexOf(mode) !== -1 ? mode : 'ant';

    form = modeMap[formType];
  }

  ctx.form = Object.assign(form, { name: 'vue-form' });
}