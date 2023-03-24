<template>
  <footer>
    <div>
      <p>About us</p>
      <p>Our Story</p>
      <p>Privacy Policy</p>
    </div>
    <div>
      <p>Share on Social Media</p>
      <p>icons</p>
    </div>
    <div class="newsletter">
      <p>Subscribe to our newsletter</p>
      <p>Monthly digest of what's new and exciting from us.</p>
      <div class="subscribe-field">
        <input type="text" name="" id="" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
}
.newsletter {
  display: flex;
  flex-direction: column;
}
.subscribe-field {
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 1rem;
}
input {
  border-radius: 0.25rem;
}
</style>
