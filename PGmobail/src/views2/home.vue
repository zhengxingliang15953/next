<template>
  <div id="home">
    <div class="main-title main-title-other" ref="about">
      关于盘古
      <div class="en-main-title">ABOUT US</div>
    </div>
    <div class="panel-box main-title-other" id="aboutus" ref="aboutTwo">
      湖州盘古网络有限公司(hzpangu.cn)专注于IT技术解决方案与移动互联网先锋技术研发, 致力于互联网信息资源的深度挖掘和整合,努力打造成为全国领先的互联网基础应用服务提供商。
    </div>
    <img src="../assets/img/img-about1.png" alt width="90%" style="margin-left:5%;margin-bottom:10px;"/>
    <div class="panel-box-three main-title-other" ref="aboutThree">
        <div @click="routerTo('/aboutus')">
          <img src="../assets/img/home-head1.jpg" alt="" >
          <h4>关于我们</h4>
        </div>
        <div  @click="routerTo('/solution')">
          <img src="../assets/img/home-head3.jpg" alt="" >
          <h4>解决方案</h4>
        </div>
        <div   @click="routerTo('/new')">
          <img src="../assets/img/home-head2.jpg" alt="" >
          <h4>新闻咨询</h4>
        </div>
      </div>
    <div class="main-title main-title-other" ref="application1">
      应用中心
      <div class="en-main-title">APPLICATION</div>
    </div>
    <div class="panel-box">
      <div class="panel-box-img">
        <div ref="application2" class="main-title-left" @click="toProduct('企业上网')">
          <img src="../assets/img/home-application1.png" width="100%" />
          <p>企业上网</p>
        </div>
        <div ref="application3" class="main-title-right" @click="toProduct('营销推广')">
          <img src="../assets/img/home-application2.png" width="100%" />
          <p>网络营销推广</p>
        </div>
        <div ref="application4" class="main-title-left" @click="toProduct('企业应用')">
          <img src="../assets/img/home-application3.png" width="100%" />
          <p>企业应用</p>
        </div>
        <div ref="application5" class="main-title-right" @click="toProduct('盘古码')">
          <img src="../assets/img/home-application4.png" width="100%" />
          <p>盘古码</p>
        </div>
      </div>
    </div>
    <!-- <img src="../assets/img/pgdisire.png" width="100%" alt=""> -->
    <div class="main-title main-title-other" ref="newone">
      新闻咨询
      <div class="en-main-title">NEWS</div>
    </div>
    <div class="panel-box">
      <div class="panel-box-news main-title-left" ref="newtwo">
        <div>
          <p class="panel-box-news-left" @click="toNewDetail(0)">浙江湖州检方开展公益诉讼专项监督 助力疫情阻击战</p>
          <p class="panel-box-news-right">2020-03-12</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news main-title-right" ref="newthree">
        <div>
          <p class="panel-box-news-left"  @click="toNewDetail(1)">湖州市关于加强新型冠状病毒感染的肺炎疫情防控工作的通告(第4号)</p>
          <p class="panel-box-news-right">2020-03-12</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news main-title-left" ref="newfour">
        <div>
          <p class="panel-box-news-left"  @click="toNewDetail(2)">工业互联网夯实浙江数字经济</p>
          <p class="panel-box-news-right">2019-07-04</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="panel-box-news main-title-right" ref="newfive">
        <div>
          <p class="panel-box-news-left"  @click="toNewDetail(3)">打造长三角能源互联网共同体</p>
          <p class="panel-box-news-right">2019-07-04</p>
        </div>
        <div>政府机构链接</div>
      </div><hr></hr>
      <div class="btn-more" @click="routerTo('/new')">
        <span style="width:100%;height:0.9rem;line-height:0.54rem;">了解更多</span>
        </div>
    </div>
    <div class="main-title main-title-other" ref="choose">
      选择我们
      <div class="en-main-title">CHOOSE US</div>
    </div>
    <div class="main-title-other" ref="chooseTwo">
      <img src="../assets/img/chance-my.png" width="100%" alt="" >
    </div>
    <div class="main-title main-title-other" ref="contactOne">
      联系我们
      <div class="en-main-title">CONTACAT</div>
    </div>
    <div class="panel-box main-title-other" ref="contactTwo">
      <img src="../assets/img/concat.png" width="100%" />
    </div>
  </div>
