## 一句话简介
基于vue3生态打造针对web工作台场景的新一代前端框架
[项目wiki](https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=126791847)


## 功能介绍

### 1、命令行能力（暂未实现）
- 命令行创建项目
- 命令行创建页面
- 命令行创建业务组件


### 2、框架运行时功能（进行中）
- 路由能力
    1. 根据目录结构生成自动化路由
    2. 自定义路由配置

- 逻辑代码范式
    1. 逻辑代码自动注入vuex store 实例
    2. 逻辑代码自动注入ajax实例
    3. 自动化生成vuex module

- vue实例增强
    1. 逻辑代码依赖注入vue组件
    2. 提示信息函数依赖注入vue组件
    3. ajax实例依赖注入vue组件
    4. logger实例依赖注入vue组件

- 弹层代码范式

   弹层调起代码：
    ```js
        this.$modal({
            moduleName: 'modal-modalTest',
            title: '创建用户',
            params: {stuid: 1111},
            width: 800,
            onOk: () => {
              //顺序是先执行内部组件的submit方法，再执行onOk方法
              console.log('999999999999999')
            }
        });

    ````

    弹层内容代码：需位于modules目录内

    ````html
    //modal-modalTest 代码
    <template>
      <h1>modal test</h1>
    </template>
    <script>
        export default {
            props: {
                'params': Object
            },
            methods: {
                submit() {
                  return new Promise((resolve, reject) => {
                    setTimeout(()=> {
                      resolve('submit111111111')
                    }, 1000)
                  })
                },

                cancel() {
                  console.log('cancel11111111')
                }
            }
        }
    </script>
    ````

- blockWrapper（待实现）


- XES增强
    1. SSO登录集成
    2. 日志上报集成
    3. 文件上传集成



### 3、框架提供的utils库（进行中）
- Ajax封装
- is函数
- 提示信息函数
- 时间日期函数（待实现）
- excel生成器（待实现）


### 4、框架提供的组件库（进行中）
- 图表组件
- 布局组件
- Block组件
......


### 5、框架提供的构建工具（进行中）
- vite引入

### 6、框架提供的自动化测试工具（暂未实现）
- jest

### 7、框架提供的Mock工具（暂未实现）
- 本地化Mock工具
- 对接公司的Mock平台

### 8、框架提供的国际化工具（低优，暂未实现）
