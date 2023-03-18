<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import type { Lesson, LessonError } from '@/types/Course';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import LessonItem from './LessonItem.vue';

const router = useRouter();
const courseStore = useCourseStore();
const { selectedCourse } = storeToRefs(courseStore);

const back = () => {
  router.push({ name: 'home' });
};

const lessonError = ref<LessonError | Record<string, string>>({});
const selectedLesson = ref<Lesson | Record<string, never>>({});

const selectLesson = (lesson: Lesson) => {
  lessonError.value = {};

  const { status, id } = lesson;

  if (status !== 'locked') {
    selectedLesson.value = lesson;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  lessonError.value.message = 'This lesson is locked.';
  lessonError.value.lessonId = id;
};

const isSelectedLessonEmpty = computed(() => {
  return JSON.stringify(selectedLesson.value) === '{}';
});
</script>

<template>
  <div class="course-section">
    <button @click="back" class="button-back">
      <span><font-awesome-icon icon="arrow-left" /></span> Back
    </button>
    <h2 class="title">{{ selectedCourse.title }}</h2>
    <div v-if="!isSelectedLessonEmpty">
      <p>You are watching lesson #{{ selectedLesson.order }}:</p>
      <span class="lesson-title">{{ selectedLesson.title }}</span>
    </div>
    <img :src="`${selectedCourse.previewImageLink}/cover.webp`" :alt="selectedCourse.title" />
    <ul class="list">
      <lesson-item
        v-for="lesson in selectedCourse.lessons"
        :key="lesson.id"
        :lesson="lesson"
        :error="lessonError"
        @select="selectLesson"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.course-section {
  max-width: 900px;
  margin-inline: auto;
}
.list {
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.lesson-title {
  font-weight: 600;
}

.button-back {
  background-color: transparent;
  padding: 0;
}
</style>
