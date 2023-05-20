<template>
  <p class="error"><slot /></p>
</template>

<style lang="scss" scoped>
.error {
  color: var(--color-danger);
  font-size: 18px;
  margin-top: 14px;
}
</style>
