<template>
  <div class="base-layout">
    <GlobalHeader :windowSize="windowSize"></GlobalHeader>
    <div class="page-view">
      <Sidebar v-show="windowSize > 1460" class="sidebar-box"></Sidebar>
      <div class="view-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import GlobalHeader from "./GlobalHeader";
  import Sidebar from "./Sidebar";

  export default {
    name: 'baseLayout',
    components: {GlobalHeader, Sidebar},
    data(){
      return{
        windowSize: null
      }
    },
    mounted() {
      this.windowSize = window.innerWidth
      window.onresize = ()=>{
        this.windowSize = window.innerWidth
      }
    }
  }
</script>

<style scoped lang="less">
  .base-layout {
    display: flex;
    flex-direction: column;

    .page-view {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow-x: hidden;
      overflow-y: auto;
      margin-top: 10px;
      .sidebar-box {
        width: 250px;
        height: 100%;
        margin-right: 10px;
      }
      .view-content{
        width: 1200px;
        height: 100%;
        background: rgba(255,255,255,0.8);
      }
    }
  }
</style>
