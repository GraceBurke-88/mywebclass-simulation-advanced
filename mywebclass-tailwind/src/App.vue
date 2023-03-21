<script>
import Header from "./components/Header.vue";
import HomeContent from "./components/HomeContent.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    HomeContent,
    Footer,
  },
};
</script>

<template>
  <body class="pt-5">
    <div class="container mx-auto">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  </body>
</template>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
