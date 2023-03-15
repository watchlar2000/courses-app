<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const courseId = route.params.id as string;
const courseStore = useCourseStore();
const courseData = ref({});

const loadCourse = async (id: string) => {
  courseData.value = await courseStore.findDetailedCourseById(id);
};

loadCourse(courseId);

const back = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <div>
    <button @click="back">Back</button>
    <h1>This is a course view page</h1>
    <p>{{ courseData }}</p>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
