<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <button @click="toCompanies" class="btn btn-info btn-sm">View Companies</button>
      <card class="card" title="Update Company">
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
                          :value="company.name"
                          placeholder="Company Name"
                          v-model="company.name">
                </fg-input>
              </div>
              <div class="col-md-12 form-group company-form">
                <fg-input type="email"
                          label="Email"
                          :value="company.email"
                          placeholder="Email"
                          v-model="company.email">
                </fg-input>
              </div>
              <div class="col-md-12 company-form">
                <fg-input type="text"
                          label="url"
                          :value="company.url"
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
              <button @click="deleteCompany" href="javascript:;" class="btn btn-danger btn-sm delete-btn"> Delete</button>
              <button class="btn btn-info update-btn"> Update Company </button>
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
  props: ['user'],
  data() {
    return {
      id: this.$route.params.id,
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
  mounted(){
    this.getCompany();
  },
  methods: {
    toCompanies(){
      this.$router.push("/companies");
    },
    onChangeFileUpload(){
        this.company.logo = this.$refs.file.files[0];
      },
    getCompany(){
      axios.get('company/show/'+this.id).then(response => {
          this.company.name = response.data.name;
          this.company.email = response.data.user.email;
          this.company.url = response.data.url;
          this.company.logo = response.data.logo;
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
    },
    deleteCompany(){
      axios.delete('company/delete/'+this.id).then(response => {
      console.log(response.data);
      this.$router.push("/companies");
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
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
       if(!this.company.email)
       {
         this.errors.push('Company email is required.');
       }

       if(!this.errors.length)
       {
        let formData = new FormData();
      if(this.company.logo)
       {
        formData.append('logo', this.company.logo);
       }
      if(this.company.password)
       {
         formData.append('password', this.company.password);
       }
        
      formData.append('name', this.company.name);
      formData.append('email', this.company.email);
      formData.append('url', this.company.url);
     

        axios.post('http://127.0.0.1:8000/company/update/'+this.id, formData,
         {
            headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }
        ).then(response => {
          this.success.push(response.data.success);
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
  margin-bottom: 40px;
}
.delete-btn{
  float: left;
}
.update-btn{
  float: right;
}
.card{
  margin-top: 20px;
}
.error-msg{
  margin-bottom: 0px;
}
</style>
