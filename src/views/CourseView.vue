<script setup lang="ts">
import TheError from '@/components/TheError.vue';
import TheLoader from '@/components/TheLoader.vue';
import { useCourseStore } from '@/store/course';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const courseStore = useCourseStore();
const { loading, selectedCourse, error, errorMessage } = storeToRefs(courseStore);

const back = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <div>
    <the-loader v-if="loading" />
    <the-error v-else-if="error">{{ errorMessage }}</the-error>
    <div class="course-section" v-else>
      <button @click="back" class="button-back">
        <span><font-awesome-icon icon="arrow-left" /></span> Back
      </button>
      <h2 class="title">{{ selectedCourse.title }}</h2>
      <img :src="`${selectedCourse.previewImageLink}/cover.webp`" :alt="selectedCourse.title" />
      <ul class="list">
        <li
          class="lesson"
          :class="{
            locked: lesson.status === 'locked',
          }"
          v-for="lesson in selectedCourse.lessons"
          :key="lesson.id"
        >
          <h3 class="title">
            <font-awesome-icon v-if="lesson.status === 'locked'" icon="lock" class="lesson-chip" />
            Lesson {{ lesson.order }}: {{ lesson.title }}
          </h3>
          <button
            :class="{
              disabled: lesson.status === 'locked',
            }"
            class="button-play"
          >
            <span>Play the video</span>
            <font-awesome-icon icon="play" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-section {
  max-width: 900px;
  margin-inline: auto;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.lesson {
  padding: 18px;
  background-color: rgba(185, 185, 133);

  .title {
    font-size: 18px;
    color: rgb(68, 68, 68);
  }
}

.button-play {
  margin-top: 14px;
}

.button-back {
  background-color: transparent;
  padding: 0;
}

.disabled {
  cursor: not-allowed;

  &:hover {
    color: inherit;
  }
}

.lesson-chip {
  margin-right: 8px;
}
</style>
