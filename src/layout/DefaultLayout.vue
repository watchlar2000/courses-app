<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="layout">
    <the-header class="header" />
    <main class="main">
      <slot />
    </main>
    <the-footer class="footer" />
  </div>
</template>  

<style lang="scss" scoped>
.layout {
  height: 100vh;
  padding: 0 18px;
  background-color: rgba(255, 0, 0, 0.21);
  margin-inline: auto;
  max-width: 900px;
  display: grid;
  grid-template-rows: 100px auto 65px;
  grid-template-areas: 
    "header"
    "main"
    "footer"
  ;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
  background-color: yellow;
}

.footer {
  grid-area: footer;
  align-items: center;
  align-self: center;
}
</style>