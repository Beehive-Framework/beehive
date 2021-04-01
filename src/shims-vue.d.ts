import Vue from 'vue';
import {Router} from 'vue-router';

declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

// 扩展 Vue interface 否则调用 $router 编译器会飘红
declare module 'vue/types/vue' {
  interface Vue {
    $router: Router
  }
}
