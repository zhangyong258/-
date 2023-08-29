<template>
  <div class="sider-menu">
    <div
      v-for="item in siderMenu"
      :key="item.id"
      :class="['menu-item', { active: current === item.id }]"
      @click="handleSiderMenu(item)"
    >
      <svg-icon :iconClass="item.icon" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import { mapState, mapActions } from 'pinia';
import { configStore } from '@/store/config';
export default {
  components: { SvgIcon },
  name: 'Sidebar',
  data() {
    return {
      siderMenu: [
        {
          id: 1,
          label: '登高欲穷',
          label_1: '千里目',
          icon: 'Fire',
        },
        {
          id: 2,
          label: '愁云低锁',
          label_1: '衡阳路',
          icon: 'heart-fill',
        },
        {
          id: 3,
          label: '鱼书不至',
          label_1: '雁无凭',
          icon: 'common',
        },
        {
          id: 4,
          label: '几番空作',
          label_1: '悲秋赋',
          icon: 'code-block',
        },
        {
          id: 5,
          label: '回首西山',
          label_1: '月又斜',
          icon: 'code',
        },
        {
          id: 6,
          label: '天涯孤客',
          label_1: '真难渡',
          icon: 'star-fill',
        },
        {
          id: 7,
          label: '丈夫有泪',
          label_1: '不轻弹',
          icon: 'bug',
        },
        {
          id: 8,
          label: '只因未到',
          label_1: '伤心处',
          icon: 'robot',
        },
      ],
      current: 1,
    };
  },
  computed: {
    ...mapState(configStore, ['headerText']),
  },
  mounted() {
    this.current = this.siderMenu.filter(
      (item) => item.label_1 === this.headerText
    )[0].id;
  },
  methods: {
    ...mapActions(configStore, ['changeText']),
    handleSiderMenu(item) {
      this.current = item.id;
      this.changeText(item.label_1);
    },
  },
};
</script>

<style scoped lang="less">
.sider-menu {
  position: fixed;
  top: 75px;
  width: 160px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  .menu-item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    color: #fff;
    span {
      margin-left: 10px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .active {
    background: #fff;
    border-radius: 4px;
    color: @baseTextColor;
  }
}
</style>
