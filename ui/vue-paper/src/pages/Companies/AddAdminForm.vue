<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <card class="card" title="Create Employee">
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="error-msg">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div class="alert alert-success" v-if="success.length">
              <ul class="error-msg">
                <li v-for="(success, index) in success" :key="index">
                  {{ success }}
                </li>
              </ul>
            </div>
          <form v-on:submit.prevent="onSubmit">
            <div class="row">
              <div class="col-md-12 form-group company-form">
                <fg-input type="text"
                          label="name"
                          placeholder="Employee Name"
                          v-model="admin.name">
                </fg-input>
              </div>
              <div class="col-md-12 form-group company-form">
                <fg-input type="email"
                          label="Email"
                          placeholder="Email"
                          v-model="admin.email">
                </fg-input>
              </div>
              <div class="col-md-12 company-form">
                <fg-input type="password"
                          label="Password"
                          placeholder="Password"
                          v-model="admin.password">
                </fg-input>
              </div>
            </div>
            <div class="text-center submit-button">
              <button class="btn btn-info"> Add Admin </button>
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
  data() {
    return {
      errors: [],
      success: [],
      admin: {
        name: "",
        email: "",
        password: "",
      }
    };
  },
  methods: {
     onSubmit (){
      this.errors = [];
      this.success = [];

       if(!this.admin.email)
       {
         this.errors.push('Email is required.');
       }
       if(!this.admin.name)
       {
         this.errors.push('Name is required.');
       }
       if(!this.admin.password)
       {
         this.errors.push('Password is required.');
       }
       if(!this.errors.length)
       {
          const data = {
            name: this.admin.name,
            email: this.admin.email,
            password: this.admin.password
          }
        
          axios.post('company/add/admin', data).then(response => {
            this.success.push(response.data.success);
            this.admin.name = "";
            this.admin.email = "";
            this.admin.password = "";
          }).catch(error => {
            this.errors.push(error.response.data.error);
          });
        }
        
    },
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
.error-msg{
  margin-bottom: 0px;
}
</style>
