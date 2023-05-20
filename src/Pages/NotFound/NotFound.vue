<script setup lang="ts">
import { computed } from 'vue';

const toHome = computed(() => {
  return { name: 'home' };
});

defineExpose({ toHome });
</script>

<template>
  <div class="not-found">
    <h2>404 | Page not found</h2>
    <router-link :to="toHome"> Go back home </router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
