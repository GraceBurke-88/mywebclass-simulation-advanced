<template>
  <div class="main-card">
    <div class="card-content">
      <h1>Revolutionize your teaching</h1>
      <p>
        Empower your students with cutting-edge software engineering skills.
        Join MyWebClass and discover advanced technologies that will transform
        your teaching and their learning journey.
      </p>
      <button>Start Here</button>
    </div>
    <figure class="site-img">
      <img src="../assets/teacher.gif" alt="keith teaching" />
    </figure>
  </div>
</template>

<script setup></script>

<style scoped>
.main-card {
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 3rem;
  padding: 1rem;
  box-shadow: 15px 15px 60px rgba(0, 0, 0, 0.8);
}
.card-content {
  text-align: left;
}
button {
  background-color: rgb(21, 115, 71);
  color: white;
  font-weight: 700;
}
.site-img img {
  max-width: 100%;
  height: auto;
}
</style>
