<template>
  <div class="course-grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.course-grid {
  display: grid;
  grid-auto-rows: auto;
  gap: 32px;
  margin-bottom: 32px;
}

@media screen and (min-width: 992px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1600px) {
  .course-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
