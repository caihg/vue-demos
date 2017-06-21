<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录
      </span>
      <el-row>
        <el-input
          v-model="account"
          placeholder="账号"
          type="text">
        </el-input>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password"
          @keyup.enter.native="loginToDo">
        </el-input>
        <el-button type="primary" :loading="loginBtnLoading" @click="loginToDo">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      account: 'anonymous',
      password: '',
      loginBtnLoading: false
    };
  },
  methods: {
    loginToDo() {
      let obj = {
        name: this.account,
        password: this.password
      }

      this.loginBtnLoading = true;

      this.$http.post('/auth/user', obj)
        .then((res) => {
          this.loginBtnLoading = false;

          if (res.data.success) {
            localStorage.setItem('demo-token', res.data.token); // localStorage 存储 token
            this.$router.push('page/userHome');
            this.$message({
              type: 'success',
              message: '登录成功！'
            });
          } else {
            localStorage.removeItem('demo-token'); // 删除 token
            this.$message.error(res.data.info);
          }
        }, (err) => {
          this.loginBtnLoading = false;
          localStorage.removeItem('demo-token'); // 删除 token
          this.$message.error('请求错误！')
        })
    }
  }
};
</script>

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
