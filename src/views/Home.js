// src/views/Home.js
import { useArticleStore } from '@/stores/articleStore'
import { storeToRefs } from 'pinia'
import ArticleCard from '@/components/ArticleCard'

export default {
  setup() {
    const articleStore = useArticleStore()
    const { allArticles } = storeToRefs(articleStore)

    return {
      allArticles,
    }
  },
  components: {
    ArticleCard,
  },
}
