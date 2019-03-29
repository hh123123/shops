<template>
       <div>
<div class="login-boxtitle">
			<a href="home/demo.html"><img alt="" src="../images/logobig.png"/></a>
		</div>
		<div class="res-banner">
			<div class="res-main">
		<div class="login-banner-bg"><span></span><img src="../images/big.jpg" /></div>
				<div class="login-box">

						<div class="am-tabs" id="doc-my-tabs">
							<ul class="">
								<li class="userreg">用户注册</li>
							</ul>

							<div class="am-tabs-bd">
								<div class="am-tab-panel am-active">
				<form method="post">
			  <div class="user-email">
										<label for="email"><i class="am-icon-envelope-o"></i></label>
										<input type="email" v-model="userName"  name="" id="email" placeholder="请输入用户名">
                 </div>
                 <div class="user-pass">
								    <label for="password"><i class="am-icon-lock"></i></label>
								    <input type="password" v-model="password" name="" id="password" placeholder="设置密码">
                 </div>
                 <div class="user-pass">
								    <label for="passwordRepeat"><i class="am-icon-lock"></i></label>
								    <input type="password"  v-model="repassword" name="" id="passwordRepeat" placeholder="确认密码">
                 </div>
                 </form>
								 <div class="login-links">
										<label for="reader-me">
											<input id="reader-me" type="checkbox" v-model="checked"> 点击表示您同意商城《服务协议》
										</label>
							  	</div>
										<div class="am-cf">
											<input type="submit" @click="regHandle" name="" value="注册" class="am-btn am-btn-primary am-btn-sm am-fl">
										</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
           </div>
</template>

<script>
import '../css/dlstyle.css'
import '../css/amazeui.min.css'
import {reg} from'../services/user'
import {loginIn} from '../utils/auth'

export default{
 data(){

    return{
        userName:'',
        password:'',
		repassword:'',
		checked:false
    }

  },
  methods:{


   async regHandle(){
          if(!this.userName||!this.password){
              alert('请输入账号和密码');
              return
		  }
          if(this.password!=this.repassword){
              alert('两次密码输入不一致');
              return
		  }
		 if(this.checked==false){

		 alert('请先同意用户注册协议')
		  return
		 }

          var result =await reg({
              userName:this.userName,
              password:this.password
          })
          if(result.data.code=="success"){
              loginIn(result.data.token) //把token到本地
              //页面跳转

              this.$router.push({
                  name:'Login'
              })
		  }else if(result.data.message="用户名已存在"){
			  alert('用户名已存在请重新输入！')
		  }
		  else{
			  alert('注册失败!')

          }
      }

}

}

</script>

<style scoped>

.userreg{
	font-size:20px;
	font-weight:600;
	width:100%;
	text-align:center;
}
.login-boxtitle img{
  width: 133px;
	height: 60px;

}
</style>