<template>
  <div>
    <sidebar></sidebar>
    <div class="right-content">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import AppMain from './AppMain'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'
  export default {
    name: 'layout',
    components: {
      AppMain,
      Navbar,
      Sidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .right-content{
    margin-left: 200px;
  }
</style>
