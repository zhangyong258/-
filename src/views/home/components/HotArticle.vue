<template>
  <div class="hot-article">
    <div class="top-head">
      <svg-icon iconClass="Fire" />
      群贤毕至
    </div>
    <ul class="article-list">
      <li v-for="(item, index) in articleList" :key="index">
        <div :class="['num', getIndexClass(index)]">{{ index + 1 }}</div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="views">
            <span>{{ item.date }}</span>
            <span> <svg-icon iconClass="eye" />{{ item.look }} </span>
            <span> <svg-icon iconClass="xiaoxi" />{{ item.msg }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hot-article',
  data() {
    return {
      articleList: [
        {
          title: '实现基于 Nuxt.js 的 SSR 应用',
          date: '2017-03-24',
          look: 31230,
          msg: 125,
        },
        {
          title: '何以为家',
          date: '2019-04-27',
          look: 14000,
          msg: 56,
        },
        {
          title: '在 JavaScript 中学习数据结构与算法',
          date: '2017-05-11',
          look: 16320,
          msg: 41,
        },
        {
          title: '一道有趣的 JavaScript 面试题',
          date: '2017-04-11',
          look: 12010,
          msg: 35,
        },
      ],
    };
  },
  methods: {
    getIndexClass(index) {
      let obj = {
        0: 'red',
        1: 'orange',
        2: 'yellow',
      };
      return obj[index];
    },
  },
};
</script>

<style lang="less" scoped>
.hot-article {
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 12px;
  .top-head {
    height: 42px;
    line-height: 42px;
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    color: #666;
    border-bottom: 1px solid #ccc;
    svg {
      font-size: 16px;
    }
  }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 10px 0;
    li {
      width: 100%;
      padding: 0 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      color: #666;
      .num {
        font-size: 14px;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .red {
        background-color: red;
        color: #fff;
      }
      .orange {
        background-color: orange;
        color: #fff;
      }
      .yellow {
        background-color: yellow;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        overflow: hidden;
        .title {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .views {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          span {
            flex: 1;
            margin-right: 5px;
            svg {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
