<script setup lang="ts">
import request from '@/utils/http'
import { onMounted } from 'vue'

const bannerListApi = (params: any) => {
  return request({
    url: `/banner/list`,
    method: 'get',
    params
  })
}

onMounted(() => {
  bannerListApi({})
})
</script>

<template>home1</template>
