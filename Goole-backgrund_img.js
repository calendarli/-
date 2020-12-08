// ==UserScript==
// @name         谷歌/百度搜索引擎美化/优化
// @namespace    https://github.com/
// @version      2.0
// @description  try to take over the world!诈尸了！
// @author       CalendarLi
// @match        *://www.google.com/search?*
// @match        *://www.google.com.hk/search?*
// @match        *www.baidu.com/s?*
// @grant        GM_log
// @connect      google.com
// @connect      baidu.com
// @require      http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js

// ==/UserScript==
			$(function(){
				var Anime=[
					'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg',
					'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg',
					'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg',
					'https://upyun.calendarli.com/Anime/773186d9b3b7072964573fbeb91c4a5c.jpg',
					'https://upyun.calendarli.com/Anime/84627ff4644ee9bb3838f43bd1cf808e.jpeg',
					'https://upyun.calendarli.com/Anime/97df6b36ec9e6c924f9075a40452fe26.jpg',
					'https://upyun.calendarli.com/Anime/9ae1796268822b022aae7a89c909ca5c.jpg',
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
				function a(arr){
					// 图片加载函数
					var obj=new Image();
					obj.src=arr;
					obj.onload=function(){
						$('body').attr({style:'background-image:url('+this.src+');background-position-x: center;background-attachment: fixed;background-size: cover;'})
						console.log('背景加载完成')
					}
				}
				//页面加载检测cookie
				function checkCookie(){
					console.log('开始执行')
					var username=getCookie("PicturesGrouping");
					var uservalue=getCookie("PictureTheSubscript");
					if (username!=""||uservalue!=""){
						//加载图片
						username=='Anime'?a(Anime[uservalue]):a(landscape[uservalue]);
					}else{
						//初始化cookie...
						setCookie('PictureTheSubscript','0','1');
						setCookie('PicturesGrouping','Anime','1')
						setCookie('opacity','0.6','1')
						checkCookie();
					}
				}
                /*
                *--处理与AC-baidu脚本的冲突--
                *解决方案
                *当指定dom发生变化时运行函数
                *删除#content_left元素上的style宽度
                *获取列表中行的宽度+20
                *设置#content_left元素上的最新style宽度
                */
                //获取列的宽度
                let ACwidth=$($('#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container')[0])[0].clientWidth+20
				// 设置遮罩层
				$('body').prepend('<div style="background: aliceblue;width: 10090px;height: 10080px;opacity: '+getCookie('opacity')+';z-index: -1;position: fixed;top: 0px;left: 0px;"></div>')
				$('body').prepend('<div style="position: fixed;left: 0px;margin-top: 177px;z-index: 99;"><div id="previous" style="cursor: pointer;width: 50px;height: 30px;background: #d7f4fa94;border-bottom-right-radius: 15px;border-top-right-radius: 15px;line-height: 30px;margin-bottom: 10px;">上一张</div><div id="next" style="cursor: pointer;width: 50px;height: 30px;background: #d7f4fa94;border-bottom-right-radius: 15px;border-top-right-radius: 15px;line-height: 30px;margin-bottom: 10px;">下一张</div></div>');
                $('body').prepend('<div style="position: fixed;left: 0px;margin-top: 257px;z-index: 99;width: 80px;height: 60px;background: #d7f4fa94;line-height: 29px;border-bottom-right-radius: 15px;border-top-right-radius: 15px;"><div id="Anime" style="cursor: pointer;">动漫</div><div id="landscape" style="cursor: pointer;">自然风景</div></div>')
                $('#content_left').attr({style:' background: #f0f8ff94; margin-left: 140px; width: 585px; padding-left: 35px;'})
				$('.nums_text,.search_tool_tf,.c-gap-left').attr({style:'color: #477553;'})
				$('#rs,.fk i').remove()
				$('.fk strong,#page strong,.page-inner a').attr({style:'background: none;'})
				$('#page strong .pc').attr({style:'background: aliceblue;'})
                $('.s_tab_inner').attr({style:'padding-top: 12px;'})
                $('body').prepend('<style>.container_s #content_right{width: 223px;}</style>')
                $('#res').attr({style:'background: #f0f8ff94;width: 680px;padding: 10px 35px;margin-top: 10px;'})


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
					PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
					//读取分组
					PicturesGrouping=getCookie("PicturesGrouping");
					pi=PictureTheSubscript-1
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
					PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
					PicturesGrouping=getCookie("PicturesGrouping");
					pi=PictureTheSubscript+1;
					// 获取数组长度
					Animelen=Anime.length;
					landscapelen=landscape.length;
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
			})
