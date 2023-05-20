<script setup lang="ts">
import { computed, ref } from 'vue';
import CardHeader from '../../Shared/Components/CardHeader';
import VideoPlayer from '../../Shared/Components/VideoPlayer';
import type { Course, Lesson, LessonError } from '../../Shared/Types/Course';
import GoBackButton from './Ui/GoBackButton';
import LessonNotification from './Ui/LessonNotification';
import LessonsList from './Ui/LessonsList';
import LessonsListItem from './Ui/LessonsListItem';

const props = defineProps<{
  course: Course | null;
}>();

const videoSrc = ref<string>(props.course?.meta.courseVideoPreview?.link ?? '');
const videoPoster = ref<string>(`${props.course?.previewImageLink}/cover.webp`);
const lessonError = ref<LessonError | null>(null);
const selectedLesson = ref<Lesson | null>(null);

const findLessonById = (id: string): Lesson | null => {
  return props.course?.lessons.find((lesson) => lesson.id === id) ?? null;
};

const clearLessonError = (): void => {
  lessonError.value = null;
};

const selectUnlockedLesson = (id: string): void => {
  const lesson = findLessonById(id);

  if (lesson) {
    const { link, previewImageLink, order } = lesson;
    selectedLesson.value = lesson;
    videoSrc.value = link;
    videoPoster.value = `${previewImageLink}/lesson-${order}.webp`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const selectLockedLesson = (id: string): void => {
  if (lessonError.value) {
    lessonError.value.message = 'This lesson is locked.';
    lessonError.value.lessonId = id;
  }
};

const selectLesson = (id: string): void => {
  clearLessonError();
  const lesson = findLessonById(id);

  if (lesson?.status !== 'locked') {
    selectUnlockedLesson(id);
  } else {
    selectLockedLesson(id);
  }
};

const sortedLessons = computed(() => {
  const { lessons } = props.course ?? { lessons: [] };
  return lessons?.sort((a, b) => a.order - b.order);
});

defineExpose({ sortedLessons, selectLesson });
</script>

<template>
  <div v-if="props.course" class="section">
    <go-back-button>
      <template #icon>
        <font-awesome-icon icon="arrow-left" />
      </template>
      <span>Back</span>
    </go-back-button>
    <card-header>
      {{ props.course.title }}
    </card-header>
    <lesson-notification
      v-if="selectedLesson !== null"
      :title="selectedLesson?.title"
      :order="selectedLesson?.order"
    />
    <video-player :key="videoSrc" :src="videoSrc" :poster="videoPoster" autoplay controls />
    <lessons-list class="list">
      <lessons-list-item
        v-for="lesson in sortedLessons"
        :key="lesson.id"
        :lesson="lesson"
        :error="lessonError"
        @select="selectLesson"
      />
    </lessons-list>
  </div>
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.list {
  margin-top: 8px;
}
</style>
