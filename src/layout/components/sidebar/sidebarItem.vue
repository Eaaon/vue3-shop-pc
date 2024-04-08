<script setup lang="ts">
import { menuType } from '../../types'

// const props = defineProps({
//   menu: {
//     type: Object as PropType<menuType>
//   }
// })

defineProps<{ menu: menuType }>()
</script>

<template>
  <el-sub-menu :index="menu.path" v-if="menu.children">
    <template #title>
      <el-icon><Menu /></el-icon>
      <span>{{ menu.name }}</span>
    </template>
    <!-- 多级嵌套菜单渲染 -->
    <sidebar-item :menu="menuItem" v-for="menuItem in menu.children" :key="menuItem.path"></sidebar-item>
  </el-sub-menu>
  <el-menu-item :index="menu.path" v-else>
    <el-icon><Menu /></el-icon>
    <template #title>{{ menu.name }}</template>
  </el-menu-item>
</template>
