<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
    <button @click="toCompanies" class="btn btn-info btn-sm">View Companies</button>
      <card class="card" title="Create Company">
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
                          placeholder="Company Name"
                          v-model="company.name">
                </fg-input>
              </div>
              <div class="col-md-12 form-group company-form">
                <fg-input type="email"
                          label="Email"
                          placeholder="Email"
                          v-model="company.email">
                </fg-input>
              </div>
              <div class="col-md-12 company-form">
                <fg-input type="text"
                          label="url"
                          placeholder="Company url"
                          v-model="company.url">
                </fg-input>
              </div>
              <div class="col-md-12 company-form">
                <label>Logo</label>
                <input class="form-control" type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
              </div>
              <div class="col-md-12 company-form">
                <fg-input type="password"
                          label="Password"
                          placeholder="Password"
                          v-model="company.password">
                </fg-input>
              </div>
            </div>
            <div class="text-center submit-button">
              <button class="btn btn-info"> Create Company </button>
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
      company: {
        name: "",
        email: "",
        url: "",
        logo: "",
        password: "",
      }
    };
  },
  methods: {
    toCompanies(){
      this.$router.push("/companies");
    },
    onChangeFileUpload(){
      this.company.logo = this.$refs.file.files[0];
    },
    onSubmit(){
      this.errors = [];
      this.success = [];

       if(!this.company.email)
       {
         this.errors.push('Email is required.');
       }
       if(!this.company.name)
       {
         this.errors.push('Company name is required.');
       }
       if(!this.company.url)
       {
         this.errors.push('Company url is required.');
       }
       if(!this.company.logo)
       {
         this.errors.push('Company logo is required.');
       }

       if(!this.company.password)
       {
         this.errors.push('Password is required.');
       }
       if(!this.errors.length)
       {
         
         
          let formData = new FormData();
          formData.append('logo', this.company.logo);
          formData.append('name', this.company.name);
          formData.append('email', this.company.email);
          formData.append('url', this.company.url);
          formData.append('password', this.company.password);

        
          axios.post('company/create', formData,
            {
              headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
          ).then(response => {
            
            this.success.push(response.data.success) 
            this.company.name = "";
            this.company.email = "";
            this.company.url = "";
            this.company.logo = "";
            this.$refs.file.value = '';
            this.company.password = "";
           
          }).catch(error => {
            this.errors.push(error.message);
            this.errors.push("Image has errors.");
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
.error-msg{
  margin-bottom: 0px;
}
</style>
