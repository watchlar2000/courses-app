<script setup lang="ts">
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCourseStore } from './store/course';

const { loadCourses, checkCurrentPage } = useCourseStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  await router.isReady();
  console.log(route.query.page);
  const { page } = route.query;

  if (page !== undefined && page !== null) {
    checkCurrentPage(+page);
  }
});

loadCourses();
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
