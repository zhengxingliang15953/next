<template>
  <div>
    <div class="main-title">
      营销推广
      <div class="en-main-title">MARKETING</div>
    </div>
    <div class="panel-img-box">
        <div class="panel-img-box-item">
            <img src="../assets/img/weixin2.png"  alt="">
            <h6>微信</h6>
        </div>
        <div class="panel-img-box-item">
            <img src="../assets/img/douyin2.png"  alt="">
            <h6>抖音</h6>
        </div>
        <div class="panel-img-box-item">
            <img src="../assets/img/ruanwen1.png"  alt="">
            <h6>软文</h6>
        </div>
        <div class="panel-img-box-item">
            <img src="../assets/img/shipin1.png"  alt="">
            <h6>视频</h6>
        </div>
    </div>
    <h1>我们能做什么？</h1>
    <h2>完整的全网营销系列产品，多方向助力网络营销</h2>
    <div class="panel-market-box">
        <div class="panel-market-box-top">
            <div class="panel-market-box-top-left">
                <img src="../assets/img/weixin3.png" width="100%" alt="">
            </div>
            <div class="panel-market-box-top-right">
                <h5>微信朋友圈推广</h5>
                <h6>做有效的推广</h6>
            </div>
        </div>

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
img{
    margin-bottom:10px;
}
.panel-img-box{
    display: -webkit-flex;
    display: flex;
    justify-content:space-evenly;
    .panel-img-box-item{
        width:16%;
        img{
            width: 100%;
            border-radius: 50%;
        }
        h6{
            text-align: center;
            margin-top:-10px;
            font-size: 0.24rem;
        }
    }
}
h1{
    text-align: center;
    color: #333;
    margin-top:20px;
    font-size: 0.5rem;
}
h2{
    width: 70%;
    margin: 20px auto;
    text-align: center;
    font-weight: 400;
}
.panel-market-box{
    width: 90%;
    margin:0 auto;
    border: 1px solid #e6e6e6;
    .panel-market-box-top{
        display: flex;
        background: #1a54c8;
        width: 100%;
        color: white;
        padding-left:10px;
        .panel-market-box-top-left{
            display: flex;
            align-items: center;
            width: 20%;
            color: white;
        }
        .panel-market-box-top-right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            margin-left:10px;
            h5{
                color: white;
                font-size: 0.35rem;
            }
            h6{
                color: white;
                font-size: 0.27rem;
            }
        }
    }
}
</style>