<template>
  <div id="mobailList">
        <van-pagination v-model="page" mode="simple" :total-items="sum" @change="pageChange"/>
        <van-collapse v-model="activeNames">
        <van-collapse-item v-for="(item,index) in orderList" :title="item.username" :name="index" :key="index">
          <div>
              <p></span>客户名称:<span>{{item.username}}</span></p>
              <p></span>业务内容:<span>{{item.info}}</span></p>
              <p></span>成交金额:<span>{{item.turnover}}</span></p>
              <p></span>制作成本:<span>{{item.cost}}</span></p>
              <p></span>已收款项:<span>{{item.receiving_amount}}</span></p>
              <p></span>订单日期:<span>{{item.date}}</span></p>
              <p></span>安装人员:<span>{{item.installer}}</span></p>
              <p></span>安装费用:<span>{{item.installation}}</span></p>
              <p></span>制作供应商:<span>{{item.supplier}}</span></p>
              <p></span>订单状态:<span>{{item.status}}</span></p>
          </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import {getOrderPageList} from '../api';
import {changeTime,listDateChange} from '../plugins/time';
export default {
  data() {
    return {
      activeNames: ["0"],
      page:1,
      sum:0,
      orderList:[]
    };
  },
  created(){
      let time=changeTime(new Date());
      getOrderPageList({
      pagesize: 10,
      pageid: 1,
      stime: '0001-01-01',
      etime: time,
      allnumber: 0,
      pagenumber: 0,
      name: ''
    }).then(data=>{
        this.orderList=data.data.data.xyz_Orders||[];
        this.sum=data.data.data.allnumber||0;
    })
  },
  methods:{
      pageChange(value){
          this.page=value;
          let time=changeTime(new Date());
      getOrderPageList({
      pagesize: 10,
      pageid: this.page,
      stime: '0001-01-01',
      etime: time,
      allnumber: 0,
      pagenumber: 0,
      name: ''
    }).then(data=>{
        this.orderList=data.data.data.xyz_Orders||[];
        this.sum=data.data.data.allnumber||0;
    })
      }
  }
};
</script>

<style lang="less" scoped>
#mobailList {
  height: 500px;
}
</style>