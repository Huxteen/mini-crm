<template>
  <card class="card-user">
    <div slot="image">
      <img src="https://image.freepik.com/free-photo/bubbles-blue-water-against-white-background_10221-8030.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" alt="...">
        <h4 class="title">{{employee.name}}
          <br>
          <a href="#">
            <small>{{employee.email}}</small>
          </a>
        </h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <p class="description text-center">
            <strong>Company Name</strong>
          </p>
          <p class="description text-center">
            {{employee.company_name}}
          </p>
        </div>
        <div class="col-md-6">
          <p class="description text-center">
            <strong>Employee Email</strong>
          </p>
          <p class="description text-center">
            {{employee.email}}
          </p>
        </div>
        <div class="row justify-content-center view-employee-btn">
          <div class="col-md-12 justify-content-center">
            <router-link v-bind:to="'/company/show/' + id" class="btn btn-info btn-sm">View Company Detail</router-link>
          </div>
        </div>
        
    </div>
    </div>
  </card>
</template>
<script>
import axios from "axios";
export default {
  props: ['user'],
  data() {
    return {
      id: this.$route.params.id,
      employee: {
        name: "",
        email: "",
        company_id: "",
        company_name: "",
        password: "",
        user: ""
      }
    };
  },
  mounted(){
    this.getEmployee();
  },
  methods: {
    getEmployee(){
      axios.get('employee/show/'+this.id).then(response => {
          this.employee.name = response.data.name;
          this.employee.email = response.data.user.email;
          this.employee.company_name = response.data.company.name;
          this.employee.user = response.data.user;
      }).catch(error => {
          this.errors.push(error.response.data.error);
      });
    },
  }
};
</script>
<style>
.view-employee-btn{
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
