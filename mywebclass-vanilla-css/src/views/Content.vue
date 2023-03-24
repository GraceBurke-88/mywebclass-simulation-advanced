<template>
  <div class="container">
    <Sidebar />
    <article>
      <title>Article Title</title>
      <SectionContent :id="2" />
      <SectionContent :id="3" />
      <SectionContent :id="4" />
    </article>
  </div>
</template>

<script setup>
import SectionContent from "../components/SectionContent.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 8fr;
}
</style>
