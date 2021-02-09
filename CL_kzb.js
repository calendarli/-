// 要用到的固定的选择器
var panelDOM = $("#CL_OperationPanel");
var buttonDOM = $(".Button");
var colorBoxDOM = $(".color-box");
var picGroupDOM = $("#pic-group-selector");
(function () {
    /**
     * 操作板的显示/隐藏
     */
    $("#CL_img").on("click", function () {
        panelDOM.toggle(200);
    });
    /**
     * 自定义按钮的按下动态特效
     */
    buttonDOM.on("mousedown", function () {
        $(this).css("box-shadow", "1px 1px 1px 0px #5e8796");
    });
    /**
     * 自定义按钮的松开动态特效
     */
    buttonDOM.on("mouseup", function () {
        $(this).css("box-shadow", "1px 1px 3px 0px #5e8796");
    });
    /**
     * 启用调色器
     */
    // @ts-ignore
    colorBoxDOM.colpick({
        colorScheme: "dark",
        layout: "rgbhex",
        color: "fff",
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).css("background-color", "#" + hex);
            // @ts-ignore
            $(el).colpickHide();
        }
    });
    /**
     * 重置
     */
    $("#Reset").on("click", function () {
        CL_LocalStorage.clear();
        window.location.reload();
    });
    /**
     * 保存
     */
    $("#save").on("click", function () {
        /**
         * 保存数字选项的值
         */
        $.each($("select[cl-select-number]"), function (_, item) {
            var jqDOM = $(item);
            var key = jqDOM.attr("name") + "NumberValue";
            var value = jqDOM.val();
            CL_LocalStorage.setItem(key, value);
        });
        /**
         * 保存picGroup的值
         */
        (function () {
            var key = picGroupDOM.attr("name") + "SelectValue";
            var value = picGroupDOM.val();
            CL_LocalStorage.setItem(key, value);
        })();
        /**
         * 保存Checkbox的值
         */
        $.each($("#CL_OperationPanel input[type=checkbox]"), function (_, item) {
            var jqDOM = $(item);
            var key = jqDOM.attr("name") + "Checked";
            var value = jqDOM.prop("checked");
            CL_LocalStorage.setItem(key, value);
        });
        /**
         * 保存自定义颜色代码
         */
        CL_LocalStorage.setItem("CustomBackgroundCode", $(".color-box")[0].style.backgroundColor);
        CL_LocalStorage.save();
    });
    /**
     * 点击checkbox的外部,也相当于点击了checkbox内部
     */
    $(".checkboxWrap").on("click", function (event) {
        $.each($(event.target).children("input[type=checkbox]"), function (_, item) {
            $(item).prop("checked", !$(item).prop("checked"));
        });
    });
})();
/**
 * 图片数据
 */
var GroupList = {
    Anime: {
        Name: "动漫",
        ImgList: [
            "https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg",
            "https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg",
            "https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg",
            "https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg"
        ]
    },
    landscape: {
        Name: "自然风景",
        ImgList: [
            "https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg",
            "https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg",
            "https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg",
            "https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg"
        ]
    }
};
/**
 * localStorage数据储存的封装
 */
