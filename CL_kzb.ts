//要用到的固定的选择器
const panelDOM = $('#CL_OperationPanel')
const buttonDOM = $('.Button')
const colorBoxDOM = $('.color-box')
const picGroupDOM = $('#pic-group-selector')

//事件绑定
;(() => {
    /**
     * 操作板的显示/隐藏
     */
    $('#CL_img').on('click', () => {
        panelDOM.toggle(200)
    })

    /**
     * 自定义按钮的按下动态特效
     */
    buttonDOM.on("mousedown", function () {
        $(this).css("box-shadow", "1px 1px 1px 0px #5e8796")
    })
    /**
     * 自定义按钮的松开动态特效
     */
    buttonDOM.on("mouseup", function () {
        $(this).css("box-shadow", "1px 1px 3px 0px #5e8796")
    })

    /**
     * 启用调色器
     */
    // @ts-ignore
    colorBoxDOM.colpick({
        colorScheme: 'dark',
        layout: 'rgbhex',
        color: 'fff',
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).css('background-color', '#' + hex);
            // @ts-ignore
            $(el).colpickHide();
        }
    })

    /**
     * 重置
     */
    $('#Reset').on('click', () => {
        CL_LocalStorage.clear()
        window.location.reload()
    })

    /**
     * 保存
     */
    $('#save').on('click', () => {
        /**
         * 保存数字选项的值
         */
        $.each($('select[cl-select-number]'), (_, item) => {
            const jqDOM = $(item)
            const key = jqDOM.attr('name') + "NumberValue"
            const value = jqDOM.val()
            CL_LocalStorage.setItem(key, value)
        })
        /**
         * 保存picGroup的值
         */
        ;(() => {
            const key = picGroupDOM.attr('name') + "SelectValue"
            const value = picGroupDOM.val()
            CL_LocalStorage.setItem(key, value)
        })()
        /**
         * 保存Checkbox的值
         */
        $.each($('#CL_OperationPanel input[type=checkbox]'), (_, item) => {
            const jqDOM = $(item)
            const key = jqDOM.attr('name') + "Checked"
            const value = jqDOM.prop('checked')
            CL_LocalStorage.setItem(key, value)
        })

        CL_LocalStorage.save()
    })

    /**
     * 点击checkbox的外部,也相当于点击了checkbox内部
     */
    $('.checkboxWrap').on('click', function (event) {
        $.each($(event.target).children('input[type=checkbox]'), (_, item) => {
            $(item).prop('checked', !$(item).prop('checked'))
        })
    })
})()

/**
 * 图片数据
 */
const GroupList = {
    Anime: {
        'Name': '动漫',
        'ImgList': [
            'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg',
            'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg',
            'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg',
            'https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg',
        ]
    },
    landscape: {
        'Name': '自然风景',
        'ImgList': [
            'https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg',
            'https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg',
            'https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg',
            'https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg'
        ]
    }
}

/**
 * localStorage数据储存的封装
 */
const CL_LocalStorage = ((() => {
    const currentLocalKey = "__CLKZB__STORAGE__KEY__"
    const currentLocal = localStorage.getItem(currentLocalKey)
    let currentLocalObject
    if (currentLocal === null) {
        currentLocalObject = {}
    } else {
        currentLocalObject = JSON.parse(currentLocal)
    }
    return {
        getRawObj(): object {
            return currentLocalObject
        },
        /**
         * 获取元素
         * @param key 要获取的值的key
         * @param defaultValue 若不存在相应的key,则应该返回的默认值,默认为undefined
         */
        getItem(key: string, defaultValue: any | null | undefined = undefined): any | null | undefined {
            const value = currentLocalObject[key]
            if (value) {
                return value
            } else {
                return defaultValue
            }
        },
        /**
         * 设置元素
         * @param key 要设置的key
         * @param value 要设置的值内容
         */
        setItem(key: string, value: any | null | undefined) {
            currentLocalObject[key] = value
        },
        /**
         * 保存数据到localStorage
         */
        save() {
            localStorage.setItem(currentLocalKey, JSON.stringify(currentLocalObject))
        },
        /**
         * 移除元素
         * @param key 要移除的key
         */
        removeItem(key: string) {
            delete currentLocalObject[key]
        },
        /**
         * 清空元素
         */
        clear() {
            currentLocalObject = {}
        }
    }
})())

