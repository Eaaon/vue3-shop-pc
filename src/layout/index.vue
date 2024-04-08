<script setup lang="ts">
import navbar from './components/navbar.vue'
import appMain from './components/appMain.vue'
</script>

<template>
  <navbar></navbar>
  <div class="main-container">
    <app-main></app-main>
  </div>
</template>

<style scoped>
.main-container {
  margin-left: 54px;
}
</style>
