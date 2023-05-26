<template>
  <!-- Navbar & Hero Start -->
  <div class="container-xxl position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <router-link to="/" class="btn btn-lg btn-light btn-lg-square">
        <img src="img/Lambang-AK_15-juni-2017_edit.png" alt="Logo" width="40" />
      </router-link>
      <router-link to="/" class="navbar-brand p-0">
        <h1 class="m-0 mx-3">AKNPSF</h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <router-link to="/" class="nav-item nav-link">
            <i class="fas fa-home"></i> Home
          </router-link>
          <router-link to="document" class="nav-item nav-link">
            <i class="fas fa-folder-open"></i> Document
          </router-link>

          <a
            href="https://akb.ac.id/aknpsf/"
            target="_blank"
            class="nav-item nav-link"
            ><i class="fas fa-school"></i> Tentang AKN</a
          >
        </div>
        <router-link
          to="login"
          class="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5"
        >
          <i class="fas fa-sign-in-alt"></i> Login
        </router-link>
      </div>
    </nav>
  </div>
  <!-- Navbar & Hero End -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
