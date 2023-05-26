<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
/* router link if active  */
.nav-link.router-link-exact-active {
  color: #0d6efd;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>
