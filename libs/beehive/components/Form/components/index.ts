// const path = require('path')

// const file = require.context('./', true, /\.vue/)
// const components = {}
// file.keys().forEach(key => {
//     const name = path.basename(key, '.vue')
//     components[name] = file(key).default || file(key)
// })

// export default components
import checkbox from './schema-form-checkbox.vue';
import inputNumber from './schema-form-input-number.vue';
import input from './schema-form-input.vue';
import radio from './schema-form-radio.vue';
import select from './schema-form-select.vue';
import schemaSwitch from './schema-form-switch.vue';
import textarea from './schema-form-textarea.vue';

export default {
  'schema-checkbox': checkbox,
  'schema-input-number': inputNumber,
  'schema-input': input,
  'schema-radio': radio,
  'schema-select': select,
  'schema-switch': schemaSwitch,
  'schema-textarea': textarea
};
