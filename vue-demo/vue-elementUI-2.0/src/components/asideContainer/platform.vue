<template>
  <!-- 平台管理 -->
  <div>
    <ul class="aside-nav">
      <li><router-link to="/page/platform/userList">用户列表</router-link></li>
      <li><router-link to="/page/platform/userCreate">用户创建</router-link></li>
    </ul>
    <router-view class="aside-container"></router-view>
  </div>
</template>

<style>
.aside-nav {
  float: left;
  width: 100px;
  margin: 0 50px 0 0;
  padding-left: 0;
}
.aside-nav a {
  display: block;
  padding: 4px 0 5px;
  color: #555;
  text-align: center;
  text-decoration: none;
}
.aside-nav .router-link-active {
  color: #fff;
  background-color: orange;
}
.aside-container {
  float: left;
}
</style>
