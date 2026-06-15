<template>
  <div class="architecture-page">
    <div class="container">
      <!-- En-tête -->
      <div class="page-header">
        <h1>Documentation technique</h1>
        <p class="subtitle">Architecture backend de NexaShop – .NET 8, couches Core / Infrastructure / Web</p>
        <router-link to="/projects" class="back-link">
          <i class="fas fa-arrow-left"></i> Retour aux projets
        </router-link>
      </div>

      <!-- Contenu principal -->
      <div class="architecture-content">
        <h2>Vue d'ensemble</h2>
        <p>L'architecture backend de NexaShop est organisée en trois principaux dossiers : <strong>Core</strong>, <strong>Infrastructure</strong> et <strong>Web</strong>. Cette structure suit une approche modulaire et en couches, facilitant la séparation des responsabilités, la maintenabilité et l'évolutivité de l'application.</p>

        <h2>1. Dossier Core</h2>
        <p>Le dossier Core contient la logique métier fondamentale, les modèles de domaine, les exceptions, les interfaces et les contrats partagés. Il est subdivisé en plusieurs sous-projets :</p>
        <ul>
          <li><strong>NexaShopify.Core</strong> – Logique métier principale, exceptions personnalisées (NotFoundException, UnauthorizedException), modèles de réponse, dossier Apps/ pour l’organisation par modules métiers.</li>
          <li><strong>NexaShopify.Core.Common</strong> – Modèles et objets partagés entre plusieurs modules.</li>
          <li><strong>NexaShopify.Core.Identity</strong> – Gestion des utilisateurs et rôles (Handlers/, Models/, Enums/).</li>
          <li><strong>NexaShopify.Core.SharedKernel</strong> – Interfaces, exceptions et éléments transverses réutilisables.</li>
          <li><strong>NexaShopify.Core.Shop</strong> – Logique métier liée aux boutiques, produits, catégories (Handlers/, Helpers/, Models/, Enums/).</li>
        </ul>
        <p><strong>Rôle principal :</strong> Définit le cœur métier, les entités, les règles de gestion et les contrats d’interface. Ne dépend d’aucune autre couche.</p>

        <h2>2. Dossier Infrastructure</h2>
        <p>Le dossier Infrastructure implémente les détails techniques et l’accès aux données :</p>
        <ul>
          <li><strong>Infrastructure.Data</strong> – Accès aux données (DAL) : classes d’accès (Access/), entités de base de données (Entities/), dossiers spécialisés (Store/, COR/), interfaces pour les contrats d’accès.</li>
          <li><strong>Infrastructure.Service</strong> – Services techniques transverses : Logging/, Utils/. </li>
        </ul>
        <p><strong>Rôle principal :</strong> Implémente les interfaces définies dans le Core, gère la persistance, l’accès aux bases de données et les services externes. Peut dépendre du Core, mais jamais l’inverse.</p>

        <h2>3. Dossier Web</h2>
        <p>Le dossier Web contient l’API principale exposée aux clients :</p>
        <ul>
          <li><strong>NexaShopify.API</strong> – Projet ASP.NET Core Web API. Contient les Controllers/ organisés par domaine (StoreManagement, Settings, ManagementOverview…), Models/ pour les DTO, Extensions/, Areas/, et fichiers de configuration (appsettings.json, nlog.config).</li>
        </ul>
        <p><strong>Rôle principal :</strong> Expose les endpoints RESTful, orchestre les appels entre Core et Infrastructure, gère la sécurité, la validation et la sérialisation.</p>

        <h2>4. Relations entre les couches</h2>
        <ul>
          <li>Web dépend de Core et Infrastructure</li>
          <li>Infrastructure dépend de Core</li>
          <li>Core est totalement indépendant</li>
        </ul>
        <p><strong>Avantages :</strong> Tests unitaires facilités (Core testable indépendamment), remplacement aisé de l’implémentation technique, API claire et évolutive.</p>

        <h2>5. Évolutivité vers une architecture microservices</h2>
        <p>L’architecture actuelle, bien que monolithique, est conçue avec une séparation claire des responsabilités. Elle facilite une migration future vers des microservices :</p>
        <ul>
          <li><strong>Core indépendant</strong> – La logique métier peut être extraite en services autonomes.</li>
          <li><strong>Dépendances inversées</strong> – Les interfaces permettent de remplacer des appels internes par des appels à des services externes.</li>
          <li><strong>API modulaire</strong> – Les contrôleurs par domaine peuvent être divisés en plusieurs petits services.</li>
        </ul>
        <p><strong>Approche possible :</strong> Identifier les bounded contexts (Identity, Shop, etc.), extraire progressivement chaque module, adapter la couche Web en API Gateway.</p>

        <h2>6. Schéma simplifié</h2>
        <pre class="schema">
[Web (API)]
     |
     v
[Core (Métier, Contrats)]
     ^
     |
[Infrastructure (Données, Services)]</pre>

        <h2>7. Bonnes pratiques appliquées</h2>
        <ul>
          <li>Séparation stricte des responsabilités (chaque couche a un rôle précis)</li>
          <li>Utilisation des interfaces pour l’injection de dépendances et la testabilité</li>
          <li>Organisation modulaire pour faciliter l’évolution et la maintenance</li>
        </ul>

        <h2>8. Conclusion</h2>
        <p>Cette architecture modulaire et en couches permet à NexaShop d’être robuste, évolutif et facilement maintenable, tout en respectant les standards modernes du développement .NET. La conception actuelle prépare également une éventuelle migration vers une architecture microservices si les besoins métier l’exigent.</p>
      </div>

      <!-- Pied de page avec lien PDF optionnel -->
      <div class="pdf-note">
        <i class="fas fa-file-pdf"></i>
        <a href="/docs/nexa-architecture.pdf" target="_blank" v-if="false">Télécharger cette documentation au format PDF</a>
        <!-- Vous pouvez activer le lien ci-dessus en plaçant le PDF dans public/docs/ -->
        <p>Documentation technique complète – Conçue par Adda Issa Abdoul Razak.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArchitectureView',
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.architecture-page {
  padding: 60px 0;
  background: #f9fafb;
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 20px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s;
}

.back-link:hover {
  transform: translateX(-4px);
  text-decoration: underline;
}

.architecture-content {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.architecture-content h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e2e8f0;
}

.architecture-content h2:first-of-type {
  margin-top: 0;
}

.architecture-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.2rem;
}

.architecture-content ul {
  margin: 1rem 0 1.5rem 1.8rem;
  list-style: disc;
}

.architecture-content li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: #4a5568;
}

.architecture-content strong {
  color: #2c3e50;
}

.schema {
  background: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  margin: 20px 0;
}

.pdf-note {
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #718096;
  border-top: 1px solid #e2e8f0;
  padding-top: 25px;
}

.pdf-note i {
  color: #e53e3e;
  margin-right: 6px;
}

.pdf-note a {
  color: #42b983;
  text-decoration: none;
}

.pdf-note a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .architecture-page {
    padding: 40px 0;
  }
  .page-header h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .architecture-content {
    padding: 20px;
  }
  .architecture-content h2 {
    font-size: 1.5rem;
  }
}
</style>
