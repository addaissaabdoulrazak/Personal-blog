<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import { useArticleStore } from '@/stores/articleStore';
import { watch } from 'vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {
    const store = useArticleStore();

    watch(() => store.currentLanguage, (newLang, oldLang) => {
      if (newLang !== oldLang) {
        // Ajouter une classe au body pour les transitions CSS
        document.body.classList.add('lang-changing');
        setTimeout(() => {
          document.body.classList.remove('lang-changing');
        }, 300);
      }
    });
  }
}
</script>
