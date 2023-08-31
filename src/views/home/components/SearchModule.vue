<template>
  <div class="search">
    <div class="search-cont">
      <input type="text" placeholder="上下求索" />
      <button class="same-btn">
        <svg-icon iconClass="search" />
      </button>
    </div>
    <div>
      <button class="same-btn">
        <svg-icon iconClass="support" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-module',
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 42px;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #fff;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  &-cont {
    flex: 1;
    overflow: hidden;
    height: 30px;
    margin-right: 10px;
    display: flex;

    input {
      flex: 1;
      overflow: hidden;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      background-color: rgb(240, 240, 240);
      border: none;
      box-shadow: none;
      outline: none;
      -webkit-text-fill-color: #999;
    }
    input:-webkit-autofill {
      transition: background-color 5000s ease-in-out 0s;
    }

    &:hover {
      input {
        cursor: pointer;
        background-color: rgb(220, 220, 220);
      }
    }
  }

  .same-btn {
    width: 46px;
    height: 30px;
    border: none;
    background-color: rgb(230, 230, 230);
    svg {
      font-size: 20px;
      color: #666;
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(220, 220, 220);
    }
  }
}
</style>
