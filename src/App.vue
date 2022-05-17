<template>
  <div id="app">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <router-view class="float-page page-client"/>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="less" scoped>
#app {
  background: #2c3e50;
  position: relative;
  z-index: 999;
  .float-page{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
  }
}
</style>
