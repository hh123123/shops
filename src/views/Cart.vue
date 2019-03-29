<template>
  <div class="list">
  <div class="am-container header">
  <ul class="message-l">
				<div class="topMessage">
					<div class="menu-hd">
						<a href="#" target="_top" class="h" @click="Login">{{init}}</a>
					</div>
				</div>
			</ul>
			<ul class="message-r">
				<div class="topMessage home">
					<div class="menu-hd"><a href="#" target="_top" class="h">商城首页</a></div>
				</div>
				<div class="topMessage my-shangcheng">
					<div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
				</div>
				<div class="topMessage mini-cart">
					<div class="menu-hd"><a id="mc-menu-hd" href="#" target="_top"><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></a></div>
				</div>
				<div class="topMessage favorite">
					<div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
          </div>
			</ul>
      </div>
      <div class="nav white">
				<div class="logo"><img src="../images/logo.png" /></div>
				<div class="logoBig">
					<li><img src="../images/logobig.png" /></li>
				</div>

				<div class="search-bar pr">
					<a name="index_none_header_sysc" href="#"></a>
					<form>
						<input id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off">
						<input id="ai-topsearch" class="submit am-btn" value="搜索" index="1" type="submit">
					</form>
				</div>
			</div>

			<div class="clear"></div>
      <div class="concent">
				<div id="cartTable">
					<div class="cart-table-th">
						<div class="wp">
							<div class="th th-chk">
								<div id="J_SelectAll1" class="select-all J_SelectAll">

								</div>
							</div>
							<div class="th th-item">
								<div class="td-inner">商品信息</div>
							</div>
							<div class="th th-price">
								<div class="td-inner">单价</div>
							</div>
							<div class="th th-amount">
								<div class="td-inner">数量</div>
							</div>
							<div class="th th-sum">
								<div class="td-inner">金额</div>
							</div>
							<div class="th th-op">
								<div class="td-inner">操作</div>
							</div>
						</div>
					</div>
					<div class="clear"></div>

					<tr class="item-list">
						<div class="bundle  bundle-last ">
							<div class="bundle-hd">
								<div class="bd-promos">
									<div class="bd-has-promo">已享优惠:<span class="bd-has-promo-content">省￥19.50</span>&nbsp;&nbsp;</div>
									<div class="act-promo">
										<a href="#" target="_blank">第二支半价，第三支免费<span class="gt">&gt;&gt;</span></a>
									</div>
									<span class="list-change theme-login">编辑</span>
								</div>
							</div>
							<div class="clear"></div>
							<div class="bundle-main">
							 <ul class="item-content clearfix" v-for="(product,id) in products" :key="id">
									<li class="td td-chk">
										<div class="cart-checkbox ">
											<input class="check" id="J_CheckBox_170037950254" name="items[]" value="170037950254" type="checkbox" @click="selOne(product.id)" :checked="product.checked">
											<label for="J_CheckBox_170037950254"></label>
										</div>
									</li>
									<li class="td td-item">
										<div class="item-pic">
											<a href="#" target="_blank" data-title="美康粉黛醉美东方唇膏口红正品 持久保湿滋润防水不掉色护唇彩妆" class="J_MakePoint" data-point="tbcart.8.12">
												<img :src="'https://api.cat-shop.penkuoer.com'+product.coverImg" class="itempic J_ItemImg"></a>
										</div>
										<div class="item-info">
											<div class="item-basic-info">
												<a href="#" target="_blank" title="美康粉黛醉美唇膏 持久保湿滋润防水不掉色" class="item-title J_MakePoint" data-point="tbcart.8.11">{{product.name}}</a>
											</div>
										</div>
									</li>
									<li class="td td-info">
										<div class="item-props item-props-can">
											<span class="sku-line">颜色：12#川南玛瑙</span>
											<span class="sku-line">包装：裸装</span>
											<span tabindex="0" class="btn-edit-sku theme-login">修改</span>
											<i class="theme-login am-icon-sort-desc"></i>
										</div>
									</li>
									<li class="td td-price">
										<div class="item-price price-promo-promo">
											<div class="price-content">
												<div class="price-line">
													<em class="price-original">78.00</em>
												</div>
												<div class="price-line">
													<em class="J_Price price-now" tabindex="0">{{product.price}}</em>
												</div>
											</div>
										</div>
									</li>
									<li class="td td-amount">
										<div class="amount-wrapper ">
											<div class="item-amount ">
												<div class="sl">
													<input class="min am-btn" name="" type="button" value="-"  @click="reduceHandle(product.id)"/>
													<input class="text_box" name="" type="text" :value="product.quantity" ref="input1" style="width:30px;" />
													<input class="add am-btn" name="" type="button" value="+" @click="addHandle(product.id)"/>
												</div>
											</div>
										</div>
									</li>
									<li class="td td-sum">
										<div class="td-inner">
											<em tabindex="0" class="J_ItemSum number">{{product.price*product.quantity}}</em>
										</div>
									</li>
									<li class="td td-op">
										<div class="td-inner">
											<a title="移入收藏夹" class="btn-fav" href="#">
                  移入收藏夹</a>
											<a href="javascript:;" data-point-url="#" class="delete" @click="deleteHandle(product.id111,product.id)">
                  删除</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</tr>
					<div class="clear"></div>

					<tr class="item-list">
						<div class="bundle  bundle-last ">
							<div class="bundle-hd">
								<div class="bd-promos">
									<div class="bd-has-promo">已享优惠:<span class="bd-has-promo-content">省￥19.50</span>&nbsp;&nbsp;</div>
									<div class="act-promo">
										<a href="#" target="_blank">第二支半价，第三支免费<span class="gt">&gt;&gt;</span></a>
									</div>
									<span class="list-change theme-login">编辑</span>
								</div>
							</div>
							<div class="clear"></div>
							<div class="bundle-main">
								
							</div>
						</div>
					</tr>
				</div>
				<div class="clear"></div>

				<div class="float-bar-wrapper">
					<div id="J_SelectAll2" class="select-all J_SelectAll">
						<div class="cart-checkbox">
							<input v-model="selectAll"  class="check-all check" id="J_SelectAllCbx2" name="select-all" value="true" type="checkbox" @click="selAllHandle">
							<label for="J_SelectAllCbx2"></label>
						</div>
						<span >全选</span>
					</div>
					<div class="operations">
						<a href="#" hidefocus="true" class="deleteAll" >删除</a>
						<a href="#" hidefocus="true" class="J_BatchFav">移入收藏夹</a>
					</div>
					<div class="float-bar-right">
						<div class="amount-sum">
							<span class="txt">已选商品</span>
							<em id="J_SelectedItemsCount">{{shopcount}}</em><span class="txt">件</span>
							<div class="arrow-box">
								<span class="selected-items-arrow"></span>
								<span class="arrow"></span>
							</div>
						</div>
						<div class="price-sum">
							<span class="txt">合计:</span>
							<strong class="price">¥<em id="J_Total">{{total}}</em></strong>
						</div>
						<div class="btn-area">
							<a href="pay.html" id="J_Go" class="submit-btn submit-btn-disabled" aria-label="请注意如果没有选择宝贝，将无法结算">
								<span>结&nbsp;算</span></a>
						</div>
					</div>
				</div>
			</div>
  </div>
