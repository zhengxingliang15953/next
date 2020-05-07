<template>
  <div>
    <div class="main-title">
      企业应用
      <div class="en-main-title">APPLICATION</div>
    </div>
    <div class="panel-two-title">
      <div class="panel-two-title-left">1</div>
      <div class="panel-two-title-right">日常管理应用</div>
    </div>
    <div class="panel-body-text">
         随着互联网+ 的推动，现在政府、事业单位、企业以及其他组织在各自的管理领域逐步转型，向电子化互联网化转型，使互联网+管理应用不断深化、触及面不断扩展，在行政审批、日常考勤、合同管理、电话会议、客户管理、销售员跟踪管理、业务跟单管理等方面得到充分应用。
    </div>
    <div class="application-web-img">
        <div class="application-web-img-item">
            <img src="../assets/img/zufang.jpg" height="100%" alt="">
            <p>租房管理系统</p>
        </div>
        <div class="application-web-img-item">
            <img src="../assets/img/kechuang.jpg" height="100%" alt="">
            <p>科创中心OA系统</p>
        </div>
    </div>
    <div class="panel-two-title">
      <div class="panel-two-title-left">2</div>
      <div class="panel-two-title-right">二维码应用</div>
    </div>
    <div class="panel-body-text">
         产品二维码也就是一物一码概念，作为移动端产品信息查询接口，越来越多的使用在产品标签和产品包装上。通过产品二维码可以实现产品信息查询、产品防伪查询、产品保修以及产品追溯等功能，甚至有些企业通过产品二维码进行商业推广活动，让自己的产品成为宣传的载体。
    </div>
    <div class="application-web-img">
        <div class="application-web-img-item">
            <img src="../assets/img/dehong3.jpg" width="100%" height="100%" alt="">
            <!-- <p>德宏汽车</p> -->
        </div>
    </div>
    <div class="panel-two-title">
      <div class="panel-two-title-left">3</div>
      <div class="panel-two-title-right">B2C业务应用</div>
    </div>
    <div class="panel-body-text">
         "新华e菜场"小程序以客户、商品、订单为核心的前后端一体化的线上生鲜交易的小程序，客户可以实时维护客户订单，安排订单发货，对订单进行全程跟踪，删除订单，添加商品，财务管理，帮助企业快速响应供应链的需求。支持线上订单与门店的整合，顾客线上下单，线下自提或门店送货上门。
    </div>
    <div class="panel-two-title">
      <div class="panel-two-title-left">4</div>
      <div class="panel-two-title-right">网络安全应用</div>
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
.application-web-img{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .application-web-img-item{
        position: relative;
        width:4rem;
        height: 4rem;
        border-radius: 50%;
        overflow: hidden;
        margin:10px;
        p{
            position: absolute;
            top:50%;
            width: 100%;
            transform: translateY(-50%);
            text-align: center;
            color:#E0FFFF;
            font-size: 0.45rem;
            font-weight: 500;
        }
    }
}
</style>