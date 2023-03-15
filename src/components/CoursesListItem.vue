<script setup lang="ts">
import type { Course } from '@/types/Course';

const props = defineProps<{
  course: Course;
}>();
</script>

<template>
  <div class="course-section">
    <h2>
      <router-link :to="{ name: 'course', params: { id: props.course.id } }">{{
        props.course.title
      }}</router-link>
    </h2>
    <!-- <img :src="`${props.course.previewImageLink}/cover.webp`" :alt="props.course.title" /> -->
    <p>{{ course.description }}</p>
    <ul>
      <li>Lessons: {{ course.lessonsCount }}</li>
      <li>Skills: {{ course.meta.skills.join(', ') }}</li>
      <li>Rating: {{ course.rating }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.course-section {
  background-color: yellow;
  padding: 24px 36px;
  margin-bottom: 24px;
}
</style>
