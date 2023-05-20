<script setup lang="ts">
defineProps<{
  title: string;
  order: string | number;
}>();
</script>

<template>
  <div>
    <p>You are watching lesson #{{ order }}:</p>
    <span class="lesson-title">{{ title }}</span>
  </div>
</template>

<style scoped>
.lesson-title {
  font-weight: 600;
}
</style>
