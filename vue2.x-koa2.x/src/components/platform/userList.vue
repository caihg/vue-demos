<template>
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    :data="users"
    height="250"
    border>
    <el-table-column
      prop="id"
      label="用户ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="password"
      label="用户密码"
      width="200">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      users: []
    }
  },
  created() {
    this.getUserList();

    this.$http.get('/auth/user/2')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.$message.error('网络错误！');
      });
  },
  methods: {
    getUserList() {
      this.$http.get('/auth/user/list')
        .then(response => {
          const data = response && response.data;
          const list = data && data.list;

          this.loading = false;

          if (response.status == 200) {
            this.users = list;
          } else {
            this.$message.error('获取用户列表失败！');
          }
        })
        .catch(error => {
          this.loading = false;
          this.$message.error('网络错误！');
        });
    }
  }
}
</script>
