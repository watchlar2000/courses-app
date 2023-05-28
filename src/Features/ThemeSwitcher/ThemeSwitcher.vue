<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { THEMES_LIST, themeModes } from './Lib/consts';
import { ThemeService } from './Lib/themeService';
import { getCurrentIcon } from './Lib/utils';

const themeService = new ThemeService(themeModes);

const userTheme = ref<string | null>(null);

const displayIcon = computed(() => {
  const icon = getCurrentIcon(THEMES_LIST, userTheme.value);

  if (!icon) {
    return userTheme.value?.slice(0, 1);
  }

  return icon;
});

const nextTheme = () => {
  themeService.next();
  userTheme.value = themeService.get();
};

onMounted(() => {
  userTheme.value = themeService.get();
});

defineExpose({ userTheme, displayIcon, nextTheme });
</script>

<template>
  <div class="icon" @click="nextTheme">
    <span>
      {{ displayIcon }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  position: relative;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  background-color: var(--color-background-variant);
  align-self: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: var(--color-black-0);
  }
}

@media screen and (min-width: 576px) {
  .icon {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
}
</style>
