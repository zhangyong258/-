<template>
  <div class="statistic">
    <div class="statistic-item">
      <b>179</b>
      <span>全站文章</span>
    </div>
    <div class="statistic-line" />
    <div class="statistic-item">
      <b>252</b>
      <span>今日阅读</span>
    </div>
    <div class="statistic-line" />
    <div class="statistic-item">
      <b>2231</b>
      <span>全站评论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statistic',
};
</script>

<style lang="less" scoped>
.statistic {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 5px;
  &-item {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    b {
      color: #555;
    }
    span {
      color: #666;
      font-size: 12px;
      margin-top: 6px;
    }
  }
  &-line {
    width: 0;
    height: 20px;
    border-right: 2px solid #ccc;
  }
}
</style>
