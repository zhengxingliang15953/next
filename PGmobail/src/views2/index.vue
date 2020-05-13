<template>
  <div id="index">
    <BackTop></BackTop>
    <!--左侧抽屉划出-->
    <Drawer placement="left" :closable="false" v-model="modal1" width="37" :styles="drawerStyle">
      <div class="drawer-item main-title-left" @click="routerTo('/home')" ref="shouye">
        <span>首页</span>
        <!-- <van-icon name="arrow" class="drawer-right" /> -->
      </div>
      <div class="drawer-item main-title-left" @click="routerTo('/aboutus')" ref="pg">
        <span>关于盘古</span>
        <!-- <van-icon name="arrow" class="drawer-right" /> -->
      </div>
      <div class="drawer-item main-title-left" @click="routerTo('/product')" ref="product">
        <span>产品中心</span>
        <!-- <van-icon name="arrow" class="drawer-right" /> -->
      </div>
      <div class="drawer-item main-title-left" @click="routerTo('/solution')" ref="solution">
        <span>解决方案</span>
        <!-- <van-icon name="arrow" class="drawer-right" /> -->
      </div>
      <div class="drawer-item main-title-left" @click="routerTo('/contact')" ref="contact">
        <span>联系我们</span>
        <!-- <van-icon name="arrow" class="drawer-right" /> -->
      </div>
      <img src="../assets/img/logo-bottom.png" alt="" width="80%" style="margin-left:10%;opacity:0.3;margin-top:20px;"> 
    </Drawer>
    <!--左侧抽屉划出-->

    <!--header-->
    <div class="header-box">
      <div class="header">
        <van-icon name="wap-nav" size="0.55rem" color="#454845" @click="modal1=true;" ref="icon"/>
      </div>
    </div>
    <!--header-->

    <!--logo-->
    <div class="panel-logo-box">
      <div>
        <img src="../assets/img/logo2.png" alt width="100%" />
      </div>
      <div>
        <p>0572-2611126<br>400-0572-916</p>
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
        <div class="footer-top">
          <div style="color:white;"><Icon type="md-call" color="white" size="30"/>0572-2611126</div>
          <p>地址:湖州市吴兴区总部自由港A幢7楼</p>
          <p>邮箱:service@pgnet.cn</p>
        </div>
        <div class="footer-bottom">
          <p>湖州盘古网络有限责任公司 版权所有</p>
          <p>Copyright © 2020 pangu . All Rights Reserved 《法律声明》 | ICP备案网站信息: 浙ICP备16036884号</p>
        </div>
    </div>
    <!--footer-->

    <!-- <div id="contact">
      <img src="../assets/img/telphone.png" width="90%" alt="">
      联<br>系<br>我<br>们</div>-->
  </div> 
</template>

<script>
export default {
  data() {
    return {
      modal1: false, //左侧抽屉控制
      drawerStyle: {
        background: " #E8E8E8",
        padding: 4,
      }
    };
  },
  methods:{
    routerTo(value){//左侧抽屉路由跳转
      this.$router.push(value);
      this.modal1=false;
    }
  },
  watch:{
    modal1(newName,oldName){
      let shouye=this.$refs.shouye;
      let pg=this.$refs.pg;
      let product=this.$refs.product;
      let solution=this.$refs.solution;
      let contact=this.$refs.contact;
      let icon=this.$refs.icon;
      if(newName==true){
        shouye.classList.add('tabbar-index-one');
        pg.classList.add('tabbar-index-two');
        product.classList.add('tabbar-index-three');
        solution.classList.add('tabbar-index-four');
        contact.classList.add('tabbar-index-five');
        icon.classList.add('tabbar-top-btn1');
      }else{
        shouye.classList.remove('tabbar-index-one');
        pg.classList.remove('tabbar-index-two');
        product.classList.remove('tabbar-index-three');
        solution.classList.remove('tabbar-index-four');
        contact.classList.remove('tabbar-index-five');
        icon.classList.remove('tabbar-top-btn1');
      }
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
#contact{
  position: fixed;
  width: 30px;
  text-align: center;
  background-color: #4e7ef5	;
  color:white;
  border-radius: 5px;
  right:3px;
  top:35%;
  overflow: hidden;
  img{
    animation: imgleftright 1.5s infinite linear;
  }
}
@keyframes imgleftright{
  25%{
    transform: rotateZ(10deg);
  }
  50%{
    transform: rotateZ(0deg);
  }
  75%{
    transform: rotateZ(-10deg);
  }
}
</style>