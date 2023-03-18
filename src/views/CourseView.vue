<script setup lang="ts">
import CourseItem from '@/components/CourseItem.vue';
import TheError from '@/components/TheError.vue';
import TheLoader from '@/components/TheLoader.vue';
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';

const courseStore = useCourseStore();
const { loading, error, errorMessage } = storeToRefs(courseStore);
</script>

<template>
  <div>
    <the-loader v-if="loading" />
    <the-error v-else-if="error">{{ errorMessage }}</the-error>
    <course-item v-else />
  </div>
</template>
