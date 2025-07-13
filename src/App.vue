<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
