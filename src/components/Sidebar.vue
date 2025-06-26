<template>
  <aside class="sidebar">
    <div class="about-me">
      <h3>À PROPOS DE MOI</h3>
      <div class="profile-img">
        <!-- <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Profil"
        /> -->
        <img :src="profilImage" alt="Profil" class="profile-image" />
        <!-- <p>Adda Issa Abdoul Razak</p> -->
        <!-- <img src="@/assets/me.jpg" alt="Profil" /> -->
      </div>
      <p>
        <!-- Développeur .NET Senior avec 8 ans d'expérience dans la création d'applications d'entreprise
        robustes et performantes. -->
        Développeur web Spécialiste en architecture logicielle, optimisation des performances et
        bonnes pratiques de développement.
      </p>
      <!-- <p>
        Spécialiste en architecture logicielle, optimisation des performances et bonnes pratiques de
        développement.
      </p> -->
      <!-- <a href="#" class="hire-btn">M'EMBAUCHER</a> -->
    </div>

    <div class="sidebar-widget">
      <h3 class="widget-title">ARTICLES POPULAIRES</h3>
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
      <h3 class="widget-title">CATÉGORIES</h3>
      <ul class="categories-list">
        <li>
          <a href="#">ASP.NET CORE <span>24</span></a>
        </li>
        <li>
          <a href="#">C# <span>32</span></a>
        </li>
        <li>
          <a href="#">ARCHITECTURE <span>18</span></a>
        </li>
        <li>
          <a href="#">TESTS <span>15</span></a>
        </li>
        <li>
          <a href="#">PERFORMANCE <span>9</span></a>
        </li>
        <li>
          <a href="#">SÉCURITÉ <span>7</span></a>
        </li>
        <li>
          <a href="#">ENTITY FRAMEWORK <span>12</span></a>
        </li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3 class="widget-title">NEWSLETTER</h3>
      <p>Recevez les derniers articles et ressources .NET et Spring Boot directement dans votre boîte mail.</p>
      <form class="newsletter-form" @submit.prevent="subscribe">
        <input type="text" placeholder="Votre nom" v-model="name" />
        <input type="email" placeholder="Votre email" required v-model="email" />
        <button type="submit" class="btn">S'ABONNER</button>
      </form>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'pinia'
import { useArticleStore } from '@/stores/articleStore'
import profilImage from '@/assets/me.jpg'
export default {
  name: 'SidebarComponent',
  data() {
    return {
      name: '',
      email: '',
      profilImage: profilImage,
    }
  },
  computed: {
    ...mapState(useArticleStore, ['popularArticles']),
  },
  methods: {
    subscribe() {
      alert(`Merci ${this.name} pour votre abonnement avec l'email: ${this.email}`)
      this.name = ''
      this.email = ''
    },
    navigateToArticle(id) {
      this.$router.push({ name: 'article-detail', params: { id } })
    },
  },
}
</script>
