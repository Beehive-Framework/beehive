import VueAntdForm from '@lljj/vue3-form-ant';
import VueElementForm from '@lljj/vue3-form-element';


export default (ctx) => {
  let form = {
    setup: () => { }
  }
  const formConf = ctx.opts.formConf || null;
  if (formConf && formConf.open) {
    const mode = formConf.mode || 'antd';
    form = mode === 'antd' ? VueAntdForm : VueElementForm;
  }

  ctx.form = Object.assign(form, { name: 'vue-form' });
}