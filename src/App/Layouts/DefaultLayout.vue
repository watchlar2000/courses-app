<script setup lang="ts">
import LayoutFooter from '../../Widgets/LayoutFooter';
import LayoutHeader from '../../Widgets/LayoutHeader';
import { getCurrentYear } from './Lib';
</script>

<template>
  <div class="container">
    <layout-header class="header" title="Courses app" />
    <main class="main">
      <slot />
    </main>
    <layout-footer class="footer">
      <template #link>
        <a href="https://github.com/watchlar2000/courses-app.git" target="_black"
          >Source code on Github</a
        >
      </template>
      <template #message>
        &#169; Genesis Front-End School <span>{{ getCurrentYear() }}</span>
      </template>
    </layout-footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 125px auto 100px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  background: --color-background;
  background: -webkit-linear-gradient(to left, var(--color-background), var(--color-background-72));
  background: linear-gradient(to left, var(--color-background), var(--color-background-72));
}

.header {
  grid-area: header;
}

.main {
  align-self: self-start;
  grid-area: main;
  display: grid;
  margin: 0 12px;
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
