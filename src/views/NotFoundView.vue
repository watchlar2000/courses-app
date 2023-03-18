<template>
  <div class="not-found">
    <h2>404 | Not found</h2>
    <router-link :to="{ name: 'home' }">Go back home</router-link>
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
