<template>
    <div class="container-fluid">
        <header role="banner" class="is-fixed-top">
            <nav role="navigation" aria-label="Main navigation" class="navbar is-dark">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">MyWebClass.org</a>
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarCollapse">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarCollapse" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item" href="content.html">Content Template</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
  /* Add any additional styles specific to the Header component here */
</style>