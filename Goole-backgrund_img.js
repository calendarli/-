// == UserScript ==
// @name         搜索页面美化
// @version       2.6
// @description  支持的搜索引擎有1.百度； 2。搜狗； 3。谷歌； 4。必应。可自由切换背景
// @author        CalendarLi
// @match         *：//www.google.com/search？*
// @match         *：//www.google.com.hk/search？*
// @match         *：//cn.bing.com/search？*
// @match         *：//www.baidu.com/s？*
// @match         *：//www.sogou.com/web？*
// @grant         GM_log
// @connect       google.com
// @connect       baidu.com
// @require       http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js
// @copyright    该脚本完全由CalendarLi @ greasyfork原创，谢绝抄袭部分或全部代码！如有更多代码，请声明并标注脚本链接。
// == / UserScript ==
$ （函数（）{
    函数 ans （css ）{
        var  len = css [ “ css” ] 。长度
        var  styCss = '' ;
        对于（var  i = 0 ; i <= len - 1 ; i ++ ）{
            styCss = styCss  +  css [ “ css” ] [ i ] [ 'CssName' ] + '{' + css [ “ css” ] [ i ] [ 'CssVal' ] + '}'
        }
        返回 样式
    }
    / ** /
    如果（$ （'.AC-MENU_Btn' ）。长度=！0 &&！$ （$ （'.container-label.baidu输入' ）[ 0 ] ）。是（'：检查' ））{
        控制台。日志（'开启了AC-baidu脚本' ）
        var  yesAC_css = {
            CSS：[ {
                CssName：'#page' ，
                CssVal：'位置：相对;'
            } ，{
                CssName：'#b_content #b_results> li：not（#mfa_root）' ，
                CssVal：'background-color：＃ffffffc2;'
            } ，{
                CssName：'#rso .g，.vk_c' ，
                CssVal：'背景颜色：＃fff9;背景过滤器：blur（2px）;'
            } ，{
                CssName：'.container_s #content_right' ，
                CssVal：'宽度：223px;'
            } ，{
                CssName：'#wrapper #rs，#wrapper #content_left .result，#wrapper #content_left .c-container' ，
                CssVal：'背景颜色：＃fff9;背景过滤器：blur（2px）;'
            } ，{
                CssName：'. new -pmd.c-container，＃search .g' ，
                CssVal：'背景：＃f0f8ff94;背景过滤器：blur（2px）;填充：10px 20px;边框半径：6px;'
            } ，{
                CssName：'#search .g .IsZvec，.c-abstract' ，
                CssVal：'border-top：1px solid＃969696; margin-top：5px; padding-top：5px;'
            } ，{
                CssName：'' ，
                CssVal：''
            }

                ]
        }
        $ （'body' ）。前置（$ （'<style>' ）. html （ans （yesAC_css ）））
    }其他{
        控制台。日志（'未开启AC-baidu脚本' ）
        var  noAC_css = {
            'css'：[ {
                CssName：'#page' ，
                CssVal：'位置：相对;'
            } ，{
                CssName：'#b_results> li' ，
                CssVal：'背景颜色：＃ffffff94;'
            } ，{
                CssName：'#b_context .b_ans，#b_context #wpc_ag' ，
                CssVal：'背景颜色：＃ffffff94;'
            } ，{
                CssName：'.container_s #content_right' ，
                CssVal：'宽度：223px;'
            } ，{
                CssName：'.wrapper_new #content_left' ，
                CssVal：'/ * background：＃f0f8ff94; * / padding-left：35px; 左边距：140px; 宽度：585px；'
            } ，{
                CssName：'#res' ，
                CssVal：'/ * background：＃ffffff94; * / width：680px; padding：10px 35px; margin-top：10px;'
            } ，{
                CssName：'#main' ，
                CssVal：'宽度：680px;填充：10px 35px;边距顶部：10px;边距底部：20px;'
            } ，{
                CssName：'. new -pmd.c-container，＃search .g' ，
                CssVal：'背景：＃f0f8ff94;背景过滤器：blur（2px）;填充：10px 20px;边框半径：6px;'
            } ，{
                CssName：'#search .g .IsZvec，.c-abstract' ，
                CssVal：'border-top：1px solid＃969696; margin-top：5px; padding-top：5px;'
            } ，{
                CssName：'#search .g：hover，.new-pmd.c-container：hover' ，
                CssVal：'box-shadow：0px 1px 4px 0px＃547582;'
            }
                  ]
        }
        $ （'body' ）。前置（$ （'<style>' ）. html （ans （noAC_css ）））
    }
    /*$('.container-label.baidu input'）。on（'click'，function（）{
        console.log（'AC-baidu脚本切换'）
        if（this.value =='0'）{
            console.log（'AC-baidu脚本切换为原始模式'）
            $（'＃content_left'）。attr（{style：''}）
        }其他{
            console.log（'非原始模式'）
            $（'＃content_left'）。removeAttr（'style'）
        }
    }）* /
} ）
$ （函数（）{
    var 动漫= [
        'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg' ，
        'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg' ，
        'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg' ，
        'https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg' ，
        'https://upyun.calendarli.com/Anime/2261e9ba9daeccc5d2e9d235bb5e20b1.jpg' ，
        'https://upyun.calendarli.com/Anime/44ffdc1e475e5374f7d080b2e1617114.jpg' ，
        'https://upyun.calendarli.com/Anime/55c024df52c2d98ec186bcec889b1fab.jpg' ，
        'https://upyun.calendarli.com/Anime/773186d9b3b7072964573fbeb91c4a5c.jpg' ，
        'https://upyun.calendarli.com/Anime/84627ff4644ee9bb3838f43bd1cf808e.jpeg' ，
        'https://upyun.calendarli.com/Anime/97df6b36ec9e6c924f9075a40452fe26.jpg' ，
        'https://upyun.calendarli.com/Anime/acf57c383d119b6cc8d92b1a77d47878.jpg' ，
        'https://upyun.calendarli.com/Anime/b2e4b4e787b190a18522154564c5d510.jpg' ，
        'https://upyun.calendarli.com/Anime/cc31ab7a6d4ad922b32313cb7297862c.jpeg' ，
        'https://upyun.calendarli.com/Anime/dfeb5880917bec18684be6f49cf86d70.jpg' ，
        'https://upyun.calendarli.com/Anime/e19b3d082f6a6274464d5f886736ea37.jpg' ，
        'https://upyun.calendarli.com/Anime/e28f681cec0e89ec135333fa9e813242.jpg' ，
        'https://upyun.calendarli.com/Anime/f9c6ee1426014073aeb190c5e83a1ba1.jpg'
    ]
    var  landscape = [
        'https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg' ，
        'https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg' ，
        'https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg' ，
        'https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg'
    ]

    //设置cookie值
    函数 setCookie （cname ，cvalue ，exdays ）{
        var  d  =  new  Date （）;
        d 。时刻设定（d 。的getTime （）+ （exdays * 24 * 60 * 60 * 1000 ））;
        var  expires  =  “ expires =” + d 。toGMTString （）;
        文件。cookie  =  cname  +  “ =”  +  cvalue  +  “;”  + 到期；
    }

    //读取Cookie值
    函数 getCookie （cname ）{
        var  name  =  cname  +  “ =” ;
        var  ca  =  document 。Cookie 。split （';' ）;
        为（VAR 我= 0 ; 我< CA 。长度; 我++ ） {
            var  c  =  ca [ i ] 。修剪（）;
            如果 （Ç 。的indexOf （名称）== 0 ） 返回 Ç 。子串（名称。长度，c 。长度）;
        }
        返回 “” ;
    }
    var  honeySwitch  =  { } ;
    honeySwitch 。themeColor  =  “ rgb（100，189，99 ）” ;
    honeySwitch 。初始化 = 函数（） {
        var  s  =  “ <span class ='slider'> </ span>” ;
        $ （“ [class ^ = switch]” ）。追加（š ）;
        $ （“ [class ^ = switch]” ）。on （'click' ，function （） {
            如果 （$ （本）。hasClass （“接通无线” ）） {
                $ （这个）。removeClass （“开启wifi” ）。addClass （“关闭wifi” ）；
                setCookie方法（$ （本）。数据（'cookiename' ）， '关断的WiFi' ，'31' ）;
            } 其他 {
                $ （这个）。removeClass （“关闭wifi” ）。addClass （“打开wifi” ）；
                setCookie方法（$ （本）。数据（'cookiename' ）， '开关没有wifi' ，'31' ）;
            }
        } ）;
    } ;
    $ （函数（） {
        honeySwitch 。初始化（）;
    } ）;
    var  div_css = {
        'css'：[ {
            CssName：'body' ，
            CssVal：“ background-position-x：中心； background-attachment：固定； background-size：cover；”
        } ，{
            CssName：'[class | = switch]' ，
            CssVal：'位置：相对;显示：内嵌块;宽度：35px;高度：15px;边框半径：16px;线条高度：32px; -webkit-tap-highlight-color：rgba（255,255,255,0）;'
        } ，{
            CssName：'.switch-on' ，
            CssVal：'边框：1px纯白色;过渡：边框0.4s，框阴影0.2s，背景色1.2s;光标：指针;边框颜色：rgb（100，189，99）;框阴影：rgb（ 100，189，99）0px 0px 0px 16px inset; background-color：rgb（100，189，99）;'
        } ，{
            CssName：'.slider' ，
            CssVal：'位置：绝对;显示：内联块;宽度：15px;高度：15px;背景：白色;框阴影：0 1px 3px rgba（0，0，0，0.4）;边框半径：50％;左：0；顶：0；'
        } ，{
            CssName：'.switch-on .slider' ，
            CssVal：'左：20px;过渡：背景色0.4s，左0.2s;'
        } ，{
            CssName：'.switch-off' ，
            CssVal：'border：1px solid #dfdfdf; transition：border 0.4s，box-shadow 0.4s; cursor：pointer; border-color：rgb（223，223，223）; box-shadow：rgb（223，223，223 ）0px 0px 0px 0px inset; background-color：rgb（255，255，255）;'
        } ，{
            CssName：'.switch-off .slider' ，
            CssVal：'left：0; transition：background-color 0.4s，left 0.2s;'
        } ，{
            CssName：'.switch-on.switch-disabled' ，
            CssVal：'不透明度：.5;光标：自动;'
        } ，{
            CssName：'.switch-off.switch-disabled' ，
            CssVal：'背景颜色：＃F0F0F0！important;光标：自动;'
        } ，{
            CssName：'.calendar_div_left' ，
            CssVal：'left：0px; z-index：99; width：100px; height：60px; background：＃ffffff69; line-height：29px; border-bottom-right-radius：15px; border-top-right-radius： 15px;'
        } ，{
            CssName：'.calendar_switch' ，
            CssVal：'margin-top：10px;'
        } ，{
            CssName：'.calendar_previous' ，
            CssVal：'margin-top：10px; background：none; margin-bottom：20px;'
        } ，{
            CssName：'.calendar_previous> div' ，
            CssVal：'光标：指针;宽度：50px;高度：30px;背景：＃ffffff69;边框右下方半径：15px;边框右上方半径：15px;线条高度：30px;边框底部： 10px;'
        } ，{
            CssName：'.calendar_Anime' ，
            CssVal：'margin-top：10px;'
        } ，{
            CssName：'.calendar_Anime> div' ，
            CssVal：'光标：指针;'
        } ，{
            CssName：'.calendar_op' ，
            CssVal：'margin-top：10px;'
        } ，{
            CssName：'.calendar_op> p' ，
            CssVal：'字体大小：10像素;行高：20像素;边距：0;'
        } ，{
            CssName：'.calendar_op> input' ，
            CssVal：'width：35px'
        } ，{
            CssName：'.calendar_op> div' ，
            CssVal：'float：right; margin-right：12px; cursor：pointer;'
        } ，{
            CssName：'.nums_text，.search_tool_tf，.c-gap-left，.num-tips' ，
            CssVal：'颜色：＃477553;'
        } ，{
            CssName：'.fk strong，＃page strong，.page-inner a' ，
            CssVal：“背景：无；”
        } ，{
            CssName：“＃page strong .pc” ，
            CssVal：“背景：aliceblue；”
        } ，{
            CssName：'.s_tab_inner' ，
            CssVal：'padding-top：12px;'
        } ，{
            CssName：'div＃b_content' ，
            CssVal：'位置：相对;'
        } ，{
            CssName：'＃appbar，.yg51vc，＃hdtb' ，
            CssVal：'背景：＃ffffff9e;'
        } ，{
            CssName：'.Xeztj，.YSlUOe，.MGqjK' ，
            CssVal：'背景：＃ffffff9e;'
        } ，{
            CssName：'.Nxb87' ，
            CssVal：'padding-top：10px;'
        } ，{
            CssName：'.Masklayer' ，
            CssVal：'背景：#fff;宽度：10090px;高度：10080px; z-index：0;位置：固定;顶部：0px;左侧：0px;'
        } ，{
            CssName：'div＃s_tab' ，
            CssVal：'位置：相对;'
        } ，{
            CssName：'#page a，#page strong' ，
            CssVal：“背景：无；”
        } ，{
            CssName：'.calendar_text_AD' ，
            CssVal：'位置：相对;顶部：-3px;字体大小：10px;'
        } ，{
            CssName：'#calendar_div_left' ，
            CssVal：'位置：固定;左：-100px;上边距：170px; z-index：99;宽度：131px;过渡：左0.3s;'
        } ，{
            CssName：'#calendar_la' ，
            CssVal：'width：20px; 背景：＃459be6d9; 位置：绝对；高度：40％; 最高：34％；右：0px；行高：116px；颜色：#fff；向左填充：10px；不透明度：0.7；过渡效果：不透明度0.3s；'
        } ，{
            CssName：'.calendar_div_left.calendar_switch p' ，
            CssVal：'display：inline;'
        } ，{
            CssName：'div.f6F9Be，＃wrapper #page a' ，
            CssVal：'背景：＃f0f8ff94;背景过滤器：blur（2px）;'
        } ，{
            CssName：'#wrapper #page strong> span.pc' ，
            CssVal：'背景：＃e8adad94;背景过滤器：blur（2px）;' ，
        } ，{
            CssName：'a' ，
            CssVal：“文本装饰：无；”
        }
              ] }
    / *
     * ans（css）
     * css：用来储存css样式的JSON数据
     * /
    函数 ans （css ）{
        var  len = css [ “ css” ] 。长度
        var  styCss = '' ;
        对于（var  i = 0 ; i <= len - 1 ; i ++ ）{
            styCss = styCss  +  css [ “ css” ] [ i ] [ 'CssName' ] + '{' + css [ “ css” ] [ i ] [ 'CssVal' ] + '}'
        }
        返回 样式
    }
    函数 a （arr ，op ，switchArry ）{
        //图片加载函数
        var  obj = new  Image （）;
        obj 。src = arr ;
        obj 。onload =函数（）{
            $ （'body' ）。ATTR （{式：'背景图像：网址（' +此。SRC + '）;' } ）
            $ （'#o​​ptext' ）[ 0 ] 。值= op
            $ （'.Masklayer' ）。attr （{ style：'opacity：' + op + ';' } ）
            如果（窗口。位置。主持人！= “www.google.com.hk”  || 窗口。位置。主持人！= “www.google.com” ）{
                switchArry 。移（）
                变量 B = 0
                }其他{ B = 1 }
            为（VAR 我= 0  ;我 <  switchArry 。长度;我++ ）{
                var  adww = $ （'.wifi' ）[ i ] 。className ;
                adww！= switchArry [ i ]吗？$ （'.wifi' ）[ i ] 。点击（）：'' ;
            }

            / *
             * t（名字，乐趣）
             *名称：开关存在cookie里面的名称
             * fun：当开关打开时执行的语句function（）{}
             * /
            函数 t （name ，fun ）{ if （name == “ switch-no wifi” ）{ fun （）} }
            t （switchArry [ B ] ，function （）{
                //清除右侧推荐栏
                控制台。日志（'清除右侧推荐栏' ）
                $ （'#content_right' ）。删除（）
            } ）
            B！= 0？t （switchArry [ 0 ] ，function （）{
                //清除Google广告
                控制台。日志（'清除Google广告' ）
                $ （'＃bottomads，＃taw' ）。删除（）
            } ）：'' ;
        }
    }
    //页面加载检测cookie
    函数 checkCookie （）{
        控制台。日志（'开始执行' ）
        var  username = getCookie （“ PicturesGrouping” ）; //分组名称
        var  uservalue = getCookie （“ PictureTheSubscript” ）; //图片下标
        var  opa = getCookie （'opacity' ）///
        var  Cache_lm = getCookie （'Cache_lm' ）
        var  Cache_Google_AD = getCookie （'Cache_Google_AD' ）
        控制台。日志（'分组' +用户名）
        控制台。日志（'下标' + uservalue ）
        控制台。日志（'透明' + opa ）
        控制台。日志（'侧栏' + Cache_lm ）
        控制台。日志（'广告' + Cache_Google_AD ）
        if  （用户名！= “” && uservalue！= “” && opa！= '' && Cache_lm！= '' ）{
            //加载图片
            var  switchArry = [ Cache_Google_AD ，Cache_lm ]
            用户名== '动漫'？a （动漫[ uservalue ] ，opa ，switchArry ）：a （风景[ uservalue ] ，opa ，switchArry ）;
        }其他{
            //初始化cookie ...
            控制台。日志（'开始初始化..' ）
            setCookie （'PictureTheSubscript' ，'0' ，'31' ）;
            setCookie （'PicturesGrouping' ，'Anime' ，'31' ）
            setCookie （'opacity' ，'0.4' ，'31' ）
            setCookie （'Cache_lm' ，'关闭wifi' ，'31' ）
            setCookie （'Cache_Google_AD' ，'关闭wifi' ，'31' ）
            控制台。日志（'初始化完成' ）
            //初始化完成
            checkCookie （）;
        }
    }
    //设置遮罩层
    $ （'body' ）。前置（$ （'<div id =“ calendar_div_left”>' ））。前置（'<div class =“ Masklayer”> </ div>' ）
    $ （'#calendar_div_left' ）。前置（$ （' （<div id = calendar_la >>' ）））。前置（
        $ （'<div class =“ calendar_div_left calendar_switch”>' ）。前置（
            $ （'<p> <span class =“关闭wifi” data-cookiename =“ Cache_lm”>' ）。append （$ （' （span class =“ calendar_text_AD”>' ）。html （'删除侧栏' ）））））。前置（
        '<div class =“ calendar_div_left calendar_op”> <p>背景副本</ p> <input type =“ text” title =“背景副本0-1” id =“ optext” /> <div id =“ opbc”标题=“遮罩层透明度0-1”>保存</ div> </ div>' ）。前置（
        '<div class =“ calendar_div_left calendar_Anime”> <div id =“ Anime”>动漫</ div> <div id =“ landscape”>自然风景</ div> </ div>' ）。前置（
        '<div class =“ calendar_div_left calendar_previous”> <div id =“ previous”>上一张</ div> <div id =“ next”>下一张</ div> </ div>” ）。前置（$ （'<style>' ）. html （ans （div_css ）））
    var  hust = window 。位置。主办
    如果（必须== “ www.google.com.hk” ||必须== “ www.google.com” ）{
        $ （'.calendar_switch' ）。前置（$ （'<P> <跨度类= “关断WiFi”的数据cookiename = “Cache_Google_AD”>' ）。追加（$ （'<跨度类= “calendar_text_AD”>' ）。 HTML （“清除广告' ）））
    }
    //百度
    $ （'＃rs，.fk i' ）。删除（）
    //必应
    $ （'#b_results> li.b_ad' ）。删除（）
    //谷歌
    $ （'#botstuff' ）。删除（）
    checkCookie （）
    $ （'#calendar_div_left' ）。悬停（function （）{
        $ （这个）。attr （{ style：'left：0px' } ）
        $ （'#calendar_la' ）。attr （{ style：'opacity：0;' } ）
    } ，函数（）{
        $ （这个）。removeAttr （'style' ）
        $ （'#calendar_la' ）。removeAttr （'style' ）
    } ）
    //点击上一张的函数
    $ （'#previous' ）。on （'click' ，function （）{
        //读取下标并转为数字类型
        var  PictureTheSubscript = Number （getCookie （'PictureTheSubscript' ））
        //读取分组
        var  PicturesGrouping = getCookie （“ PicturesGrouping” ）;
        var  pi = PictureTheSubscript - 1
        //读取当前分组的副本下标
        PicturesGrouping == 'Anime'吗？len =动漫。长度- 1：len个=景观。长度- 1 ;
        //当下标为0并点击上一张时回到列表的最后一位
        如果（0 < PictureTheSubscript ）{
            setCookie （'PictureTheSubscript' ，pi ，'31 ' ）;
            checkCookie （）;
        }其他{
            setCookie （'PictureTheSubscript' ，len ，'31 ' ）;
            checkCookie （）;
        }
    } ）
    //点击下一张的函数
    $ （'#next' ）。on （'click' ，function （）{
        var  PictureTheSubscript = Number （getCookie （'PictureTheSubscript' ））
        var  PicturesGrouping = getCookie （“ PicturesGrouping” ）;
        变种 PI = PictureTheSubscript + 1 ;
        //获取长度
        var  Animelen =动漫。长度;
        var  landscapelen =景观。长度;
        //获取当前整数下标
        PicturesGrouping == 'Anime'吗？len =动漫。长度- 1：len个=景观。长度- 1 ;
        如果（PictureTheSubscript < len ）{
            setCookie （'PictureTheSubscript' ，pi ，'31 ' ）;
            checkCookie （）;
        }其他{
            setCookie （'PictureTheSubscript' ，0 ，'31 ' ）;
            checkCookie （）;
        }
    } ）
    $ （'#Anime' ）。on （'click' ，function （）{
        setCookie （'PictureTheSubscript' ，'0' ，'31' ）;
        setCookie （'PicturesGrouping' ，'Anime' ，'31' ）
        checkCookie （）;
    } ）
    $ （'#landscape' ）。on （'click' ，function （）{
        setCookie （'PictureTheSubscript' ，'0' ，'31' ）;
        setCookie （'PicturesGrouping' ，'landscape' ，'31' ）
        checkCookie （）;
    } ）
    $ （'#o​​pbc' ）。on （'click' ，function （）{
        var  al = $ （'#o​​ptext' ）[ 0 ] 。价值;
        如果（al > 1 || al < 0 ）{
            控制台。日志（'输入错误' ）
            alert （'请输入0-1之间的任意数值' ）
        }其他{
            setCookie （'opacity' ，al ，'31 ' ）
            checkCookie （）;
        }
    } ）
} ）