/*获取localStorage数据*/
const PictureURLIndex = CL_LocalStorage.getItem('PictureURLIndex', 0) //图片URL下标
const CustomBackgroundCode = CL_LocalStorage.getItem('CustomBackgroundCode', '#FFF') //纯色背景代码
/*输出localStorage数据到控制台*/
console.log(CL_LocalStorage.getRawObj())

/**
 * 进行初始化加载的内容
 */
;
(() => {

    /**
     * CSS数据
     */
    const cssContent = {
        "body": {
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
            "position": "fixed",
            "top": "35%",
            "left": "1"
        },
        "img#CL_img": {
            "width": "35px",
            "border-radius": "20px",
            "cursor": "pointer"
        },
        ".none": {
            "display": "none"
        },
        ".block": {
            "display": "block"
        },
        "div#CL_OperationPanel": {
            "width": "300px",
            "height": "300px",
            "background": "#ececea",
            "position": "absolute",
            "top": "20px",
            "left": "35px",
            "box-shadow": "1px 1px 4px 0px #747698",
            "border-radius": "6px",
            "padding": "10px"
        },
        "div#CL_OperationPanel>div": {
            "height": "30px",
            "line-height": "30px",
            "margin-top": "10px"
        },
        ".Button": {
            "width": "49%",
            "display": "inline-block",
            "text-align": "center",
            "background": "#fbfbfb",
            "box-shadow": "1px 1px 3px 0px #5e8796",
            "border-radius": "7px",
            "cursor": "pointer"
        },
        ".functional>p": {
            "margin": "0px",
            "display": "inline-block",
            "width": "31%"
        },
        ".color-box": {
            "float": "left",
            "width": "30px",
            "height": "20px",
            "margin": "5px",
            "border": "1px solid white",
            "cursor": "pointer"
        },
        "p.RandomPictures": {
            "float": "left",
            "margin": "0"
        },
        "span#save,span#Reset": {
            "margin": "auto",
            "display": "inline-block",
            "width": "50px",
            "margin-left": "10px"
        },
        ".OperationButton": {
            "position": "absolute",
            "left": "50%",
            "margin-left": "-66px",
            "bottom": "10px"
        },
        "#panelDOM select": {
            "border-color": "#7b7b7b"
        },
        ".checkboxWrap": {
            "cursor": "pointer"
        }
    }
    /**
     * 把固定CSS数据绑定到相应的元素上
     */
    for (const selector in cssContent) {
        $(selector).css(cssContent[selector])
    }

    /**
     * 加载自定义的背景色
     */
    colorBoxDOM.css('background-color', CustomBackgroundCode); //纯色背景代码

    /**
     * 加载分组选项
     */
    for (const group in GroupList) {
        picGroupDOM.append(`<option value="${group}">${GroupList[group].Name}</option>`)
    }

    /**
     * 加载checkbox的选中
     */
    $.each($('#CL_OperationPanel input[type=checkbox]'), (_, item) => {
        const jqDOM = $(item)
        const key = jqDOM.attr('name') + "Checked"
        const defaultValue = JSON.parse(jqDOM.attr('default'))
        jqDOM.prop('checked', CL_LocalStorage.getItem(key, defaultValue))
    })

    /**
     * 加载number下拉选项的选项内容
     */
    $.each($('select[cl-select-number]'), (_, item) => {
        const jqDOM = $(item)
        const key = jqDOM.attr('name') + "NumberValue"
        const defaultValue = parseFloat(JSON.parse(jqDOM.attr('defaultValue')))
        const minValue = parseFloat(jqDOM.attr('minValue'))
        const maxValue = parseFloat(jqDOM.attr('maxValue'))
        const stepValue = parseFloat(jqDOM.attr('stepValue'))
        const targetValue = CL_LocalStorage.getItem(key, defaultValue)
        for (let i = minValue; i <= maxValue; i = parseFloat((i + stepValue).toPrecision(12))) {
            if (Math.abs(targetValue - i) < 0.0001) {
                jqDOM.append(`<option value="${i}" selected>${i}</option>`)
            } else {
                jqDOM.append(`<option value="${i}">${i}</option>`)
            }
        }
    })

    /**
     * 加载picGroup的下拉选项选中值
     */
    ;(() => {
        const key = picGroupDOM.attr('name') + "SelectValue"
        const targetValue = CL_LocalStorage.getItem(key)
        if (targetValue) {
            picGroupDOM.val(targetValue)
        }
    })()
})()
