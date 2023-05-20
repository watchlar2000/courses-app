<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  errorCode: string | number;
}>();

const generateErrorMessage = computed(() => {
  let errorMessage = '';

  switch (+props.errorCode) {
    case 400:
      errorMessage = 'Bad request';
      break;
    case 401:
      errorMessage = 'Invalid authentication credentials';
      break;
    default:
      errorMessage = 'Please check your internet connection';
  }

  return errorMessage;
});
</script>

<template>
  <div class="error">
    <slot
      ><h2>
        <span v-if="errorCode">{{ errorCode }} |</span> {{ generateErrorMessage }}
      </h2></slot
    >
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
