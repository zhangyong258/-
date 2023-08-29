<template>
  <div class="common-page">
    <div class="common-container">
      <div class="header-text">
        <svg-icon iconClass="code"></svg-icon>
        {{ headerText }}
      </div>
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide
          class="swiper_slide_item"
          v-for="(item, index) in bgArr"
          :key="index"
        >
          <img :src="item.src" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="common-utils">
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
import moment from 'moment';
import { mapState } from 'pinia';
import { configStore } from '@/store/config';
export default {
  name: 'index',
  components: { calendar },
  data() {
    return {
      swiper1: null,
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
    };
  },
  computed: {
    ...mapState(configStore, ['headerText']),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.el.onmouseover = () => {
      this.swiper.autoplay.stop();
    };
    this.swiper.el.onmouseleave = () => {
      this.swiper.autoplay.start();
    };
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
    .swiper-container {
      width: 100%;
      height: 246px;
      border-radius: 6px;
      overflow: hidden;
      .swiper_slide_item {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          transition: all 0.6s;
        }
        &:hover {
          cursor: pointer;
          img {
            transform: scale(1.1);
          }
        }
      }
      /deep/ .swiper-pagination-bullet-active-main {
        background-color: #fff;
      }
    }
  }
  .common-utils {
    width: 260px;
    margin-left: 10px;
  }
}
</style>
