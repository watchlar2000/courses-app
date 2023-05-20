<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import CourseDetailsCard from '../../Entities/CourseDetailsCard';
import BaseError from '../../Shared/Components/Error';
import BaseLoader from '../../Shared/Components/Loader';
import useCourseStore from '../../Store';
import CourseDetails from '../../Widgets/CourseDetails';

const courseStore = useCourseStore();
const { setDetailedCourseById } = courseStore;
const { selectedCourse, error, errorCode, loading } = storeToRefs(courseStore);

const route = useRoute();

const id = route.params.id as string;

watchEffect(() => {
  setDetailedCourseById(id);
});
</script>

<template>
  <base-loader v-if="loading" />
  <base-error v-else-if="error" :error-code="errorCode" />
  <course-details v-else>
    <course-details-card :course="selectedCourse" />
  </course-details>
</template>
