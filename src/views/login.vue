<template>
  <div>
    <div class="login-box">
      <h1><i>Login</i> Admin</h1>
      <div class="login-form">
        <el-form :model="loginForm" label-width="60px">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-btn">
          <div class="item btn-border" @click="submitForm('ruleForm')">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserApi from "../api/user";
  export default {
    name: "login",
    data() {
      return {
        loginForm:{
          userName: '',
          password: ''
        }
      }
    },
    methods:{
      submitForm(){
        UserApi.loginReq(this.loginForm)
          .then(res=>{
            console.log('login response:',res)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 360px;
    padding: 40px 30px;
    background: #333;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 0 #ccc;
    h1{
      color: #fff;
      font-size: 24px;
      text-align: center;
      i{
        color: #409EFF;
      }
    }
    .login-form{
      margin-top: 20px;
      /deep/ .el-form-item__label{
        color: #fff;
      }
      .login-btn{
       width: 100%;
        text-align: right;
        .item{
          width: 80px;
          float: right;
          text-align: center;
          padding: 4px 0;
          font-size: 16px;
          background-color: #409EFF;
          color: #fff;
          transition: all .5s;
          &:hover{
            cursor: pointer;
            background: #2c3e50;
          }
        }
      }
    }
  }
</style>