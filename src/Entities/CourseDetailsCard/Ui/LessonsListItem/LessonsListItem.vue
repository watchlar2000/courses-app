<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '../../../../Shared/Components/Button';
import type { Lesson, LessonError } from '../../../../Shared/Types/Course';
import LessonErrorNotification from './Ui/LessonErrorNotification';
import LessonTitle from './Ui/LessonTitle';

const emit = defineEmits<{
  (e: 'select', id: string): void;
}>();

const props = defineProps<{
  error: LessonError | null;
  lesson: Lesson;
}>();

const onSelect = (): void => {
  emit('select', props.lesson.id);
};

const isLessonLocked = computed(() => props.lesson.status === 'locked');

const hasError = computed(() => props.error?.message && props.error?.lessonId === props.lesson.id);

defineExpose({ isLessonLocked, hasError });
</script>

<template>
  <div
    :class="{
      locked: isLessonLocked,
    }"
    class="lesson"
  >
    <lesson-title
      :title="lesson.title"
      :order="lesson.order"
      :is-locked="isLessonLocked"
    ></lesson-title>
    <lesson-error-notification v-if="hasError && props.error"
      >This lesson is locked</lesson-error-notification
    >
    <base-button
      :class="{
        disabled: lesson.status === 'locked',
      }"
      class="button-play"
      @click="onSelect"
    >
      <span>Play the video</span>
      <font-awesome-icon icon="play" />
    </base-button>
  </div>
</template>

<style lang="scss" scoped>
.lesson {
  width: 100%;
  padding: 18px;
  background-color: var(--color-background-alt);
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
</style>
