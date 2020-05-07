<template>
  <div >
    <router-view  ></router-view>
    <van-tabbar route style="height:1rem;">
      <van-tabbar-item replace to="/mobail/orderList" icon="home-o">订单列表</van-tabbar-item>
      <van-tabbar-item replace to="/mobail/orderAdd" icon="search">订单添加</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="less" scoped>
</style>