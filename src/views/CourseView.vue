<script setup lang="ts">
import TheLoader from '@/components/TheLoader.vue';
import { useCourseStore } from '@/store/course';
import type { Course } from '@/types/Course';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const courseId = route.params.id as string;
const courseStore = useCourseStore();
const { loading } = storeToRefs(courseStore);
const courseData = ref<Course | Record<string, never>>({});

const loadCourse = async (id: string) => {
  courseData.value = await courseStore.findDetailedCourseById(id);
};

loadCourse(courseId);

const back = () => {
  router.push({ name: 'home' });
};

// let hls = new Hls();
// let stream =
//   'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8';
// let videoRef = ref(null);
// hls.loadSource(stream);
// hls.attachMedia(videoRef.value);
// hls.on(Hls.Events.MANIFEST_PARSED, function () {
//   videoRef.value.play();
// });
</script>

<template>
  <div>
    <the-loader v-if="loading" />
    <div class="course-section" v-else>
      <button @click="back" class="button-back">
        <span><font-awesome-icon icon="arrow-left" /></span> Back
      </button>
      <h2 class="title">{{ courseData.title }}</h2>
      <img :src="`${courseData.previewImageLink}/cover.webp`" :alt="courseData.title" />
      <video ref="videoRef" src="" id="video-container" width="100%" controls></video>
      <ul class="list">
        <li
          class="lesson"
          :class="{
            locked: lesson.status === 'locked',
          }"
          v-for="lesson in courseData.lessons"
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
