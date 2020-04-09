<template>
    <div class="row">
      <div class="col-12">
        <card :title="companies.title" :subTitle="companies.subTitle">
        
          <div class="alert alert-danger" v-if="errors.length">
            <ul class="error-msg">
              <li v-for="(error, index) in errors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>

          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <th>s/n</th>
                <th>Name</th>
                <th>Email</th>
                <th>URL</th>
                <th>logo</th>
                <th>Edit</th>
                <th>View</th>
              </thead>
              <tbody>
                <tr v-if="!companies.data.length">
                  <td colspan="7" class="text-center cp"> No company added at this time</td>
                </tr>
                <tr v-for="(company, index) in companies.data" :key="index">
                  <td>{{index +1 }}</td>
                  <td>{{company.name}}</td>
                  <td>{{company.user.email}}</td>
                  <td>{{company.url}}</td>
                  <td>
                  <img :src="getLogo(company.logo)" height="80px" width="80px;">
                  </td>
                  <td> 
                    <router-link v-bind:to="'/company/edit/' + company.id" class="btn btn-info btn-sm">Edit</router-link>
                  </td>
                  <td> 
                    <router-link v-bind:to="'/company/show/' + company.id" class="btn btn-info btn-sm">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
          </card>
          </div>
        </div>
</template>
<script>
import { PaperTable } from "../../components";
import axios from "axios";

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      errors: [],
      companies: {
        title: "Companies Table",
        subTitle: "List of companies details",
        columns: "",
        data: "",
      },
    };
  },
  mounted(){
    this.getCompanies();
  },
  methods: {
    getLogo(url){
      return "./storage/logo/"+url;
    },
     getCompanies(){
       
      axios.get('company/index').then(response => {
          this.companies.data = response.data.companies;
          this.user = response.data.companies.user;
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
      }   
    }
};
</script>
<style>
.cp {
  text-transform: capitalize;
  font-weight: 700;
}
</style>
