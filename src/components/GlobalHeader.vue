<template>
  <div class="global-header">
    <div class="user-info">
      <span><b>Mr.Zhang</b>的博客</span>
    </div>
    <div class="title-box">
      <p class="shine">无人做你的光芒 , 就自己照亮前方</p>
    </div>
    <div class="page-menu">
      <a href="javascript:" :class="{'active':$route.name === 'Home'}" @click="routeHop('/home')">首页</a>
      <a href="javascript:" :class="{'active':$route.name === 'Article'}" @click="routeHop('/article')">文章</a>
      <a href="javascript:" :class="{'active':$route.name === 'Resume'}" @click="routeHop('/resume')">简历</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:{
      windowSize:{
        type:Number
      }
    },
    mounted() {
      console.log(this.$route)
    },
    methods: {
      routeHop(url) {
        this.$router.push({path: url})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .global-header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #333;

    .user-info {
      padding: 0 10px;

      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);

        b {
          font-size: 26px;
          color: #409EFF;
          margin-right: 10px;
          font-style: italic;
        }
      }
    }

    .title-box {
      flex: 1;
      text-align: center;
      padding: 0 10px;

      .shine {
        font-size: 26px;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #0000ff, #ff0000) 0 0 no-repeat; /*设置线性渐变*/
        -webkit-background-size: 160px; /*设置背景大小*/
        -webkit-background-clip: text; /*背景被裁剪到文字*/
        -webkit-text-fill-color: rgba(255, 255, 255, 0.6); /*设置文字的填充颜色*/
        -webkit-animation: shine 3s infinite; /*设置动画*/
      }

      @-webkit-keyframes shine {
        0% {
          background-position: 0 0;
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
        100% {
          background-position: 100% 100%;
          opacity: 1;
        }
      }
    }

    .page-menu {
      padding: 0 10px;
      display: flex;
      justify-content: flex-end;

      > a {
        margin: 0 5px;
        color: rgba(255, 255, 255, 0.6);
      }

      .active {
        color: #409EFF;
      }
    }
  }
</style>
