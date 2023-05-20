<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CourseCard from '../../Entities/CourseCard';
import PaginationFeature from '../../Features/Pagination';
import BaseError from '../../Shared/Components/Error';
import BaseLoader from '../../Shared/Components/Loader';
import { Pagination } from '../../Shared/Types/Course';
import useCourseStore from '../../Store';
import CourseList from '../../Widgets/CourseList';

const courseStore = useCourseStore();
const { currentPage, getPaginatedCourses, getTotalPages, error, errorCode, loading } =
  storeToRefs(courseStore);
const { fetchCourses, setInitPage } = courseStore;

const router = useRouter();

const onPageChange = (page: number) => {
  currentPage.value = page;
};

watch(currentPage, () => {
  router.replace({ query: { page: currentPage.value } });
});

const route = useRoute();
const page = route.query.page as string;

onMounted(() => {
  if (page !== undefined && page !== null) {
    setInitPage(+page);
  }

  if (courseStore.courses.length === 0) {
    fetchCourses();
  }
});
</script>

<template>
  <base-loader v-if="loading" />
  <base-error v-else-if="error" :error-code="errorCode" />
  <div v-else>
    <course-list>
      <course-card
        v-for="course in getPaginatedCourses"
        :id="course.id"
        :key="course.title"
        :course="course"
        :title="course.title"
        :lessons-count="course.lessonsCount ?? 0"
        :rating="course.rating"
        :image="course.previewImageLink"
        :video="course.meta.courseVideoPreview?.link ?? ''"
        :skills="course.meta.skills ?? []"
      />
    </course-list>
    <pagination-feature
      :total-pages="getTotalPages"
      :per-page="Pagination.ItemsPerPage"
      :current-page="currentPage"
      :max-visible-buttons="Pagination.MaxVisibleButtons"
      @pagechange="onPageChange"
    />
  </div>
</template>
