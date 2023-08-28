<template>
  <div class="common-page">
    <div class="common-container"></div>
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
export default {
  name: 'index',
  components: { calendar },
  data() {
    return {
      checkedDate: moment(new Date()).format('L'),
    };
  },
  created() {},
  methods: {
    // 点击日期
    clickDate(date) {
      console.log(date);
    },
    // 切换月份
    changeMonth(date) {
      console.log(date);
    },
  },
};
</script>

<style scoped lang="less">
.common-page {
  display: flex;
  .common-container {
    flex: 1;
    border: 1px solid #fff;
    overflow: hidden;
  }
  .common-utils {
    width: 260px;
    margin-left: 10px;
  }
}
</style>
