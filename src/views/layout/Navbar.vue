<template>
  <el-header>
    <i @click="switchCollapseSidbar" class="el-icon-admin-navicon my-navicon my-left"></i>
    <el-breadcrumb class="my-left" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <img class="my-right my-user" src="../../assets/img/user.jpg" alt="">
    <el-dropdown class="my-right" trigger="click">
      <span class="el-dropdown-link">
        admin<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions({
        switchCollapseSidbar: 'layout/switchCollapseSidbar'
      })
    },
    computed: mapGetters({
      isOpened: 'layout/opened'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #495060;
    line-height: 60px;
    .my-left{
      float: left;
    }
    .my-right{
      float: right;
    }
    .my-navicon{
      font-size: 32px;
      height: 60px;
      line-height: 60px;
      margin-left:15px;
    }
    .el-breadcrumb{
      font-size: 12px;
      height: 60px;
      line-height: 60px;
      margin-left:30px;
    }
    .el-dropdown{
      span{
        font-size: 14px;
        color: #2d8cf0;
      }
      height: 14px;
      line-height: 14px;
      margin-top: 23px;
    }
    .my-user{
      width: 32px;
      height: 32px;
      border-radius: 16px;
      margin: 14px 10px;
    }
  }
</style>
