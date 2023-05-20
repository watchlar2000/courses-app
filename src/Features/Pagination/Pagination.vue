<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import BaseButton from '../../Shared/Components/Button';
import { Pagination } from '../../Shared/Types/Course';

interface BasePaginationProps {
  maxVisibleButtons: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}

const props = withDefaults(defineProps<BasePaginationProps>(), {
  maxVisibleButtons: Pagination.MaxVisibleButtons,
  perPage: Pagination.ItemsPerPage,
  currentPage: Pagination.CurrentPage,
});

const actualPage = ref<number>(props.currentPage);

const startPage = computed(() => {
  if (isFirstPage.value) {
    return 1;
  }

  if (isLastPage.value) {
    return props.maxVisibleButtons;
  }

  return actualPage.value - 1;
});

const isPageActive = (page: number) => {
  return actualPage.value === page;
};

const pages = computed(() => {
  const range = [];
  let initPage = startPage.value;

  if (startPage.value === props.maxVisibleButtons) {
    initPage = 1;
  }

  for (
    let i = initPage;
    i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === actualPage.value,
    });
  }

  return range;
});

const isFirstPage = computed(() => {
  return actualPage.value === 1;
});

const isLastPage = computed(() => {
  return actualPage.value === props.totalPages;
});

const emit = defineEmits<{
  (e: 'pagechange', page: number): void;
}>();

const onClickFirstPage = () => {
  actualPage.value = 1;
};

const onClickPreviousPage = () => {
  actualPage.value = actualPage.value - 1;
};

const onClickPage = (page: number) => {
  actualPage.value = page;
};

const onClickNextPage = () => {
  actualPage.value = actualPage.value + 1;
};

const onClickLastPage = () => {
  actualPage.value = props.totalPages;
};

watch(actualPage, (newPage) => {
  emit('pagechange', newPage);
});

defineExpose({
  actualPage,
  onClickNextPage,
  onClickPreviousPage,
  onClickFirstPage,
  onClickLastPage,
  onClickPage,
});
</script>

<template>
  <div class="pagination">
    <base-button :disabled="isFirstPage" @click="onClickFirstPage">First</base-button>
    <base-button :disabled="isFirstPage" @click="onClickPreviousPage">Prev</base-button>
    <base-button
      v-for="(page, idx) in pages"
      :key="idx"
      :disabled="page.isDisabled"
      :class="{ active: isPageActive(page.name) }"
      @click="onClickPage(page.name)"
    >
      {{ page.name }}
    </base-button>
    <base-button :disabled="isLastPage" @click="onClickNextPage">Next</base-button>
    <base-button :disabled="isLastPage" @click="onClickLastPage">Last</base-button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  font-size: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;

  button {
    color: var(--color-black-50);
    background: var(--color-background-85);

    &:hover:not(:disabled) {
      background: var(--secondary);
      color: var(--color-background);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .active {
    opacity: 100%;
    background-color: var(--primary-50);
    color: var(--color-text);
  }
}

@media screen and (min-width: 576px) {
  .pagination {
    font-size: 20px;
  }
}
</style>
