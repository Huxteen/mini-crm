<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/dashboard'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="/dashboard" target="_blank"> &nbsp; Husteen.</a>&nbsp;
        Designed by <a href="/home" target="_blank">&nbsp; Creative Head.</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
