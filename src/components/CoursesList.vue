<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import BasePagination from './BasePagination.vue';
import CoursesListItem from './CoursesListItem.vue';

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
    <div class="course-grid">
      <div
        v-for="course in courseStore.paginate"
        :key="course.id"
      >
        <CoursesListItem :course="course" />
      </div>
    </div>
    <base-pagination
      :total-pages="courseStore.totalPages"
      :per-page="10"
      :current-page="courseStore.page"
      :max-visible-buttons="3"
      @pagechange="onPageChange"
    />
  </div>
</template>

<style scoped lang="scss">
.course-grid {
  display: grid;
  grid-auto-rows: auto;
  gap: 32px;
  margin-bottom: 32px;
}

@media screen and (min-width: 992px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1600px) {
  .course-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
