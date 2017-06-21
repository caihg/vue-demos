<template>
  <!-- 平台管理 -->
  <el-row :gutter="20">
    <el-col :span="3">
      <ul class="aside-nav">
        <li><router-link to="/page/platform/userList">用户列表</router-link></li>
        <li><router-link to="/page/platform/rightsManagement">权限管理</router-link></li>
      </ul>
    </el-col>
    <el-col :span="21">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<style>
.aside-nav {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  background-color: rgba(0,0,0,.05);
}
.aside-nav a {
  display: block;
  padding: 10px 0;
  color: #555;
  text-align: center;
  text-decoration: none;
}
.aside-nav .router-link-active {
  color: #fff;
  background-color: orange;
}
</style>
