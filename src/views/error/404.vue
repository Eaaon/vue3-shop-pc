<template>
  <div class="error-container flex flex-col items-center justify-center">
    <!-- <img class="w-20" src="@/assets/images/404.png" /> -->
    <div class="my-2 text-neutral-400 tracking-widest">抱歉，您访问的页面不存在。</div>
    <el-button type="primary" @click="backHome">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const backHome = () => {
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.error-container {
  height: 80vh;
}
</style>
