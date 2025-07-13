<template>
  <article class="featured-article" @click="navigateToArticle">
    <div class="article-header">
      <img :src="article.image" :alt="article.title" class="article-image" />
      <div class="article-category">{{ $t('featuredArticle') }}</div>
    </div>
    <div class="article-body">
      <div class="article-meta">
        <span><i class="far fa-calendar"></i> {{ article.date }}</span>
      </div>
      <h2 class="article-title">{{ $t(article.title) }}</h2>
      <p class="article-excerpt">{{ $t(article.excerpt) }}</p>
      <div class="article-tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'FeaturedArticle',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToArticle() {
      this.$router.push({ name: 'article-detail', params: { id: this.article.id } })
    },
  },
  mounted() {
    this.$el.style.animationDelay = "0s";
  }
}
</script>
