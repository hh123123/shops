var oCha = document.getElementById("cha");
var ohead = document.getElementById("header")
oCha.onclick = function() {
	ohead.style.display = "none";
}
/*顶部结束*/


/*第一个轮播图*/
var i = 0;
var timer;
$(document).ready(function() {
	//用jquery方法设置第一张图片显示，其余隐藏
	$('.ig').eq(0).show().siblings('.ig').hide();

	//调用showTime()函数（轮播函数）
	showTime();

	//当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
	$('.li').hover(function() {
		//获取当前i的值，并显示，同时还要清除定时器
		i = $(this).index();
		Show();
		clearInterval(timer);
	}, function() {
		//
		showTime();
	});

	//鼠标点击左侧的箭头
	$('.btn1').click(function() {
		clearInterval(timer);
		if(i == 7) {
			i = -1; //注意此时i的值
		}
		i++;
		Show();
		showTime();
	});

	//鼠标点击右侧的箭头
	$('.btn2').click(function() {
		clearInterval(timer);
		if(i == 0) {
			i = 8; //注意此时i的值
		}
		i--;

		Show();
		showTime();
	});

});

//创建一个showTime函数
function showTime() {
	//定时器
	timer = setInterval(function() {
		//调用一个Show()函数
		Show();
		i++;
		//当图片是最后一张的后面时，设置图片为第一张
		if(i == 5) {
			i = 0;
		}
	}, 1000);
}

//创建一个Show函数
function Show() {
	//在这里可以用其他jquery的动画
	$('.ig').eq(i).fadeIn(500).siblings('.ig').fadeOut(500);
	//给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
	$('.li').eq(i).addClass('bg').siblings('.li').removeClass('bg');
}
/*轮播图结束*/

$(function(){
	$(".item-li1").hover(function(){
		
	})
})
/*proshow秒杀*/
			var time=3605;
			var hour,minute,seconds;
			var ohour=document.getElementById("hour");
			var ominute=document.getElementById("minute");
			var osecond=document.getElementById("second");
			var ms=document.getElementById("ms");
			var h1="01";
			var m1="00";
			var s1="05";
			ohour.innerHTML=h1;
			ominute.innerHTML=m1;
			osecond.innerHTML=s1;
			var timer=setInterval(function(){
				time--;
				hour=Math.floor(time/3600);
				minute=Math.floor(time%3600/60);
				seconds=Math.floor(time%3600%60);
				
				if(String(hour).length<2){
					hour="0"+hour;
					
				}
				if(String(minute).length<2){
					minute="0"+minute;
					
				}
				if(String(seconds).length<2){
					seconds="0"+seconds;
					
				}
				ohour.innerHTML=hour;
				ominute.innerHTML=minute;
				osecond.innerHTML=seconds;
				if(time==0){
					clearInterval(timer);
					ms.innerHTML="倒计时结束"
				}
			},1000)

/*proshow 轮播1*/
		var j=0;
		var timer2;
		$(function(){
			$(".ulist").eq(0).show().siblings('.ulist').hide();

			$('.Left').click(function() {
						clearInterval(timer2);
						if(j == 0) {
							j = 3; //注意此时i的值
						}
						j--;
						show2();
 
					});

					//鼠标点击右侧的箭头
					$('.Right').click(function() {
						clearInterval(timer2);
						if(j == 2) {
							j = -1; //注意此时i的值
						}
						j++;
						show2();

					});
})
		
		function show2(){
			$(".ulist").eq(j).fadeIn(500).siblings(".ulist").fadeOut(500);
		}
/*轮播1结束*/

/*proshow 轮播2*/
				var k=0;
				var timer3;
				$(function(){
					$(".s-png").eq(0).hide().siblings(".s-png").show();
					show3();
					showTime3();
					$('.s-span').hover(function() {
						//获取当前i的值，并显示，同时还要清除定时器
						k = $(this).index();
						show3();
						clearInterval(timer3);
					}, function() {
						//
						showTime3();
					});
					
					
					
				});
				function show3(){
					$(".s-png").eq(k).fadeIn(500).siblings(".s-png").fadeOut(500)
					$('.s-span').eq(k).addClass('bg').siblings('.s-span').removeClass('bg');
				}
				function showTime3(){
					timer3=setInterval(function(){
						show3();
						k++;
						if(k==2){
							k=0;
						}
					},1000)
				}
				var w=0;
				$(function(){

					$(".seven").children().hover(function(){
							w = $(this).index();
				$(".sevenp").children().eq(w).stop().animate({"right":"35px"},"500").siblings().stop().animate({"right":"-25px"},"300");
				
					},function(){
						$(".sevenp").children().eq(w).animate({"right":"-25px"},"300");
					})
				})

				var t=0;
				$(function(){
					$(".fanhui").children().eq(1).hover(function(){
						$(".fanhui").children().eq(0).animate({"right":"35px"},500)
					},function(){
						$(".fanhui").children().eq(0).animate({"right":"-25px"})
					})
				})


			
			window.onscroll=function(){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var xfbox=document.getElementById("x-fbox")
				var bline=document.getElementById("b-line");
				var sevenp=document.getElementById("s-evenp");
				var seven=document.getElementById("s-even");
				var fanhui=document.getElementById("f-anhui");
				var evt=event||e;
				if(scrollTop>$(window).height()){
					$(".xfbox").css({display:"block"})
				}else{
					$(".xfbox").css({display:"none"})
				}
				
				if(scrollTop>=980){
					bline.style.display="block";
					seven.style.display="block";
					sevenp.style.display="block";
					fanhui.style.display="block";
				}
				
			}
			var fanhui=document.getElementById("f-anhui");
			fanhui.onclick=function(){
				topFunction();
			}
			function topFunction(){
				document.documentElement.scrollTop=0;
				document.body.scroll=0;
			}
//搜索接口
var otxt=document.getElementById("otxt");
var olist=document.getElementById("olist");
otxt.oninput = function(){
				olist.style.display="block";
				var oScript = document.createElement("script");
				oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+otxt.value+"&json=1&cb=aa";
				document.body.appendChild(oScript);
			}
			function aa(data){
				//console.log(data);
				data = data.s;
				var str = "";
				data.forEach((item)=>{
					str += "<li><a href='https://www.baidu.com/s?wd="+item+"'>"+item+"</a></li>"
				});
				olist.innerHTML = str;
			}
	
if(getCookie("lart")){
			var obj=JSON.parse(getCookie("lart"));
		}
var $username=obj[1];
$(".hello").html("你好，"+$username);
$(".denglu").find("span").html("Hi~,"+$username).css({color:"red"})
$(".regist").hide();
