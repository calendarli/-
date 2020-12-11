// ==UserScript==
// @name         搜索页面美化
// @version      2.5.2
// @description  支持的搜索引擎有1.百度；2.搜狗；3.谷歌；4.必应。  可自由切换背景
// @author       CalendarLi
// @match        *://www.google.com/search?*
// @match        *://www.google.com.hk/search?*
// @match        *://cn.bing.com/search?*
// @match        *://www.baidu.com/s?*
// @match        *://www.sogou.com/web?*
// @grant        GM_log
// @connect      google.com
// @connect      baidu.com
// @require      http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js

// @namespace https://github.com/
// ==/UserScript==
$(function(){
		if($('.AC-MENU_Btn').length!=0&&!$($('.container-label.baidu input')[0]).is(':checked')){
			console.log('开启了AC-baidu脚本')
			$('body').prepend('<style>#page{position: relative;}#b_content #b_results>li:not(#mfa_root) {background-color: #ffffffc2;}#rso .g, .vk_c{background-color: #fff9;}.container_s #content_right{width: 223px;}#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container{background-color: #fff9;}</style>')
		}else{
			console.log('未开启AC-baidu脚本')
			//$('#content_left').attr({style:' background: #f0f8ff94;padding-left: 35px; margin-left: 140px; width: 585px;'})
			$('body').prepend('<style>#page{position: relative;}#b_results>li{background-color: #ffffff94;}#b_context .b_ans, #b_context #wpc_ag{background-color: #ffffff94;}.container_s #content_right{width: 223px;}.wrapper_new #content_left{background: #f0f8ff94;padding-left: 35px; margin-left: 140px; width: 585px;}</style>')
			$('#res').attr({style:'background: #ffffff94;width: 680px;padding: 10px 35px;margin-top: 10px;'})
			$('#main').attr({style:'width: 680px;padding: 10px 35px;margin-top: 10px;margin-bottom: 20px;'})
		}
		$('.container-label.baidu input').on('click',function(){
			console.log('AC-baidu脚本切换')
			if(this.value == '0'){
				console.log('AC-baidu脚本切换为原始模式')
				$('#content_left').attr({style:' background: #ffffff94; margin-left: 140px; width: 585px; padding-left: 35px;'})
			}else{
				console.log('非原始模式')
				$('#content_left').removeAttr('style')
			}
		})
	})
	$(function(){
		var Anime=[
			'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg',
			'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg',
			'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg',
			'https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg',
			'https://upyun.calendarli.com/Anime/2261e9ba9daeccc5d2e9d235bb5e20b1.jpg',
			'https://upyun.calendarli.com/Anime/44ffdc1e475e5374f7d080b2e1617114.jpg',
			'https://upyun.calendarli.com/Anime/55c024df52c2d98ec186bcec889b1fab.jpg',
			'https://upyun.calendarli.com/Anime/773186d9b3b7072964573fbeb91c4a5c.jpg',
			'https://upyun.calendarli.com/Anime/84627ff4644ee9bb3838f43bd1cf808e.jpeg',
			'https://upyun.calendarli.com/Anime/97df6b36ec9e6c924f9075a40452fe26.jpg',
			'https://upyun.calendarli.com/Anime/acf57c383d119b6cc8d92b1a77d47878.jpg',
			'https://upyun.calendarli.com/Anime/b2e4b4e787b190a18522154564c5d510.jpg',
			'https://upyun.calendarli.com/Anime/cc31ab7a6d4ad922b32313cb7297862c.jpeg',
			'https://upyun.calendarli.com/Anime/dfeb5880917bec18684be6f49cf86d70.jpg',
			'https://upyun.calendarli.com/Anime/e19b3d082f6a6274464d5f886736ea37.jpg',
			'https://upyun.calendarli.com/Anime/e28f681cec0e89ec135333fa9e813242.jpg',
			'https://upyun.calendarli.com/Anime/f9c6ee1426014073aeb190c5e83a1ba1.jpg'
		]
		var landscape=[
			'https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg',
			'https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg',
			'https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg',
			'https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg'
		]

		// 设置cookie值
		function setCookie(cname,cvalue,exdays){
			var d = new Date();
			d.setTime(d.getTime()+(exdays*24*60*60*1000));
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		//读取cookie值
		function getCookie(cname){
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i].trim();
				if (c.indexOf(name)==0) return c.substring(name.length,c.length);
			}
			return "";
		}
		function a(arr,op){
			// 图片加载函数
			var obj=new Image();
			obj.src=arr;
			obj.onload=function(){
				$('body').attr({style:'background-image:url('+this.src+');background-position-x: center;background-attachment: fixed;background-size: cover;'})
				console.log('背景加载完成')
				$('#optext')[0].value=op
				$('.Masklayer').attr({style:'background: #fff;width: 10090px;height: 10080px;opacity:'+op+';z-index: 0;position: fixed;top: 0px;left: 0px;'})
			}
		}
		//页面加载检测cookie
		function checkCookie(){
			console.log('开始执行')
			var username=getCookie("PicturesGrouping");
			var uservalue=getCookie("PictureTheSubscript");
			var opa=getCookie('opacity')
			if (username!=""&&uservalue!=""&&opa!=''){
				//加载图片
                console.log(opa)
				username=='Anime'?a(Anime[uservalue],opa):a(landscape[uservalue],opa);
			}else{
				//初始化cookie...
                console.log('开始初始化..')
				setCookie('PictureTheSubscript','0','1');
				setCookie('PicturesGrouping','Anime','1')
				setCookie('opacity','0.6','1')
				checkCookie();
			}
		}
		// 设置遮罩层
		$('body').prepend('<div class="Masklayer"></div>')
		//百度
		$('body').prepend('<div style="position: fixed;left: 0px;margin-top: 177px;z-index: 99;"><div id="previous" style="cursor: pointer;width: 50px;height: 30px;background: #d7f4fa94;border-bottom-right-radius: 15px;border-top-right-radius: 15px;line-height: 30px;margin-bottom: 10px;">上一张</div><div id="next" style="cursor: pointer;width: 50px;height: 30px;background: #d7f4fa94;border-bottom-right-radius: 15px;border-top-right-radius: 15px;line-height: 30px;margin-bottom: 10px;">下一张</div></div>');
		$('body').prepend('<div style="position: fixed;left: 0px;margin-top: 257px;z-index: 99;width: 80px;height: 60px;background: #d7f4fa94;line-height: 29px;border-bottom-right-radius: 15px;border-top-right-radius: 15px;"><div id="Anime" style="cursor: pointer;">动漫</div><div id="landscape" style="cursor: pointer;">自然风景</div></div>')
		$('body').prepend('<div style="position: fixed;left: 0px;margin-top: 330px;z-index: 99;width:100px;height: 60px;background: #d7f4fa94;line-height: 29px;border-bottom-right-radius: 15px;border-top-right-radius: 15px;"><p style="font-size: 10px;line-height: 20px;margin: 0;">背景透明度</p><input type="text" title="背景透明度0-1"  id="optext" style="width:35px" /><div id="opbc" style="float: right;margin-right: 12px;cursor: pointer;" title="遮罩层透明度0-1">保存</div></div>')
		$('.nums_text,.search_tool_tf,.c-gap-left,.num-tips').attr({style:'color: #477553;'})
		$('#rs,.fk i').remove()
		$('.fk strong,#page strong,.page-inner a').attr({style:'background: none;'})
		$('#page strong .pc').attr({style:'background: aliceblue;'})
		$('.s_tab_inner').attr({style:'padding-top: 12px;'})
		//必应
		$('div#b_content').attr({style:'position: relative;'})
		$('#b_results>li.b_ad').remove()

		//Google
		if($('#appbar,.yg51vc')){
			$('#appbar,.yg51vc,#hdtb').attr({style:'background: #ffffff9e;'})
		}
		if($('.Xeztj ')){
			$('.Xeztj ,.YSlUOe,.MGqjK').attr({style:'background: #ffffff8f;'})
		}
		if($('.Nxb87')){
			$('.Nxb87').attr({style:'padding-top: 10px;'})
		}
		if($('#botstuff')){
			$('#botstuff').remove()
		}
		checkCookie()
		// 点击上一张的函数
		$('#previous').on('click',function(){
			//读取下标并转为数字类型
		var PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
			//读取分组
		var PicturesGrouping=getCookie("PicturesGrouping");
		var pi=PictureTheSubscript-1
			//读取当前分组的数组下标
			PicturesGrouping=='Anime'?len=Anime.length-1:len=landscape.length-1;
			// 当下标为0并点击上一张时回到数组的最后一位
			if(0<PictureTheSubscript){
				setCookie('PictureTheSubscript',pi,'1');
				checkCookie();
			}else{
				setCookie('PictureTheSubscript',len,'1');
				checkCookie();
			}
		})
		// 点击下一张的函数
		$('#next').on('click',function(){
		var PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
		var PicturesGrouping=getCookie("PicturesGrouping");
		var pi=PictureTheSubscript+1;
			// 获取数组长度
		var Animelen=Anime.length;
		var landscapelen=landscape.length;
			// 获取当前数组下标
			PicturesGrouping=='Anime'?len=Anime.length-1:len=landscape.length-1;
			if(PictureTheSubscript<len){
				setCookie('PictureTheSubscript',pi,'1');
				checkCookie();
			}else{
				setCookie('PictureTheSubscript',0,'1');
				checkCookie();
			}
		})
		$('#Anime').on('click',function(){
			setCookie('PictureTheSubscript','0','1');
			setCookie('PicturesGrouping','Anime','1')
			checkCookie();
		})
		$('#landscape').on('click',function(){
			setCookie('PictureTheSubscript','0','1');
			setCookie('PicturesGrouping','landscape','1')
			checkCookie();
		})
		$('#opbc').on('click',function(){
			var al=$('#optext')[0].value;
			if(al>1||al<0){
				console.log('输入错误')
				alert('请输入0-1之间的透明度数值')
			}else{
				setCookie('opacity',al,'1')
				checkCookie();
			}
		})
	})
