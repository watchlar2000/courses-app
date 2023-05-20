<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseButton from '../../../../Shared/Components/Button';

const router = useRouter();

const back = (): void => {
  router.go(-1);
};
</script>

<template>
  <base-button class="button-back" @click="back">
    <slot name="icon" />
    <slot>Back</slot>
  </base-button>
</template>

<style scoped lang="scss">
.button-back {
  background-color: transparent;
  padding: 0;
  color: var(--color-black-50);
}
</style>
