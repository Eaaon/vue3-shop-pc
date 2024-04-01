<script setup lang="ts">
import request from '@/utils/http'

const bannerListApi = (params: any) => {
  return request({
    url: `/banner/list`,
    method: 'get',
    params
  })
}
</script>

<template>home1</template>
