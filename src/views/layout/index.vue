<template>
  <div>
    <sidebar></sidebar>
    <div class="right-content" :class="{collapse:!isOpened}">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import AppMain from './AppMain'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'
  import { mapGetters } from 'vuex'
  export default {
    name: 'layout',
    components: {
      AppMain,
      Navbar,
      Sidebar
    },
    computed: {
      ...mapGetters({
        isOpened: 'layout/opened'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .right-content{
    margin-left: 200px;
    transition: 0.4s;
    &.collapse{
      margin-left: 64px;
      transition: 0.4s;
    }
  }

</style>
