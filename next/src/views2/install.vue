<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加安装人员" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        联系人:
        <Input v-model="addForm.name" placeholder="请输入安装人员名称" style="width: 70%;margin-left:2%;" />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="addForm.phone" placeholder="请输入安装人员电话" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        微信:
        <Input v-model="addForm.wechat" placeholder="请输入安装人员微信" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        付款账号:
        <Input v-model="addForm.payment_account" placeholder="请输入付款账号" style="width: 70%;" />
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="修改安装人员" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        联系人:
        <Input v-model="editForm.name" placeholder="请输入安装人员名称" style="width: 70%;margin-left:2%;" />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="editForm.phone" placeholder="请输入安装人员电话" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        微信:
        <Input
          v-model="editForm.wechat"
          placeholder="请输入安装人员微信"
          style="width: 70%;margin-left:4%;"
        />
      </div>
      <div class="modal-item">
        付款账号:
        <Input v-model="editForm.payment_account" placeholder="请输入付款账号" style="width: 70%;" />
      </div>
    </Modal>
    <!--编辑弹窗-->

    <!--导出弹窗-->
    <Modal v-model="modal3" :title="outputTitle" @on-ok="outputSubmit">
      <div class="modal-item">
        <DatePicker
          type="date"
          :value="outputForm.stime"
          placeholder="请选择查询开始时间"
          style="width: 200px"
          :clearable="false"
          :editable="false"
          @on-change="timeChange1"
        ></DatePicker>至
        <DatePicker
          type="date"
          :value="outputForm.etime"
          placeholder="请选择查询结束时间"
          style="width: 200px"
          :clearable="false"
          :editable="false"
          @on-change="timeChange2"
        ></DatePicker>
      </div>
    </Modal>
    <!--导出弹窗-->

    <div class="panel-head">安装人员管理</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <Button type="primary" class="searchBtn" @click="modal1=true">添加安装人员</Button>
        <!-- <Button type="success" icon="ios-navigate" @click="output" class="out-put">导出</Button> -->
      </div>
      <Table :columns="columns1" :data="installList">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)" v-if="adminType">编辑</Button>
          <Button type="error" size="small" @click="remove(row)" v-if="adminType">删除</Button>
          <Button
            type="success"
            size="small"
            icon="ios-navigate"
            @click="output(row)"
            class="out-put"
          >导出</Button>
        </template>
      </Table>
      <Page :total="sum" :current="page" style="margin-top:20px;" @on-change="pageChange" />
      <span class="sum-footer">总共{{sum}}条记录</span>
    </div>
  </div>
</template>

<script>
import {
  getInstallPageList,
  getAddInstall,
  getDeleteInstall,
  getByidInstall,
  getUpdateInstall,
  getOutInstall,
  getAdminType
} from "../api";
import { BLOB, changeTime } from "../plugins/time";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "联系人",
          key: "name"
        },
        {
          title: "电话",
          key: "phone"
        },
        {
          title: "微信",
          key: "wechat"
        },
        {
          title: "付款账号",
          key: "payment_account"
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center"
        }
      ],
      installList: [], //开支列表
      modal1: false, //弹窗控制
      modal2: false, //编辑控制
      modal3: false, //导出控制
      sum: 0, //总数
      page: 1, //当前页码
      addForm: {
        //添加表单
        name: "",
        phone: "",
        wechat: "",
        payment_account: ""
      },
      editForm: {
        //删除表单
        name: "",
        phone: "",
        wechat: "",
        payment_account: ""
      },
      adminType: null,
      outputForm: {
        //导出表单
        name: "",
        stime: "0001-01-01",
        etime: ""
      },
      outputTitle:''
    };
  },
  created() {
    this.outputForm.etime=changeTime(new Date());
    getInstallPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0
    }).then(data => {
      this.sum = data.data.data.allnumber || 0;
      this.installList = data.data.data.xyz_Installers || [];
    });
    getAdminType().then(data => {
      this.adminType = data.data;
    });
  },
  methods: {
    addSubmit() {
      //添加安装人员
      getAddInstall(this.addForm).then(data => {
        if (data.data.message == "添加成功") {
          this.$Message.success("添加成功");
          getInstallPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.installList = data.data.data.xyz_Installers || [];
          });
        } else {
          this.$Message.error("添加失败");
        }
      });
    },
    pageChange(value) {
      //页码改变回调
      this.page = value;
      getInstallPageList({
        pagesize: 10,
        pageid: this.page,
        allnumber: 0,
        pagenumber: 0
      }).then(data => {
        this.sum = data.data.data.allnumber || 0;
        this.installList = data.data.data.xyz_Installers || [];
      });
    },
    remove(value) {
      //删除提交
      getDeleteInstall(value.installer_id).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("删除成功");
          getInstallPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.installList = data.data.data.xyz_Installers || [];
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    edit(value) {
      //编辑
      getByidInstall(value.installer_id).then(data => {
        this.editForm = data.data.data;
        this.modal2 = true;
      });
    },
    editSubmit() {
      //编辑提交
      getUpdateInstall(this.editForm).then(data => {
        if (data.data.message == "更新成功") {
          this.$Message.success("修改成功");
          getInstallPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.installList = data.data.data.xyz_Installers || [];
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    output(value) {
      this.modal3 = true;
      this.outputForm.name=value.name;
      this.outputTitle=value.name;
    },
    outputSubmit(){//导出提交
        getOutInstall(this.outputForm).then(data => {
         BLOB(data.data, "安装人员信息.xls");
       }); 
    },
    timeChange1(value){//导出时间改变回调
      this.outputForm.stime=value;
    },
    timeChange2(value){//导出时间改变回调
      this.outputForm.etime=value;
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
</style>