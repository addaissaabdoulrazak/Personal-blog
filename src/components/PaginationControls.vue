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

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 60px;
}

.pagination-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: white;
  border: var(--brutal-border);
  box-shadow: var(--brutal-shadow);
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.pagination-btn:hover:not(:disabled) {
  background: var(--primary-dark);
  transform: translateY(-3px);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn.active {
  background: var(--secondary);
  color: var(--dark);
}
</style>
