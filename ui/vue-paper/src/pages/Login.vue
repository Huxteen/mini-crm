<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <card class="card" title="User Login">
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="error-msg">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
           
          <form v-on:submit.prevent="onSubmit">
           
              <div class="col-md-12 form-group company-form">
                <fg-input type="email"
                          label="Email"
                          placeholder="Email"
                          v-model="email">
                </fg-input>
              </div>
              
              <div class="col-md-12 company-form">
                <fg-input type="password"
                          label="Password"
                          placeholder="Password"
                          v-model="password">
                </fg-input>
              </div>
           
            <div class="text-center submit-button">
              <button class="btn btn-info"> Login </button>
            </div>
            <div class="clearfix"></div>
          </form>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
   name: 'app',
   props: ['user'],
   data() { 
     return {
       email: '',
       password: '',
       errors: [],
     }
   },
   methods: {
    
     onSubmit(){
       this.errors = [];

       if(!this.email)
       {
         this.errors.push('Email is required.');
       }

       if(!this.password)
       {
         this.errors.push('Password is required.');
       }
       if(!this.errors.length)
       {
          const data = {
            email: this.email,
            password: this.password
          }
          axios.post('auth/login', data).then(response => {
            window.location.reload(true);
          }).catch(error => {
            this.errors.push(error.response.data.error);
          });
        }
        

     }
   }
 };
</script>
<style>
.company-form{
  padding: 2px 20px !important;
}
.submit-button{
  margin-bottom: 30px;
}
</style>
