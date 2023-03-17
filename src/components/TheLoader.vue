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
  color: hsl(212, 51%, 50%);
}
.blob-container {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 28px;
}

.blob {
  background: hsl(212, 51%, 40%);
  border-radius: 50%;
  box-shadow: hsl(212, 51%, 40%);
  height: 16px;
  width: 16px;
  transform: scale(1);
  animation: pulse-black 1s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 12px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
