<template>
  <header>
    <h1>Courses App</h1>
    <nav class="nav">
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/about"> About </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 16px;
}
</style>
