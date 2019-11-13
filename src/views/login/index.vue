<template>
  <div class="login">
    <!-- 用户登录框 卡片-->
    <el-card class="box-card">
      <!-- 登录页logo -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单登录信息填写 -->
      <!-- model属性绑定表单数据 -->
      <el-form :model="formData" style="margin-top:10px" :rules="formRules" ref='dataObj'>
        <!-- ---------------------------------form-item的prop设置为校验的字段名 -->
        <!-- 手机号填写 -->
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="formData.mobile"></el-input>
        </el-form-item>
        <!-- 验证码填写 -->
        <el-form-item prop="msg">
          <el-input style="width:180px" placeholder="验证码" v-model="formData.msg"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <!-- 同意协议条框 -->
        <el-form-item prop="checked">
          <el-checkbox v-model="formData.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button style="width:100%" type="primary" @click='login'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // -----------------------------------------------设置需要校验的整个表单信息
  data () {
    return {
      formData: {
        mobile: '',
        msg: '',
        checked: false
      },
      // -----------------------------------------------约定验证规则
      formRules: {
        // 手机号验证规则-pattern正则
        mobile: [
          {
            required: true,
            message: '请输入手机号'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ],
        // 验证码验证规则
        msg: [
          {
            required: true,
            message: '验证码'
          },
          {
            pattern: /^\d{6}$/,
            message: '请6位验证码'
          }
        ],
        // 验证同意框是否勾选:rule-当前规则/value-当前值/callback-回调函数
        checked: [
          {
            validator: function (rule, value, callback) {
              // 如果当前值返回true,执行函数
              if (value) {
                callback()
              } else {
                callback(new Error('请您勾选用户协议和隐私条款'))
              }
            }
          }
        ]
      }
    }
  },
  // 给登录注册事件，对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：
  // 是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
  methods: {
    login () {
      this.$refs.dataObj.validate((ifOK) => {
        // 如果返回true,则进入主页
        if (ifOK) {
          this.$router.push('/home')
        }
      })
    }
  }
}
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
