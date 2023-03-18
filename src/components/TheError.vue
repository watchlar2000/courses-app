<template>
  <h3 class="error">
    <span class="title">Ooops...</span> |
    <slot />
  </h3>
</template>

<style lang="scss" scoped>
.error {
  font-size: 24px;
}
.title {
  font-weight: 600;
  color: var(--primary);
}
</style>
