<template>
  <h2 class="title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.title {
  font-family: 'Open Sans';
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  margin-top: -8px;
  color: var(--primary-50);
}
</style>
