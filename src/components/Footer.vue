<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>{{ $t('blogTitle') }}</h3>
          <p>{{ $t('blogDescription') }}</p>
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
          <h3>{{ $t('keySkills') }}</h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('advancedCSharp') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('aspNetCore') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('microservices') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('entityFramework') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('azureCloud') }}</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>{{ $t('recentProjects') }}</h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('paymentSystem') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('ecommercePlatform') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('contentApi') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('managementApp') }}</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> {{ $t('dataAnalysis') }}</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>{{ $t('contactTitle') }}</h3>
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

      <!-- <div class="copyright">
        <p>
          &copy; 2023 .NET EXPERT. TOUS DROITS RÉSERVÉS. CONÇU AVEC
          <i class="fas fa-heart" style="color: var(--secondary)"></i> POUR LA COMMUNAUTÉ .NET et
          Spring Boot
        </p>
      </div> -->
    <div class="copyright">
      {{ $t('copyright') }}
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
