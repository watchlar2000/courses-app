<script setup lang="ts">
import type { Course } from '@/types/Course';

const props = defineProps<{
  course: Course;
}>();
</script>

<template>
  <div class="course-section">
    <h2 class="title">
      <router-link :to="{ name: 'course', params: { id: props.course.id } }">{{
        props.course.title
      }}</router-link>
    </h2>
    <img :src="`${props.course.previewImageLink}/cover.webp`" :alt="props.course.title" />
    <div class="course-category">
      <p class="category">{{ course.lessonsCount }} lessons</p>
      <p class="category">
        Rating: <span>{{ course.rating }}</span>
      </p>
    </div>
    <div class="skills" v-show="course.meta.skills !== undefined">
      <h4 class="category">Skills:</h4>
      <ul class="skills-list">
        <li v-for="(skill, idx) in course.meta.skills" :key="idx">
          <font-awesome-icon icon="check" class="icon" /> {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-section {
  height: 100%;
  transition: all 0.1s ease;
}
</style>
