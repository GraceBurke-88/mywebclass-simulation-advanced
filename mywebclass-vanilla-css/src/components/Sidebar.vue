<template>
  <aside>
    <div class="breadcrumbs">
      <p><RouterLink to="/">Home</RouterLink>/ Privacy Policy</p>
    </div>
    <div class="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><RouterLink to="#section2" />Article Title</li>
        <li><RouterLink to="#section2" />Section 2</li>
        <li><RouterLink to="#section3" />Section 3</li>
        <li><RouterLink to="#section4" />Section 4</li>
      </ul>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
aside {
  padding: 0 2rem 2rem;
}
li {
  list-style: none;
}

.sidebar {
  background-color: rgb(248, 249, 250);
}
</style>
