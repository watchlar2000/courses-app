<script setup lang="ts">
import CoursesList from '@/components/CoursesList.vue';
import TheLoader from '@/components/TheLoader.vue';
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';

const courseStore = useCourseStore();
const { loading } = storeToRefs(courseStore);
</script>

<template>
  <div>
    <the-loader v-if="loading" />
    <courses-list v-else />
  </div>
</template>
