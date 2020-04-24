    // ==UserScript==
    // @name         设置搜索界面背景
    // @namespace    https://github.com/
    // @version      1.0.3
    // @description  try to take over the world!
    // @author       CalendarLi
    // @match        *://www.google.com/search?*
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
        var host = window.location.host;
        var addimg=function (e,i){
            console.log(e)
            $(i).prepend('<img id="imgli" />')
            $('#imgli').attr({src:arr[index],style:'position: fixed;opacity: 0.3;'})
        }
        function baidu(){
            setTimeout(function(){
            for(var i=0;i<=$('div').length-1;i++){
                if($($('div')[i]).data('pos')!=undefined){
                    $($('div')[i]).removeAttr('class').remove()
                    $('#rs, div#page>a, div#page>strong').attr({style:'background: none;'})
                    console.log('删除广告:'+i)
                }
            }
            },3000)
        }
        $(document).on('click','#su,a',function(){
            console.log('点击了按钮')
            baidu()
        })
        setTimeout(function(){
            console.log(index)
            $('body').ready(function(){
                if(host==="www.google.com"){
                    addimg('当前为谷歌搜索','body')
                    $('#hdtbSum').attr({style:'opacity: 0.8;'})
                    $('.minidiv').attr({style:'position: fixed;top: 0px;opacity: 0.8;'})
                    $('#footcnt').attr({style:'opacity: 0.6;'})
                }else if(host==="www.baidu.com"||host==="baidu.com"){
                    baidu()
                    addimg('当前为百度搜索','#wrapper')
                    //实现内容区域突出效果 , 可删除...
                    $('#wrapper_wrapper').attr({style:'box-shadow: 0 0 7px 0 black;width: 1200px;margin-bottom: 150px;margin-left: 50px;background-color: #dedeee;'})
                }
            })
        },10)
    })();
    