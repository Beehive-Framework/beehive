export default {
  formItemLayout: {
    layout: 'horizontal',
    labelCol: {span: 8},
    wrapperCol: {span: 12},
  },
  style: {

  },
  formItem: [{
    label: 'input field',
    type: 'input',
    field: '111',
    props: {
      placeholder: '...',
      required: true
    },
  }, {
    label: 'checkbox field',
    type: 'checkbox',
    options: [{
      value: 1,
      label: '别选我'
    }, {
      value: 2,
      label: '好的'
    }],
    field: '222',
    placeholder: '...'
  }, {
    label: 'input-number field',
    type: 'input-number',
    field: '333',
    placeholder: '...'
  }, {
    label: 'radio field',
    type: 'radio',
    options: [{
      value: 1,
      label: '糖果'
    }, {
      value: 2,
      label: '超甜'
    }],
    field: '444',
    placeholder: '...'
  }, {
    label: 'select field',
    type: 'select',
    field: '555',
    placeholder: '...'
  }, {
    label: 'switch field',
    type: 'switch',
    field: '666',
    placeholder: '...'
  }, {
    label: 'textarea field',
    type: 'textarea',
    field: '171',
    placeholder: '...'
  }]
}
