<template>
  <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
    <swiper-slide
      class="swiper_slide_item"
      v-for="(item, index) in swiperSlides"
      :key="index"
    >
      <img :src="item.src" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'mySwiper',
  props: {
    swiperOption: {
      type: Object,
      default: () => {},
    },
    swiperSlides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
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
};
</script>

<style lang="less" scoped>
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
</style>
