// ==UserScript==
// @name         设置搜索界面背景
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       CalendarLi
// @match        *://www.google.com/search?*
// @match        *://google.com/search?*
// @match        *://www.baidu.com/s?*
// @match        *://baidu.com/s?*
// @grant        GM_log
// @connect      google.com
// @connect      baidu.com
// @require      http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js
// ==/UserScript==


(function() {
    var arr=['http://attach.bbs.miui.com/forum/201311/14/234553f16wj1ejnebtt514.jpg',
             'http://d.hiphotos.baidu.com/zhidao/pic/item/6a63f6246b600c334c3e91cb1e4c510fd9f9a16a.jpg',
             'http://attachments.gfan.com/forum/attachments2/201301/29/125722eh9nj87bq20eq2e8.jpg',
             'http://5b0988e595225.cdn.sohucs.com/images/20180821/847d73ce099e4332af5ce8a1ef6df743.jpeg',
             'http://b-ssl.duitang.com/uploads/item/201509/05/20150905141402_driKX.jpeg']
    var index = Math.floor((Math.random()*arr.length));
    console.log('ok-1')
    var host = window.location.host;
    var addimg=function (e,i){
        console.log(e)
        $(i).prepend('<img id="imgli" />')
        $('#imgli').attr({src:arr[index],style:'position: fixed;opacity: 0.3;'})
    }
    setTimeout(function(){
        console.log('ok-2')
        console.log(index)
        $('body').ready(function(){
            if(host==="www.google.com"||host==="google.com"){
                addimg('当前为谷歌搜索','body')
                $('#hdtbSum').attr({style:'opacity: 0.8;'})
                $('.minidiv').attr({style:'position: fixed;top: 0px;opacity: 0.8;'})
                $('#footcnt').attr({style:'opacity: 0.6;'})
            }else if(host==="www.baidu.com"||host==="baidu.com"){
                addimg('当前为百度搜索','#wrapper')
                $('#rs, div#page>a, div#page>strong').attr({style:'background: none;'})
                $($('#content_left>div')[0]).removeAttr('class')
            }
        })

    },10)
})();
