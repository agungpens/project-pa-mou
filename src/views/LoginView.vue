<template>
  <div class="container-xxl bg-primary page-"></div>
  <div class="container-xxl py-6">
    <div class="row">
      <div class="col-12">
        <div class="justify-content-center d-flex">
          <img src="img/login.svg" alt="" width="300px" class="img-fluid" />
        </div>
        <div class="card w-50 mx-auto mt-2">
          <div class="card-header text-center">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label"
                  >Username / Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  placeholder="Username / Email ..."
                  autofocus
                />
                <div id="usernameHelp" class="form-text"></div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password.."
                />
              </div>

              <button type="submit" class="btn btn-primary float-end">
                <i class="fas fa-sign-in-alt"></i> Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <p>Hanya <b>Admin</b> yang bisa login di dalam System</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style>
/* nav-item berbeda warna */
.nav-item .nav-link {
  color: rgb(0, 0, 0);
}
</style>
