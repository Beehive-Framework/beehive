export default {
  formItem: [
    {
        type: "input",
        label: "用户名",
        field: "username",
        value: '',
        props: {
          placeholder: "请输入用户名"
      },
        rules: [
        {
            required: true,
            message: "用户名不能为空",
        }
      ]
    },
    {
        type: "input",
        label: "密码",
        field: "password",
        hidden: false, // 是否隐藏
        value: '',
        props: {
          type: 'password',
          placeholder: "请输入密码"
      },
        rules: [
        {
          "required": true,
          "message": "密码不能为空"
        }
      ]
    },
    {
        type: "select",
        label: "角色",
        field: "roles",
        value: [],
        options: [],
        rules: [
        {
            required: true,
            message: '请选择角色',
            type: 'array'
        }
      ]
    }
  ]
}
