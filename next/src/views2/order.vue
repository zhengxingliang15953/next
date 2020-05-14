<template>
  <div id="apply">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加订单" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        客户名称:
        <Select
          v-model="addOrder.username"
          filterable
          remote
          clearable
          :remote-method="remoteMethod2"
          @on-change="customerNameAddChange"
          @on-clear="customerNameAddClear"
          placeholder="请输入客户名称"
          style="width:70%;"
        >
          <Option
            v-for="(item, index) in customerOptions"
            :value="item.name"
            :key="index"
          >{{item.name}}</Option>
        </Select>
        <!-- <Input v-model="addOrder.username" placeholder="请输入客户名称" style="width: 70%;" /> -->
      </div>
      <div class="modal-item">
        业务内容:
        <Input v-model="addOrder.info" placeholder="请输入业务内容" style="width: 70%;" />
      </div>
      <div class="modal-item">
        成交金额:
        <Input v-model="addOrder.turnover" type="number" placeholder="请输入成交金额" style="width: 30%;" />制作成本:
        <Input v-model="addOrder.cost" type="number" placeholder="请输入制作成本" style="width: 30%;" />
      </div>
      <div class="modal-item">
        已收款项:
        <Input
          v-model="addOrder.receiving_amount"
          type="number"
          placeholder="请输入已收款项"
          style="width: 30%;"
        />订单日期:
        <DatePicker
          type="date"
          placeholder="请选择支出时间"
          :clearable="false"
          :editable="false"
          :value="addOrder.date"
          style="width:30%;"
          @on-change="addTimeChange"
        ></DatePicker>
      </div>
      <div class="modal-item">
        安装人员:
        <!-- <Input v-model="addOrder.installer" placeholder="请输入安装人员" style="width: 30%;" /> -->
        <!-- <Select
          v-model="addOrder.installer"
          filterable
          remote
          clearable
          :remote-method="remoteMethod3"
          @on-change="installerNameAddChange"
          @on-clear="installerNameAddClear"
          placeholder="请输入安装人员名称"
          style="width:30%;"
        >
          <Option v-for="(item, index) in installerOptipns" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>-->
        <Select
          style="width:30%;"
          v-model="addOrder.installer"
          @on-change="installerNameAddChange"
          placeholder="请选择安装人员"
        >
          <Option
            v-for="(item,index) in allInstallerName"
            :key="index"
            :value="item.name"
          >{{item.name}}</Option>
        </Select>安装费用:
        <Input
          v-model="addOrder.installation"
          type="number"
          placeholder="请输入安装费用"
          style="width: 30%;"
        />
      </div>
      <div class="modal-item">
        制作供应:
        <!-- <Input v-model="addOrder.supplier" placeholder="请输入制作供应商" style="width: 30%;" /> -->
        <!-- <Select
          v-model="addOrder.supplier"
          filterable
          remote
          clearable
          :remote-method="remoteMethod4"
          @on-change="supplyNameAddChange"
          @on-clear="supplyNameAddClear"
          placeholder="请输入制作供应商"
          style="width:30%;"
        >
          <Option v-for="(item, index) in supplyOptions" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>-->
        <Select
          style="width:30%;"
          v-model="addOrder.supplier"
          @on-change="supplyNameAddChange"
          placeholder="请选择供应商"
        >
          <Option
            v-for="(item,index) in allSupplyName"
            :key="index"
            :value="item.name"
          >{{item.name}}</Option>
        </Select>订单状态:
        <Select style="width:30%;" v-model="addOrder.status" @on-change="statusChange">
          <Option value="实施中">实施中</Option>
          <Option value="已交付">已交付</Option>
        </Select>
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="修改订单" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        客户名称:
        <Input v-model="editOrder.username" placeholder="请输入客户名称" style="width: 70%;" />
      </div>
      <div class="modal-item">
        业务内容:
        <Input v-model="editOrder.info" placeholder="请输入业务内容" style="width: 70%;" />
      </div>
      <div class="modal-item">
        成交金额:
        <Input
          v-model="editOrder.turnover"
          type="number"
          placeholder="请输入成交金额"
          style="width: 30%;"
        />制作成本:
        <Input v-model="editOrder.cost" type="number" placeholder="请输入制作成本" style="width: 30%;" />
      </div>
      <div class="modal-item">
        已收款项:
        <Input
          v-model="editOrder.receiving_amount"
          type="number"
          placeholder="请输入已收款项"
          style="width: 30%;"
        />订单日期:
        <DatePicker
          type="date"
          placeholder="请选择支出时间"
          :clearable="false"
          :editable="false"
          :value="editOrder.date"
          @on-change="editTimeChange"
          style="width:30%;"
        ></DatePicker>
      </div>
      <div class="modal-item">
        安装人员:
        <Select
          style="width:30%;"
          v-model="editOrder.installer"
          @on-change="installerNameAddChange2"
          placeholder="请选择安装人员"
        >
          <Option
            v-for="(item,index) in allInstallerName"
            :key="index"
            :value="item.name"
          >{{item.name}}</Option>
        </Select>安装费用:
        <Input
          v-model="editOrder.installation"
          type="number"
          placeholder="请输入安装费用"
          style="width: 30%;"
        />
      </div>
      <div class="modal-item">
        制作供应:
        <Select
          style="width:30%;"
          v-model="editOrder.supplier"
          @on-change="supplyNameAddChange2"
          placeholder="请选择供应商"
        >
          <Option
            v-for="(item,index) in allSupplyName"
            :key="index"
            :value="item.name"
          >{{item.name}}</Option>
        </Select>订单状态:
        <Select style="width:30%;" v-model="editOrder.status" @on-change="editStatusChange">
          <Option value="实施中">实施中</Option>
          <Option value="已交付">已交付</Option>
        </Select>
      </div>
      <div class="modal-item">
          修改备注:<Input v-model="editOrder.remarks" type="textarea" :rows="2" placeholder="修改备注" style="width:70%;"/>
        </div>
    </Modal>
    <!--编辑弹窗-->

    <div class="panel-head">订单管理</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <DatePicker
          type="date"
          :value="stime"
          placeholder="请选择查询开始时间"
          @on-change="timeChange1"
          :clearable="false"
          :editable="false"
          style="width: 200px"
        ></DatePicker>至
        <DatePicker
          type="date"
          :value="etime"
          placeholder="请选择查询结束时间"
          @on-change="timeChange2"
          :clearable="false"
          :editable="false"
          style="width: 200px"
        ></DatePicker>
        <Select
          v-model="customerSearch1"
          filterable
          remote
          clearable
          :remote-method="remoteMethod1"
          @on-change="customerNameChange"
          @on-clear="customerNameClear"
          placeholder="请输入客户名称"
          style="width:200px;margin-left:10px;"
        >
          <Option
            v-for="(item, index) in options"
            :value="item.username"
            :key="index"
          >{{item.username}}</Option>
        </Select>
        <Input
          v-model="searchOrderId1"
          placeholder="请输入订单号"
          style="width: 200px;margin-left:10px;"
        />
        <Button type="info" class="searchBtn" @click="searchBtn">查询</Button>
        <Button type="primary" class="searchBtn" @click="modal1=true">添加订单</Button>
        <Button
          type="success"
          v-if="adminType"
          icon="ios-navigate"
          @click="output"
          class="out-put"
        >导出</Button>
      </div>
      <Table :columns="columns1" :data="orderList">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            v-if="adminType||row.auditstatus!='未审批'"
            style="margin-right: 5px"
            @click="edit(row)"
          >编辑</Button>
          <Button type="error" size="small" v-if="adminType" @click="remove(row)">删除</Button>
        </template>
      </Table>
      <Page :total="sum" :current="page" style="margin-top:20px;" @on-change="pageChange" />
      <span class="sum-footer">总共{{sum}}条记录</span>
    </div>
  </div>
