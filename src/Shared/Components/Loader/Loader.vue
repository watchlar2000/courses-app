<template>
  <div class="loader">
    <p>Loading</p>
    <div class="blob-container">
      <div v-for="div in 3" :key="div" class="blob" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
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
  animation: pulse-black 0.75s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.75);
  }

  75% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(0.75);
  }
}
</style>
