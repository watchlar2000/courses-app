<template>
  <div class="loader">
    <p>Loading</p>
    <div class="blob-container">
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  align-self: center;
  font-size: 28px;
  color: var(--primary-50);
}
.blob-container {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 28px;
}

.blob {
  background: var(--primary);
  border-radius: 50%;
  box-shadow: var(--primary);
  height: 16px;
  width: 16px;
  transform: scale(1);
  animation: pulse-black 1s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 var(--color-black-50);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 12px var(--color-black-0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 var(--color-black-0);
  }
}
</style>
