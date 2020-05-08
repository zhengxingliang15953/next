<template>
  <div id="login">
    <!-- <h1 style="font-size:20px;">下一站广告管理系统</h1> -->
    <div id="loginBox">
      <h1>下一站广告管理系统</h1>
      <Input v-model="loginForm.UserName" size="large" class="input-item">
        <span slot="prepend">账号</span>
      </Input>
      <Input v-model="loginForm.PassWord" type="password" class="input-item" size="large">
        <span slot="prepend">密码</span>
      </Input>
      <Button type="primary" long @click="submitForm('/index')" style="margin-bottom:20px;">登录</Button>
      <Button type="success" long @click="submitForm('/mobail')">手机订单添加</Button>
    </div>
    <p>技术支持:湖州盘古网络有限责任公司</p>
  </div>
</template>
  
  <script>
import { getLogin } from "../api";
export default {
  data() {
    return {
      loginForm: {
        //登录表单
        UserName: "",
        PassWord: ""
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    submitForm(value) {
      if (this.loginForm.UserName == "" || this.loginForm.PassWord == "") {
        this.$Message.warning("账号密码不能为空");
      } else {
        getLogin(this.loginForm).then(data => {
          if (data.data.message == "登录成功") {
            // window.sessionStorage.setItem("admin", this.loginForm.UserName);
            window.sessionStorage.setItem("token", data.data.data);
            this.$router.push({
              path: value,
              query: { admin: this.loginForm.UserName }
            });
            this.$Message.success("登录成功");
          } else {
            this.$Message.error("账号密码错误");
          }
        });
      }
    }
  },
  mounted() {},
  created() {
    // this.$store.state.admin='321313131';
    // console.log(this.$store.state.admin);
    // window.sessionStorage.removeItem("token");
    // window.sessionStorage.removeItem("select");
    // window.sessionStorage.removeItem("admin");
    window.sessionStorage.clear();
  }
};
</script>
 
 <style lang='less' scoped>
#login {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  font-size: 16px;
  background-color: #f2f2f2;
  color:  #f2f2f2;
  #loginBox{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 350px;
    background-color: white;
    padding:30px;
  }
  .input-item{
    margin-bottom:20px;
  }
  h1{
    text-align: center;
    color: #919191;
    font-size: 17px;
    margin-bottom:20px;
  }
  p{
    bottom:20px;
    position: absolute;
    color: #919191 ;
  }
}
</style>