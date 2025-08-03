<template>
  <div>
    <HeroComponent @scroll-to-articles="scrollToArticlesSection" />
    <div class="container main-content">
      <section class="articles" id="articles-section" ref="articlesSection">
    <FeaturedArticle
        v-if="shouldShowFeaturedArticle"
        :article="featuredArticle"
      />
        <div v-for="article in paginatedArticles" :key="article.id">
          <ArticleCard :article="article" />
        </div>

        <PaginationControls
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="handlePageChange"
        />
      </section>
      <SidebarComponent />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useArticleStore } from '@/stores/articleStore'
import HeroComponent from '@/components/Hero.vue'
import FeaturedArticle from '@/components/FeaturedArticle.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import SidebarComponent from '@/components/Sidebar.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { onMounted, ref, nextTick } from 'vue'; // Ajout de nextTick
// import { scrollToTop } from '@/utils/scroll';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    FeaturedArticle,
    ArticleCard,
    SidebarComponent,
    PaginationControls
  },

  setup() {
    const store = useArticleStore();
    const articlesSection = ref(null);

    onMounted(() => {
      if (store.lastViewedArticleId) {
        scrollToLastViewedArticle();
      }
    });

    const scrollToLastViewedArticle = () => {
      setTimeout(() => {
        const articleElement = document.getElementById(`article-${store.lastViewedArticleId}`);
        if (articleElement) {
          articleElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Ajouter un effet visuel
          articleElement.classList.add('highlighted');
          setTimeout(() => {
            articleElement.classList.remove('highlighted');
            store.clearLastViewedArticle();
          }, 2000);
        }
      }, 100);
    };

    return { articlesSection };
  },

  computed: {
    ...mapState(useArticleStore, [
      'featuredArticle',
      'paginatedArticles',
      'totalPages',
      'currentPage',
      'allArticles',
      'currentLanguage'
    ]),

       shouldShowFeaturedArticle() {
      return this.featuredArticle && this.currentPage === 1;
    },

    filteredPaginatedArticles() {
      // Exclure l'article vedette de la liste paginée
      return this.paginatedArticles.filter(article =>
        this.featuredArticle ? article.id !== this.featuredArticle.id : true
      );
    }
  },

  methods: {
    ...mapActions(useArticleStore, ['setPage', 'nextPage', 'prevPage']),

    scrollToArticlesSection() {
      if (this.$refs.articlesSection) {
        this.$refs.articlesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },

    // Méthode modifiée pour gérer le changement de page
    async handlePageChange(newPage) {
      // Mettre à jour la page dans le store
      this.setPage(newPage);

      // Attendre que le DOM soit mis à jour avec les nouveaux articles
      await nextTick();

      // Défiler vers le haut après un court délai pour s'assurer du rendu
      setTimeout(() => {
        // scrollToTop('smooth');
        this.scrollToArticlesSection();
      }, 100);
    }
  },

  watch: {
    // currentLanguage() {
    //   this.setPage(1);
    //   // Ajouter un défilement après changement de langue
    //   setTimeout(() => {
    //     scrollToTop('smooth');
    //   }, 300);
    // },

    $route(to) {
      if (to.hash === '#articles-section') {
        this.scrollToArticlesSection();
      }
    }
  },

  mounted() {
    if (this.$route.hash === '#articles-section') {
      // Ajouter un délai pour s'assurer que la section est rendue
      setTimeout(() => {
        this.scrollToArticlesSection();
      }, 300);
    }
  }
}
</script>

<style scoped>
/* Optimisations responsive spécifiques */
@media (max-width: 768px) {
  .main-content {
    gap: 20px;
  }

  .articles {
    margin-bottom: 30px;
  }
}
.highlighted {
  box-shadow: 0 0 0 3px #42b983;
  transition: box-shadow 0.3s ease;
}
</style>
