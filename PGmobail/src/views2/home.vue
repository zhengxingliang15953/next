<template>
  <div id="home">
    <div class="main-title">
      关于盘古
      <div class="en-main-title">ABOUT US</div>
    </div>
    <div class="panel-box" id="aboutus">
      湖州盘古网络有限公司(hzpangu.cn)专注于IT技术解决方案与移动互联网先锋技术研发, 致力于对互联网信息资源的深度挖掘和整合,努力打造成为全国领先的互联网基础应用服务提供商。
      <div class="panel-box-img">
        <img src="../assets/img/img-about1.png" alt width="100%" />
      </div>
    </div>
    <div class="main-title">
      应用中心
      <div class="en-main-title">ABOUT US</div>
    </div>
    <div class="panel-box">
      <div class="panel-box-img">
        <div>
          <img src="../assets/img/home-application1.png" width="100%" />
          <p>企业上网</p>
        </div>
        <div>
          <img src="../assets/img/home-application2.png" width="100%" />
          <p>网络营销推广</p>
        </div>
        <div>
          <img src="../assets/img/home-application3.png" width="100%" />
          <p>二维码应用</p>
        </div>
        <div>
          <img src="../assets/img/home-application1.png" width="100%" />
          <p>盘古码</p>
        </div>
      </div>
    </div>
    <div class="main-title">
      新闻咨询
      <div class="en-main-title">NEWS</div>
    </div>
    <div class="panel-box">
      <div class="panel-box-news">
        <div>
          <p class="panel-box-news-left">浙江湖州检方开展公益诉讼专项监督 助力疫情阻击战</p>
          <p class="panel-box-news-right">2020-04-26</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news">
        <div>
          <p class="panel-box-news-left">浙江湖州检方开展公益诉讼专项监督 助力疫情阻击战</p>
          <p class="panel-box-news-right">2020-04-26</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news">
        <div>
          <p class="panel-box-news-left">浙江湖州检方开展公益诉讼专项监督 助力疫情阻击战</p>
          <p class="panel-box-news-right">2020-04-26</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news">
        <div>
          <p class="panel-box-news-left">浙江湖州检方开展公益诉讼专项监督 助力疫情阻击战</p>
          <p class="panel-box-news-right">2020-04-26</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
    </div>
    <div class="main-title">
      联系我们
      <div class="en-main-title">CONTACAT</div>
    </div>
    <div class="panel-box">
      <img src="../assets/img/concat.png" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.panel-box-img > div {
  width: 47%;
  border: 0.5px solid #cfcfcf;
  padding-top: 2px;
  padding-left: 7px;
  padding-right: 7px;
  margin-bottom: 10px;
  p {
    margin: 5px;
    font-weight: 450;
  }
}
.panel-box-news div:nth-child(1) {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  .panel-box-news-left {
    width: 60%;
    white-space: nowrap;
    // 溢出显示省略号
    text-overflow: ellipsis;
    // 溢出的部分隐藏
    overflow: hidden;
    color: black;
    margin-bottom: 5px;
  }
  .panel-box-news-right {
    width: 30%;
  }
}
hr{
    margin-top:5px;
    border: 0.5px dashed #E8E8E8;
    margin-bottom:5px;
}
</style>