<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="container">
    <the-header class="header" title="Courses app" />
    <main class="main">
      <slot />
    </main>
    <the-footer class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 125px auto 100px;
  justify-content: center;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

.header {
  grid-area: header;
}

.main {
  align-self: self-start;
  grid-area: main;
  display: grid;
  margin: 0 12px;
  max-width: 1600px;
  height: 100%;
}

@media screen and (min-width: 576px) {
  .main {
    margin: 0 24px;
  }
}

.footer {
  grid-area: footer;
  align-items: center;
  align-self: center;
}
</style>
