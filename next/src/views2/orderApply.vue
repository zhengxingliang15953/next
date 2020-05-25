<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="审核/查看" width="1000" :footer-hide="true">
      <div class="orderApply-box">
        <div class="orderApply-box-item">
          <h1>修改前</h1>
          <div class="modal-item">
            客户名称:
            <input v-model="applyingList.username" style="width: 71%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.username" disabled style="width: 70%;" /> -->
          </div>
          <div class="modal-item">
            业务内容:
            <input v-model="applyingList.info" style="width: 71%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.info" disabled style="width: 70%;" /> -->
          </div>
          <div class="modal-item">
            成交金额:
            <input v-model="applyingList.turnover" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.turnover" disabled type="number" style="width: 30%;" /> -->
            制作成本:
            <input v-model="applyingList.cost" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.cost" disabled type="number" style="width: 30%;" /> -->
          </div>
          <div class="modal-item">
            已收款项:
            <input v-model="applyingList.receiving_amount" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.receiving_amount"
              disabled
              type="number"
              style="width: 30%;"
            /> -->
            订单日期:
            <input v-model="applyingList.date" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.date" disabled style="width: 30%;" /> -->
          </div>
          <div class="modal-item">
            安装人员:
            <input v-model="applyingList.installer" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.installer" disabled style="width: 30%;" />-->
            安装费用: 
            <input v-model="applyingList.installation" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.installation" disabled style="width: 30%;" /> -->
          </div>
          <div class="modal-item">
            制作供应:
            <input v-model="applyingList.supplier" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.supplier" disabled style="width: 30%;" /> -->
            订单状态:
            <input v-model="applyingList.status" style="width: 30%;padding:3px;"></input>
            <!-- <Input v-model="applyingList.status" disabled style="width: 30%;" /> -->
          </div>
        </div>
        <div class="orderApply-center"></div>

        <div class="orderApply-box-item">
          <h1>修改后</h1>
          <div class="modal-item">
            客户名称:
            <input v-model="applyingList.usernamenew" :class="{'color-change':applyingList.username!=applyingList.usernamenew}" style="width: 71%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.usernamenew"
              style="width: 70%;"
              :disabled="applyingList.username==applyingList.usernamenew"
            /> -->
          </div>
          <div class="modal-item">
            业务内容:
            <input v-model="applyingList.infonew" :class="{'color-change':applyingList.info!=applyingList.infonew}" style="width: 71%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.infonew"
              style="width: 70%;"
              :disabled="applyingList.info==applyingList.infonew"
            /> -->
          </div>
          <div class="modal-item">
            成交金额:
            <input type="number" :class="{'color-change':applyingList.turnover!=applyingList.turnovernew}" v-model="applyingList.turnovernew" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.turnovernew"
              type="number"
              style="width: 30%;color:blue;"
              :disabled="applyingList.turnover==applyingList.turnovernew"
              v-color
            /> -->
            制作成本:
            <input v-model="applyingList.costnew" :class="{'color-change':applyingList.cost!=applyingList.costnew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.costnew"
              type="number"
              style="width: 30%;"
              :disabled="applyingList.cost==applyingList.costnew"
            /> -->
          </div>
          <div class="modal-item">
            已收款项:
            <input v-model="applyingList.receiving_amountnew" :class="{'color-change':applyingList.receiving_amount!=applyingList.receiving_amountnew}"  style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.receiving_amountnew"
              type="number"
              style="width: 30%;"
              :disabled="applyingList.receiving_amount==applyingList.receiving_amountnew"
            /> -->
            订单日期:
            <input v-model="applyingList.datenew" :class="{'color-change':applyingList.date!=applyingList.datenew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.datenew"
              style="width: 30%;"
              :disabled="applyingList.date==applyingList.datenew"
            /> -->
          </div>
          <div class="modal-item">
            安装人员:
            <input v-model="applyingList.installernew" :class="{'color-change':applyingList.installer!=applyingList.installernew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.installernew"
              style="width: 30%;"
              :disabled="applyingList.installer===applyingList.installernew"
            /> -->
            安装费用:
            <input v-model="applyingList.installationnew" :class="{'color-change':applyingList.installation!=applyingList.installationnew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.installationnew"
              style="width: 30%;"
              :disabled="applyingList.installation===applyingList.installationnew"
            /> -->
          </div>
          <div class="modal-item">
            制作供应:
            <input v-model="applyingList.suppliernew" :class="{'color-change':applyingList.supplier!=applyingList.suppliernew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.suppliernew"
              style="width: 30%;"
              :disabled="applyingList.supplier===applyingList.suppliernew"
            /> -->
            订单状态:
            <input v-model="applyingList.statusnew" :class="{'color-change':applyingList.status!=applyingList.statusnew}" style="width: 30%;padding:3px;"></input>
            <!-- <Input
              v-model="applyingList.statusnew"
              style="width: 30%;"
              :disabled="applyingList.status===applyingList.statusnew"
            /> -->
          </div>
        </div>
      </div>
      <hr />
      <div class="agreement-box">
        <Button type="error" v-if="examOrSearBtn" @click="addSubmit('已回拒')">回拒</Button>
        <Button type="primary" v-if="examOrSearBtn" style="margin-left:15px;" @click="addSubmit('已审批')">同意</Button>
      </div>
    </Modal>
    <!--添加弹窗-->
    <div class="panel-head">订单审核</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <DatePicker
          type="date"
          :value="stime"
          placeholder="请选择查询开始时间"
          style="width: 200px"
          :clearable="false"
          :editable="false"
          @on-change="timeChange1"
        ></DatePicker>至
        <DatePicker
          type="date"
          :value="etime"
          placeholder="请选择查询结束时间"
          style="width: 200px"
          :clearable="false"
          :editable="false"
          @on-change="timeChange2"
        ></DatePicker>
        <Select
          v-model="searchName1"
          filterable
          remote
          clearable
          :remote-method="remoteMethod1"
          @on-change="NameChange"
          @on-clear="NameClear"
          placeholder="请输入客户名称"
          style="width:200px;margin-left:10px;"
        >
          <Option v-for="(item, index) in options" :value="item" :key="index">{{item}}</Option>
        </Select>
        <Button type="info" class="searchBtn" @click="searchBtn">查询</Button>
      </div>
      <Table :columns="columns1" :data="orderApplyList">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            v-show="row.result=='未审批'"
            size="small"
            style="margin-right: 5px"
            @click="edit(row,'审核')"
          >审核</Button>
          <Button type="success" size="small" v-show="row.result!='未审批'" @click="edit(row,'查看')">查看</Button>
        </template>
      </Table>
      <Page :total="sum" :current="page" style="margin-top:20px;" @on-change="pageChange" />
      <span class="sum-footer">总共{{sum}}条记录</span>
    </div>
  </div>
