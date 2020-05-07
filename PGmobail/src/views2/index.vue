<template>
  <div id="index">
    <!--左侧抽屉划出-->
    <Drawer placement="left" :closable="false" v-model="modal1" width="37" :styles="drawerStyle">
      <div class="drawer-item" @click="routerTo('/home')">
        <span>首页</span>
        <van-icon name="arrow" class="drawer-right" />
      </div>
      <div class="drawer-item" @click="routerTo('/aboutus')">
        <span>关于盘古</span>
        <van-icon name="arrow" class="drawer-right" />
      </div>
      <div class="drawer-item" @click="routerTo('/product')">
        <span>产品中心</span>
        <van-icon name="arrow" class="drawer-right" />
      </div>
      <div class="drawer-item">
        <span>解决方案</span>
        <van-icon name="arrow" class="drawer-right" />
      </div>
      <div class="drawer-item">
        <span>联系我们</span>
        <van-icon name="arrow" class="drawer-right" />
      </div>
      <img src="../assets/img/logo-bottom.png" alt="" width="80%" style="margin-left:10%;opacity:0.3;margin-top:20px;"> 
    </Drawer>
    <!--左侧抽屉划出-->

    <!--header-->
    <div class="header-box">
      <div class="header">
        <van-icon name="wap-nav" size="0.55rem" color="#454845" @click="modal1=true;" />
      </div>
    </div>
    <!--header-->

    <!--logo-->
    <div class="panel-logo-box">
      <div>
        <img src="../assets/img/logo2.png" alt width="100%" />
      </div>
      <div>
        <p>咨询电话:+86 (0757)8888888</p>
      </div>
    </div>
    <!--logo-->

    <!--轮播图-->
    <van-swipe class="swiper" :autoplay="4000" indicator-color="white">
      <van-swipe-item >
          <img src="../assets/img/swiper1.jpg" alt="" width="100%">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/img/swiper2.jpg" alt="" width="100%">
      </van-swipe-item>
    </van-swipe>
    <!--轮播图-->

    <router-view class="router"></router-view>

    <!--footer-->
    <div class="footer">
        <p>
            <span >首页</span>
            <span >关于我们</span>
            <span >联系我们</span>
        </p>
        <p>
            <span>电话号码:888888</span>
            <span>传真号码:888888</span>
        </p>
        <p>
            <span>地址:浙江省湖州市吴兴区EBD总部自由港A幢7楼</span>
        </p>
    </div>
    <!--footer-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false, //左侧抽屉控制
      drawerStyle: {
        background: " #E8E8E8",
        padding: 0,
      }
    };
  },
  methods:{
    routerTo(value){//左侧抽屉路由跳转
      this.$router.push(value);
      this.modal1=false;
    }
  }
};
</script>

<style lang="less" scoped>
.panel-logo-box p {
  padding-left: 10px;
  color: #6e6e6e;
  font-size: 0.27rem;
}
.swiper{
    position: relative;
    top:0.8rem;
    width: 100%;
}
.router{
    position: relative;
    top: 0.8rem;
}
</style>