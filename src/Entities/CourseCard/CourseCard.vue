<script setup lang="ts">
import { computed, ref } from 'vue';
import CardHeader from '../../Shared/Components/CardHeader';
import VideoPlayer from '../../Shared/Components/VideoPlayer';
import CourseCategory from './Ui/CourseCategory';
import CourseSkillItem from './Ui/CourseSkillItem';
import CourseSkillsList from './Ui/CourseSkillsList';

const props = defineProps<{
  id: string;
  title: string;
  lessonsCount: number | string;
  rating: number | string;
  image: string;
  skills: string[];
  video: string;
}>();

const isVideoPlaying = ref<boolean>(false);
const isVideoSupported = ref<boolean>(true);

const toCourse = computed(() => {
  return { name: 'course', params: { id: props.id } };
});
const imageSource = computed(() => `${props.image}/cover.webp`);
const areSkillsPresented = computed(() => props.skills.length !== 0);

function playVideo() {
  isVideoPlaying.value = true;
}

function stopVideo() {
  isVideoPlaying.value = false;
}

function handleVideoError() {
  isVideoSupported.value = false;
}

defineExpose({ toCourse, imageSource, areSkillsPresented });
</script>

<template>
  <div class="course-section">
    <card-header>
      <router-link :to="toCourse">
        {{ title }}
      </router-link>
    </card-header>
    <video-player
      :src="video"
      :poster="imageSource"
      :autoplay="isVideoPlaying && isVideoSupported"
      @source-error="handleVideoError"
      @mouseenter="playVideo"
      @mouseleave="stopVideo"
    />
    <div class="course-category">
      <course-category>{{ lessonsCount }} lessons</course-category>
      <course-category
        >Rating: <span>{{ rating }}</span></course-category
      >
    </div>
    <course-skills-list v-if="areSkillsPresented">
      <course-skill-item v-for="skill in skills" :key="skill" :skill="skill">
        <template #icon>
          <font-awesome-icon icon="check" class="icon" />
        </template>
      </course-skill-item>
    </course-skills-list>
  </div>
</template>

<style lang="scss" scoped>
.course-section {
  height: 100%;
  transition: all 0.1s ease;
}
</style>
