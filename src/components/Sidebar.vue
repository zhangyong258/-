<template>
  <div>
    <div class="user-info"></div>
    <div class="nav-bar"></div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped lang="less">
  .user-info {
    background: rgba(255,255,255,0.8);
    height: 300px;
  }

  .nav-bar {
    margin-top: 10px;
    background: rgba(255,255,255,0.8);
    height: calc(100% - 310px);
  }
</style>