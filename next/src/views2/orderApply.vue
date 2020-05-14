<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="审核('灰底'为未修改,'白底'为修改项)" width="1000" :footer-hide="true">
      <div class="orderApply-box">
        <div class="orderApply-box-item">
          <h1>修改前</h1>
          <div class="modal-item">
            客户名称:
            <Input v-model="applyingList.username" disabled style="width: 70%;" />
          </div>
          <div class="modal-item">
            业务内容:
            <Input v-model="applyingList.info" disabled style="width: 70%;" />
          </div>
          <div class="modal-item">
            成交金额:
            <Input v-model="applyingList.turnover" disabled type="number" style="width: 30%;" />制作成本:
            <Input v-model="applyingList.cost" disabled type="number" style="width: 30%;" />
          </div>
          <div class="modal-item">
            已收款项:
            <Input
              v-model="applyingList.receiving_amount"
              disabled
              type="number"
              style="width: 30%;"
            />订单日期:
            <Input v-model="applyingList.date" disabled style="width: 30%;" />
          </div>
          <div class="modal-item">
            安装人员:
            <Input v-model="applyingList.installer" disabled type="number" style="width: 30%;" />安装费用:
            <Input v-model="applyingList.installation" disabled style="width: 30%;" />
          </div>
          <div class="modal-item">
            制作供应:
            <Input v-model="applyingList.supplier" disabled type="number" style="width: 30%;" />订单状态:
            <Input v-model="applyingList.status" disabled style="width: 30%;" />
          </div>
        </div>
        <div class="orderApply-center"></div>

        <div class="orderApply-box-item">
          <h1>修改后</h1>
          <div class="modal-item">
            客户名称:
            <Input
              v-model="applyingList.usernamenew"
              style="width: 70%;"
              :disabled="applyingList.username==applyingList.usernamenew"
            />
          </div>
          <div class="modal-item">
            业务内容:
            <Input
              v-model="applyingList.infonew"
              style="width: 70%;"
              :disabled="applyingList.info==applyingList.infonew"
            />
          </div>
          <div class="modal-item">
            成交金额:
            <Input
              v-model="applyingList.turnovernew"
              type="number"
              style="width: 30%;"
              :disabled="applyingList.turnover==applyingList.turnovernew"
            />制作成本:
            <Input
              v-model="applyingList.costnew"
              type="number"
              style="width: 30%;"
              :disabled="applyingList.cost==applyingList.costnew"
            />
          </div>
          <div class="modal-item">
            已收款项:
            <Input
              v-model="applyingList.receiving_amountnew"
              type="number"
              style="width: 30%;"
              :disabled="applyingList.receiving_amount==applyingList.receiving_amountnew"
            />订单日期:
            <Input
              v-model="applyingList.datenew"
              style="width: 30%;"
              :disabled="applyingList.date==applyingList.datenew"
            />
          </div>
          <div class="modal-item">
            安装人员:
            <Input
              v-model="applyingList.installernew"
              style="width: 30%;"
              :disabled="applyingList.installer==applyingList.installernew"
            />安装费用:
            <Input
              v-model="applyingList.installationnew"
              style="width: 30%;"
              :disabled="applyingList.installation==applyingList.installationnew"
            />
          </div>
          <div class="modal-item">
            制作供应:
            <Input
              v-model="applyingList.suppliernew"
              style="width: 30%;"
              :disabled="applyingList.supplier==applyingList.suppliernew"
            />订单状态:
            <Input
              v-model="applyingList.statusnew"
              style="width: 30%;"
              :disabled="applyingList.status==applyingList.statusnew"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="agreement-box">
        <Button type="error" @click="addSubmit('已回拒')">回拒</Button>
        <Button type="primary" style="margin-left:15px;" @click="addSubmit('已审批')">同意</Button>
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
            v-if="row.result=='未审批'"
            size="small"
            style="margin-right: 5px"
            @click="edit(row)"
          >审核</Button>
          <!-- <Button type="error" size="small" @click="remove(row)">删除</Button> -->
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
      options: []
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
    edit(value) {
      //审核
      let list = [];
      list = this.orderApplyList.filter(item => {
        return item.id == value.id;
      });
      this.applyingList = list[0] || null;
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
</style>