<template>
  <div class="container-xxl bg-primary page-header">
    <div class="container text-center">
      <h1 class="text-white animated zoomIn mb-3">Document</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">
            <router-link class="text-white" to="/">Home</router-link>
          </li>

          <li class="breadcrumb-item text-white active" aria-current="page">
            Document
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- Service Start -->
  <div class="container-xxl py-6">
    <div class="container">
      <div
        class="mx-auto text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 600px"
      >
        <div class="d-inline-block border rounded-pill text-primary px-4 mb-3">
          Data Document MOU
        </div>
        <h2 class="mb-5">List semua data momerandum of understanding</h2>
      </div>
      <div class="row g-4">
        <!-- button tambah di kanan -->
        <div class="col-12">
          <div class="d-flex justify-content-end">
            <router-link to="document/add" class="btn btn-primary">
              <i class="fas fa-plus"></i> Tambah
            </router-link>
          </div>
        </div>
        <!-- tabel didalam card responsif -->
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="example"
                  class="table table-striped table-hover table-bordered"
                >
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Aksi</th>
                      <th scope="col">Tahun</th>
                      <th scope="col">Judul</th>
                      <th scope="col">Bidang Kerja Sama</th>
                      <th scope="col">Tanggal Mulai</th>
                      <th scope="col">Tanggal Selesai</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- load data dari api http://127.0.0.1:8000/api/datamou menggunakan axios-->
                    <tr v-for="(item, index) in data" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td class="text-center">
                        <router-link
                          :to="'/document/edit/' + item.id"
                          class="btn btn-primary btn-sm"
                        >
                          <i class="fas fa-edit"></i>
                        </router-link>
                        <button
                          class="btn btn-danger btn-sm mx-2"
                          @click="deleteData(item.id)"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                      <td>{{ item.tahun }}</td>
                      <td>
                        <a href="{{ item.file_pdf }}">{{ item.judul_mou }}</a>
                      </td>
                      <td>{{ item.bidang_kerjasama }}</td>
                      <td>{{ item.tgl_mulai }}</td>
                      <td>{{ item.tgl_selesai }}</td>
                      <!-- if status == expired maka badge danger -->
                      <td>
                        <span
                          v-if="item.status == 'Expired'"
                          class="badge bg-danger"
                          >{{ item.status }}</span
                        >
                        <!-- if status == active maka badge success -->
                        <span
                          v-if="item.status == 'Aktif'"
                          class="badge bg-success"
                          >{{ item.status }}</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->
</template>

<script>
// import jquery and datatable bootsrap
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

// import axios
import axios from "axios";
export default {
  name: "DocumentView",

  data() {
    return {
      // data diambil dari api http://127.0.0.1:8000/api/datamou
      data: [],
    };
  },
  // async mount()
  async mounted() {
    // load data dari api http://127.0.0.1:8000/api/datamou

    const response = await axios.get("http://127.0.0.1:8000/api/datamou");
    this.data = response.data.data;

    // datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  },
};
</script>

<style></style>
