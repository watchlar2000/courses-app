<script setup lang="ts">
defineProps<{
  title: string;
  order: number | string;
  isLocked: boolean;
}>();
</script>

<template>
  <h3 class="title">
    <font-awesome-icon v-if="isLocked" icon="lock" class="lesson-chip" />
    Lesson {{ order }}: {{ title }}
  </h3>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Open Sans';
  font-size: 20px;
  color: var(--color-text);
  line-height: 1.2;
  font-weight: 600;
}

.lesson-chip {
  margin-right: 8px;
}
</style>
