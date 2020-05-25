<template>
  <div id="customer">
    <!--添加弹窗-->
    <Modal v-model="modal1" title="添加付款项" ok-text="添加" @on-ok="addSubmit">
      <div class="modal-item">
        付款金额:
        <Input
          v-model="addPayforForm.money"
          type="number"
          placeholder="请输入付款金额"
          style="width: 70%;"
        />
      </div>
      <div class="modal-item">
        付款对象:
        <Input v-model="addPayforForm.payment_object" placeholder="请输入付款对象" style="width: 70%;" />
      </div>
      <div class="modal-item">
        付款时间:
        <DatePicker
          type="date"
          :value="addPayforForm.date"
          placeholder="请选择支出时间"
          style="width:30%;"
          :clearable="false"
          :editable="false"
          @on-change="addPayforTimeChange"
        ></DatePicker>付款用途:
        <Select style="width:30%;" v-model="addPayforForm.way" @on-change="payforWayChange">
          <Option value="制作费">制作费</Option>
          <Option value="安装费">安装费</Option>
        </Select>
      </div>
      <div class="modal-item">
        备注说明:
        <Input
          v-model="addPayforForm.remarks"
          show-word-limit
          type="textarea"
          placeholder="请输入备注说明"
          style="width:70%;"
        />
      </div>
      <div class="modal-item">
        付款凭证:
        <Upload
          action="/api/files/upload/formimg"
          :headers="head"
          name="files"
          :on-success="uploadImgSuccess"
          :format="uploadImgType"
          :on-error="uploadImgError"
          :on-format-error="uploadFormat"
        >
          <Button icon="ios-cloud-upload-outline" type="success">上传</Button>
        </Upload>
      </div>
    </Modal>
    <!--添加弹窗-->

    <!--编辑弹窗-->
    <Modal v-model="modal3" title="修改付款项" ok-text="修改" @on-ok="editSubmit">
      <div class="modal-item">
        付款金额:
        <Input
          v-model="editPayforForm.money"
          type="number"
          placeholder="请输入付款金额"
          style="width: 70%;"
        />
      </div>
      <div class="modal-item">
        付款对象:
        <Input v-model="editPayforForm.payment_object" placeholder="请输入付款对象" style="width: 70%;" />
      </div>
      <div class="modal-item">
        付款时间:
        <DatePicker
          type="date"
          :value="editPayforForm.date"
          placeholder="请选择支出时间"
          style="width:30%;"
          :clearable="false"
          :editable="false"
          @on-change="addPayforTimeChange"
        ></DatePicker>付款用途:
        <Select style="width:30%;" v-model="editPayforForm.way" @on-change="payforWayChange">
          <Option value="制作费">制作费</Option>
          <Option value="安装费">安装费</Option>
        </Select>
      </div>
      <div class="modal-item">
        备注说明:
        <Input
          v-model="editPayforForm.remarks"
          show-word-limit
          type="textarea"
          placeholder="请输入备注说明"
          style="width:70%;"
        />
      </div>
      <div class="modal-item">
        付款凭证:
        <Upload
          action="/api/files/upload/formimg"
          :headers="head"
          name="files"
          :on-success="uploadImgSuccess"
          :format="uploadImgType"
          :on-error="uploadImgError"
          :on-format-error="uploadFormat"
        >
          <Button icon="ios-cloud-upload-outline" type="success">上传</Button>
        </Upload>
      </div>
    </Modal>
    <!--编辑弹窗-->

    <!--付款凭证-->
    <Modal v-model="modal2" title="付款凭证" footer-hide :styles="{top: '20px'}">
      <img :src="payforImgIndex" width="100%" alt />
    </Modal>
    <!--付款凭证-->

    <div class="panel-head">付款管理</div>
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
        <Button type="primary" class="searchBtn" @click="addPayforBtn">添加付款项</Button>
        <Button type="success" icon="ios-navigate" @click="output" class="out-put">财务总表导出</Button>
      </div>
      <Table :columns="columns1" :data="payforList">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="warning"  size="small" @click="payforImg(row)" style="margin-right: 5px">付款凭证</Button>
          <Button type="primary" v-if="adminType" size="small" style="margin-right: 5px" @click="edit(row)">编辑</Button>
          <Button type="error" v-if="adminType" size="small" @click="remove(row)">删除</Button>
        </template>
      </Table>
      <Page :total="sum" :current="page" style="margin-top:20px;" @on-change="pageChange" />
      <span class="sum-footer">总共{{sum}}条记录</span>
    </div>
  </div>
</template>

