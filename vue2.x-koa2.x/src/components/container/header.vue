<template>
  <el-row :gutter="10" class="header navbar-fixed-top">
    <el-col :span="20">
      <h1>管理平台</h1>
      <router-link to="/page/userHome">主页</router-link>
      <router-link to="/page/goods">商品管理</router-link>
      <router-link to="/page/platform">平台管理</router-link>
    </el-col>
    <el-col :span="4">
      <strong>欢迎你，{{ name }}</strong>
      |
      <el-button type="text" @click="logout">退出</el-button>
    </el-col>
  </el-row>
</template>

<script>
import jwt from 'jsonwebtoken' // 安装koa-jwt的时候会自动下载这个依赖

export default {
  created() {
    this.name = this.getUserInfo() && this.getUserInfo().name || '';
  },
  methods: {
    getUserInfo() { // 获取用户信息
      const token = localStorage.getItem('demo-token');

      if (token != null && token != 'null') {
        const decode = jwt.verify(token, 'vue-koa-demo'); // 解析token

        return decode
      } else {
        return null
      }
    },
    logout() {
      localStorage.removeItem('demo-token');
      this.$router.push('/');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}
button, input, optgroup, select, textarea {
  margin: 0;
  font: inherit;
}
</style>

<style scoped>
.navbar-fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.header {
  background-color: #f9fafb;
  box-shadow: 0 2px 5px #ccc;
}
.header h1 {
  display: inline-block;
  margin: .5em 0 .5em 1em;
  font-size: 1.5rem;
  vertical-align: middle;
}
.header a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  vertical-align: middle;
}
.header .router-link-active {
  color: red;
}
.header strong {
  display: inline-block;
  margin-top: 1.3em;
}
</style>
