<template>
  <section class="hero" id="articles">
    <div class="container hero-content">
      <h2>WEB DEVELOPER</h2>
      <p>
        Je partage mes connaissances en Développement et montre comment je crée des applications
        robustes, performantes et maintenables. Mon portfolio démontre mon expertise technique et ma
        passion pour le développement.
      </p>
      <router-link to="#articles-section" class="btn" id="articles-btn">
        Voir les articles
      </router-link>
      <!-- <a href="#" class="btn btn-primary">Télécharger mon CV</a> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
}
</script>
