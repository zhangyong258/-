<template>
  <div class="common-page">
    <div class="common-container">
      <div class="header-text">
        <svg-icon iconClass="code"></svg-icon>
        {{ headerText }}
      </div>
      <mySwiper :swiperOption="swiperOption" :swiperSlides="bgArr" />
      <div class="articleList" v-for="item in articleList" :key="item.id">
        <ArticleItem
          :imgSrc="item.src"
          :title="item.title"
          :description="item.description"
          :staticObj="item.views"
        />
      </div>
    </div>
    <div class="common-utils">
      <SearchModule />
      <StatisticVue />
      <HotArticle />
      <calendar
        showPrepNext
        :checkedDate="checkedDate"
        @clickDate="clickDate"
        @changeMonth="changeMonth"
      />
    </div>
  </div>
</template>

<script>
import calendar from 'components/Calendar.vue';
import mySwiper from 'components/mySwiper.vue';
import moment from 'moment';
import { mapState } from 'pinia';
import { configStore } from '@/store/config';
import ArticleItem from './components/ArticleItem.vue';
import SearchModule from './components/SearchModule.vue';
import StatisticVue from './components/Statistic.vue';
import HotArticle from './components/HotArticle.vue';
export default {
  name: 'index',
  components: {
    calendar,
    mySwiper,
    ArticleItem,
    SearchModule,
    StatisticVue,
    HotArticle,
  },
  data() {
    return {
      checkedDate: moment(new Date()).format('L'),
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          dynamicBullets: true,
        },
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000,
        },
      },
      bgArr: [
        { src: require('../../assets/images/Nihilism.jpg') },
        { src: require('../../assets/images/buddhism-2.jpg') },
        { src: require('../../assets/images/straw-man.jpg') },
        { src: require('../../assets/images/think-deeply.jpg') },
        { src: require('../../assets/images/wat-umong.jpg') },
      ],
      articleList: [
        {
          id: 1,
          src: 'https://cdn.surmon.cn/imgproxy/resize:fill:350:238:0/plain/thumbnail/Nihilism.jpg@avif',
          title: '存在主义也许不是解药',
          description: '人人生而失败，众生皆苦。',
          views: {
            clock: '一周前',
            eye: 20,
            review: 5,
            upvote: 100,
          },
        },
        {
          id: 2,
          src: 'https://cdn.surmon.cn/imgproxy/resize:fill:350:238:0/plain/thumbnail/Nihilism.jpg@avif',
          title: '存在主义也许不是解药',
          description: '人人生而失败，众生皆苦。',
          views: {
            clock: '4天前',
            eye: 20,
            review: 5,
            upvote: 100,
          },
        },
        {
          id: 3,
          src: 'https://cdn.surmon.cn/imgproxy/resize:fill:350:238:0/plain/thumbnail/Nihilism.jpg@avif',
          title: '存在主义也许不是解药',
          description: '人人生而失败，众生皆苦。',
          views: {
            clock: '2天前',
            eye: 20,
            review: 5,
            upvote: 100,
          },
        },
        {
          id: 4,
          src: 'https://cdn.surmon.cn/imgproxy/resize:fill:350:238:0/plain/thumbnail/Nihilism.jpg@avif',
          title: '存在主义也许不是解药',
          description: '人人生而失败，众生皆苦。',
          views: {
            clock: '1天前',
            eye: 20,
            review: 5,
            upvote: 100,
          },
        },
        {
          id: 5,
          src: 'https://cdn.surmon.cn/imgproxy/resize:fill:350:238:0/plain/thumbnail/Nihilism.jpg@avif',
          title: '存在主义也许不是解药',
          description: '人人生而失败，众生皆苦。',
          views: {
            clock: '12h',
            eye: 20,
            review: 5,
            upvote: 100,
          },
        },
      ],
    };
  },
  computed: {
    ...mapState(configStore, ['headerText']),
  },

  methods: {
    // 点击日期
    clickDate(date) {
      console.log(date);
    },
    // 切换月份
    changeMonth(date) {
      console.log(date);
    },
    to(index) {
      this.swiper.slideTo(index);
      console.log(this.swiper);
    },
  },
};
</script>

<style scoped lang="less">
.common-page {
  display: flex;
  .common-container {
    flex: 1;
    overflow: hidden;
    .header-text {
      background: #fff;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
  .common-utils {
    width: 260px;
    margin-left: 10px;
  }
}
</style>
