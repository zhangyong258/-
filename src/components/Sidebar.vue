<template>
  <div class="sider-menu">
    <div v-for="item in siderMenu" :key="item.id">
      <i class=""></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      siderMenu: [
        {
          id: 1,
          label: '明殿',
          icon: '',
        },
        {
          id: 2,
          label: '宁静寺',
          icon: '',
        },
        {
          id: 3,
          label: '无色庵',
          icon: '',
        },
        {
          id: 4,
          label: '丹青阁',
          icon: '',
        },
        {
          id: 5,
          label: '大千界',
          icon: '',
        },
        {
          id: 6,
          label: '狂浪生',
          icon: '',
        },
        {
          id: 7,
          label: '四方馆',
          icon: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.user-info {
  background: rgba(255, 255, 255, 0.8);
  height: 300px;
}

.nav-bar {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.8);
  height: calc(100% - 310px);
}
</style>
