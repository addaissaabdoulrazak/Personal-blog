<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>.NET EXPERT</h3>
          <p>
            Le blog de référence pour les développeurs .NET / Spring Boot qui souhaitent améliorer
            leurs compétences et adopter les meilleures pratiques.
          </p>
          <div class="social-icons">
            <!-- <a href="#"><i class="fab fa-linkedin-in"></i></a> -->
            <!-- <a href="#"><i class="fab fa-github"></i></a> -->
            <a
              href="https://www.linkedin.com/in/adda-issa-abdoul-razak-096a1a179"
              target="_blank"
              rel="noopener noreferrer"
              title="Visitez mon profil LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/addaissaabdoulrazak"
              target="_blank"
              rel="noopener noreferrer"
              title="Visitez mon GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-medium-m"></i></a>
          </div>
        </div>

        <div class="footer-column">
          <h3>COMPÉTENCES CLÉS</h3>
          <ul class="footer-links">
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> C# Avancé</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> ASP.NET Core</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Architecture Microservices</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Entity Framework</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Cloud Azure</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>PROJETS RÉCENTS</h3>
          <ul class="footer-links">
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Système de paiement</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Plateforme e-commerce</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> API de gestion de contenu</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Application de gestion</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Outil d'analyse de données</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>CONTACT</h3>
          <ul class="footer-links">
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:addaissaabdoulrazak@gmail.com">addaissaabdoulrazak@gmail.com</a>
            </li>
            <li>
              <i class="fab fa-github"></i>
              <a
                href="https://github.com/addaissaabdoulrazak"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/addaissaabdoulrazak
              </a>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/adda-issa-abdoul-razak-096a1a179"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/abdoulrazak-addaissa
              </a>
            </li>
            <!-- <li><i class="fas fa-envelope"></i> addaissaabdoulrazak@gmail.com</li>
            <li><i class="fab fa-github"></i> github.com/addaissaabdoulrazak</li>
            <li>
              <i class="fab fa-linkedin"></i> www.linkedin.com/in/adda-issa-abdoul-razak-096a1a179
            </li> -->
            <!-- <li><i class="fab fa-linkedin"></i> linkedin.com/in/dotnet-expert</li> -->
            <!-- <li><i class="fas fa-map-marker-alt"></i> Paris, France</li> -->
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>
          &copy; 2023 .NET EXPERT. TOUS DROITS RÉSERVÉS. CONÇU AVEC
          <i class="fas fa-heart" style="color: var(--secondary)"></i> POUR LA COMMUNAUTÉ .NET et
          Spring Boot
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
