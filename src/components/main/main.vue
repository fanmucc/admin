<template>
    <div>
        <layout id="components-layout-demo-custom-trigger">
            <sider></sider>
        </layout>
    </div>
</template>
<script>
import { Layout } from 'ant-design-vue'
const { Header, Footer, Sider, Content } = Layout;
export default {
  components: {
    Layout,
    Sider
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
