<template>
  <div class="login">
    <!-- 背景 -->
    <!-- 中间位置，element-ui -->
    <!-- 卡片组件 -->
    <el-card class="login-card">
      <!-- 卡片内容 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单容器 -->
      <!-- model属性，要绑定的表单数据对象/rules属性，要绑定的校验规则对象 -->
      <el-form ref='formObj' style="margin-top:10px" :model="loginForm" :rules="loginRules">
        <!-- prop属性，写入model中的字段名 -->
        <!-- 表单域手机号,一个表单域就是一个form-item -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <!-- 表单域验证码 -->
        <el-form-item prop="code">
          <!-- 验证码输入框 -->
          <el-input style="width:230px" v-model="loginForm.code" placeholder='请输入您的验证码'></el-input>
          <!-- 获取验证码-朴素按钮 -->
          <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>
        <!-- 勾选同意框 -->
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议及条框</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button style="width:100%" type="primary" @click='login'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 要校验的整个表单数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否勾选协议
      },
      // 校验的规则对象
      // 键值对的方式---key(要校验的字段名)：value(字段名的规则,数组形式---多条/一条/没有)
      loginRules: {
        // 手机号校验
        mobile: [
          {
            required: true, // 必填项
            message: '请输入您的手机号'// 提示信息
          }, {
            pattern: /^1[3456789]\d{9}$/, // 手机号正则表达式
            message: '请输入正确的手机号'
          }
        ],
        // 验证码校验
        code: [
          {
            required: true, // 必填项
            message: '请输入验证码'// 提示信息
          }, {
            pattern: /^\d{6}$/, // 验证码正则表达式
            message: '请输入6位数字'
          }
        ],
        // 是否已勾选校验
        checked: [
          {
            // 自定义校验函数--rule:当前规则/value:当前字段checked的值/callback:回调函数
            validator: function (rule, value, callback) {
              if (value) {
                // 如果true，选中，通过校验,返回回调函数
                callback()
              } else {
                // 如果没有选中，不通过校验，返回错误提示
                callback(new Error('您未勾选阅读'))
              }
            }
          }
        ]
      }
    }
  },
  // 注册手动校验
  methods: {
    // 登录校验
    login () {
      // 代表所有ref属性的集合
      // this.$refs.formObj 获取el-form的对象实例
      this.$refs.formObj.validate(isOK => {
        // 获取结果成功与否
        if (isOK) {
          // 如果为true,继续下一步，调用接口登录
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(res => {
            console.log(res.data)
            // 存储到本地存储中
            window.localStorage.setItem('user-token', res.data.data.token)
            // 跳转到主页
            this.$router.push('/home')
          }).catch(res => {
            // 提示信息
            this.$message({
              type: 'warning',
              message: '手机号或者验证码错误'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
// style的lang属性(less)
// style的scoped(在单组件全局作用域下，仅在当前html结构页面中有效，原理：给当前页的每个标签加了一个与其他单组件不同的data-v-xxx属性)
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh; // 占整个屏幕的100倍
  background-size: cover; //铺满屏幕
  display: flex; // flex布局
  justify-content: center; // 水平居中
  align-items: center; //垂直居中
  .login-card {
    height: 330px;
    width: 400px;
    .title {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