<script>
import { changeTime ,BLOB,listDateChange} from "../plugins/time.js";
import {
  getPayforPageList,
  getAddPayfor,
  getDeletePayfor,
  getByidPayfor,
  getUpdatePayfor,
  getOutPayfor,
  getAdminType
} from "../api";
export default {
  name: "apply",
  data() {
    return {
      head:{"Authorization":`Bearer ${window.sessionStorage.getItem('token')}`},
      columns1: [
        //表头
        {
          title: "付款金额",
          key: "money"
        },
        {
          title: "付款时间",
          key: "date"
        },
        {
          title: "付款对象",
          key: "payment_object"
        },
        {
          title: "用途",
          key: "way"
        },
        {
          title: "备注说明",
          key: "remarks"
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center"
        }
      ],
      payforList: [], //付款列表
      modal1: false, //弹窗控制
      modal2: false, //付款凭证弹窗控制
      modal3: false, //编辑弹框控制
      sum: 0, //总数
      page: 1, //当前页码
      stime: "0001-01-01", //开始时间
      etime: "", //结束时间
      addPayforForm: {
        //添加表单
        date: "",
        money: "",
        payment_object: "",
        way: "制作费",
        remarks: "",
        img: ""
      },
      payforImgIndex: "#", //付款凭证图片
      editPayforForm: {
        //添加表单
        date: "",
        money: "",
        payment_object: "",
        way: "制作费",
        remarks: "",
        img: ""
      },
      uploadImgType: ["jpg", "png", "jpeg", "gif"],
      adminType:null
    };
  },
  created() {
    this.etime = changeTime(new Date());
    this.addPayforForm.date = changeTime(new Date());
    getPayforPageList({
      pagesize: 10,
      pageid: 1,
      stime: this.stime,
      etime: this.etime,
      allnumber: 0,
      pagenumber: 0
    }).then(data => {
      this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
      this.sum = data.data.data.allnumber || 0;
    });
    getAdminType().then(data=>{
      this.adminType=data.data;
    })
  },
  methods: {
    addSubmit() {
      //添加付款项提交
      //if (this.addPayforForm.img == "") {
        //this.$Message.warning("请上传付款凭证");
      //} else {
        getAddPayfor(this.addPayforForm).then(data => {
          if (data.data.message == "删除成功") {
            this.$Message.success("添加成功");
            getPayforPageList({
              pagesize: 10,
              pageid: this.page,
              stime: this.stime,
              etime: this.etime,
              allnumber: 0,
              pagenumber: 0
            }).then(data => {
              this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
              this.sum = data.data.data.allnumber || 0;
            });
          } else {
            this.$Message.error("添加失败");
          }
        });
      //}
    },
    pageChange(value) {
      //页码改编回调
      this.page = value;
      getPayforPageList({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0
      }).then(data => {
        this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
        this.sum = data.data.data.allnumber || 0;
      });
    },
    timeChange1(value) {
      //开始时间改变回调
      this.stime = value;
    },
    timeChange2(value) {
      //结束时间改变回调
      this.etime = value;
    },
    addPayforTimeChange(value) {
      //添加付款时间改变回调
      this.addPayforForm.date = value;
    },
    payforWayChange(value) {
      //付款用途改变回调
      this.addPayforForm.way = value;
    },
    addPayforBtn() {
      //添加付款项
      this.modal1 = true;
      this.addPayforForm.img = '';
    },
    remove(value) {
      //删除
      getDeletePayfor(value.pay_id).then(data => {
        if (data.data.code == 1) {
          this.$Message.success("删除成功");
          getPayforPageList({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
            this.sum = data.data.data.allnumber || 0;
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    edit(value) {
      //编辑
      getByidPayfor(value.pay_id).then(data => {
        this.editPayforForm = data.data.data;
        this.modal3 = true;
      });
    },
    editSubmit() {
      //编辑提交
      getUpdatePayfor(this.editPayforForm).then(data => {
        if (data.data.code == 1) {
          this.$Message.success("修改成功");
          getPayforPageList({
            pagesize: 10,
            pageid: this.page,
            stime: this.stime,
            etime: this.etime,
            allnumber: 0,
            pagenumber: 0
          }).then(data => {
            this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
            this.sum = data.data.data.allnumber || 0;
          });
        } else {
          this.$Message.error("无权限");
        }
      });
    },
    searchBtn() {
      //查询提交
      getPayforPageList({
        pagesize: 10,
        pageid: 1,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0
      }).then(data => {
        this.payforList = listDateChange(data.data.data.xyz_Pays) || [];
        this.sum = data.data.data.allnumber || 0;
      });
    },
    uploadImgSuccess(file, fileList) {
      //图片上传成功
      this.$Message.success("上传成功");
      this.addPayforForm.img = file[0];
      this.editPayforForm.img = file[0];
    },
    payforImg(value) {
      //付款凭证图片获取
      this.payforImgIndex = value.img;
      this.modal2 = true;
    },
    uploadImgError() {
      //图片上传失败
      this.$Message.error("上传失败");
    },
    uploadFormat() {
      //上传文件类型不正确
      this.$Message.warning("不支持该文件类型");
    },
    output(){//导出
      getOutPayfor({
        pagesize: 10,
        pageid: this.page,
        stime: this.stime,
        etime: this.etime,
        allnumber: 0,
        pagenumber: 0,
        name:''
      }).then(data=>{
        BLOB(data.data,'财务总表.xls');
      })
    }
  }
};
</script>

<style lang="less" scoped>
#customer {
  padding: 20px;
}
.modal {
  display: -webkit-flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}
</style>