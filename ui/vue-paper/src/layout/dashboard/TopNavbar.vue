<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="user">
            <a class="nav-link">
              <i class="ti-cup"> </i>
              <p v-if="user.role == 1">Admin Level User</p>
              <p v-if="user.role == 2">Company Level User</p>
              <p v-if="user.role == 3">Employee Level User</p>
            </a>
          </li>
          <drop-down v-if="user" class="nav-item"
                     :title="user.email"
                     title-classes="nav-link"
                     icon="ti-email">
              <a @click="logout()" class="dropdown-item" href="#">Logout</a>
          </drop-down>
          <drop-down v-else class="nav-item"
                     title="Account"
                     title-classes="nav-link"
                     icon="ti-bell">
              <a href="#/login" to="/login" class="dropdown-item">Login</a>
          </drop-down>
          
        </ul>
      </div>
    </div></nav>
</template>
<script>
import axios from "axios";
export default {
  props: ['user'],
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    logout()
      {
      axios.post('auth/logout').then(response  => {
          window.location.reload(true) 
        });
      }
  }
};
</script>
<style>
</style>
