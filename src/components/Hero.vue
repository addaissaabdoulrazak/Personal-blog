<template>
  <section class="hero" id="articles">
    <div class="container hero-content">
      <h2 class="animated-text">{{ $t('heroTitle') }}</h2>
      <p>{{ $t('heroText') }}</p>
      <router-link to="#articles-section" class="btn" id="articles-btn">
        {{ $t('seeArticles') }}
      </router-link>

      <div class="mouse-scroll">
        <div class="mouse">
          <div class="mouse-wheel"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const articlesBtn = document.getElementById('articles-btn');
      if (articlesBtn) {
        articlesBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById('articles-section');
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      }
    }
  }
}
</script>
<style scoped>
/* Optimisations responsive spécifiques */
@media (max-width: 768px) {
  .hero-content {
    padding: 20px 0;
  }

  .mouse-scroll {
    margin-top: 25px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 10px;
  }

  .hero h2 {
    font-size: 1.4rem;
    padding: 6px 12px;
  }

  .hero p {
    font-size: 0.95rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  .mouse {
    width: 20px;
    height: 35px;
  }

  .mouse-wheel {
    width: 3px;
    height: 6px;
  }
}
</style>
