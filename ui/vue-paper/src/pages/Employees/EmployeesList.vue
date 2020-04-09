<template>
    <div class="row">
      <div class="col-12">
        <card :title="employees.title" :subTitle="employees.subTitle">
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
                <th>Company</th>
                <th>Edit</th>
                <th>View</th>
              </thead>
              <tbody>
                <tr v-for="(employee, index) in employees.data" :key="index">
                  <td>{{index+1 }}</td>
                  <td>{{employee.name}}</td>
                  <td>{{employee.user.email}}</td>
                  <td>{{employee.company.name}}</td>
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
      errors: [],
      employees: {
        title: "Employees Table",
        subTitle: "List of employees details",
        columns: null,
        data: null
      },
    };
  },
  mounted(){
    this.getEmployees();
  },
  methods: {
     getEmployees(){
       
      axios.get('employee/index').then(response => {
          this.employees.data = response.data.employees;
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
      }
        
     }
};
</script>
<style>
</style>
