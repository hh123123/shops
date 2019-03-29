<template>
  <div>
    <div class="login-boxtitle">
      <a href="home.html">
        <img alt="logo" src="../images/logobig.png" class="logo-11">
      </a>
    </div>

    <div class="login-banner">
      <div class="login-main">
        <div class="login-banner-bg">
          <span></span>
          <img src="../images/big.jpg">
        </div>
        <div class="login-box">
          <h3 class="title title1">登录商城</h3>

          <div class="clear"></div>
          <div class="login-form">
            <form>
              <div class="user-name">
                <label for="user">
                  <i class="am-icon-user"></i>
                </label>
                <input type="text" v-model="userName" id="user" placeholder="请输入用户名">
              </div>
              <div class="user-pass">
                <label for="password">
                  <i class="am-icon-lock"></i>
                </label>
                <input type="password" v-model="password" id="password" placeholder="请输入密码">
              </div>
            </form>
          </div>
          <div class="login-links">
            <label for="remember-me">
              <input id="remember-me" type="checkbox" v-model="checked">记住密码
            </label>
            <a href="#" class="am-fr">忘记密码</a>
            <span class="zcnext am-fr am-btn-default regbtn" @click="toRegister">注册</span>
            <br>
          </div>
          <div class="am-cf">
            <input
              type="submit"
              name
              @click="loginHandle"
              value="登 录"
              class="am-btn am-btn-primary am-btn-sm"
            >
          </div>
          <div class="partner">
            <h3>合作账号</h3>
            <div class="am-btn-group">
              <li>
                <a href="#">
                  <i class="am-icon-qq am-icon-sm"></i>
                  <span id="logimportant">QQ登录</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="am-icon-weibo am-icon-sm"></i>
                  <span>微博登录</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="am-icon-weixin am-icon-sm"></i>
                  <span>微信登录</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/dlstyle.css";
import "../css/amazeui.css";
import { loginIn } from "../utils/auth";
import { login } from "../services/user";
import { serverUrl } from "../utils/config";
export default {
  data() {
    return {
      userName: '',
      password: '',
      checked: true,
      islogined:false
    };
  },
  methods: {
    toRegister() {
      this.$router.push({
        name: "Reg"
      });
    },
    loginHandle() {
      if (!this.userName || !this.password) {
        alert("请输入账号和密码");
        retutn;
      }

      login(this.userName, this.password)
        .then(res => {
          if (res.data.code == "success") {
            console.log(res);
            loginIn(res.data.token,this.userName);
            alert("登录成功！");
            this.islogined=true;
            console.log(this.logined);
            this.$router.push({
              name: "Home"
            });
          } else if ((res.data.message = "用户密码错误,请重新输入")) {
            alert("用户或密码错误，请重新输入！");
          } else {
            alert("登录失败！");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>
<style scoped>
.regbtn {
  cursor: pointer;
}
#logimportant {
  display: block !important;
}
.title1{
   height:66px!important;
   width:300px!important;
  font-size:20px!important;
}
#user,#password{
  border:1px solid #ccc;
}
.logo-11{
  width: 133px;
  height: 60px;
}
</style>




