<script setup lang="ts">
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from './store/course';

const route = useRoute();
const courseStore = useCourseStore();

const { page } = route.query;

console.log(page);

if (page !== undefined && page !== null) {
  courseStore.checkCurrentPage(+page);
}

courseStore.loadCourses();
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
