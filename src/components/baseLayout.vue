<template>
  <div class="base-layout">
    <GlobalHeader></GlobalHeader>
    <div class="page-view page-client">
      <router-view/>
    </div>
    <Sidebar class="sidebar-box"></Sidebar>
  </div>
</template>

<script>
  import GlobalHeader from "./GlobalHeader";
  import Sidebar from "./Sidebar";

  export default {
    name: 'baseLayout',
    components: {GlobalHeader,Sidebar}
  }
</script>

<style scoped lang="less">
  .base-layout {
    display: flex;
    flex-direction: column;

    .page-view {
      width: 100%;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      margin-top: 10px;
      color: #fff;
      border: 1px solid #fff;
    }

    .sidebar-box{
      position: fixed;
      top: 70px;
      bottom: 0;
      left: 100px;
      width: 250px;
      color: #fff;
      border: 1px solid #fff;
    }
  }
</style>
