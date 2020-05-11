<template>
  <div>
    <div class="main-title">
      营销推广
      <div class="en-main-title">MARKETING</div>
    </div>
    <div class="panel-img-box">
      <div class="panel-img-box-item">
        <img src="../assets/img/weixin2.png" alt />
        <h6>微信</h6>
      </div>
      <div class="panel-img-box-item">
        <img src="../assets/img/douyin2.png" alt />
        <h6>抖音</h6>
      </div>
      <div class="panel-img-box-item">
        <img src="../assets/img/ruanwen1.png" alt />
        <h6>软文</h6>
      </div>
      <div class="panel-img-box-item">
        <img src="../assets/img/shipin1.png" alt />
        <h6>视频</h6>
      </div>
    </div>
    <h1>我们能做什么？</h1>
    <h2>完整的全网营销系列产品，多方向助力网络营销</h2>
    <div class="panel-market-box">
      <div class="panel-market-box-top">
        <div class="panel-market-box-top-left">
          <img src="../assets/img/weixin3.png" width="100%" alt />
        </div>
        <div class="panel-market-box-top-right">
          <h5>微信朋友圈推广</h5>
          <h6>做有效的推广</h6>
        </div>
      </div>
      <img src="../assets/img/weixin4.png" width="100%" alt />
      <h3>全网营销践行者</h3>
      <h1>一企一案 量身定做</h1>
      <hr />
      <div
        class="panel-body-text"
      >适合即买即走、快速消费、频次高的产品。通过印刷在产品包装上的二维码，来做提高用户粘性的积分、多卖累计赠送、抽奖以及分享领红包等活动，让消费者持续购买，使每一个产品都成为企业营销的载体。</div>
      <ul>
        <li><Icon type="md-checkmark" size="25" color="#1a54c8"/>互动数据:评估用户广告方案的互动性</li>
        <li><Icon type="md-checkmark" size="25" color="#1a54c8"/>分项数据:分享好友量、分享朋友圈量</li>
        <li><Icon type="md-checkmark" size="25" color="#1a54c8"/>关注数据:评估广告主品牌影响力</li>
        <li><Icon type="md-checkmark" size="25" color="#1a54c8"/>点击数据:广告点击率、详情页点击率</li>
      </ul>
    </div>

    <div class="panel-market-box2">
        <h3>没有精钢钻，怎揽瓷器活</h3>
        <h1>抖音广告怎么做？</h1>
        <hr></hr>
        
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
img {
  margin-bottom: 10px;
}
.panel-img-box {
  display: -webkit-flex;
  display: flex;
  justify-content: space-evenly;
  .panel-img-box-item {
    width: 16%;
    img {
      width: 100%;
      border-radius: 50%;
    }
    h6 {
      text-align: center;
      margin-top: -10px;
      font-size: 0.24rem;
    }
  }
}
h1 {
  text-align: center;
  color: #333;
  margin-top: 20px;
  font-size: 0.5rem;
}
h2 {
  width: 70%;
  margin: 20px auto;
  text-align: center;
  font-weight: 400;
  font-size: 0.35rem;
}
.panel-market-box {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #e6e6e6;
  .panel-market-box-top {
    display: flex;
    background: #1a54c8;
    width: 100%;
    color: white;
    padding-left: 10px;
    .panel-market-box-top-left {
      display: flex;
      align-items: center;
      width: 20%;
      color: white;
    }
    .panel-market-box-top-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      margin-left: 10px;
      h5 {
        color: white;
        font-size: 0.35rem;
      }
      h6 {
        color: white;
        font-size: 0.27rem;
      }
    }
  }
  h3 {
    font-size: 0.4rem;
    font-weight: 400;
    padding-left: 5%;
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
  ul {
    margin-left: 5%;
    margin-right:5%;
    margin-bottom:10px;
    li {
        font-size: 0.28rem;
        margin-bottom:5px;
    }
  }
}
.panel-market-box2{
    margin-top:20px;
    background-color: #455159;
    color: white;
    padding:25px 5%;
    h1{
        text-align: left;
        color: white;
        font-size:0.55rem;
        margin-top:10px;
        font-weight: 400;
    }
    h3{
        font-style: oblique;
        color: white;
        font-weight: 500;
    }
    hr{
        width:30%;
        border:0.5px solid white;
        margin-top:10px;
        margin-bottom:10px;
    }
}
</style>