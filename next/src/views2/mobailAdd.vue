<template>
  <div id="mobailAdd">
    <!--客户名称选择器·-->
    <van-popup v-model="showCustomer" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsCustomer"
        @confirm="onConfirmCtstomer"
        @cancel="showCustomer = false"
        :value="addOrder.username"
      />
    </van-popup>
    <!--客户名称选择器·-->

    <!--安装人员选择器·-->
    <van-popup v-model="showInstaller" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsInstaller"
        @confirm="onConfirmInstaller"
        @cancel="showInstaller = false"
        :value="addOrder.installer"
      />
    </van-popup>
    <!--安装人员选择器·-->

    <!--供应商选择器·-->
    <van-popup v-model="showSupply" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsSupply"
        @confirm="onConfirmSupply"
        @cancel="showSupply = false"
        :value="addOrder.supplier"
      />
    </van-popup>
    <!--供应商选择器·-->

    <!--状态选择器·-->
    <van-popup v-model="showStatus" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsStatus"
        @confirm="onConfirmStatus"
        @cancel="showStatus = false"
        :value="addOrder.status"
      />
    </van-popup>
    <!--状态选择器·-->

    <!--日期选择器-->
    <van-calendar v-model="showDate" :min-date="minDate" @confirm="onConfirmDate" />
    <!--日期选择器-->

    <van-form @submit="onSubmit" >
      <van-field
        readonly
        clickable
        name="客户名称"
        :value="addOrder.username"
        label="客户名称"
        placeholder="点击选择客户"
        @click="showCustomer = true"
      />
      <van-field name="业务内容" label="业务内容" placeholder="输入业务内容" v-model="addOrder.info" />
      <van-field
        name="成交金额"
        type="number"
        label="成交金额"
        placeholder="输入成交金额"
        v-model="addOrder.turnover"
      />
      <van-field
        name="制作成本"
        type="number"
        label="制作成本"
        placeholder="输入制作成本"
        v-model="addOrder.cost"
      />
      <van-field
        name="已收款项"
        type="number"
        label="已收款项"
        placeholder="输入已收款项"
        v-model="addOrder.receiving_amount"
      />
      <van-field
        readonly
        clickable
        name="订单日期"
        :value="addOrder.date"
        label="订单日期"
        placeholder="点击选择日期"
        @click="showDate = true"
      />
      <van-field
        readonly
        clickable
        name="安装人员"
        :value="addOrder.installer"
        label="安装人员"
        placeholder="点击选择安装人员"
        @click="showInstaller = true"
      />
      <van-field
        name="安装费用"
        type="number"
        label="安装费用"
        placeholder="输入安装费用"
        v-model="addOrder.installation"
      />
      <van-field
        readonly
        clickable
        name="制作供应商"
        :value="addOrder.supplier"
        label="制作供应商"
        placeholder="点击选择供应商"
        @click="showSupply = true"
      />
      <van-field
        readonly
        clickable
        name="订单状态"
        :value="addOrder.status"
        label="订单状态"
        placeholder="点击选择订单状态"
        @click="showStatus = true"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {
  getUserPageList,
  getInstallPageList,
  getSupplyPageList,
  getAddOrder
} from "../api";
import { changeCustomerName, changeTime } from "../plugins/time";
export default {
  data() {
    return {
      showCustomer: false, //客户选择器控制
      showDate: false, //日期选择器控制
      columnsCustomer: [], //客户选择
      showInstaller: false, //安装人员选择器控制
      columnsInstaller: [], //安装人员选择
      showSupply: false, //供应商选择器控制
      columnsSupply: [], //供应商选择
      showStatus: false, //订单状态控制
      columnsStatus: ["实施中", "已交付"],
      addOrder: {
        //提交表单
        username: "",
        info: "",
        turnover: null,
        cost: null,
        supplier: "",
        installation: null,
        installer: "",
        receiving_amount: null,
        date: "",
        status: "实施中"
      },
      addOrder2: null,
      minDate: new Date(2020, 0, 1),
      defaultDate: new Date()
    };
  },
  created() {
    this.addOrder2 = this.addOrder;
    getUserPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: ""
    }).then(data => {
      this.columnsCustomer =
        changeCustomerName(data.data.data.all_xyz_Users) || [];
    });
    getInstallPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0
    }).then(data => {
      this.columnsInstaller =
        changeCustomerName(data.data.data.all_xyz_Installers) || [];
    });
    getSupplyPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: ""
    }).then(data => {
      this.columnsSupply =
        changeCustomerName(data.data.data.all_xyz_Suppliers) || [];
    });
  },
  methods: {
    onSubmit() {
      //提交
      getAddOrder(this.addOrder).then(data => {
        if (data.data.message == "添加成功") {
          this.$message.success('添加成功');
          //   this.addOrder=this.addOrder2;
        } else {
          this.$message.error('添加失败');
        }
      });
    },
    onConfirmCtstomer(value) {
      //客户选择器确认回调
      this.addOrder.username = value;
      this.showCustomer = false;
    },
    onConfirmDate(value) {
      //日期选择器确认回调
      this.addOrder.date = changeTime(value);
      this.showDate = false;
    },
    onConfirmInstaller(value) {
      //安装人员选择器确认回调
      this.addOrder.installer = value;
      this.showInstaller = false;
    },
    onConfirmSupply(value) {
      //供应商选择确认回调
      this.addOrder.supplier = value;
      this.showSupply = false;
    },
    onConfirmStatus(value) {
      //状态改变确认回调
      this.addOrder.status = value;
      this.showStatus = false;
    }
  }
};
</script>

<style lang="less" scoped>
#mobailAdd{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.24rem;
}
</style>