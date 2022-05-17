<template>
  <div class="resume">
    <pdf src="/public/resume.pdf"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: "index",
    components: {pdf},
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .resume {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>