<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links" v-if="!user">
        <sidebar-link to="/login" name="Login" icon="ti-panel"/>
        <sidebar-link to="/home" name="Home" icon="ti-panel"/>
      </template>
      <template slot="links" v-else>
          <template v-if="user.role == 1">
            <sidebar-link to="/dashboard" name="Home" icon="ti-home"/>
            <sidebar-link to="/companies" name="Companies List" icon="ti-microsoft"/>
            <sidebar-link to="/create/company" name="Create Company" icon="ti-dribbble"/>
            <sidebar-link to="/employees" name="Employees List" icon="ti-user"/>
            <sidebar-link to="/create/employee" name="Create Employee" icon="ti-target"/>
            <sidebar-link to="/add/admin" name="Add Admin" icon="ti-cup"/>
          </template>
         
      
          <template v-if="user.role == 2">
            <sidebar-link to="/dashboard" name="Home" icon="ti-panel"/>
            <sidebar-link v-bind:to="'/company/show/'+id" name="Show Company" icon="ti-map"/>
            <sidebar-link v-bind:to="'/company/employees/'+id" name="View Employees" icon="ti-map"/>
          </template>
  

          <template v-if="user.role == 3">
            <sidebar-link to="/dashboard" name="Home" icon="ti-panel"/>
            <sidebar-link v-bind:to="'/employee/show/'+employee_id" name="Show Profile" icon="ti-map"/>
            <sidebar-link v-bind:to="'/employee/edit/'+employee_id" name="Edit Profile" icon="ti-map"/>
          </template>
   
       
        
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar v-bind:user="user" ></top-navbar>

      <dashboard-content v-bind:user="user" @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
export default {
  props: ['user'],
  data() {
    return {
      id: "",
      employee_id: "",
      errors: [],
    };
  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
  },
  mounted(){
    this.init();
    this.employee_init();
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    init()
     {
      axios.get('company/init').then(response => {
        this.id = response.data.company.id;
      }).catch(error => {
         this.id = null;
      });
     },
    employee_init()
     {
      axios.get('employee/init').then(response => {
        this.employee_id = response.data.employee.id;
      }).catch(error => {
         this.employee_id = null;
      });
     },
    logout()
      {
      axios.post('auth/logout').then(response  => {
          console.log(response);
          this.user = null;
          // this.$router.push('/login');
        });
      }
  }
};
</script>
