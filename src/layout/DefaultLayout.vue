<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="container">
    <the-header class="header" />
    <main class="main">
      <slot />
    </main>
    <the-footer class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin-inline: auto;
  max-width: 1200px;
  display: grid;
  grid-template-rows: 125px auto 100px;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
  display: grid;
  place-content: center;
  margin: 0 12px;
}

@media screen and (min-width: 576px) {
  .main {
    margin: 0 24px;
  }
}

@media screen and (min-width: 1400px) {
  .main {
    margin: 0;
  }
}

.footer {
  grid-area: footer;
  align-items: center;
  align-self: center;
}
</style>
