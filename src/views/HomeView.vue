<template>
  <div>
    <HeroComponent />
    <div class="container main-content">
      <section class="articles" id="articles-section" ref="articlesSection">
        <FeaturedArticle :article="featuredArticle" v-if="featuredArticle" />

        <div v-for="article in paginatedArticles" :key="article.id">
          <ArticleCard :article="article" />
        </div>

        <PaginationControls
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="setPage"
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
import { onMounted, ref } from 'vue';
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
    const articlesContainer = ref(null);

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

    return { articlesContainer };
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
    scrollToArticles() {
      if (this.$route.hash === '#articles-section') {
        this.$nextTick(() => {
          const el = document.getElementById('articles-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  },
  mounted() {
    this.scrollToArticles();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    $route() {
      this.scrollToArticles();
    },
    watch: {
    // Réagir au changement de langue
    'articleStore.currentLanguage'() {
      this.setPage(1) // Réinitialiser la pagination
    }
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
