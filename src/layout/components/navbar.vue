<script setup lang="ts">
import { ref, computed } from 'vue'
import logo from './sidebar/logo.vue'
import sidebarItem from './sidebar/sidebarItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isCollapse = ref(true)
const device = ref('desktop')
const menuData = ref([
  {
    name: '首页',
    path: '/home',
    children: [
      {
        name: '404',
        path: '/404',
        children: [
          {
            name: '404',
            path: '/404'
          }
        ]
      }
    ]
  },
  {
    name: '首页',
    path: '/244',
    children: [
      {
        name: '404',
        path: '/302',
        children: [
          {
            name: '404',
            path: '/303'
          }
        ]
      }
    ]
  }
])
const tooltipEffect = ref('light')

const defaultActive = computed(() => (route.meta?.activePath ? route.meta.activePath : route.path))
</script>
<template>
  <div class="sidebar-container" :class="{ 'w-54': isCollapse }">
    <logo :collapse="isCollapse"></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper" :class="[device === 'mobile' ? 'mobile' : 'pc']">
      <el-menu router mode="vertical" popper-class="menu-scrollbar" :collapse="isCollapse" :popper-effect="tooltipEffect" :default-active="defaultActive">
        <sidebar-item v-for="routes in menuData" :key="routes.path" :menu="routes" :base-path="routes.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.scrollbar-wrapper {
  height: calc(100vh - 50px);
}
.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  width: 200px !important;
  height: calc(100vh - 50px);
  overflow: visible;
  font-size: 0;
}

.w-54 {
  width: 64px !important;
}

.menu-scrollbar {
  height: calc(100vh - 50px);
}
</style>
