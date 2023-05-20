<script setup lang="ts">
import ThemeSwitcher from '@/Features/ThemeSwitcher';
import HeaderLogo from './Ui/Logo';

defineProps<{
  title: string;
}>();
</script>

<template>
  <header class="header">
    <header-logo class="header__logo">🧙‍♂️ {{ title }}</header-logo>
    <theme-switcher />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 0 20px;
  height: 100%;

  &__logo {
    align-self: center;
  }
}
</style>
