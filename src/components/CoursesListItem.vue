<script setup lang="ts">
import type { Course } from '@/types/Course';

const props = defineProps<{
  course: Course;
}>();
</script>

<template>
  <h2>
    {{ props.course.title }}
  </h2>
  <img :src="`${props.course.previewImageLink}/cover.webp`" :alt="props.course.title" />
</template>

<style></style>
