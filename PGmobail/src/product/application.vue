<template>
  <div>
    <div class="panel-application-container">
      <div class="panel-applicaion-title">
        日常管理应用
      </div>
      <img src="../assets/img/richang.png" width="100%" alt="">
      <h3>管理应用不断深化</h3>
      <h1>为您量身定制</h1>
      <hr></hr>
      <p>随着互联网+ 的推动，现在政府、事业单位、企业以及其他组织在各自的管理领域逐步转型，向电子化互联网化转型，使互联网+管理应用不断深化、触及面不断扩展，在行政审批、日常考勤、合同管理、电话会议、客户管理、销售员跟踪管理、业务跟单管理等方面得到充分应用。</p>
    </div>
    <div class="panel-application-container">
      <div class="panel-applicaion-title">
        二维码应用
      </div>
      <img src="../assets/img/twoma.jpg" width="100%" alt="">
      <h3>产品的载体</h3>
      <h1>一物一码 管理宣传</h1>
      <hr></hr>
      <p>产品二维码也就是一物一码概念，作为移动端产品信息查询接口，越来越多的使用在产品标签和产品包装上。通过产品二维码可以实现产品信息查询、产品防伪查询、产品保修以及产品追溯等功能，甚至有些企业通过产品二维码进行商业推广活动，让自己的产品成为宣传的载体。</p>
    </div>
    <div class="panel-application-container">
      <div class="panel-applicaion-title">
        B2C业务应用
      </div>
      <img src="../assets/img/b2c.jpg" width="100%" alt="">
      <h3>应用不断深化</h3>
      <h1>打造掌上交易平台</h1>
      <hr></hr>
      <p>我们能为您提供公众号、小程序和APP的线上综合服务平台,并与线上综合服务平台进行数据对接,根据监管要求,向线上综合服务平台发送订单、支付单、运单、个人物品申报单等数据。</p>
    </div>
    <div class="panel-application-container">
      <div class="panel-applicaion-title">
        网络安全应用
      </div>
      <img src="../assets/img/interanquan.jpg" width="100%" alt="">
      <h3>合规合法</h3>
      <h1>专业安全运营</h1>
      <hr></hr>
      <p>对网站或者APP的业务流量进行恶意特征识别及防护，将正常、安全的流量回源到服务器。避免网站服务器被恶意入侵，保障业务的核心数据安全，解决因恶意攻击导致的服务器性能异常问题。</p>
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
.panel-application-container {
  width: 90%;
  margin: 10px auto;
  border: 1px solid #e6e6e6;
  .panel-applicaion-title{
    font-size: 0.35rem;
    font-weight: 450;
    padding:10px;
    background-color: #f2f2f2 ;
    color: black;
    border-left: 4px solid  #1a54c8;
  }
  h3 {
    font-size: 0.4rem;
    font-weight: 400;
    padding-left: 5%;
    margin-top:10px;
  }
  h1 {
    text-align: left;
    padding-left: 5%;
    margin: 0;
    color: #656565;
    font-weight: 300;
    font-size: 0.55rem;
  }
  hr {
    width: 30%;
    border: 0.5px solid #1a54c8;
    margin: 10px 5%;
  }
  p{
    padding:5%;
    font-size: 0.28rem;
  }
}
</style>