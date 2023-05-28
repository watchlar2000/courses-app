<template>
  <h1 class="title"><slot /></h1>
</template>

<style lang="scss" scoped>
.title {
  font-size: 36px;
  font-family: 'Open Sans';
  font-weight: 700;
  pointer-events: none;
}

@media screen and (min-width: 576px) {
  .title {
    font-size: 40px;
  }
}
</style>
