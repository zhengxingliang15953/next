<template>
  <div class="panel-new-detail">
      <h3 class="title">{{indexNew.title}}</h3>
      <p v-for="(item,index) in indexNew.main" :key="index">{{item}}</p>
  </div>
</template>

<script>
import { getIndexNews } from "../plugins/news";
export default {
  data() {
    return {
      indexNew: {//当前文章
        id: "",
        date: "",
        title: "",
        main: []
      }
    };
  },
  created() {
    this.indexNew = getIndexNews(this.$route.query.id)[0];
  }
};
</script>

<style lang="less" scoped>
.panel-new-detail{
    width: 90%;
    margin:20px auto;
    .title{
        font-family: 'gautami';
        font-size: 0.5rem;
        text-align: center;
    }
    p{
        font-size: 0.3rem;
        margin-bottom: 10px;
        text-indent: 30px;
    }
}
</style>