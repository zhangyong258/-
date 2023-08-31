<template>
  <div class="article-item">
    <div class="img">
      <img :src="imgSrc + ''" alt="" />
    </div>
    <div class="article-cont">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <div class="article-view">
        <span>
          <svg-icon iconClass="clock" />
          {{ staticObj.clock }}
        </span>
        <span>
          <svg-icon iconClass="eye" />
          {{ staticObj.eye }}
        </span>
        <span>
          <svg-icon iconClass="xiaoxi" />
          {{ staticObj.review }}
        </span>
        <span>
          <svg-icon iconClass="thumb-up" />
          {{ staticObj.upvote }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: {
    imgSrc: String,
    title: String,
    description: String,
    staticObj: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.article-item {
  width: 100%;
  height: 130px;
  padding: 10px;
  margin: 10px 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  display: flex;
  .img {
    width: 180px;
    height: 110px;
    border: 1px solid #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .article-cont {
    flex: 1;
    overflow: hidden;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .description {
      flex: 1;
      line-height: 28px;
      font-size: 14px;
      color: #666;
    }
    .article-view {
      font-size: 12px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      span {
        color: #666;
        svg {
          font-size: 16px;
          font-weight: bolder;
          margin-right: 2px;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