</template>

<script>
import {
  getOrderPageList,
  getAddOrder,
  getByidOrder,
  getDeleteOrder,
  getUpdateOrder,
  getOutOrder,
  getUserPageList,
  getInstallPageList,
  getSupplyPageList,
  getAdminType
} from "../api";
import { changeTime, BLOB, listDateChange } from "../plugins/time.js";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "客户名称",
          key: "username"
        },
        {
          title: "业务应用",
          key: "info"
        },
        {
          title: "成交金额",
          key: "turnover"
        },
        {
          title: "制作成本",
          key: "cost"
        },
        {
          title: "供应商",
          key: "supplier"
        },
        {
          title: "安装费",
          key: "installation"
        },
        {
          title: "安装人员",
          key: "installer"
        },
        {
          title: "已收款项",
          key: "receiving_amount"
        },
        {
          title: "日期",
          key: "date"
        },
        {
          title: "订单状态",
          key: "status"
        },
        {
          title: "审核状态",
          key: "auditstatus"
        },
        {
          title: "操作",
          slot: "action",
          width: 140,
          align: "center"
        }
      ],
      orderList: [], //开支列表
      modal1: false, //弹窗控制
      modal2: false, //编辑弹窗控制
      sum: 0, //总数目
      page: 1, //当前页码
      stime: "0001-01-01", //开始时间
      etime: "", //结束时间
      customerSearch1: "", //客户名称查询v-model
      customerSearch2: "", //客户名称查询实际
      addOrder: {
        //订单添加表单
        username: "",
        info: "",
        turnover: "",
        cost: "",
        supplier: "",
        installation: "",
        installer: "",
        receiving_amount: "",
        date: "",
        status: "实施中",
        auditstatus: ""
      },
      editOrder: {
        //订单修改表单
        username: "",
        info: "",
        turnover: "",
        cost: "",
        supplier: "",
        installation: "",
        installer: "",
        receiving_amount: "",
        date: "",
        status: "",
        auditstatus: "",
        remarks:''
      },
      allCustomerName: [], //所有的客户名称
      allCustomerName2: [],
      options: [],
      customerOptions: [], //添加客户名称远程搜索
      allInstallerName: [],
      installerOptipns: [],
      supplyOptions: [],
      allSupplyName: [],
      adminType: null,
      searchOrderId1: "", //订单号查询v-modal
      searchOrderId2: "" //实际查询
    };
  },
  created() {
    this.addOrder.date = changeTime(new Date());
    this.editOrder.date = changeTime(new Date());
    this.etime = changeTime(new Date());
   /*  var day1 = new Date();
    day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
    var s1 =
      day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
    this.etime = s1; */
    getOrderPageList({
      pagesize: 10,
      pageid: 1,
      stime: this.stime,
      // etime: this.etime,
      etime: this.etime,
      allnumber: 0,
      pagenumber: 0,
      name: this.customerSearch2,
      order_id: this.searchOrderId2
    }).then(data => {
      if (data.data.message == "查询成功") {
        this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
        this.allCustomerName = data.data.data.all_xyz_Orders || [];
        this.sum = data.data.data.allnumber || 0;
      }
    });
    getUserPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: ""
    }).then(data => {
      this.allCustomerName2 = data.data.data.all_xyz_Users || [];
    });
    getInstallPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0
    }).then(data => {
      this.allInstallerName = data.data.data.all_xyz_Installers || [];
    });
    getSupplyPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: ""
    }).then(data => {
      this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
    });
    getAdminType().then(data => {
      this.adminType = data.data;
    });
  },
  methods: {
    addSubmit() {
      //添加订单
      getAddOrder(this.addOrder).then(data => {
        if (data.data.message == "添加成功") {
          this.$Message.success("添加成功");
          getOrderPageList({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0,
            name: this.customerSearch2,
            order_id: this.searchOrderId2
          }).then(data => {
            if (data.data.message == "查询成功") {
              this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
              this.sum = data.data.data.allnumber || 0;
              this.allCustomerName = data.data.data.all_xyz_Orders || [];
            }
          });
        } else {
          this.$Message.error("添加失败");
        }
      });
    },
    pageChange(value) {
      //页码改变回调
      this.page = value;
      getOrderPageList({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name: this.customerSearch2,
        order_id: this.searchOrderId2
      }).then(data => {
        if (data.data.message == "查询成功") {
          this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
          this.sum = data.data.data.allnumber || 0;
          this.allCustomerName = data.data.data.all_xyz_Orders || [];
        }
      });
    },
    timeChange1(value) {
      //开始时间
      this.stime = value;
    },
    timeChange2(value) {
      //结束时间
      this.etime = value;
    },
    addTimeChange(value) {
      //订单添加时间改变回调
      this.addOrder.date = value;
    },
    editTimeChange(value) {
      //订单添加时间改变回调
      this.editOrder.date = value;
    },
    searchBtn() {
      //查询
      this.customerSearch2 = this.customerSearch1;
      this.searchOrderId2 = this.searchOrderId1;
      getOrderPageList({
        pagesize: 10,
        pageid: 1,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name: this.customerSearch2,
        order_id: this.searchOrderId2
      }).then(data => {
        if (data.data.message == "查询成功") {
          this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
          this.allCustomerName = data.data.data.all_xyz_Orders || [];
          this.sum = this.orderList.length;
        }
      });
    },
    statusChange(value) {
      //订单状态改变回调
      this.addOrder.status = value;
    },
    editStatusChange(value) {
      //编辑订单状态回调
      this.editOrder.status = value;
    },
    remove(value) {
      //删除
      getDeleteOrder(value.order_id).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("删除成功");
          getOrderPageList({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0,
            name: this.customerSearch2,
            order_id: this.searchOrderId2
          }).then(data => {
            if (data.data.message == "查询成功") {
              this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
              this.sum = data.data.data.allnumber || 0;
              this.allCustomerName = data.data.data.all_xyz_Orders || [];
            }
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    edit(value) {
      //编辑
      this.editOrder.remarks='';
      getByidOrder(value.order_id).then(data => {
        this.editOrder = data.data.data;
        this.modal2 = true;
      });
    },
    editSubmit() {
      //编辑提交
      getUpdateOrder(this.editOrder).then(data => {
        this.$Message.success(data.data.message);
        getOrderPageList({
          pagesize: 10,
          pageid: this.page,
          stime: this.stime,
          etime: this.etime,
          allnumber: 0,
          pagenumber: 0,
          name: this.customerSearch2,
          order_id: this.searchOrderId2
        }).then(data => {
          if (data.data.message == "查询成功") {
            this.orderList = listDateChange(data.data.data.xyz_Orders) || [];
            this.sum = data.data.data.allnumber || 0;
            this.allCustomerName = data.data.data.all_xyz_Orders || [];
          }
        });
      });
    },
    remoteMethod1(value) {
      //远程搜索方法
      if (value == "") {
        this.customerSearch1 = "";
        this.options = [];
      } else {
        this.options = this.allCustomerName.filter(function(item) {
          return item.username.indexOf(value) != -1;
        });
      }
    },
    customerNameChange(value) {
      //搜索框确认回调
      this.customerSearch1 = value;
    },
    customerNameClear() {
      //搜索框清空
      this.customerSearch1 == "";
      this.customerSearch2 = "";
    },
    output() {
      //导出
      getOutOrder({
        pagesize: 10,
        pageid: 1,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name: this.customerSearch2,
        order_id: this.searchOrderId2
      }).then(data => {
        BLOB(data.data, "订单表.xls");
      });
    },
    remoteMethod2(value) {
      //添加时客户远程搜索方法
      if (value == "") {
        this.customerOptions = [];
        this.addOrder.username = "";
      } else {
        this.customerOptions = this.allCustomerName2.filter(function(item) {
          return item.name.indexOf(value) != -1;
        });
      }
    },
    customerNameAddChange(value) {
      //添加时客户改变回调
      this.addOrder.username = value;
    },
    customerNameAddClear() {
      //添加时客户清空
      this.addOrder.username = "";
    },
    installerNameAddChange(value) {
      //添加时安装人员改变回调
      this.addOrder.installer = value;
    },
    supplyNameAddChange(value) {
      //添加供应航改编回
      this.addOrder.supplier = value;
    },
    installerNameAddChange2(value) {
      //修改时安装人员改变回调
      this.editOrder.installer = value;
    },
    supplyNameAddChange2(value) {
      //修改供应航改编回
      this.editOrder.supplier = value;
    }
  }
};
</script>

<style lang="less" scoped>
#apply {
  padding: 20px;
}
</style>