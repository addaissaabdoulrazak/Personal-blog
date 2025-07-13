<template>
  <div class="pagination">
    <button
      class="pagination-btn"
      :disabled="currentPage === 1"
      @click="$emit('page-changed', currentPage - 1)"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="pagination-btn"
      :class="{ active: currentPage === page }"
      @click="$emit('page-changed', page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination-btn"
      :disabled="currentPage === totalPages"
      @click="$emit('page-changed', currentPage + 1)"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationControls',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  emits: ['page-changed'],
}
</script>
