<template>
  <div class="container">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{user.email}}</td>
          <td>
            <span v-if="user.role == 1">Admin</span>
            <span v-else-if="user.role == 2">Company</span>
            <span v-else>Employee</span>
          </td>
          <td>
            <button type="button" class="btn btn-info">Action</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>  
</template>
 

 <script>
 export default {
   name: 'manage-user',
   props: ['app'],
   data() {
     return {
       users: null,
     }
   },
   mounted () {
    axios.get('/auth/manage-user/')
      .then(response => (this.users = response.data.users))
    }
 };
 </script>

 <style>
 </style>

