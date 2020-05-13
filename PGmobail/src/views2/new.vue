<template>
  <div>
    <div class="main-title">
      新闻咨询
      <div class="en-main-title">NEWS</div>
    </div>
    <div class="panel-news-box" v-for="(item,index) in newsList" :key="index">
        <h3 @click="toNewsDetail(item)">{{item.title}}<span>[{{item.date}}]</span></h3>
        <p>{{item.main[0].slice(0,80)}}</p>
        <hr></hr>
    </div>
    <van-pagination v-model="page" :total-items="sum" mode="simple" :items-per-page="5" @change="changePage" style="width:90%;margin:0 auto;"/>
  </div>
</template>


<script>
import {getBeforeNewList ,getNewsListSize} from '../plugins/news';
export default {
  data() {
    return {
        newsList:[],
        sum:0,
        page:1
    };
  },
  created(){
      this.newsList=getBeforeNewList(1,5);
      this.sum=getNewsListSize();
  },
  methods:{
      toNewsDetail(value){//跳转至详情页
          this.$router.push({path:'/newsDetail',query:{id:value.id}});
      },
      changePage(value){//页码改变回调
          this.page=value;
          this.newsList=getBeforeNewList(this.page,5);
            this.sum=getNewsListSize();
            document.documentElement.scrollTop = 0;
      }
  }
};
</script>

<style lang="less" scoped>
.panel-news-box{
    width: 90%;
    margin:0 auto;
    h3{
        color:black;
        font-size: 0.28rem; 
    }
    p{
        font-size: 0.26rem;
    }
    hr{
        border:0.5px dashed ;
        margin:10px 0;
    }
}
</style>