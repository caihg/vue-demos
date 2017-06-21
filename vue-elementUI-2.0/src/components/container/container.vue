<template>
  <div class="container">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from './headerNav.vue'
export default {
  components: {
    headerNav
  }
}
</script>

<style>
header > h1 {
  display: inline-block;
}
header > a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
}
</style>
