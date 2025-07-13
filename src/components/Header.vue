<template>
  <header>
    <div class="container header-container">
      <div class="logo">
        <i class="fas fa-code logo-icon"></i>
        <h1 class="animated-text">{{ $t('appName') }}</h1>
      </div>

      <!-- Menu Hamburger -->
      <div class="hamburger" @click="toggleMenu">
        <i class="fas fa-bars" v-if="!menuActive"></i>
        <i class="fas fa-times" v-else></i>
      </div>

      <nav :class="{ active: menuActive }">
        <ul>
          <li>
            <router-link to="/" class="nav-link" @click="closeMenu">
              <i class="fas fa-home"></i> {{ $t('home') }}
            </router-link>
          </li>
          <li>
            <router-link to="/#articles-section" class="nav-link" @click="closeMenu">
              <i class="fas fa-file-alt"></i> {{ $t('articles') }}
            </router-link>
          </li>
          <li>
            <a href="mailto:addaissaabdoulrazak@gmail.com" @click="closeMenu">
              <i class="fas fa-envelope"></i> {{ $t('contact') }}
            </a>
          </li>
          <li>
            <button @click="changeLanguage" class="language-switcher">
              {{ currentLanguage === 'fr' ? 'EN' : 'FR' }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { useArticleStore } from '@/stores/articleStore'

export default {
  name: 'HeaderComponent',
  setup() {
    const articleStore = useArticleStore()
    return { articleStore }
  },
  data() {
    return {
      menuActive: false,
      currentLanguage: 'fr'
    }
  },
  methods: {

    toggleMenu(e) {
     e.stopPropagation(); // Ajout crucial
      this.menuActive = !this.menuActive;
      document.body.style.overflow = this.menuActive ? 'hidden' : 'auto';
    },
    handleClickOutside(e) {
  if (this.menuActive && !this.$el.contains(e.target)) {
    this.closeMenu();
  }
},

    closeMenu() {
      this.menuActive = false;
      document.body.style.overflow = 'auto';
    },
    changeLanguage() {
      // const newLang = this.currentLanguage === 'fr' ? 'en' : 'fr';
      // this.$i18n.locale = newLang;
      // this.currentLanguage = newLang;
      // localStorage.setItem('userLanguage', newLang);
      // this.closeMenu();
         const newLang = this.currentLanguage === 'fr' ? 'en' : 'fr';

      // Mettre à jour VUE-I18N
      this.$i18n.locale = newLang;

      // Mettre à jour PINIA STORE
      this.articleStore.setLanguage(newLang);

      this.currentLanguage = newLang;
      localStorage.setItem('userLanguage', newLang);
      this.closeMenu();
    }
  },
  mounted() {
    // Récupérer la langue depuis localStorage
    // const savedLang = localStorage.getItem('userLanguage');
    // if (savedLang) {
    //   this.$i18n.locale = savedLang;
    //   this.currentLanguage = savedLang;

    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) {
      // Synchroniser les deux systèmes
      this.$i18n.locale = savedLang;
      this.articleStore.setLanguage(savedLang);
      this.currentLanguage = savedLang;
    }

    document.addEventListener('click', (e) => {
      const header = this.$el;
      const isClickInside = header.contains(e.target);

      if (!isClickInside) {
        this.closeMenu();
      }
    });
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
  document.removeEventListener('click', this.handleClickOutside);
}
}
</script>

<style scoped>
/* Styles pour le menu hamburger */
.hamburger {
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;
  z-index: 1001;
}

.hamburger:hover {
  transform: scale(1.1);
}

/* Navigation mobile */
@media (max-width: 992px) {
  .hamburger {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: var(--primary-dark);
    z-index: 1000;
    transition: left 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
  }

  nav.active {
    left: 0;
  }

  nav ul {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  nav a {
    font-size: 1.5rem;
    padding: 12px 25px;
    display: block;
    text-align: center;
  }

  .header-container {
    position: relative;
  }
}

.language-switcher {
  background: var(--secondary);
  color: var(--dark);
  padding: 8px 15px;
  border: var(--brutal-border);
  box-shadow: var(--brutal-shadow);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
}

.language-switcher:hover {
  background: white;
  transform: translateY(-3px);
}

@media (max-width: 480px) {
  nav a {
    font-size: 1.3rem;
    padding: 10px 20px;
  }

  .logo h1 {
    font-size: 1.5rem;
  }

  .language-switcher {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
