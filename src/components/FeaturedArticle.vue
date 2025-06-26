<template>
  <article class="featured-article" @click="navigateToArticle">
    <div class="article-header">
      <img :src="article.image" :alt="article.title" class="article-image" />
      <div class="article-category">{{ article.category }}</div>
    </div>
    <div class="article-body">
      <div class="article-meta">
        <span><i class="far fa-calendar"></i> {{ article.date }}</span>
        <!-- <span><i class="far fa-user"></i> {{ article.author }}</span> -->
        <!-- <span><i class="far fa-comment"></i> 12 commentaires</span> -->
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
}
</script>
