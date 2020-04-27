<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加供应商" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        名称:
        <Input v-model="addForm.name" placeholder="请输入供应商名称" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        地址:
        <Input v-model="addForm.address" placeholder="请输入供应商地址" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        联系人:
        <Input
          v-model="addForm.contact_person"
          placeholder="请输入供应商联系人"
          style="width: 70%;margin-left:2%;"
        />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="addForm.phone" placeholder="请输入供应商电话" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        微信:
        <Input v-model="addForm.wechat" placeholder="请输入供应商微信" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        付款账号:
        <Input v-model="addForm.payment_account" placeholder="请输入付款账号" style="width: 70%;" />
      </div>
      <div class="modal-item">
        供应材料:
        <Input
          v-model="addForm.supplies"
          show-word-limit
          type="textarea"
          placeholder="请输入供应材料"
          style="width:70%;"
        />
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="修改供应商" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        名称:
        <Input v-model="editForm.name" placeholder="请输入供应商名称" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        地址:
        <Input
          v-model="editForm.address"
          placeholder="请输入供应商地址"
          style="width: 70%;margin-left:4%;"
        />
      </div>
      <div class="modal-item">
        联系人:
        <Input
          v-model="editForm.contact_person"
          placeholder="请输入供应商联系人"
          style="width: 70%;margin-left:2%;"
        />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="editForm.phone" placeholder="请输入供应商电话" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        微信:
        <Input v-model="editForm.wechat" placeholder="请输入供应商微信" style="width: 70%;margin-left:4%;" />
      </div>
      <div class="modal-item">
        付款账号:
        <Input v-model="editForm.payment_account" placeholder="请输入付款账号" style="width: 70%;" />
      </div>
      <div class="modal-item">
        供应材料:
        <Input
          v-model="editForm.supplies"
          show-word-limit
          type="textarea"
          placeholder="请输入供应材料"
          style="width:70%;"
        />
      </div>
    </Modal>
    <!--编辑弹窗-->

    <div class="panel-head">供应商管理</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <Select
          v-model="supplySearch1"
          filterable
          remote
          clearable
          :remote-method="remoteMethod1"
          @on-change="supplyNameChange"
          @on-clear="supplyNameClear"
          placeholder="请输入供应商名称"
          style="width:200px;"
        >
          <Option v-for="(item, index) in options" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>
        <Button type="info" class="searchBtn" @click="searchBtn">查询</Button>
        <Button type="primary" class="searchBtn" @click="modal1=true">添加供应商</Button>
      </div>
      <Table :columns="columns1" :data="supplyList">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)">编辑</Button>
          <Button type="error" size="small" @click="remove(row)">删除</Button>
        </template>
      </Table>
      <Page :total="sum" :current="page" style="margin-top:20px;" @on-change="pageChange" />
      <span class="sum-footer">总共{{sum}}条记录</span>
    </div>
  </div>
</template>

<script>
import {
  getSupplyPageList,
  getAddSupply,
  getDeleteSupply,
  getByidSupply,
  getUpdateSupply
} from "../api";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "供应商名称",
          key: "name"
        },
        {
          title: "联系人",
          key: "contact_person"
        },
        {
          title: "地址",
          key: "address"
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
          title: "供应材料",
          key: "supplies"
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
      supplyList: [], //开支列表
      modal1: false, //弹窗控制
      modal2: false, //编辑弹窗控制
      sum: 0, //总数量
      page: 1, //当前页码
      supplySearch1: "", //查询供应商v-model
      supplySearch2: "", //实际查询供应商
      addForm: {
        //添加表单
        name: "",
        contact_person: "",
        address: "",
        phone: "",
        wechat: "",
        supplies: "",
        payment_account: ""
      },
      editForm: {
        //编辑表单
        name: "",
        contact_person: "",
        address: "",
        phone: "",
        wechat: "",
        supplies: "",
        payment_account: ""
      },
      allSupplyName: [], //所有的供应商
      options: [] //默认搜索内容
    };
  },
  created() {
    getSupplyPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: this.supplySearch2
    }).then(data => {
      this.sum = data.data.data.allnumber || 0;
      this.supplyList = data.data.data.xyz_Suppliers || [];
      this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
    });
  },
  methods: {
    addSubmit() {
      //添加供应商提交
      getAddSupply(this.addForm).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("添加成功");
          getSupplyPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.supplySearch2
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.supplyList = data.data.data.xyz_Suppliers || [];
            this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
          });
        } else {
          this.$Message.error("添加失败");
        }
      });
    },
    pageChange(value) {
      //页码改编回调
      this.page = value;
      getSupplyPageList({
        pagesize: 10,
        pageid: this.page,
        allnumber: 0,
        pagenumber: 0,
        name: this.supplySearch2
      }).then(data => {
        this.sum = data.data.data.allnumber || 0;
        this.supplyList = data.data.data.xyz_Suppliers || [];
        this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
      });
    },
    async searchBtn() {
      //查询供应商
      this.supplySearch2 = this.supplySearch1;
      if(typeof this.supplySearch2 == 'undefined'){
        this.supplySearch2='';
      }
      this.page = 1;
      let list = [];
      await getSupplyPageList({
        pagesize: 10,
        pageid: this.page,
        allnumber: 0,
        pagenumber: 0,
        name: this.supplySearch2
      }).then(data => {
        this.sum = data.data.data.allnumber || 0;
        this.supplyList = data.data.data.xyz_Suppliers || [];
        this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
        list = this.supplyList;
      });
      if (this.supplySearch2 != "") {
        this.supplyList = list.filter(item => {
          return item.name == this.supplySearch2;
        });
        this.sum = this.supplyList.length;
      }
    },
    remove(value) {
      //删除
      console.log(value.supplier_id);
      getDeleteSupply(value.supplier_id).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("删除成功");
          getSupplyPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.supplySearch2
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.supplyList = data.data.data.xyz_Suppliers || [];
            this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
          });
        } else {
          this.$Message.error("删除失败");
        }
      });
    },
    edit(value) {
      //编辑
      getByidSupply(value.supplier_id).then(data => {
        this.editForm = data.data.data;
      });
      this.modal2 = true;
    },
    editSubmit() {
      //编辑提交
      getUpdateSupply(this.editForm).then(data => {
        if (data.data.message == "修改成功") {
          this.$Message.success("修改成功");
          getSupplyPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.supplySearch2
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.supplyList = data.data.data.xyz_Suppliers || [];
            this.allSupplyName = data.data.data.all_xyz_Suppliers || [];
          });
        } else {
          this.$Message.error("修改失败");
        }
      });
    },
    remoteMethod1(value) {
      //远程搜索方法
      if (value == "") {
        this.supplySearch1 = "";
        this.options = [];
      } else {
        this.options = this.allSupplyName.filter(function(item) {
          return item.name.indexOf(value) != -1;
        });
      }
    },
    supplyNameChange(value) {
      //搜索确认
      this.supplySearch1 = value;
    },
    supplyNameClear(){//搜索清除
      this.supplySearch1='';
      this.supplySearch2='';
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
</style>