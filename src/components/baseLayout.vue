<template>
  <div class="base-layout">
    <GlobalHeader />
    <div class="page-view wrap">
      <Sidebar />
      <router-view />
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
  display: flex;
  flex-direction: column;

  .page-view {
    flex: 1;
    border: 1px solid @yellow;
    position: relative;
  }
}
</style>
