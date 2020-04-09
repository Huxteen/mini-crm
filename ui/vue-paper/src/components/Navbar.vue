<template>
  <div style="background: #3490dc;">
    <div class="container">
      <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{path:'/home'}" class="navbar-brand">Home</router-link>
        </div>
  
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{path:'/home'}">Home</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>




      
    </div>
  </div>
</template>
 

 <script>
 export default {
   name: 'navbar',
   props: ['app'],
   data(){
      return {};
    },
    methods: { 
      logout()
      {
        this.app.req.post('auth/logout').then(() => {
          this.app.user = null;
          this.$router.push('/login');
        });
      }
    } 
 };
 </script>

 <style>
 </style>

