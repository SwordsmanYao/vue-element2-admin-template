<template>
  <el-menu
    :default-active="currentPathName"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    :collapse="!isOpened"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#2d8cf0"
  >

    <el-menu-item index="DemoList" @click="routeTo ({name:'DemoList'})">
      <i class="el-icon-menu"></i>
      <span slot="title">演示列表</span>
    </el-menu-item>
    <el-menu-item index="DemoForm" @click="routeTo ({name:'DemoForm'})">
      <i class="el-icon-setting"></i>
      <span slot="title">演示表单</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航三</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <span slot="title">选项4</span>
        <el-menu-item index="3-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        currentPathName: this.$route.name
      }
    },
    methods: {
      ...mapActions({
        switchCollapseSidbar: 'layout/switchCollapseSidbar'
      }),
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      routeTo (routeObj) {
        this.$router.push(routeObj)
      }
    },
    computed: {
      ...mapGetters({
        isOpened: 'layout/opened'
      })
    },
    watch: {
      $route (to, from) {
        this.currentPath = to.path
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu-vertical {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    min-height: 100%;

    &:not(.el-menu--collapse) {
      width: 200px;
      overflow: auto;
    }
  }
</style>
