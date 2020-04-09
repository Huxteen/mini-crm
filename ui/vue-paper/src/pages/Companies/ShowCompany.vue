<template>
  <card class="card-user">
    <div slot="image">
      <img src="https://image.freepik.com/free-photo/bubbles-blue-water-against-white-background_10221-8030.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" :src="getLogo()" alt="...">
        <h4 class="title">{{company.name}}
          <br>
          <a href="#">
            <small>{{company.url}}</small>
          </a>
        </h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <p class="description text-center">
            <strong>Company Name</strong>
          </p>
          <p class="description text-center">
            {{company.name}}
          </p>
        </div>
        <div class="col-md-6">
          <p class="description text-center">
            <strong>Company Email</strong>
          </p>
          <p class="description text-center">
            {{company.email}}
          </p>
        </div>
        <div class="row view-employee-btn" v-if="user.role == 1 || user.role == 2">
          <div class="col-md-12 justify-content-end">
            <router-link v-bind:to="'/company/employees/' + id" class="btn btn-info btn-sm">View Employees</router-link>
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
      company: {
        name: "",
        email: "",
        url: "",
        logo: "",
        password: "",
        user: "",
      }
    };
  },
  mounted(){
    this.getCompany();
    this.getLogo();
  },
  methods: {
    getLogo(){
      return "./storage/logo/"+this.company.logo;
    },
    getCompany(){
      axios.get('company/show/'+this.id).then(response => {
          this.company.name = response.data.name;
          this.company.email = response.data.user.email;
          this.company.url = response.data.url;
          this.company.logo = response.data.logo;
          this.company.user = response.data.user;
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
