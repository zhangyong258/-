import { defineStore } from 'pinia';

export const configStore = defineStore('store', {
  // 开启数据缓存
  persist: {
    enabled: true,
  },
  state: () => {
    return {
      headerText: '千里目',
    };
  },
  actions: {
    changeText(str) {
      this.headerText = str;
    },
  },
});
