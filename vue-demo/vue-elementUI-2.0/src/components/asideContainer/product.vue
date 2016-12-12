<template>
  <!-- 商品管理 -->
  <div>
    <ul class="aside-nav">
      <li><router-link to="/page/product/list">商品列表</router-link></li>
      <li><router-link to="/page/product/brand">商品品牌</router-link></li>
    </ul>
    <router-view class="aside-container"></router-view>
  </div>
</template>
