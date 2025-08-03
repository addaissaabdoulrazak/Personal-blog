<template>

  <aside class="sidebar">
    <div class="about-me">
      <h3>{{ $t('aboutMe') }}</h3>
      <div class="profile-img">
        <img :src="profilImage" alt="Profil" />
      </div>
      <p>{{ $t('aboutText') }}</p>
    </div>

    <div class="sidebar-widget">
      <h3 class="widget-title">{{ $t('popularArticles') }}</h3>
      <div class="popular-posts">
        <div
          v-for="article in popularArticles"
          :key="article.id"
          class="popular-post"
          @click="navigateToArticle(article.id)"
        >
          <img :src="article.image" alt="Post" />
          <div class="popular-post-content">
            <h4>{{ article.title }}</h4>
            <div class="popular-post-meta">{{ article.date }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-widget">
      <h3 class="widget-title">{{ $t('categories') }}</h3>
      <ul class="categories-list">
        <li>
          <a >ASP.NET CORE <span>24</span></a>
        </li>
        <li>
          <a >C# <span>32</span></a>
        </li>
        <li>
          <a >{{ $t('architecture') }} <span>18</span></a>
        </li>
        <li>
          <a >TESTS <span>15</span></a>
        </li>
        <li>
          <a >{{ $t('performance') }} <span>9</span></a>
        </li>
        <li>
          <a >{{ $t('security') }} <span>7</span></a>
        </li>
        <li>
          <a >ENTITY FRAMEWORK <span>12</span></a>
        </li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3 class="widget-title">{{ $t('newsletter') }}</h3>
      <p>{{ $t('newsletterText') }}</p>
      <form class="newsletter-form" @submit.prevent="subscribe">
        <input type="text" :placeholder="$t('name')" v-model="name" />
        <input type="email" :placeholder="$t('email')" required v-model="email" />
        <button type="submit" class="btn">{{ $t('subscribe') }}</button>
      </form>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'pinia'
import { useArticleStore } from '@/stores/articleStore'
import profilImage from '@/assets/me.jpg'
import { toast } from 'vue3-toastify'

export default {
  name: 'SidebarComponent',
  data() {
    return {
      profilImage: profilImage,
      name: '',
      email: '',
    }
  },
  computed: {
    ...mapState(useArticleStore, ['popularArticles']),
  },
  methods: {
    async subscribe() {

      // Validation basique
      if (!this.email || !this.email.includes('@')) {
        toast.error(this.$t('invalidEmail'))
        return
      }

      try {
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Notification de succès
        toast.success(this.$t('subscribeSuccess', {
          name: this.name || 'Visiteur',
          email: this.email
        }), {
          icon: '📬', // Emoji personnalisé
          theme: 'colored',
          position: 'top-center'
        })

        this.name = ''
        this.email = ''
      }  catch {
      // On capture l'erreur sans utiliser la variable
      toast.error(this.$t('subscribeError'))
    }
    },
    navigateToArticle(id) {
      this.$router.push({ name: 'article-detail', params: { id } })
    }
  }
}
</script>

<style scoped>
/* Ajoutez ceci pour harmoniser avec les notifications */
:deep(.vue3-toastify__toast) {
  font-family: 'Votre police', sans-serif;
  border-radius: 8px;
}

:deep(.vue3-toastify__toast--success) {
  background: #41b883;
}

:deep(.vue3-toastify__toast--exit) {
  animation: fadeOut 0.5s ease-out;
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
}

/* Optimisations responsive spécifiques */
@media (max-width: 992px) {
  .sidebar {
    margin-top: 40px;
  }

  .about-me {
    padding: 20px;
  }

  .sidebar-widget {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .profile-img {
    width: 100px;
    height: 100px;
  }

  .about-me h3 {
    font-size: 1.5rem;
  }

  .about-me p {
    font-size: 1rem;
  }

  .widget-title {
    font-size: 1.4rem;
  }

  .categories-list a {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .newsletter-form input {
    padding: 12px;
  }

  .hire-btn {
    padding: 10px 20px;
    font-size: 1rem;
  }
}
</style>
