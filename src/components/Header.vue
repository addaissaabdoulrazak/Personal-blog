<template>
  <header>
    <div class="container header-container">
      <div class="logo">
        <i class="fas fa-code logo-icon"></i>
        <h1>WEB <span>DEVELOPER</span></h1>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/" class="nav-link"><i class="fas fa-home"></i> Accueil</router-link>
          </li>
          <li>
            <router-link to="/" class="nav-link"
              ><i class="fas fa-file-alt"></i> Articles</router-link
            >
          </li>
          <!-- <li>
            <a href="#"><i class="fas fa-project-diagram"></i> Projets</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-briefcase"></i> CV</a>
          </li> -->
          <li>
            <a href="mailto:addaissaabdoulrazak@gmail.com"
              ><i class="fas fa-envelope"></i> Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>
