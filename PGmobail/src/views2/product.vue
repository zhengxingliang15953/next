<template>
  <div>
    <!-- <div class="main-title">
      产品中心
      <div class="en-main-title">POSITION</div>
    </div>-->
    <van-tabs v-model="active" swipeable animated color="#0254ba">
      <van-tab title="企业上网">
          <web></web>
      </van-tab>
      <van-tab title="企业应用">
          <application></application>
      </van-tab>
      <van-tab title="盘古码">
          <pgma></pgma>
      </van-tab>
      <van-tab title="营销推广">内容4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import web from '../product/web';
import pgma from '../product/pgma';
import application from '../product/application';
export default {
  data() {
    return {};
  },
  components:{
      web,pgma,application
  }
};
</script>

<style lang="less" scoped>
.product-four-title {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-four-main {
  //   background: url("../assets/img/border-bottom-title.png") bottom no-repeat;
  //   background-size: 100%;
  font-size: 0.28rem;
  width: 24.5%;
  padding: 5px 10px;
  text-align: center;
  background-color: #d2d0d0;
}
</style>