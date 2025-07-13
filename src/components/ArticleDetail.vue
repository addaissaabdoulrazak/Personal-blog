<template>
  <section class="article-full" v-if="article">
    <div class="container">
      <div class="article-full-header">
        <h1 class="article-full-title">{{ article.title }}</h1>
        <div class="article-full-meta">
          <span><i class="far fa-calendar"></i> {{ formattedDate }}</span>
          <span><i class="fas fa-tag"></i> {{ translatedCategory }}</span>
        </div>
        <img
          :src="article.image"
          :alt="article.title"
          class="article-full-image"
          loading="lazy"
          :style="{ backgroundColor: article.image ? 'transparent' : '#f0f0f0' }"
        />
      </div>

      <div class="article-full-content" v-html="article.content"></div>

      <router-link to="/" class="back-to-blog">
        <i class="fas fa-arrow-left"></i> {{ store.t('backToArticles') }}
      </router-link>
    </div>
  </section>
</template>

<script>
import { useArticleStore } from '@/stores/articleStore'

export default {
  name: 'ArticleDetail',
  setup() {
    const store = useArticleStore()
    return { store }
  },
  computed: {
    article() {
      return this.store.getArticleById(parseInt(this.$route.params.id))
    },
    formattedDate() {
      return this.store.formatDate(this.article.date)
    },
    translatedCategory() {
      return this.store.getCategoryName(this.article.category)
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    // Sauvegarder l'article consulté
    this.store.setLastViewedArticle(this.article.id);
  },
  methods: {
  goBack() {
      // Naviguer vers la liste en conservant la position
      this.router.push({ name: 'articles' });
    }
  }
}
</script>

<style scoped>
.article-full {
  padding: 80px 0;
  background: #f9fafb;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-full-header {
  text-align: center;
  margin-bottom: 50px;
}

.article-full-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  line-height: 1.3;
}

.article-full-meta {
  display: flex;
  justify-content: center;
  gap: 25px;
  color: #6c757d;
  margin-bottom: 30px;
  font-size: 1.05rem;
}

.article-full-meta i {
  margin-right: 8px;
  color: #42b983;
}

.article-full-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.article-full-content {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4a5568;
  padding-bottom: 50px;
}

.article-full-content >>> h2 {
  font-size: 1.8rem;
  margin: 50px 0 25px;
  color: #2c3e50;
  padding-bottom: 10px;
  border-bottom: 2px solid #edf2f7;
}

.article-full-content >>> h3 {
  font-size: 1.5rem;
  margin: 40px 0 20px;
  color: #2c3e50;
}

.article-full-content >>> p {
  margin-bottom: 25px;
}

.article-full-content >>> pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 25px 0;
  font-size: 1rem;
  line-height: 1.5;
}

.article-full-content >>> code {
  font-family: 'Fira Code', monospace;
}

.article-full-content >>> ul,
.article-full-content >>> ol {
  margin: 20px 0;
  padding-left: 30px;
}

.article-full-content >>> li {
  margin-bottom: 10px;
}

.article-full-content >>> a {
  color: #42b983;
  text-decoration: none;
}

.article-full-content >>> a:hover {
  text-decoration: underline;
}

.back-to-blog {
  display: inline-flex;
  align-items: center;
  padding: 12px 25px;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 20px;
}

.back-to-blog:hover {
  background: #349a6a;
  transform: translateX(-5px);
}

.back-to-blog i {
  margin-right: 10px;
}

/* Optimisations responsive spécifiques */
@media (max-width: 992px) {
  .article-full-content {
    padding: 0 15px;
  }
}

@media (max-width: 768px) {
  .article-full {
    padding: 50px 0;
  }

  .article-full-header {
    margin-bottom: 30px;
  }

  .article-full-title {
    font-size: 1.8rem;
  }

  .article-full-meta {
    flex-direction: column;
    gap: 10px;
  }

  .article-full-image {
    height: 300px;
  }

  .article-full-content {
    font-size: 1rem;
  }

  .article-full-content >>> h2 {
    font-size: 1.5rem;
    margin: 30px 0 15px;
  }
}

@media (max-width: 480px) {
  .article-full {
    padding: 20px 0;
  }

  .article-full-title {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  .article-full-image {
    height: 180px;
  }

  .back-to-blog {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>
