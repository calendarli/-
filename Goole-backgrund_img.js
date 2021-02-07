<html>

<head>
    <script src="http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
    <script src="js/colpick.js" type="text/javascript"></script>

    <link rel="stylesheet" href="css/colpick.css" type="text/css" />
    <style>

    </style>
</head>

<body>
    <div id="CL_Console">
        <img id="CL_img" src="https://upyun.calendarli.com/logo.png" title="MOD控制台" />
        <div id="CL_OperationPanel" class="none">
            <div class="ChangePicture">
                <span id="before" class="Button">上一张</span>
                <span id="Rear" class="Button">下一张</span>
            </div>
            <div class="DropDownGroup">
                <!-- 默认第一个 -->
                <span>切换分组：</span>
                <select class="select">
                                    <option value="Anime">动漫</option>
                                    <option value="landscape">自然风景</option>
                                </select>
            </div>
            <div class="transparency">
                <!-- 背景透明度默认0.4 -->
                <span>背景透明度：</span>
                <select class="BackgroundSelec">
                    <option value="0">0</option>
                    <option value="0.1">0.1</option>
                    <option value="0.2">0.2</option>
                    <option value="0.3">0.3</option>
                    <option value="0.4">0.4</option>
                    <option value="0.5">0.5</option>
                    <option value="0.6">0.6</option>
                    <option value="0.7">0.7</option>
                    <option value="0.8">0.8</option>
                    <option value="0.9">0.9</option>
                    <option value="1">1</option>
                </select>
                <!-- 列表透明度默认90 -->
                <span>列表透明度：</span>
                <select class="LiestSelect">
                    <option value="0">0</option>
                    <option value="10">0.1</option>
                    <option value="20">0.2</option>
                    <option value="30">0.3</option>
                    <option value="40">0.4</option>
                    <option value="50">0.5</option>
                    <option value="60">0.6</option>
                    <option value="70">0.7</option>
                    <option value="80">0.8</option>
                    <option value="90">0.9</option>
                    <option value="">1</option>
                </select>

            </div>
            <div class="functional">
                <p class="advertising"><input type="checkbox" name="advertising" value="清除广告" />清除广告</p>
                <p class="SideColumn"><input type="checkbox" name="SideColumn" value="删除侧栏" />删除侧栏</p>
                <p class="RandomPictures"><input type="checkbox" name="RandomPictures" value="随机图片" title="启用后将禁用手动切换" />随机图片</p>
            </div>
            <div class="PureColorBackground">
                <p class="RandomPictures"><input type="checkbox" name="PureColorBackground" value="纯色背景" title="启用后背景透明度将不可用" />纯色背景</p>
                <div class="color-box"></div>
            </div>
            <div class="OperationButton">
                <span id="save" class="Button">保存</span><span id="Reset" class="Button">重置</span>
            </div>
        </div>
    </div>
    <script>
        //=================================================================
        //操作板的显示/隐藏
        $(document).on('click', '#CL_img', function() {
            var cl = $($('#CL_OperationPanel')[0].classList)[0]
            console.log(cl)
            if (cl == "block") {
                $('#CL_OperationPanel').attr({
                    class: 'none'
                })
            } else {
                $('#CL_OperationPanel').attr({
                    class: 'block'
                })
            }
        })

        //===============================================================
        //自定义按钮的动态特效
        $('.Button').mousedown(function() {
            $(this).attr({
                style: 'box-shadow: 1px 1px 1px 0px #5e8796;'
            })
        })
        $('.Button').mouseup(function() {
            $(this).attr({
                style: 'box-shadow: 1px 1px 3px 0px #5e8796;'
            })
        })

        //================================================================
        //调色器启用代码
        $('.color-box').colpick({
            colorScheme: 'dark',
            layout: 'rgbhex',
            color: 'fff',
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).css('background-color', '#' + hex);
                $(el).colpickHide();
            }
        });

        //=================================================================
        //json图片数据
        var GroupList = {
            Anime: {
                'Name': ['动漫', 'Anime'],
                'ImgList': [
                    'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg',
                    'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg',
                    'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg',
                    'https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg',
                ]
            },
            landscape: {
                'Name': ['自然风景', 'landscape'],
                'ImgList': [
                    'https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg',
                    'https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg',
                    'https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg',
                    'https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg'
                ]
            }
        }

        //==================================================================
        //创建控制台DOM
        $('head').append($('<style id="CssStyle">'))

        //==================================================================
        //json css样式数据
        var div_css = {
                'css': [{
                    CssName: 'body',
                    CssVal: 'background-position-x: center;background-attachment: fixed;background-size: cover;'
                }, {
                    CssName: 'div#CL_Console',
                    CssVal: ' -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; -khtml-user-select: none; user-select: none; position: fixed; top: 35%; left: 1;'
                }, {
                    CssName: 'img#CL_img',
                    CssVal: 'width: 35px;border-radius: 20px;cursor: pointer;'
                }, {
                    CssName: '.none',
                    CssVal: 'display: none;'
                }, {
                    CssName: '.block',
                    CssVal: 'display: block;'
                }, {
                    CssName: 'div#CL_OperationPanel ',
                    CssVal: 'width: 300px;height: 300px;background: #ececea;position: absolute;top: 20px;left: 35px;box-shadow: 1px 1px 4px 0px #747698;border-radius: 6px;padding: 10px;'
                }, {
                    CssName: 'div#CL_OperationPanel>div',
                    CssVal: 'height: 30px;line-height: 30px;margin-top: 10px;'
                }, {
                    CssName: '.Button',
                    CssVal: 'width: 49%;display: inline-block;text-align: center;background: #fbfbfb;box-shadow: 1px 1px 3px 0px #5e8796;border-radius: 7px;cursor: pointer;'
                }, {
                    CssName: '.functional>p',
                    CssVal: 'margin: 0px; display: inline-block; width: 31%;'
                }, {
                    CssName: '.color-box',
                    CssVal: 'float: left; width: 30px; height: 20px; margin: 5px; border: 1px solid white;cursor: pointer;'
                }, {
                    CssName: 'p.RandomPictures',
                    CssVal: 'float: left; margin: 0;'
                }, {
                    CssName: 'span#save,span#Reset',
                    CssVal: 'margin: auto; display: inline-block; width: 50px; margin-left: 10px;'
                }, {
                    CssName: '.OperationButton',
                    CssVal: 'position: absolute;left: 50%;margin-left: -66px;bottom: 10px;'
                }, {
                    CssName: '',
                    CssVal: ''
                }, {
                    CssName: '',
                    CssVal: ''
                }, {
                    CssName: '',
                    CssVal: ''
                }]
            }
            /*ans(div_css)
             *css:用来储存css样式的JSON数据
             */
        function ans(css) {
            var len = css["css"].length
            var styCss = '';
            for (var i = 0; i <= len - 1; i++) {
                styCss = styCss + css["css"][i]['CssName'] + '{' + css["css"][i]['CssVal'] + '}'
            }
            return styCss
        }
        $('#CssStyle').prepend(ans(div_css))

        //==================================================================
        //localStorage数据储存
        function local(name, val) {
            if (localStorage.getItem(name)) {
                return localStorage.getItem(name)
            } else {
                localStorage.setItem(name, val)
                return localStorage.getItem(name)
            }
        }
        /*获取localStorage数据*/
        var variableList = ['PictureURLIndex', 'PictureGrouping', 'ListTransparency', 'BackgroundTransparency',
            'RandomPictures', 'Sidebar', 'advertising', 'CustomBackground', 'CustomBackgroundCode'
        ]
        var PictureURLIndex = local('PictureURLIndex', '0') //图片URL下标
        var PictureGrouping = local('PictureGrouping', GroupList.Anime.Name[1]) //图片分组
        var ListTransparency = local('ListTransparency', '90') //列表透明度
        var BackgroundTransparency = local('BackgroundTransparency', '0.4') //背景透明度
        var RandomPictures = local('RandomPictures', false) //随机图片
        var Sidebar = local('Sidebar', false) //侧栏
        var advertising = local('advertising', false) //广告
        var CustomBackground = local('CustomBackground', false) //纯色背景
        var CustomBackgroundCode = local('CustomBackgroundCode', '#FFF') //纯色背景代码
        console.log(localStorage)
            /*输出localStorage数据到控制台*/
        $('.select>option[value=' + PictureGrouping + ']').attr('selected', true) //分组
        $('.BackgroundSelec option[value="' + BackgroundTransparency + '"]').attr('selected', true) //背景透明度
        $('.LiestSelect>option[value=' + ListTransparency + ']').attr('selected', true) //列表透明度
        RandomPictures != 'false' ? $('input[name=RandomPictures]').click() : '' //随机图片
        Sidebar != 'false' ? $('input[name=SideColumn]').click() : '' //侧栏
        advertising != 'false' ? $('input[name=advertising]').click() : '' //广告
        CustomBackground != 'false' ? $('input[name=PureColorBackground]').click() : '' //自定义背景
        $('.color-box').css('background-color', CustomBackgroundCode); //纯色背景代码

        //==================================================================
        //重置按钮功能代码
        $(document).on('click', '#Reset', function() {
            for (var i = 0; i <= variableList.length - 1; i++) {
                localStorage.removeItem(variableList[i]);
            }
            window.location.reload()
        })
    </script>
</body>

</html>

</html>
