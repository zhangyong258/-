<template>
  <div class="global-header">
    <div class="user-info">

    </div>
    <div class="page-menu">
      <router-link to="/home">首页</router-link>
      <router-link to="/article">文章</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.global-header{
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  .user-info{
    flex: 1;
  }
  .page-menu{
    flex: 2;
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    >a{
      margin: 0 5px;
    }
  }
}
</style>
