<script setup lang="ts">
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { useCourseStore } from './store/course';

const courseStore = useCourseStore();
courseStore.loadCourses();
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
