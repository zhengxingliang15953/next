<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加客户" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        客户名称:
        <Input v-model="addFormSubmit.name" placeholder="请输入客户名称" style="width: 70%;" />
      </div>
      <div class="modal-item">
        客户地址:
        <Input v-model="addFormSubmit.address" placeholder="请输入客户地址" style="width: 70%;" />
      </div>
      <div class="modal-item">
        联系人:
        <Input
          v-model="addFormSubmit.contact_person"
          placeholder="请输入联系人"
          style="width: 70%;margin-left:2%;"
        />
      </div>
      <div class="modal-item">
        客户电话:
        <Input v-model="addFormSubmit.phone" placeholder="请输入客户电话" style="width: 70%;" />
      </div>
      <div class="modal-item">
        客户微信:
        <Input v-model="addFormSubmit.wechat" placeholder="请输入客户微信" style="width: 70%;" />
      </div>
      <div class="modal-item">
        开票信息:
        <Input
          v-model="addFormSubmit.billing_info"
          show-word-limit
          type="textarea"
          placeholder="请输入开票信息"
          style="width:70%;"
        />
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="修改客户" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        客户名称:
        <Input v-model="editFormSubmit.name" placeholder="请输入客户名称" style="width: 70%;" />
      </div>
      <div class="modal-item">
        客户地址:
        <Input v-model="editFormSubmit.address" placeholder="请输入客户地址" style="width: 70%;" />
      </div>
      <div class="modal-item">
        联系人:
        <Input
          v-model="editFormSubmit.contact_person"
          placeholder="请输入联系人"
          style="width: 70%;margin-left:2%;"
        />
      </div>
      <div class="modal-item">
        客户电话:
        <Input v-model="editFormSubmit.phone" placeholder="请输入客户电话" style="width: 70%;" />
      </div>
      <div class="modal-item">
        客户微信:
        <Input v-model="editFormSubmit.wechat" placeholder="请输入客户微信" style="width: 70%;" />
      </div>
      <div class="modal-item">
        开票信息:
        <Input
          v-model="editFormSubmit.billing_info"
          show-word-limit
          type="textarea"
          placeholder="请输入开票信息"
          style="width:70%;"
        />
      </div>
    </Modal>
    <!--编辑弹窗-->

    <div class="panel-head">客户管理</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <Select
          v-model="customerSearch1"
          filterable
          remote
          clearable
          :remote-method="remoteMethod1"
          @on-change="customerNameChange"
          @on-clear="customerNameClear"
          placeholder="请输入客户名称"
          style="width:200px;"
        >
          <Option v-for="(item, index) in options" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>
        <Button type="info" class="searchBtn" @click="searchBtn">查询</Button>
        <Button type="primary" class="searchBtn" @click="modal1=true">添加客户</Button>
      </div>
      <Table :columns="columns1" :data="customerList">
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
  getUserPageList,
  getAddUser,
  getDeleteCustomer,
  getByidUser,
  getUpdateUser
} from "../api";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "名称",
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
          title: "开票信息",
          key: "billing_info"
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center"
        }
      ],
      customerList: [], //开支列表
      modal1: false, //弹窗控制
      modal2: false, //修改弹窗控制
      sum: 0, //总数
      page: 1, //当前页码
      customerSearch1: "", //客户名称检索v-model
      customerSearch2: "", //实际查询客户名称
      addFormSubmit: {
        //客户添加表单
        name: "",
        phone: "",
        address: "",
        contact_person: "",
        wechat: "",
        billing_info: ""
      },
      editFormSubmit: {
        //客户修改表单
        name: "",
        phone: "",
        address: "",
        contact_person: "",
        wechat: "",
        billing_info: ""
      },
      options: [],
      allCustomerName: []
    };
  },
  created() {
    getUserPageList({
      pagesize: 10,
      pageid: 1,
      allnumber: 0,
      pagenumber: 0,
      name: this.customerSearch2
    }).then(data => {
      this.allCustomerName = data.data.data.all_xyz_Users || [];
      this.customerList = data.data.data.xyz_Users || [];
      this.sum = data.data.data.allnumber;
    });
  },
  methods: {
    addSubmit() {
      //添加客户提交
      getAddUser(this.addFormSubmit).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("添加成功");
          getUserPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.customerSearch2
          }).then(data => {
            this.allCustomerName = data.data.data.all_xyz_Users || [];
            this.customerList = data.data.data.xyz_Users || [];
            this.sum = data.data.data.allnumber;
          });
        } else {
          this.$Message.error("添加失败");
        }
      });
    },
    pageChange(value) {
      //页码改变回调
      this.page = value;
      getUserPageList({
        pagesize: 10,
        pageid: this.page,
        allnumber: 0,
        pagenumber: 0,
        name: this.customerSearch2
      }).then(data => {
        this.allCustomerName = data.data.data.all_xyz_Users || [];
        this.customerList = data.data.data.xyz_Users || [];
        this.sum = data.data.data.allnumber;
      });
    },
    searchBtn() {
      //查询
      this.customerSearch2 = this.customerSearch1;
      if(typeof this.customerSearch2 == 'undefined'){
        this.customerSearch2='';
      }
      this.page=1;
      let list=[];
      getUserPageList({
        pagesize: 10,
        pageid: this.page,
        allnumber: 0,
        pagenumber: 0,
        name: this.customerSearch2
      }).then(data => {
        this.allCustomerName = data.data.data.all_xyz_Users || [];
        list=data.data.data.xyz_Users || [];
        if (this.customerSearch2 == "") {
          this.customerList = data.data.data.xyz_Users || [];
          this.sum = data.data.data.allnumber||0;
        }else{
          this.customerList=list.filter(item=>{
            return item.name==this.customerSearch2;
          })
          this.sum=this.customerList.length;
        }
      });
    },
    remove(value) {
      //删除
      getDeleteCustomer(value.user_id).then(data => {
        if (data.data.code == 1) {
          this.$Message.success("删除成功");
          getUserPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.customerSearch2
          }).then(data => {
            this.allCustomerName = data.data.data.all_xyz_Users || [];
            this.customerList = data.data.data.xyz_Users || [];
            this.sum = data.data.data.allnumber;
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    edit(value) {
      //编辑
      getByidUser(value.user_id).then(data => {
        this.editFormSubmit = data.data.data;
        this.modal2 = true;
      });
    },
    editSubmit() {
      //编辑提交
      getUpdateUser(this.editFormSubmit).then(data => {
        if (data.data.code == 1) {
          this.$Message.success("修改成功");
          getUserPageList({
            pagesize: 10,
            pageid: this.page,
            allnumber: 0,
            pagenumber: 0,
            name: this.customerSearch2
          }).then(data => {
            this.allCustomerName = data.data.data.all_xyz_Users || [];
            this.customerList = data.data.data.xyz_Users || [];
            this.sum = data.data.data.allnumber;
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    customerNameChange(value) {
      //搜索框内容改变回调
      this.customerSearch1 = value;
    },
    customerNameClear() {
      //搜索框内容清除
      this.customerSearch1 = "";
      this.customerSearch2 = "";
    },
    remoteMethod1(value) {
      //远程搜索方法
      if (value == "") {
        this.customerSearch1 = "";
        this.options = [];
      } else {
        this.options = this.allCustomerName.filter(function(item) {
          return item.name.indexOf(value) != -1;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
</style>