<template>
  <!-- 商品管理 -->
  <el-row :gutter="20">
    <el-col :span="3">
      <ul class="aside-nav">
        <li><router-link to="/page/goods">商品列表</router-link></li>
      </ul>
    </el-col>
    <el-col :span="21">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
