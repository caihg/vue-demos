<template>
  <div class="box">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="form-box">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '../../store/store'
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onLogin(event) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          store.state.username = this.loginForm.username;
          this.$router.push('page/userHome');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleReset() {
      this.$refs.loginForm.resetFields();
    }
  }
}
</script>

<style>
.form-box {
  width: 500px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
}
</style>
