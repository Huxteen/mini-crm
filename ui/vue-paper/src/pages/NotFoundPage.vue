<template>
  <div class="contact-us full-screen">
    <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
              <button @click="goHome()" class="btn btn-warning" :to="'/home'">Home Page</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    goHome(){
      this.$router.push('/home');
    }
  }
};
</script>
