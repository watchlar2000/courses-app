<script setup lang="ts">
import BaseError from '@/components/BaseError.vue';
import BaseLoader from '@/components/BaseLoader.vue';
import CoursesList from '@/components/CoursesList.vue';
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';

const courseStore = useCourseStore();
const { loading, error, errorMessage } = storeToRefs(courseStore);
</script>

<template>
  <div>
    <base-loader v-if="loading" />
    <base-error v-else-if="error">{{ errorMessage }}</base-error>
    <courses-list v-else />
  </div>
</template>
