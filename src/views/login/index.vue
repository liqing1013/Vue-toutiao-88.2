<template>
  <div class="login">
    <!-- 用户登录框 卡片-->
    <el-card class="box-card">
      <!-- 登录页logo -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单登录信息填写 -->
      <el-form style="margin-top:10px">
        <!-- 手机号填写 -->
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码填写 -->
        <el-form-item>
          <el-input style="width:180px" placeholder="验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <!-- 同意协议条框 -->
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.login {
  // 图片背景
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center; //侧轴水平居中
  justify-content: center; //主轴水平居中
  .box-card {
    width: 380px;
    height: 330px;
    background-color: #fff;
    .title {
      text-align: center;
      margin-top: 15px;
      img {
        width: 150px;
      }
    }
  }
}
</style>
