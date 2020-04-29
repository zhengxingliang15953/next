<template>
  <div id="apply">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加日常开支" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        支出时间:
        <DatePicker
          type="date"
          :value="submitForm.date"
          placeholder="请选择支出时间"
          style="width:70%;"
          :clearable="false"
          :editable="false"
          @on-change="applyTimeChange"
        ></DatePicker>
      </div>
      <div class="modal-item">
        支出金额:
        <Input v-model="submitForm.money" type="number" placeholder="请输入支出金额" style="width: 70%;" />
      </div>
      <div class="modal-item">
        支出人员:
        <Input v-model="submitForm.name" placeholder="请输入支出人" style="width: 70%;" />
      </div>
      <div class="modal-item">
        支出信息:
        <Input
          v-model="submitForm.info"
          show-word-limit
          type="textarea"
          placeholder="请输入支出信息"
          style="width:70%;"
        />
      </div>
      <div class="modal-item">
        审核状态:
        <Select style="width:70%;" v-model="submitForm.status" @on-change="examineChange">
          <Option value="未报销">未报销</Option>
          <Option value="已报销">已报销</Option>
        </Select>
      </div>
      <div class="modal-item">
        开支凭证:
        <Upload
          action="http://192.168.0.113:7776/api/files/upload/formimg"
          name="files"
          :format="uploadImgType"
          :on-success="uploadImgSuccess"
          :on-error="uploadImgError"
          :on-format-error="uploadImgFormat"
        >
          <Button icon="ios-cloud-upload-outline" type="success">上传</Button>
        </Upload>
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal2" title="开支修改" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        支出时间:
        <DatePicker
          type="date"
          :value="editForm.date"
          placeholder="请选择支出时间"
          style="width:70%;"
          :clearable="false"
          :editable="false"
          @on-change="applyTimeChange"
        ></DatePicker>
      </div>
      <div class="modal-item">
        支出金额:
        <Input v-model="editForm.money" type="number" placeholder="请输入支出金额" style="width: 70%;" />
      </div>
      <div class="modal-item">
        支出人员:
        <Input v-model="editForm.name" placeholder="请输入支出人" style="width: 70%;" />
      </div>
      <div class="modal-item">
        支出信息:
        <Input
          v-model="editForm.info"
          show-word-limit
          type="textarea"
          placeholder="请输入支出信息"
          style="width:70%;"
        />
      </div>
      <div class="modal-item">
        审核状态:
        <Select style="width:70%;" v-model="editForm.status" @on-change="examineChange">
          <Option value="未报销">未报销</Option>
          <Option value="已报销">已报销</Option>
        </Select>
      </div>
      <div class="modal-item">
        开支凭证:
        <Upload
          action="http://192.168.0.113:7776/api/files/upload/formimg"
          name="files"
          :format="uploadImgType"
          :on-success="uploadImgSuccess"
          :on-error="uploadImgError"
          :on-format-error="uploadImgFormat"
        >
          <Button icon="ios-cloud-upload-outline" type="success">上传</Button>
        </Upload>
      </div>
    </Modal>
    <!--编辑弹窗-->

    <!--付款凭证-->
    <Modal v-model="modal3" title="开支凭证" footer-hide :styles="{top: '20px'}">
      <img :src="applyImgIndex" width="100%" alt />
    </Modal>
    <!--付款凭证-->

    <div class="panel-head">开支管理</div>
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
        <Button type="info" class="searchBtn" @click="searchBtn">查询</Button>
        <Button type="primary" class="searchBtn" @click="addApplyBtn">添加开支</Button>
      </div>
      <Table :columns="columns1" :data="expensesList">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="warning"
            size="small"
            @click="applyImgBtn(row)"
            style="margin-right: 5px"
          >开支凭证</Button>
          <Button type="success" size="small" style="margin-right: 5px" @click="examine(row)">审核</Button>
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
  getExpensesPagelist,
  getAddExpenses,
  getDeleteExpenses,
  getByidExpenses,
  getUpdateExpenses,
  getAdminPageList
} from "../api";
import { changeTime, listDateChange } from "../plugins/time.js";
export default {
  name: "apply",
  data() {
    return {
      modal1: false, //弹窗控制
      modal2: false, //编辑弹窗
      modal3: false, //开支凭证弹窗
      stime: "0001-01-01", //开始时间
      etime: "", //结束时间
      expensesList: [], //展示列表
      sum: 0, //总数
      page: 1, //当前页码
      submitForm: {
        //添加开支
        date: "",
        money: 0,
        name: "",
        info: "",
        img: "",
        status: "未报销"
      },
      editForm: {
        //编辑提交表单
        expenses_id: "",
        date: "",
        info: "",
        money: "",
        name: "",
        status: "",
        admin_reallyname: "",
        img: ""
      },
      uploadImgType: ["jpg", "png", "jpeg", "gif"],
      applyImgIndex: "#",
      columns1: [
        //表头
        {
          title: "支出时间",
          key: "date"
        },
        {
          title: "支出信息",
          key: "info"
        },
        {
          title: "支出金额",
          key: "money"
        },
        {
          title: "支出人",
          key: "name"
        },
        {
          title: "审核状态",
          key: "status"
        },
        {
          title: "审核人",
          key: "admin_reallyname"
        },
        {
          title: "操作",
          slot: "action",
          width: 250,
          align: "center"
        }
      ]
    };
  },
  created() {
    this.etime = changeTime(new Date());
    this.submitForm.date = changeTime(new Date());
    getExpensesPagelist({
      pagesize: 10,
      pageid: 1,
      stime: this.stime,
      etime: this.etime,
      allnumber: 0,
      pagenumber: 0
    }).then(data => {
      this.sum = data.data.data.allnumber || 0;
      this.expensesList = listDateChange(data.data.data.xyz_expenses) || [];
    });
  },
  methods: {
    timeChange1(value) {
      //开始时间回调
      this.stime = value;
    },
    timeChange2(value) {
      //结束时间回调
      this.etime = value;
    },
    applyTimeChange(value) {
      //添加开支时间回调
      this.submitForm.date = value;
    },
    examineChange(value) {
      //审核状态
      this.editForm.status = value;
    },
    pageChange(value) {
      //页码改变回调
      this.page = value;
      getExpensesPagelist({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0
      }).then(data => {
        this.sum = data.data.data.allnumber || 0;
        this.expensesList = listDateChange(data.data.data.xyz_expenses) || [];
      });
    },
    searchBtn() {
      //查询按钮
      this.page = 1;
      getExpensesPagelist({
        pagesize: 10,
        pageid: 1,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0
      }).then(data => {
        this.sum = data.data.data.allnumber || 0;
        this.expensesList = listDateChange(data.data.data.xyz_expenses) || [];
      });
    },
    addSubmit() {
      //开支添加提交
      if (this.submitForm.img == "") {
        this.$Message.warning("请上传开支凭证");
      } else {
        getAddExpenses(this.submitForm).then(data => {
          if (data.data.message == "添加成功") {
            this.$Message.success("添加成功");
            getExpensesPagelist({
              pagesize: 10,
              pageid: this.page,
              stime: this.stime,
              etime: this.etime,
              allnumber: 0,
              pagenumber: 0
            }).then(data => {
              this.sum = data.data.data.allnumber || 0;
              this.expensesList =
                listDateChange(data.data.data.xyz_expenses) || [];
            });
          } else {
            this.$Message.error("添加失败");
          }
        });
      }
    },
    remove(value) {
      //删除提交
      getDeleteExpenses(value.expenses_id).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("删除成功");
          getExpensesPagelist({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.expensesList =
              listDateChange(data.data.data.xyz_expenses) || [];
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    edit(value) {
      //编辑
      getByidExpenses(value.expenses_id).then(data => {
        this.editForm = data.data.data;
        this.modal2 = true;
      });
    },
    editSubmit() {
      //编辑提交
      getUpdateExpenses(this.editForm).then(data => {
        if (data.data.message == "删除成功") {
          this.$Message.success("修改成功");
          getExpensesPagelist({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.sum = data.data.data.allnumber || 0;
            this.expensesList =
              listDateChange(data.data.data.xyz_expenses) || [];
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    uploadImgSuccess(file) {
      //图片上传成功
      this.$Message.success("上传成功");
      this.submitForm.img = file[0];
      this.editForm.img = file[0];
    },
    uploadImgError() {
      //图片上传失败
      this.$Message.error("上传失败");
    },
    uploadImgFormat() {
      //文件类型不正确
      this.$Message.warning("不支持该文件类型");
    },
    addApplyBtn() {
      //添加开支
      this.modal1 = true;
      this.submitForm.img = "";
      this.submitForm.status = "未报销";
    },
    applyImgBtn(value) {
      //获取开支凭证
      this.applyImgIndex = value.img;
      this.modal3 = true;
    },
    async examine(value) {
      //审核
      let list = [];
      await getAdminPageList().then(data => {
        list = data.data.data.filter(item => {
          return item.name == window.sessionStorage.getItem("admin");
        });
        if (list.length <= 0) {
          this.$router.push("/");
        } else {
          getByidExpenses(value.expenses_id).then(data => {
            this.editForm = data.data.data;
            this.editForm.admin_reallyname = list[0].reallyname;
            this.editForm.status = "已报销";
            getUpdateExpenses(this.editForm).then(data => {
              if (data.data.message == "无权限") {
                this.$Message.error("无权限");
              } else {
                this.$Message.success("审核成功");
                getExpensesPagelist({
                  pagesize: 10,
                  pageid: this.page,
                  stime: this.stime,
                  etime: this.etime,
                  allnumber: 0,
                  pagenumber: 0
                }).then(data => {
                  this.sum = data.data.data.allnumber || 0;
                  this.expensesList =
                    listDateChange(data.data.data.xyz_expenses) || [];
                });
              }
            });
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#apply {
  padding: 20px;
}
</style>