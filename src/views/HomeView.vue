<template>
  <div>
    <HeroComponent />
    <div class="container main-content">
      <section class="articles" id="articles-section">
        <FeaturedArticle :article="featuredArticle" v-if="featuredArticle" />

        <div v-for="article in paginatedArticles" :key="article.id">
          <ArticleCard :article="article" />
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
            &laquo; Précédent
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="setPage(page)"
            :class="{ active: currentPage === page }"
            class="pagination-button"
          >
            {{ page }}
          </button>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="pagination-button"
          >
            Suivant &raquo;
          </button>
        </div>
      </section>
      <SidebarComponent />
    </div>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useArticleStore } from '@/stores/articleStore'
import HeroComponent from '@/components/Hero.vue'
import FeaturedArticle from '@/components/FeaturedArticle.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import SidebarComponent from '@/components/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    FeaturedArticle,
    ArticleCard,
    SidebarComponent,
  },
  computed: {
    ...mapState(useArticleStore, [
      'featuredArticle',
      'paginatedArticles',
      'totalPages',
      'currentPage',
      'allArticles',
    ]),
  },
  methods: {
    ...mapActions(useArticleStore, ['setPage', 'nextPage', 'prevPage']),
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.pagination-button:hover:not(:disabled) {
  background-color: #f0f0f0;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}
</style>
