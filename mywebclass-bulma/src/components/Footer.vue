<template>
    <footer class="footer py-5">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h5 class="title is-5">About Us</h5>
                    <ul>
                        <li><a href="story.html" class="has-text-grey">Our Story</a></li>
                        <li><a href="privacy.html" class="has-text-grey">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="column is-3">
                    <h5 class="title is-5">Share on Social Media</h5>
                    <div class="buttons">
                        <a href="#" class="button is-text"><i class="bi bi-linkedin me-2"></i></a>
                        <a href="#" class="button is-text"><i class="bi bi-twitter me-2"></i></a>
                        <a href="#" class="button is-text"><i class="bi bi-facebook me-2"></i></a>
                    </div>
                </div>
                <div class="column is-5 is-offset-1">
                    <h5 class="title is-5">Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="field is-grouped">
                        <div class="control is-expanded">
                            <input id="newsletter1" type="text" class="input" placeholder="Email address">
                        </div>
                        <div class="control">
                            <button class="button is-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  /* Add any additional styles specific to the Footer component here */
  </style>
  