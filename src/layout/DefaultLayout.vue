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
  padding: 0 18px;
  margin-inline: auto;
  max-width: 900px;
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
}

.footer {
  grid-area: footer;
  align-items: center;
  align-self: center;
}
</style>
