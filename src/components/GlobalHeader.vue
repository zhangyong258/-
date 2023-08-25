<template>
  <div class="global-header">
    <div class="wrap header-container">
      <div class="logo">
        <img src="@/assets/images/color_login.png" alt="logo" />
      </div>
      <div class="title-box">
        <p class="shine">无人做你的光芒 , 就自己照亮前方</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    windowSize: {
      type: Number,
    },
  },
  methods: {
    routeHop(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.global-header {
  width: 100%;
  height: 60px;
  background: #fff;
  .header-container {
    height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .logo {
      width: 150px;
      height: 50px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .title-box {
      height: 50px;
      margin-left: 40px;
      display: flex;
      align-items: flex-end;
      .shine {
        font-size: 18px;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #ff0000, #0000ff) 0 0
          no-repeat; /*设置线性渐变*/
        // -webkit-background-size: 160px; /*设置背景大小*/
        -webkit-background-clip: text; /*背景被裁剪到文字*/
        -webkit-text-fill-color: rgba(
          255,
          255,
          255,
          0.6
        ); /*设置文字的填充颜色*/
        -webkit-animation: shine 3s infinite; /*设置动画*/
      }

      @-webkit-keyframes shine {
        0% {
          background-position: 0 0;
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          background-position: 100% 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
