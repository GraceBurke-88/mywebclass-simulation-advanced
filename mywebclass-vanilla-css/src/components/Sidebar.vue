<template>
  <aside>
    <div class="breadcrumbs">
      <p><RouterLink to="/">Home</RouterLink>/ Privacy Policy</p>
    </div>
    <div class="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#section2">Article Title</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
        <li><a href="#section4">Section 4</a></li>
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
  cursor: pointer;
}

.sidebar {
  background-color: rgb(248, 249, 250);
}
</style>
