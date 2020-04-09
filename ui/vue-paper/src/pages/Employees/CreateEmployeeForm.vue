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
                          v-model="employee.name">
                </fg-input>
              </div>
              <div class="col-md-12 form-group company-form">
                <fg-input type="email"
                          label="Email"
                          placeholder="Email"
                          v-model="employee.email">
                </fg-input>
              </div>
              <div class="col-md-12 form-group company-form">
                <label>Company</label>
                <select class="form-control" v-model="employee.company_id" id="exampleFormControlSelect1">
                  <option value="" selected>Please select company</option>
                  <option v-for="(company, index) in companies" :key="index"
                    :value="company.id">
                    {{company.name}}
                  </option>
                
                </select>

              </div>
              
              
              <div class="col-md-12 company-form">
                <fg-input type="password"
                          label="Password"
                          placeholder="Password"
                          v-model="employee.password">
                </fg-input>
              </div>
            </div>
            <div class="text-center submit-button">
              <button class="btn btn-info"> Create Employee </button>
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
      errors: [],
      success: [],
      companies: [],
      employee: {
        name: "",
        email: "",
        company_id: "",
        password: "",
      }
    };
  },
  mounted(){
    this.getCompanies();
  },
  methods: {
     onSubmit (){
      this.errors = [];
      this.success = [];

       if(!this.employee.email)
       {
         this.errors.push('Email is required.');
       }
       if(!this.employee.name)
       {
         this.errors.push('Company name is required.');
       }
       if(!this.employee.company_id)
       {
         this.errors.push('Company Field is required.');
       }
       if(!this.employee.password)
       {
         this.errors.push('Password is required.');
       }
       if(!this.errors.length)
       {
          const data = {
            name: this.employee.name,
            email: this.employee.email,
            company_id: this.employee.company_id,
            password: this.employee.password
          }
        
          axios.post('employee/create', data).then(response => {
            this.success.push(response.data.success);
            this.employee.name = "";
            this.employee.email = "";
            this.employee.company_id = "";
            this.employee.password = "";
            
          }).catch(error => {
            this.errors.push(error.response.data.error);
          });
        }
        
    },
    getCompanies(){
      axios.get('company/index').then(response => {
          this.companies = response.data.companies;
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
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