</template>

<script>
import { changeTime } from "../plugins/time";
import { getOrderApplyList, getOrderApplyUpdate } from "../api";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "序号",
          key: "order_id"
        },
        {
          title: "修改人",
          key: "reallyname"
        },
        {
          title: "修改时间",
          key: "datenew"
        },
        {
          title: "修改备注",
          key: "remarks"
        },
        {
          title: "审核状态",
          key: "result"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      orderApplyList: [], //审核列表
      page: 1, //当前页码
      sum: 0, //总数
      stime: "0001-01-01",
      etime: "",
      searchName1: "", //查询name v-modal
      searchName2: "",
      allName: [], //所有的修改人姓名
      modal1: false, //审核窗口控制
      applyingList: {
        //当前展示列表审核
        cost: "",
        costnew: "",
        date: "",
        datenew: "",
        id: "",
        info: "",
        infonew: "",
        installation: "",
        installationnew: "",
        installer: "",
        installernew: "",
        order_id: "",
        reallyname: "",
        receiving_amount: "",
        receiving_amountnew: "",
        result: "",
        status: "",
        statusnew: "",
        supplier: "",
        suppliernew: "",
        turnover: "",
        turnovernew: "",
        username: "",
        usernamenew: ""
      },
      options: [],
      examOrSearBtn:true,//审核查看按钮的显示问题
    };
  },
  created() {
    this.etime = changeTime(new Date());
    getOrderApplyList({
      pagesize: 10,
      pageid: 1,
      stime: this.stime,
      etime: this.etime,
      allnumber: 0,
      pagenumber: 0,
      name: this.searchName2
    }).then(data => {
      this.orderApplyList = data.data.data.xyz_OrderHistories || [];
      this.sum = data.data.data.allnumber || 0;
      let list = [];
      this.orderApplyList.forEach(item => {
        list.push(item.reallyname);
      });
      this.allName = [...new Set(list)];
    });
  },
  methods: {
    pageChange(value) {
      //页码改变回调
      this.page = value;
      getOrderApplyList({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name: this.searchName2
      }).then(data => {
        this.orderApplyList = data.data.data.xyz_OrderHistories || [];
        this.sum = data.data.data.allnumber || 0;
        let list = [];
        this.orderApplyList.forEach(item => {
          list.push(item.reallyname);
        });
        this.allName = [...new Set(list)];
      });
    },
    searchBtn() {
      //查询提交
      this.searchName2 = this.searchName1;
      getOrderApplyList({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name: this.searchName2
      }).then(data => {
        this.orderApplyList = data.data.data.xyz_OrderHistories || [];
        this.sum = data.data.data.allnumber || 0;
        let list = [];
        this.orderApplyList.forEach(item => {
          list.push(item.reallyname);
        });
        this.allName = [...new Set(list)];
      });
    },
    timeChange1(value) {
      //查询时间改变回调
      this.stime = value;
    },
    timeChange2(value) {
      this.etime = value;
    },
    edit(value, orValue) {
      //审核or查看
      let list = [];
        list = this.orderApplyList.filter(item => {
          return item.id == value.id;
        });
        this.applyingList = list[0] || null;
      if (orValue == '审核') {
        this.examOrSearBtn=true;
      }else{
        this.examOrSearBtn=false;
      }
      this.modal1 = true;
    },
    addSubmit(value) {
      //审核提交
      this.modal1 = false;
      getOrderApplyUpdate({ id: this.applyingList.id, res: value }).then(
        data => {
          this.$Message.success(data.data.message);
          getOrderApplyList({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0,
            name: this.searchName2
          }).then(data => {
            console.log(data);
            this.orderApplyList = data.data.data.xyz_OrderHistories || [];
            this.sum = data.data.data.allnumber || 0;
            let list = [];
            this.orderApplyList.forEach(item => {
              list.push(item.reallyname);
            });
            this.allName = [...new Set(list)];
          });
        }
      );
    },
    remoteMethod1(value) {
      //远程搜索方法
      if (value == "") {
        this.options = [];
        this.searchName1 = "";
      } else {
        this.options = this.allName.filter(item => {
          return item.indexOf(value) != -1;
        });
      }
    },
    NameChange(value) {
      this.searchName1 = value;
    },
    NameClear() {
      this.searchName1 = "";
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
.orderApply-box {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .orderApply-box-item {
    width: 47%;
    h1 {
      text-align: center;
      font-size: 18px;
      margin-bottom: 5px;
    }
  }
  .orderApply-center {
    width: 0.5%;
    border: 1px solid black;
  }
}

.abc {
  color: red;
}
.agreement-box {
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
}
hr {
  width: 1000px;
  margin-left: -1.5%;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 0.5px solid #cfcfcf;
}
.color-change{
  color:red;
  font-weight: 500;
}
</style>