// eslint-disable-next-line camelcase
var CL_LocalStorage = ((function () {
    var currentLocalKey = "__CLKZB__STORAGE__KEY__";
    var currentLocal = localStorage.getItem(currentLocalKey);
    var currentLocalObject;
    if (currentLocal === null) {
        currentLocalObject = {};
    }
    else {
        currentLocalObject = JSON.parse(currentLocal);
    }
    return {
        getRawObj: function () {
            return currentLocalObject;
        },
        /**
         * 获取元素
         * @param key 要获取的值的key
         * @param defaultValue 若不存在相应的key,则应该返回的默认值,默认为undefined
         */
        getItem: function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = undefined; }
            var value = currentLocalObject[key];
            if (value) {
                return value;
            }
            else {
                return defaultValue;
            }
        },
        /**
         * 设置元素
         * @param key 要设置的key
         * @param value 要设置的值内容
         */
        setItem: function (key, value) {
            currentLocalObject[key] = value;
        },
        /**
         * 保存数据到localStorage
         */
        save: function () {
            localStorage.setItem(currentLocalKey, JSON.stringify(currentLocalObject));
        },
        /**
         * 移除元素
         * @param key 要移除的key
         */
        removeItem: function (key) {
            delete currentLocalObject[key];
        },
        /**
         * 清空元素
         */
        clear: function () {
            currentLocalObject = {};
        }
    };
})());
/* 获取localStorage数据 */
var PictureURLIndex = CL_LocalStorage.getItem("PictureURLIndex", 0); // 图片URL下标
var CustomBackgroundCode = CL_LocalStorage.getItem("CustomBackgroundCode", "#FFF"); // 纯色背景代码
/* 输出localStorage数据到控制台 */
console.log(CL_LocalStorage.getRawObj());
(function () {
    /**
     * CSS数据
     */
    var cssContent = {
        body: {
            "background-position-x": "center",
            "background-attachment": "fixed",
            "background-size": "cover"
        },
        "div#CL_Console": {
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "-khtml-user-select": "none",
            "user-select": "none",
            position: "fixed",
            top: "35%",
            left: "1"
        },
        "img#CL_img": {
            width: "35px",
            "border-radius": "20px",
            cursor: "pointer"
        },
        ".none": {
            display: "none"
        },
        ".block": {
            display: "block"
        },
        "div#CL_OperationPanel": {
            width: "300px",
            height: "300px",
            background: "#ececea",
            position: "absolute",
            top: "20px",
            left: "35px",
            "box-shadow": "1px 1px 4px 0px #747698",
            "border-radius": "6px",
            padding: "10px"
        },
        "div#CL_OperationPanel>div": {
            height: "30px",
            "line-height": "30px",
            "margin-top": "10px"
        },
        ".Button": {
            width: "49%",
            display: "inline-block",
            "text-align": "center",
            background: "#fbfbfb",
            "box-shadow": "1px 1px 3px 0px #5e8796",
            "border-radius": "7px",
            cursor: "pointer"
        },
        ".functional>p": {
            margin: "0px",
            display: "inline-block",
            width: "31%"
        },
        ".color-box": {
            float: "left",
            width: "30px",
            height: "20px",
            margin: "5px",
            border: "1px solid white",
            cursor: "pointer"
        },
        "p.RandomPictures": {
            float: "left",
            margin: "0"
        },
        "span#save,span#Reset": {
            margin: "auto",
            display: "inline-block",
            width: "50px",
            "margin-left": "10px"
        },
        ".OperationButton": {
            position: "absolute",
            left: "50%",
            "margin-left": "-66px",
            bottom: "10px"
        },
        "#panelDOM select": {
            "border-color": "#7b7b7b"
        },
        ".checkboxWrap": {
            cursor: "pointer"
        }
    };
    /**
     * 把固定CSS数据绑定到相应的元素上
     */
    for (var selector in cssContent) {
        $(selector).css(cssContent[selector]);
    }
    /**
     * 加载自定义的背景色
     */
    colorBoxDOM.css("background-color", CustomBackgroundCode); // 纯色背景代码
    /**
     * 加载分组选项
     */
    for (var group in GroupList) {
        picGroupDOM.append("<option value=\"" + group + "\">" + GroupList[group].Name + "</option>");
    }
    /**
     * 加载checkbox的选中
     */
    $.each($("#CL_OperationPanel input[type=checkbox]"), function (_, item) {
        var jqDOM = $(item);
        var key = jqDOM.attr("name") + "Checked";
        var defaultValue = JSON.parse(jqDOM.attr("default"));
        jqDOM.prop("checked", CL_LocalStorage.getItem(key, defaultValue));
    });
    /**
     * 加载number下拉选项的选项内容
     */
    $.each($("select[cl-select-number]"), function (_, item) {
        var jqDOM = $(item);
        var key = jqDOM.attr("name") + "NumberValue";
        var defaultValue = parseFloat(JSON.parse(jqDOM.attr("defaultValue")));
        var minValue = parseFloat(jqDOM.attr("minValue"));
        var maxValue = parseFloat(jqDOM.attr("maxValue"));
        var stepValue = parseFloat(jqDOM.attr("stepValue"));
        var targetValue = CL_LocalStorage.getItem(key, defaultValue);
        for (var i = minValue; i <= maxValue; i = parseFloat((i + stepValue).toPrecision(12))) {
            if (Math.abs(targetValue - i) < 0.0001) {
                jqDOM.append("<option value=\"" + i + "\" selected>" + i + "</option>");
            }
            else {
                jqDOM.append("<option value=\"" + i + "\">" + i + "</option>");
            }
        }
    });
    (function () {
        var key = picGroupDOM.attr("name") + "SelectValue";
        var targetValue = CL_LocalStorage.getItem(key);
        if (targetValue) {
            picGroupDOM.val(targetValue);
        }
    })();
})();
//# sourceMappingURL=CL_kzb.js.map