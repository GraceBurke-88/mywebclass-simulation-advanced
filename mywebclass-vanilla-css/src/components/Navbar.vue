<template>
  <header>
    <nav>
      <ul>
        <li><a href="#" class="title">MyWebClass.org</a></li>
        <li><a href="#" class="content">Content Template</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: rgb(33, 37, 41);
  max-height: 64px;
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
