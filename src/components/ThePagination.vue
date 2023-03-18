<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  maxVisibleButtons: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}>();

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }

  if (props.currentPage === props.totalPages) {
    return props.maxVisibleButtons;
  }

  return props.currentPage - 1;
});

const isPageActive = (page: number) => {
  return props.currentPage === page;
};

const pages = computed(() => {
  const range = [];
  let initPage;

  if (startPage.value === props.maxVisibleButtons) {
    initPage = 1;
  } else {
    initPage = startPage.value;
  }

  for (
    let i = initPage;
    i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const emit = defineEmits<{
  (e: 'pagechange', page: number): void;
}>();

const onClickFirstPage = () => {
  emit('pagechange', 1);
};

const onClickPreviousPage = () => {
  const prevPage = props.currentPage - 1;
  emit('pagechange', prevPage);
};

const onClickPage = (page: number) => {
  emit('pagechange', page);
};

const onClickNextPage = () => {
  const nextPage = props.currentPage + 1;
  emit('pagechange', nextPage);
};

const onClickLastPage = () => {
  emit('pagechange', props.totalPages);
};
</script>

<template>
  <ul class="pagination">
    <li>
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
    </li>
    <li>
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">Prev</button>
    </li>
    <li v-for="(page, idx) in pages" :key="idx">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>
    <li>
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">Next</button>
    </li>
    <li>
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">Last</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 12px;
  justify-content: center;

  .active {
    background-color: var(--primary);
    color: var(--color-background-secondary);
  }
}
</style>
