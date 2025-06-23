<template>
  <section class="article-full">
    <div class="container">
      <div class="article-full-header">
        <h1 class="article-full-title">{{ article.title }}</h1>
        <div class="article-full-meta">
          <span><i class="far fa-calendar"></i> {{ article.date }}</span>
          <span><i class="far fa-user"></i> {{ article.author }}</span>
          <span><i class="fas fa-tag"></i> {{ article.category }}</span>
        </div>
        <img :src="article.image" :alt="article.title" class="article-full-image" />
      </div>

      <div class="article-full-content" v-html="article.content"></div>

      <router-link to="/" class="back-to-blog"
        ><i class="fas fa-arrow-left"></i> Retour aux articles</router-link
      >
    </div>
  </section>
</template>

<script>
import { useArticleStore } from '@/stores/articleStore'

export default {
  name: 'ArticleDetail',
  computed: {
    article() {
      const store = useArticleStore()
      return store.getArticleById(parseInt(this.$route.params.id))
    },
  },
}
</script>
