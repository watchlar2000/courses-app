<template>
  <div class="error">
    <h2 class="title">Ooops...</h2>
    <slot />
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