</template>

<script>
import {getBeforeNewList} from '../plugins/news';
export default {
  data() {
    return {
      fiveNewsList:[]
    };
  },
  created(){
    document.documentElement.scrollTop = 0;
    this.fiveNewsList=getBeforeNewList(5);
  },
  mounted() {
    window.addEventListener('scroll',this.scrollMethods);
    scrollTo(0,0);
    // console.log(this.$refs.about.getBoundingClientRect().top);
    let about=this.$refs.about;
    let aboutTwo=this.$refs.aboutTwo;
    let aboutThree=this.$refs.aboutThree;
    let top=document.documentElement.scrollTop;
    let application1=this.$refs.application1;
    //if(top>about.getBoundingClientRect().top-220){
        about.classList.add('top-animation');
        aboutTwo.classList.add('top-animation-delay1');
        aboutThree.classList.add('top-animation-delay2');
      //}
  },
  methods: {
    scrollMethods(){
      let about=this.$refs.about;
    let aboutTwo=this.$refs.aboutTwo;
    let aboutThree=this.$refs.aboutThree;
    let top=document.documentElement.scrollTop;
    let application1=this.$refs.application1;
    let application2=this.$refs.application2;
    let application3=this.$refs.application3;
    let application4=this.$refs.application4;
    let application5=this.$refs.application5;
    let choose=this.$refs.choose;
    let chancetwo2=this.$refs.chooseTwo;
    let new1=this.$refs.newone;
    let new2=this.$refs.newtwo;
    let new3=this.$refs.newthree;
    let new4=this.$refs.newfour;
    let new5=this.$refs.newfive;
    let contact1=this.$refs.contactOne;
    let contact2=this.$refs.contactTwo;
    // console.log(top);
    if(top>about.getBoundingClientRect().top-220){
        about.classList.add('top-animation');
        aboutTwo.classList.add('top-animation-delay1');
        aboutThree.classList.add('top-animation-delay2');
      }
      if(top>application1.getBoundingClientRect().top-220){
        application1.classList.add('top-animation');
        application2.classList.add('right-animation-delay1');
        application3.classList.add('left-animation-delay1');
        application4.classList.add('right-animation-delay2');
        application5.classList.add('left-animation-delay2');
      }
      if(top>choose.getBoundingClientRect().top+1300){
        choose.classList.add('top-animation');
        chancetwo2.classList.add('top-animation-delay1');
      }
      if(top>new1.getBoundingClientRect().top+800){
        new1.classList.add('top-animation');
        new2.classList.add('right-animation-delay1')
        new3.classList.add('left-animation-delay1')
        new4.classList.add('right-animation-delay2')
        new5.classList.add('left-animation-delay2')
      }
      if(top>contact1.getBoundingClientRect().top+1650){
        // console.log(123);
        contact1.classList.add('top-animation');
        contact2.classList.add('top-animation-delay1');
      }
    },
    routerTo(value){//路由调换
      this.$router.push(value);
    },
    toNewDetail(value){//新闻挑战详情页
    this.$router.push({path:'/newsDetail',query:{id:value}});
  },
  toProduct(value){//产品跳转
    this.$router.push({path:'/product',query:{active:value}});
  }
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.scrollMethods,false);
  },
};
</script>

<style lang="less" scoped>
.panel-box-img > div {
  width: 100%;
  box-shadow: 0 0 10px #B5B5B5;
  margin-bottom: 10px;
  p {
    margin: 15px;
    font-weight: 450;
    font-size: 0.35rem;
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
.panel-box-three{
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  background: #f4f4f4;
  padding-top:10px;
  padding-bottom:10px;
  margin-top:-4px;
  div{
    width: 20%;
  }
  h4{
    width: 100%;
    text-align: center;
    font-size: 0.24rem;
  }
  img{
    width: 70%;
    margin-left:15%;
  }
}
</style>