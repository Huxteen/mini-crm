<template>
  <div style="background: #3490dc;">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Mini-CRM</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home </router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
             <span v-if="app.user">
              <li class="nav-item dropdown" v-if="app.user.role == 1">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ 'Companies' }}
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div>
                    <router-link to="/" class="dropdown-item">View Company</router-link>
                    <router-link to="/" class="dropdown-item">Add Company</router-link>
                  </div>
                </div>
              </li>
            </span>

            <span v-if="app.user">
              <li class="nav-item dropdown" v-if="app.user.role == 1 && app.user">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Employees
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div>
                    <router-link to="/" class="dropdown-item">View Employees</router-link>
                    <router-link to="/" class="dropdown-item">Add Employee</router-link>
                  </div>
                </div>
              </li>
            </span>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ app.user ? app.user.email : 'Account' }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div v-if="!app.user">
                  <router-link to="/login" class="dropdown-item">Login</router-link>
                  <router-link to="/register" class="dropdown-item">register</router-link>
                </div>

                <div v-else>
                  <router-link to="/manage-user" class="dropdown-item">Manage User</router-link>
                  <a @click="logout" href="javascript:;" class="dropdown-item">Logout</a>
                </div>
              </div>
            </li>
          </ul>
          
        </div>
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

