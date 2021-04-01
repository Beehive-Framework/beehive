<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">{{title}}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item :key="item.name" v-for="item in routers">
                <router-link :to="item.path">{{item.name}}</router-link>
            </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', marginTop: '24px', minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';
import { APP_ENV } from './utils/constans';
export default defineComponent({
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      collapsed: ref<boolean>(false),
    };
  },
  computed: {
    routers(){
        return this.$router.options.routes.filter((item) => !!item.name)
    },
    title () {
      const suffix = APP_ENV !== 'production' ? ` [ ${APP_ENV} ]` : '';

      return `Beehiev Framework${suffix}`;
    }
  }
});
</script>
<style>
#app{
    height: 100%;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
