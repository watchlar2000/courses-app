<script setup lang="ts">
import { useCourseStore } from '@/store/course';
import type { Lesson, LessonError } from '@/types/Course';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import LessonItem from './LessonItem.vue';
import VideoPlayer from './VideoPlayer.vue';

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

  const { status, id, link, previewImageLink, order } = lesson;

  if (status !== 'locked') {
    selectedLesson.value = lesson;
    videoSrc.value = link;
    videoPoster.value = `${previewImageLink}/lesson-${order}.webp`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  lessonError.value.message = 'This lesson is locked.';
  lessonError.value.lessonId = id;
};

const isSelectedLessonEmpty = computed(() => {
  return JSON.stringify(selectedLesson.value) === '{}';
});

const videoSrc = ref<string>(selectedCourse.value.meta?.courseVideoPreview?.link || '');
const videoPoster = ref<string>(`${selectedCourse.value.previewImageLink}/cover.webp` || '');

watch(selectedCourse, (fetchedCourse) => {
  const src = fetchedCourse.meta.courseVideoPreview?.link;
  const poster = `${fetchedCourse.previewImageLink}/cover.webp`;

  if (src !== undefined) {
    videoSrc.value = src;
    videoPoster.value = poster;
  }
});

const sortedLessons = computed(() => {
  const { lessons } = selectedCourse.value;

  if (lessons?.length === 0) {
    return;
  }

  return lessons?.sort((a, b) => a.order - b.order);
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
    <VideoPlayer
      :key="videoSrc"
      :src="videoSrc"
      :poster="videoPoster"
      v-if="selectedCourse.meta?.courseVideoPreview?.link"
    />

    <ul class="list">
      <lesson-item
        v-for="lesson in sortedLessons"
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
