<template>
  <div>
    <div class="main-title">
      关于盘古
      <div class="en-main-title">ABOUT US</div>
    </div>
    <div
      class="panel-box"
      id="aboutus"
    >湖州盘古网络有限公司(hzpangu.cn)专注于IT技术解决方案与移动互联网先锋技术研发, 致力于对互联网信息资源的深度挖掘和整合,努力打造成为全国领先的互联网基础应用服务提供商。</div>
    <img
      src="../assets/img/img-about1.png"
      alt
      width="90%"
      style="margin-left:5%;margin-bottom:10px;"
    />
    <div class="main-title">
      企业文化
      <div class="en-main-title">CULTURE</div>
    </div>
    <div class="swiper-container" style="width:95%;margin:0 auto;margin-bottom:30px;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="culture">
            <img src="../assets/img/culture1.png" alt />
            <h3>企业宗旨</h3>
            <p>合作经营、创新应用、系统服务、增值为本。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="culture">
            <img src="../assets/img/culture2.png" alt />
            <h3>企业精神</h3>
            <p>激情、独创、合作、务实、责任。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="culture">
            <img src="../assets/img/culture3.png" alt />
            <h3>企业理念</h3>
            <p>发现需求并寻找到满足客户需求的方法。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="culture">
            <img src="../assets/img/culture4.png" alt />
            <h3>企业目标</h3>
            <p>成为全国领先的互联网基础应用服务商。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-title">
      发展历程
      <div class="en-main-title">DEVELOPMENT PATH</div>
    </div>
    <div class="development">
      <Timeline>
        <TimelineItem color="#6e6e6e">
          <span>2003年</span>
          <p>湖州盘古网络有限公司正式成立.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e">
          <span>2004年</span>
          <p>成为中国领先的网络服务商(北京信海科技)战略合作伙伴.成为中华网湖州、杭州地区核心代理商.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e">
          <span>2005年</span>
          <p>正式成为3721产品湖州地区的注册商.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e" v-if="moreBtnController==true">
          <span>2006年</span>
          <p>成为中国万网、北京新网、中国频道在湖州地区的核心注册商.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e" v-if="moreBtnController==true">
          <span>2007年</span>
          <p>开始成为搜狐公司浙江地区注册商.成为google湖州地区adwords产品注册商.搜狐奥运搜狗推广年度销售竞赛中获得浙江省代理商第一名.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e" v-if="moreBtnController==true">
          <span>2012年</span>
          <p>在南浔正式成立了第一个分部, 并在长兴建立了联络处.</p>
        </TimelineItem>
        <TimelineItem color="#6e6e6e" v-if="moreBtnController==true">
          <span>2014年</span>
          <p>公司全资成立湖州微古信息科技有限公司.</p>
        </TimelineItem>
        <TimelineItem v-if="moreBtnController==false">
          <a @click.prevent="moreBtnController=true">查看更多</a>
        </TimelineItem>
      </Timeline>
    </div>
    <div class="main-title">
      地理位置
      <div class="en-main-title">POSITION</div>
    </div>
    <baidu-map
      style="height:5rem"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <bm-marker
        :position="{lng: 120.198145, lat: 30.861896}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label
          content
          :labelStyle="{color: 'red', fontSize : '24px'}"
          :offset="{width: -35, height: 30}"
        />
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
      moreBtnController: false //查看更多控制
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 120.198145;
      this.center.lat = 30.861896;
      this.zoom = 18;
    }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000 //1秒切换一次
      },
      loop: true,
      effect: "coverflow",
      slidesPerView: 2,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true
      }
    });
  }
};
</script>

<style lang="less" scoped>
.development {
  width: 70%;
  margin-left: 8%;
  font-size: 0.24rem;
  margin-top: 10px;
  span {
    background-color: #ff0110;
    color: white;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.24rem;
  }
  p {
    margin-top: 8px;
    font-size: 0.24rem;
  }
  a {
    font-size: 0.24rem;
  }
}
.culture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3rem;
  height: 4rem;
  padding: 0.2rem;
  background-color: #455158;
  box-shadow: 0 0 5px #b5b5b5;
  border-radius: 10px;
  img {
    width: 60%;
    margin-left: 20%;
  }
  h3 {
    text-align: center;
    font-size: 0.27rem;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    color: white;
  }
  p {
    text-align: center;
    font-size: 0.25rem;
    color: white;
  }
}
</style>