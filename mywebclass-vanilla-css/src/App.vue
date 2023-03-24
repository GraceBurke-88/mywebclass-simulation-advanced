<script setup>
import Navbar from "./components/Navbar.vue";
import MainCard from "./components/MainCard.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main {
  margin-top: 4.5rem;
}
</style>
