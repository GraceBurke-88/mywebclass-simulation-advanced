<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }" class="title"
            >MyWebClass.org</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'content' }" class="content"
            >Content Template</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: rgb(33, 37, 41);
  max-height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
nav {
  margin-inline: auto;
  width: 90%;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.title {
  font-size: 1.25rem;
  color: white;
}
.content {
  color: rgba(255, 255, 255, 0.747);
}
</style>
