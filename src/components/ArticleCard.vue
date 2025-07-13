<template>
  <article
    :id="`article-${article.id}`"
    class="article-card"
    @click="navigateToArticle"
    :class="{ animate: isVisible }"
    ref="articleCard"
  >
    <div class="article-header">
      <img :src="article.image" :alt="article.title" class="article-image" />
      <div class="article-category">{{ translatedCategory }}</div>
    </div>
    <div class="article-body">
      <div class="article-meta">
        <span><i class="far fa-calendar"></i> {{ formattedDate }}</span>
      </div>
      <h2 class="article-title">{{ article.title }}</h2>
      <p class="article-excerpt">{{ article.excerpt }}</p>
      <div class="article-tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import { useArticleStore } from '@/stores/articleStore'

export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useArticleStore()
    const translatedCategory = store.getCategoryName(props.article.category)
    const formattedDate = store.formatDate(props.article.date)
    return {
      translatedCategory,
      formattedDate
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    navigateToArticle() {
      this.$router.push({ name: 'article-detail', params: { id: this.article.id } })
    },
    checkVisibility() {
      if (this.$refs.articleCard) {
        const rect = this.$refs.articleCard.getBoundingClientRect();
        this.isVisible = rect.top < window.innerHeight * 0.9;
      }
    }
  },
  mounted() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkVisibility);
  }
}
</script>

<style scoped>
.article-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.article-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.article-header {
  position: relative;
}

.article-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.article-card:hover .article-image {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  top: 20px;
  right: 0;
  background: #42b983;
  color: white;
  padding: 6px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.article-body {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.article-meta {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.article-meta i {
  margin-right: 6px;
  color: #42b983;
}

.article-title {
  font-size: 1.6rem;
  margin: 0 0 15px 0;
  color: #2d3748;
  line-height: 1.4;
  flex-grow: 1;
}

.article-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1.05rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.tag:hover {
  background: #e2e8f0;
}

/* Optimisations responsive spécifiques */
@media (max-width: 768px) {
  .article-card .article-image {
    height: 180px;
  }

  .article-title {
    font-size: 1.5rem;
  }

  .article-excerpt {
    font-size: 1rem;
  }

  .tag {
    padding: 6px 15px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .article-card .article-image {
    height: 150px;
  }

  .article-title {
    font-size: 1.3rem;
  }

  .article-body {
    padding: 20px;
  }
}
</style>
