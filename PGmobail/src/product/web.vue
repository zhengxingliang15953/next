<template>
  <div>
    <!-- <div class="main-title">
      企业上网
      <div class="en-main-title">ENTERPRISE ONLINE</div>
    </div> -->
    <div class="panel-web-title">
      <div class="panel-web-title-box">
        <h1>建站服务</h1>
        <h5>真诚、高效、专业、品质作保障，服务为核心！</h5>
      </div>
    </div>
    <div class="panel-web-box">
      <h1>域名注册</h1>
      <hr></hr>
      <h3>域名注册+域名备案</h3>
      <img src="../assets/img/com.png" width="100%" alt="">
      <p>关于域名</p>
      <ul >
        <li>.COM是通用顶级域名（gTLD）用于商业实体。</li>
        <li>.NET的通用顶级域名（gTLD）网络提供商用于互联网。</li>
        <li>.ORG是通用顶级域名（gTLD）组织，旨在为非营利性公司和其他任何组织，不适合.COM/ .NET后缀下的简称。</li>
        <li>.INFO是通用顶级域名（gTLD）用于信息丰富的网站。</li>
      </ul>
    </div>
    <div class="panel-web-box" style="background-color:#f2f2f2;">
      <h1>企业邮箱</h1>
      <hr></hr>
      <h3>为邮件沟通提供专属通道</h3>
      <img src="../assets/img/web-email.png" width="100%" alt="">
    </div>
    <div class="panel-web-box">
      <h1>网站建设</h1>
      <hr></hr>
      <h3>网站建设+品牌设计</h3>
      <h6>企业网站是企业在互联网上进行网络营销和形象宣传的平台，相当于企业的网络名片，不但对企业的形象是一个良好的宣传，同时可以辅助企业的销售，通过网络直接帮助企业实现产品的销售，企业可以利用网站来进行宣传、产品资讯发布、招聘等。</h6>
      <img src="../assets/img/webbuild.jpg" width="100%" alt="">
    </div>
    <div class="panel-web-box" style="background-color:#f2f2f2;">
      <h1>商标注册</h1>
      <hr></hr>
      <h3>全面支持商标申请线上提交</h3>
      <img src="../assets/img/trademark.png" width="112%" style="margin-left:-6%;margin-bottom:60px;" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.panel-web-title{
  width:100%;
  height:4rem;
  background: url('../assets/img/workroom.png') no-repeat;
  background-size: 100%;
  margin-top:10px;
  .panel-web-title-box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: rgba(79, 79, 79, 0.7);
    h1{
      color: white;
      margin-bottom:20px;
      font-size: 0.55rem;
    }
    h5{
      width: 70%;
      text-align: center;
      color: white;
      font-size: 0.28rem;
    }
  }
}
.panel-web-box{
  padding: 5%;
  h1{
    text-align: center;
    font-size: 0.55rem;
    font-weight: 200;
    margin-top:70px;
  }
  h3{
    text-align: center;
    font-size: 0.3rem;
    font-weight: 300;
    margin-bottom:10px;
  }
  hr{
    width: 20%;
    margin:15px auto;
    border:2px solid #48c7ec;
  }
  p{
    font-size: 0.3rem;
    font-weight: 500;
  }
  ul{
    list-style:square ;
    padding:5%;
    li{
      font-size: 0.27rem;
    }
  }
  h6{
    font-size: 0.24rem;
    font-weight: 300;
  }
}
</style>