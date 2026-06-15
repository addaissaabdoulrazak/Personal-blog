<template>
  <div class="projects-page">
    <div class="container">
      <h1 class="page-title">{{ $t('projects.title') }}</h1>
      <p class="page-subtitle">{{ $t('projects.subtitle') }}</p>

      <!-- Projet Takara -->
      <div class="project-card">
        <div class="project-header">
          <h2 class="project-name">Takara – SaaS EdTech</h2>
          <div class="project-links">
            <a :href="takaraVideoUrl" target="_blank" rel="noopener noreferrer" class="video-link">
              <i class="fab fa-youtube"></i> {{ $t('projects.watchDemo') }}
            </a>
            <a href="https://github.com/addaissaabdoulrazak" target="_blank" rel="noopener noreferrer" class="github-link">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <div class="project-content">
          <div class="video-container">
            <iframe
              :src="takaraEmbedUrl"
              title="Takara - Démo complète"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div class="project-description">
            <p>Takara est une plateforme SaaS de gestion scolaire multi-établissements. J’en assure la conception et le lead technique. L’application couvre désormais : la gestion des élèves, emplois du temps, notes et bulletins, un module de facturation (frais de scolarité et inscriptions), la génération de cartes d’étudiant avec QR code pour connexion sécurisée, ainsi que des fonctionnalités d’import/export (masses de données). L’architecture est full-stack .NET 8 / Vue.js.</p>
            <div class="tech-stack">
              <span v-for="tech in takaraTechStack" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-features">
              <h4>{{ $t('projects.features') }}</h4>
              <ul>
                <li v-for="feature in takaraFeatures" :key="feature">{{ $t(feature) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!-- Projet NexaShop - Architecture -->
<div class="project-card">
  <div class="project-header">
    <h2 class="project-name">NexaShop – Architecture .NET 8</h2>
  </div>
  <div class="project-description">
    <p>Conception d’une architecture modulaire en couches (Core, Infrastructure, Web) pour une plateforme e-commerce. Documentation complète disponible.</p>
    <div class="tech-stack">
      <span class="tech-tag">.NET 8</span>
      <span class="tech-tag">Clean Architecture</span>
      <span class="tech-tag">Docker</span>
    </div>
    <router-link to="/architecture/nexashop" class="btn-docs">
      📐 Voir la documentation technique
    </router-link>
  </div>
</div>
      <!-- Tu peux ajouter d'autres projets ici (ExamSchedulingPlatform, e-commerce, etc.) -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      takaraVideoUrl: 'https://www.youtube.com/watch?v=tCZN8tKKCbI',
      takaraEmbedUrl: 'https://www.youtube.com/embed/tCZN8tKKCbI?mute=1&autoplay=1',      takaraTechStack: ['.NET 8', 'ASP.NET Core', 'Vue 3', 'Pinia', 'PostgreSQL', 'Docker'],
      takaraFeatures: [
        'projects.takara.feature1', // multi-établissements
        'projects.takara.feature2', // emplois du temps
        'projects.takara.feature3', // notes et bulletins
        'projects.takara.feature4', // facturation (frais scolaires + inscriptions)
        'projects.takara.feature5', // cartes étudiant avec QR code
        'projects.takara.feature6'  // import/export CSV/Excel
      ]
    }
  }
}
</script>

<style scoped>
.projects-page {
  padding: 60px 0;
  background: #f9fafb;
  min-height: 100vh;
}

.page-title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
}

.page-subtitle {
  text-align: center;
  color: #4a5568;
  margin-bottom: 50px;
  font-size: 1.2rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 50px;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-header {
  background: #2c3e50;
  color: white;
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.project-name {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.project-links a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.project-links a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.video-link i, .github-link i {
  margin-right: 8px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.project-description {
  padding: 30px;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 20px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
}

.tech-tag {
  background: #edf2f7;
  color: #2d3748;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-features h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.project-features ul {
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.project-features li {
  padding-left: 24px;
  position: relative;
  margin-bottom: 8px;
  color: #4a5568;
}

.project-features li::before {
  content: "✓";
  color: #42b983;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-page {
    padding: 40px 0;
  }
  .page-title {
    font-size: 2rem;
  }
  .project-header {
    flex-direction: column;
    text-align: center;
  }
  .project-links a {
    margin: 0 10px;
  }
  .project-name {
    font-size: 1.5rem;
  }
  .project-description {
    padding: 20px;
  }
  .project-features ul {
    grid-template-columns: 1fr;
  }
}
.btn-outline, .btn-docs {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #42b983;
  color: #42b983;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-outline:hover, .btn-docs:hover {
  background: #42b983;
  color: white;
}
</style>
