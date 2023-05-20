<template>
  <footer class="footer">
    <p><slot name="link"></slot></p>
    <p><slot name="message">Default footer</slot></p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  margin-inline: auto;
}

@media screen and (min-width: 576px) {
  .footer {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>
