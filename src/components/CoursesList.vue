<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import CoursesListItem from './CoursesListItem.vue';

const courseStore = useCourseStore();
</script>

<template>
  <div>
    <div v-for="course in courseStore.paginate" :key="course.id">
      <CoursesListItem :course="course" />
    </div>
  </div>
</template>

<style></style>
