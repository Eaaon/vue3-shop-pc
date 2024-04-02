<script setup lang="ts">
import { computed } from 'vue'
const currentLocale = computed(() => {
  // return this.$storage.locale?.locale === "zh" ? zhCn : en;
  return 'en'
})
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
