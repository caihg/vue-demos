<template>
  <div class="page-container">
    <header-nav></header-nav>
    <router-view class="main-layout"></router-view>
  </div>
</template>

<script>
import headerNav from './header.vue'

export default {
  components: {
    headerNav
  }
}
</script>

<style>
.page-container {
  padding: 0 10px;
}
.main-layout {
  margin-top: 63px;
  padding-top: 10px;
}
</style>