</template>
<script type="text/javascript" src="../js/jquery.js"></script>
<script>
 import "../AmazeUI-2.4.2/assets/css/amazeui.css";
 import "../basic/css/demo.css";
 import "../css/cartstyle.css";
 import "../css/optstyle.css";

//import {products} from '../data'
import axios, { get } from 'axios';

export default {
  data(){
    return {
			//count:100,
			shopcount:0,
			pricecount:0,
			selectAll: false,
      products:[],
      page:1,
      pagecount:1,
    }

  },
  created(){
        this.loadData()
	},
	computed:{
		init(){
				if(sessionStorage.getItem('token')){   //如果返回的是true,则证明是有token值,则显示用户名
        return `你好,${sessionStorage.getItem('userName')}`
			}else{
				return '你好,请登录'
			}
			},
		total(){
			let sumP= 0
			this.products.forEach((item, index) => {
				if(item.checked==true){
				  sumP+=item.price*item.quantity
				}
			})
		//	this.products.forEach(item=> sumP+=item.price*item.count )
			return sumP
		}
	},
  methods:{
    prePage(){
      this.$router.go(-1)
		},
		selOne(id) {
			    console.log(id)
          const index = this.products.findIndex(item => item.id == id)
					this.products[index].checked = !this.products[index].checked;
					console.log(this.products[index].checked)
					 if(this.products[index].checked ==true){
							this.shopcount+=this.products[id].quantity
							this.pricecount+=this.products[id].price*this.products[id].quantity
					}else{
							this.shopcount-=this.products[id].quantity
							this.pricecount-=this.products[id].price*this.products[id].quantity
					}
					//console.log("aa")
					console.log(this.products.filter(item=>item.checked).length)
					if(this.products.filter(item=>item.checked).length==this.products.length){
						this.selectAll=!this.selectAll;
					} else{
						this.selectAll=false;
					} 
				},
				selAllHandle() {
          this.selectAll = !this.selectAll;
          this.products.forEach((item, index) => {
					this.products[index].checked = this.selectAll;
					this.pricecount+=this.products[index].price*this.products[index].quantity ;
					this.shopcount+=this.products[index].quantity;
					})
					if(this.selectAll==false){
						this.pricecount=0
            this.shopcount=0
					}
        },
    add(id){
         alert(id)
		},
		addHandle(id){
			console.log(id)
			this.products[id].quantity+=1
			
				if(this.products[id].checked==true){
					this.shopcount+=1;
				}
			
		
		},
		reduceHandle(id){
			// this.count+=1
			//this.$refs.input1.value -=-1
			console.log(id)
			this.products[id].quantity -=1
			if(this.products[id].checked==true){
				this.shopcount-=1;
			}
		},
    loadmore(){
      this.page +=1
      this.loadData()
		},
			Login(){
				this.$router.push({
					name:'Login'
				})
			},
			Reg(){
				this.$router.push({
					name:'Reg'
				})
			},
			deleteHandle(id,index){
				console.log(index)
				console.log(id)
				console.log("aa")
				console.log(this.products)
				this.products.splice(0,1)
				 axios.delete(`http://api.cat-shop.penkuoer.com/api/v1/shop_carts/${id}`,{
              headers:{
				'Authorization':`bearer ${sessionStorage.getItem('token')}`
			  }
				}) 
				.then(res=>{
					console.log(res)
						})
		     .catch(err=>{
			    console.log(err)
		     })
			},
			
    loadData(){
      get(`http://localhost:3000/api/v1/products?page=${this.page}`)
        .then(res => {
          console.log(res)
          this.products = this.products.concat(res.data.products)
          this.pageCount = res.data.pages
        })
        .catch( err => {
          //console.log(err)
        })
    }
	},
	created(){
		get('http://api.cat-shop.penkuoer.com/api/v1/shop_carts',{
			headers:{
				'Authorization':`bearer ${sessionStorage.getItem('token')}`
			}
		})
		.then(res=>{
			console.log(res.data)
			   
             for(var i=0;i<res.data.length;i++){
							 res.data[i].product.checked=false
							 res.data[i].product.id111 = res.data[i]._id
							 res.data[i].product.id= i
							 this.products.push(res.data[i].product)

						 }
						 //console.log(this.products)
			//this.products
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
</script>

<style>
  .list{
   padding-bottom:60px 
   }
   .icon{
     color:red;
     font-size: 1.2rem
	 } 
	 .item-pic img{width:50px;height:50px}
</style>

