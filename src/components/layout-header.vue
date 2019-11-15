<template>
  <div>
    <!-- 头部详情 -->

    <el-row>
      <!-- 左侧 -->
      <el-col :span="10" class="left" align='middle'>
        <i class="el-icon-s-unfold"></i>
        <span style="font-size=">江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="2.5" style="float:right" class="right">
        <!-- 头像 -->
        <img src="../../assets/img/zhl.png" alt style="height:35px;border-radius:45%" />
        <!-- 个人信息 -->
        <el-dropdown trigger="click" style="cursor:pointer">
          <!-- 用户名 -->
          <span>
            小哇小青
            <i class="el-icon-caret-bottom"></i>
          </span>
          <!-- 用户详情  slot为dropdown为下拉菜单 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.left{
    display: flex;
    align-items: center;
    i{
        font-size: 25px;
    };
    span{
        font-size: 20px;
        margin-left: 4px;
    }
};
.right{
    display: flex;
    align-items: center;
    img{
        margin-right: 5px
    }
}
</style>
