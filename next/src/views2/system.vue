<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加管理员" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        账号:
        <Input v-model="submitForm.name" placeholder="请输入账号" style="width: 70%;" />
      </div>
      <div class="modal-item">
        密码:
        <Input
          v-model="submitForm.password"
          type="password"
          placeholder="请输入密码"
          style="width: 70%;"
        />
      </div>
      <div class="modal-item">
        密码:
        <Input v-model="password2" type="password" placeholder="请再次输入密码" style="width: 70%;" />
      </div>
      <div class="modal-item">
        姓名:
        <Input v-model="submitForm.reallyname" placeholder="请输入真实姓名" style="width: 70%;" />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="submitForm.phone" placeholder="请输入电话号码" style="width: 70%;" />
      </div>
      <div class="modal-item">
        权限:
        <Select :value="submitForm.root" style="width:70%;" @on-change="selectChange">
          <Option value="超级管理员">超级管理员</Option>
          <Option value="管理员">管理员</Option>
        </Select>
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="添加管理员" ok-text="添加" @on-ok="editSubmit">
      <div class="modal-item">
        账号:
        <Input v-model="editForm.name" disabled placeholder="请输入账号" style="width: 70%;" />
      </div>
      <div class="modal-item">
        密码:
        <Input v-model="editForm.password" type="password" placeholder="请输入密码" style="width: 70%;" />
      </div>
      <div class="modal-item">
        密码:
        <Input v-model="password2" type="password" placeholder="请再次输入密码" style="width: 70%;" />
      </div>
      <div class="modal-item">
        姓名:
        <Input v-model="editForm.reallyname" placeholder="请输入真实姓名" style="width: 70%;" />
      </div>
      <div class="modal-item">
        电话:
        <Input v-model="editForm.phone" placeholder="请输入电话号码" style="width: 70%;" />
      </div>
      <div class="modal-item">
        权限:
        <Select :value="editForm.root" style="width:70%;" @on-change="selectEditChange">
          <Option value="超级管理员">超级管理员</Option>
          <Option value="管理员">管理员</Option>
        </Select>
      </div>
    </Modal>
    <!--编辑弹窗-->

    <div class="panel-head">系统管理</div>
    <div class="panel-body">
      <div class="panel-body-search">
        <!-- <Input v-model="value" placeholder="请输入客户名称" style="width: 250px;" /> -->
        <!-- <Button type="info" class="searchBtn">查询</Button> -->
        <Button type="primary" class="searchBtn" @click="modal1=true">添加管理员</Button>
      </div>
      <Table :columns="columns1" :data="adminList">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)">编辑</Button>
          <Button type="error" size="small" @click="remove(row)">删除</Button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import {
  getAdminPageList,
  getAddAdmin,
  getDeleteAdmin,
  getUpdateAdmin
} from "../api";
export default {
  name: "apply",
  data() {
    return {
      columns1: [
        //表头
        {
          title: "序号",
          key: "admin_id"
        },
        {
          title: "账户",
          key: "name"
        },
        {
          title: "密码",
          key: "password"
        },
        {
          title: "真实姓名",
          key: "reallyname"
        },
        {
          title: "电话",
          key: "phone"
        },
        {
          title: "权限",
          key: "root"
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center"
        }
      ],
      adminList: [], //开支列表
      modal1: false, //弹窗控制
      modal2: false, //编辑弹窗控制
      password2: "", //二次密码
      submitForm: {
        //管理员添加表单
        root: "管理员",
        name: "",
        password: "",
        reallyname: "",
        phone: ""
      },
      editForm: {
        //管理员修改表单
        root: "",
        name: "",
        password: "",
        reallyname: "",
        phone: ""
      }
    };
  },
  created() {
    getAdminPageList().then(data => {
      this.adminList = data.data.data;
    });
  },
  methods: {
    async addSubmit() {
      //添加管理员
      let list = [];
      await getAdminPageList().then(data => {
        this.adminList = data.data.data;
      });
      list = this.adminList.filter(item => {
        return item.name == this.submitForm.name;
      });
      if (
        this.submitForm.name == "" ||
        this.submitForm.password == "" ||
        this.submitForm.phone == "" ||
        this.submitForm.reallyname == ""
      ) {
        this.$Message.warning("信息请填写完整");
      } else if (this.submitForm.password != this.password2) {
        this.$Message.warning("两次密码输入不一致");
      } else if (list.length >= 1) {
        this.$Message.warning("该账号已存在");
      } else {
        getAddAdmin(this.submitForm).then(data => {
          if (data.data.message == "添加成功") {
            this.$Message.success("添加成功");
            getAdminPageList().then(data => {
              this.adminList = data.data.data;
            });
          } else {
            this.$Message.error("添加失败");
          }
        });
      }
    },
    selectChange(value) {
      //权限选择回调
      this.submitForm.root = value;
    },
    selectEditChange(value) {
      //编辑2权限修改
      this.editForm.root = value;
    },
    remove(value) {
      //删除
      getDeleteAdmin(value.admin_id).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("删除成功");
          getAdminPageList().then(data => {
            this.adminList = data.data.data;
          });
        } else {
          this.$Message.error("删除失败");
        }
      });
    },
    edit(value) {
      //编辑
      this.editForm = value;
      this.password2 = this.editForm.password;
      this.modal2 = true;
    },
    async editSubmit() {
      //编辑提交
      if (
        this.editForm.name == "" ||
        this.editForm.password == "" ||
        this.editForm.phone == "" ||
        this.editForm.reallyname == ""
      ) {
        this.$Message.warning("信息请填写完整");
      } else if (this.editForm.password != this.password2) {
        this.$Message.warning("两次密码输入不一致");
      } else {
        await getUpdateAdmin(this.editForm).then(data => {
          if (data.data.message == "更新成功") {
            this.$Message.success("修改成功");
          } else {
            this.$Message.error("修改失败");
          }
        });
      }
      getAdminPageList().then(data => {
          this.adminList = data.data.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
</style>