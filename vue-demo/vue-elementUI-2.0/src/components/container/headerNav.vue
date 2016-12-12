<template>
  <header>
    <h1>管理平台</h1>
    <router-link to="/page/userHome">主页</router-link>
    <router-link to="/page/platform">平台管理</router-link>
    <router-link to="/page/product">商品管理</router-link>
    <strong>欢迎你，{{ getUsername }}</strong>
  </header>
</template>

<script>
import store from '../../store/store'
export default {
  computed: {
    getUsername () {
      return store.state.username
    }
  }
}
</script>

<style>
header > .router-link-active {
  color: red;
}
header > strong {
  padding-left: 50px;
}
</style>
