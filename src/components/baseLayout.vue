<template>
  <div class="base-layout">
    <GlobalHeader></GlobalHeader>
    <router-view class="page-view"/>
  </div>
</template>

<script>
  import GlobalHeader from "./GlobalHeader";

  export default {
    name: 'baseLayout',
    components: {GlobalHeader}
  }
</script>

<style scoped lang="less">
  .base-layout {
    display: flex;
    flex-direction: column;

    .page-view {
      width: 100%;
      flex: 1;
      margin-top: 10px;
      background: #fff;
    }
  }
</style>
