<template>
  <div>
    <!-- 主页二级路由容器 -->
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside class="nav" style="width: 220px">
        <!-- 顶部logo -->
        <div class="logoImg">
          <img src="../../assets/img/logo_admin.png" alt />
        </div>
        <!-- 下面导航部分 -->
        <el-menu
          style="width:221px"
          background-color="#353b4e"
          text-color="#adafb5"
          active-text-color="#ffd04b"
        >
          <!-- 一级导航 -->
          <el-menu-item>首页</el-menu-item>
          <!-- submenu生成二级菜单 -->
          <el-submenu>
            <template slot="title">内容管理</template>
            <el-menu-item>发布文章</el-menu-item>
            <el-menu-item>内容列表</el-menu-item>
            <el-menu-item>评论列表</el-menu-item>
            <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
          <el-submenu>
            <template slot="title">粉丝管理</template>
            <el-menu-item>图文数据</el-menu-item>
            <el-menu-item>粉丝概括</el-menu-item>
            <el-menu-item>粉丝画像</el-menu-item>
            <el-menu-item>粉丝列表</el-menu-item>
          </el-submenu>
          <el-menu-item>账户信息</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header style="height:50px;line-height:50px">
          <layout-header></layout-header>
        </el-header>
        <el-main>下面</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutHeader from '../../components/layout-header'
export default {
  components: {
    'layout-header': layoutHeader
  }
}
</script>

<style lang='less' scoped>
.nav {
  background-color: #323745;
  overflow: hidden;
  height: 100vh;
  .logoImg {
    background-color: #2e2f32;
    padding: 15px 0;
    text-align: center;
    img {
      width: 120px;
    }
  }
}
</style>
