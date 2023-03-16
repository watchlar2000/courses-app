<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import CoursesListItem from './CoursesListItem.vue';
import ThePagination from './ThePagination.vue';

const courseStore = useCourseStore();
const { page } = storeToRefs(courseStore);

const router = useRouter();

const onPageChange = (page: number) => {
  courseStore.page = page;
};

watch(page, () => {
  router.replace({ query: { page: page.value } });
});
</script>

<template>
  <div>
    <div v-for="course in courseStore.paginate" :key="course.id">
      <CoursesListItem :course="course" />
    </div>
    <the-pagination
      :total-pages="courseStore.totalPages"
      :per-page="10"
      :current-page="courseStore.page"
      :max-visible-buttons="3"
      @pagechange="onPageChange"
    />
  </div>
</template>
