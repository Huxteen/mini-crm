<template>
    <div class="row">
      <div class="col-12">
        <card class=" cp bold-txt" :title="companies.title" :subTitle="companies.subTitle">
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
                <th>Edit</th>
                <th>View</th>
              </thead>
              <tbody>
                <tr v-if="!employees.length">
                  <td colspan="5" class="text-center bold-txt"> No employees allocated to this company at this time</td>
                </tr>
                <tr v-for="(employee, index) in employees" :key="index">
                  <td>{{index +1 }}</td>
                  <td>{{employee.name}}</td>
                  <td>{{employee.user.email}}</td>
                  <td> 
                    <router-link v-bind:to="'/employee/edit/' + employee.id" class="btn btn-info btn-sm">Edit</router-link>
                  </td>
                  <td> 
                    <router-link v-bind:to="'/employee/show/' + employee.id" class="btn btn-info btn-sm">View</router-link>
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
      id: this.$route.params.id,
      errors: [],
      employees: [],
      companies: {
        title: "",
        subTitle: "",
        data: null
      },
    };
  },
  mounted(){
    this.getCompanies();
  },
  methods: {
     getCompanies(){
       
      axios.get('company/employee/'+this.id).then(response => {
          this.companies.title = response.data.company.name;
          this.companies.subTitle = "List of " + response.data.company.name + " Employees";
          this.employees = response.data.employee;
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
}
.bold-txt{
 font-weight: 700;
}
</style>
