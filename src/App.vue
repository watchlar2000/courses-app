<script setup lang="ts">
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { onMounted } from 'vue';
import CourseDataService from './api/CourseDataService';

onMounted(async () => {
  const data = await CourseDataService.getAll();
  console.log(data);
})
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>