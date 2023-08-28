<template>
  <div class="base-layout scroll-container">
    <GlobalHeader />
    <div class="page-view wrap">
      <Sidebar />
      <router-view class="page-container" />
    </div>
  </div>
</template>

<script>
import GlobalHeader from './GlobalHeader';
import Sidebar from './Sidebar.vue';

export default {
  name: 'baseLayout',
  components: { GlobalHeader, Sidebar },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.base-layout {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .page-view {
    height: 100%;
    position: relative;
    z-index: 10;
  }

  .page-container {
    position: absolute;
    width: calc(100% - 170px);
    top: 75px;
    right: 0;
  }
}
</style>
