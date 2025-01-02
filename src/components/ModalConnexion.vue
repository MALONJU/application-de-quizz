<template>
  <br>
  <Navbar></Navbar>
 
 <section class="vh-80 bg-gray">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Se connecter avec</p>

            
              <font-awesome-icon :icon="['fab', 'twitter']" class="blue-icon" />

              <font-awesome-icon :icon="['fab', 'git']" class="blue-icon" />
           
              <font-awesome-icon :icon="['fab', 'facebook']" class="blue-icon" />
            
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Ou</p>
          </div>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div>
    <br>
    <br>
    <div>
      <p class="fs-5" style="margin-left: 140px;">
          Dans DreamWeaver, il y a "Dream", ce qui indique que faire un site avec ce logiciel est du domaine du rêve?
      </p>
      <p class="text-success d-flex justify-content-center">(billie laure )</p>
  </div>
  <div class="icon">
    <font-awesome-icon :icon="['fab', 'git']" class="blue-icon" />
    <font-awesome-icon :icon="['fab', 'facebook']" class="blue-icon" />
    <font-awesome-icon :icon="['fab', 'twitter']" class="blue-icon" />
    <font-awesome-icon :icon="['fas', 'wifi']" class="blue-icon" />

    <div class="link-container">
      <a class="nav-link" href="#">Plan du site</a>
      <a class="nav-link" href="#">Contact</a>
      <a class="nav-link" href="#">Formations</a>
      <a class="nav-link" href="#">Agence web</a>
  </div>
  </div>
  </div>
  <!-- <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  </div> -->
</section>
<FooterComponent></FooterComponent>
</template>

<script>
import Navbar from './NavbarComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  data() {
    return {
      
    };
  },
  components:{
    Navbar,
    FooterComponent
  },
  methods: {
   
  }
};
</script>

<style>

</style>