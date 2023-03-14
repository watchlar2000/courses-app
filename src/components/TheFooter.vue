<script setup lang="ts">
function fullYear() {
  return new Date().getFullYear()
}
</script>

<template>
  <footer class="footer">
    <a
      href="https://github.com/watchlar2000/courses-app.git"
      target="_black"
    >Source code on Github</a>
    &#169; <span>{{ fullYear() }}</span>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center
}
</style>
