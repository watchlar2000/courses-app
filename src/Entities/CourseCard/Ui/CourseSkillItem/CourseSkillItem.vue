<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  skill: string;
}>();

const capitalizedSkill = computed(() => {
  const skill = props.skill;
  return skill.charAt(0).toUpperCase() + skill.slice(1);
});

defineExpose({ capitalizedSkill });
</script>

<template>
  <li class="skill">
    <slot name="icon" />
    <span>
      {{ capitalizedSkill }}
    </span>
  </li>
</template>

<style lang="scss" scoped>
.skill {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 100;
}
</style>
