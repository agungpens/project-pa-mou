<template>
  <!-- Footer Start -->
  <div
    class="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
    data-wow-delay="0.1s"
    style="margin-top: 6rem"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Media Sosial</h5>

          <div class="d-flex pt-2">
            <a
              class="btn btn-outline-light btn-social"
              href="https://www.facebook.com/AKNegeriBlitar/"
              target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              class="btn btn-outline-light btn-social"
              href="https://www.youtube.com/channel/UCJEUpfeXtEb9Ie5v8yW-wHQ"
              target="_blank"
              ><i class="fab fa-youtube"></i
            ></a>
            <a
              class="btn btn-outline-light btn-social"
              href="https://www.instagram.com/akblitar/"
              target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Alamat</h5>
          <p>
            <i class="fa fa-map-marker-alt me-3"></i>Jl dr. Sutomo No. 29 Kota
            Blitar,
          </p>
          <p><i class="fa fa-phone-alt me-3"></i>0342-814644</p>
          <p><i class="fa fa-envelope me-3"></i>humas@akb.ac.id</p>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Tautan Luar</h5>

          <a
            class="btn btn-link"
            href="http://www.ristekdikti.go.id/"
            target="_blank"
            >Kemenristekdikti</a
          >
          <a
            class="btn btn-link"
            href="https://www.kemdikbud.go.id/"
            target="_blank"
            >Kemendikbud</a
          >
          <a
            class="btn btn-link"
            href="http://www.blitarkota.go.id/"
            target="_blank"
            >Pemkot Blitar</a
          >
          <a
            class="btn btn-link"
            href="http://forlap.ristekdikti.go.id/"
            target="_blank"
            >Forlap</a
          >
          <a
            class="btn btn-link"
            href="https://pddikti.kemdikbud.go.id/"
            target="_blank"
            >PDDIKTI</a
          >
          <a
            class="btn btn-link"
            href="http://simlitabmas.ristekdikti.go.id/"
            target="_blank"
            >Simlitabmas</a
          >
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Kampus</h5>
          <router-link to="/" class="btn btn-lg btn-light btn-lg-square">
            <img
              src="img/Lambang-AK_15-juni-2017_edit.png"
              alt="Logo"
              width="40"
            />
          </router-link>
          <div class="position-relative w-100 mt-3">
            <p>Akademi Komuitas Negeri Putra Sang Fajar Blitar</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;
            <router-link class="border-bottom" to="/"
              >Pengolahan Data MOU</router-link
            >, AKN Putra Sang Fajar Blitar

            <br />Develop By:
            <a
              class="border-bottom"
              href="https://akb.ac.id/aknpsf/"
              target="_blank"
              >AKN-PSF</a
            >
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <router-link to="/">
                <i class="fas fa-home"></i> Home</router-link
              >
              <router-link to="document">
                <i class="fas fa-folder-open"></i> Document</router-link
              >
              <router-link to="login">
                <i class="fas fa-sign-in-alt"></i> Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
