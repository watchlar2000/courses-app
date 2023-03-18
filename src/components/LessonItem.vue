<script setup lang="ts">
import type { Lesson, LessonError } from '@/types/Course';

const emit = defineEmits<{
  (e: 'select', lesson: Lesson): void;
}>();

const props = defineProps<{
  lesson: Lesson | Record<string, string>;
  error: LessonError | Record<string, string>;
}>();

const onSelect = (lesson: any) => {
  emit('select', lesson);
};
</script>

<template>
  <li
    class="lesson"
    :class="{
      locked: lesson.status === 'locked',
    }"
  >
    <h3 class="title">
      <font-awesome-icon v-if="lesson.status === 'locked'" icon="lock" class="lesson-chip" />
      Lesson {{ lesson.order }}: {{ lesson.title }}
    </h3>
    <p v-if="props.error.message && props.error.lessonId === props.lesson.id" class="error">
      This lesson is locked
    </p>
    <button
      :class="{
        disabled: lesson.status === 'locked',
      }"
      @click="onSelect(lesson)"
      class="button-play"
    >
      <span>Play the video</span>
      <font-awesome-icon icon="play" />
    </button>
  </li>
</template>

<style lang="scss" scoped>
.lesson {
  padding: 18px;
  background-color: var(--color-background-alt);

  .title {
    font-size: 18px;
    color: var(--color-text);
  }
}

.button-play {
  margin-top: 14px;
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

.error {
  color: var(--color-danger);
  font-size: 18px;
  margin-top: 14px;
}
</style>
