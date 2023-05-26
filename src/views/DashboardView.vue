<template>
  <div class="container-xxl bg-primary hero-header">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="text-white mb-4 animated zoomIn">
            Momerandum Of Understanding
          </h1>
          <p class="text-white pb-3 animated zoomIn">
            Pengolahan semua data MOU (Momerandum Of Understanding) yang berada
            di Akademi Komunitas Negeri Putra Sang Fajar Blitar
          </p>
          <router-link
            to="document"
            class="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight"
            ><i class="fas fa-eye"></i> Lihat Dokumen</router-link
          >
        </div>
        <div class="col-lg-6 text-center text-lg-start">
          <img class="img-fluid animated zoomIn" src="img/file.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- About Start -->
  <div class="container-xxl py-6">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
          <img class="img-fluid" src="img/about.png" />
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div
            class="d-inline-block border rounded-pill text-primary px-4 mb-3"
          >
            About Us
          </div>
          <h2 class="mb-4">
            Award Wining Consultancy Agency For Your Business
          </h2>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod
          </p>
          <div class="row g-3 mb-4">
            <div class="col-12 d-flex">
              <div
                class="flex-shrink-0 btn-lg-square rounded-circle bg-primary"
              >
                <i class="fa fa-user-tie text-white"></i>
              </div>
              <div class="ms-4">
                <h6>Business Planning</h6>
                <span
                  >Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo</span
                >
              </div>
            </div>
            <div class="col-12 d-flex">
              <div
                class="flex-shrink-0 btn-lg-square rounded-circle bg-primary"
              >
                <i class="fa fa-chart-line text-white"></i>
              </div>
              <div class="ms-4">
                <h6>Financial Analaysis</h6>
                <span
                  >Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo</span
                >
              </div>
            </div>
          </div>
          <router-link class="btn btn-primary rounded-pill py-3 px-5 mt-2" to=""
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: "DashboardView",
};
</script>

<style></style>
