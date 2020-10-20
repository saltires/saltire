const list = {
    debounce: '防止函数被频繁触发',
    copyToClipboard: '将一个字符串复制到剪贴板',
    downoladFile: '下载网络上的文件'
}

/**
 * @author jxye
 * @date 2020/3/13
 * @Description: 判断数据类型
 * @example: type.isBoolean(true) // true   type.isBoolean("true") // false
 */
let type = function(o) {
    return Object.prototype.toString.call(o).match(/\[object\s(.*?)\]/)[1].toLowerCase();
};

let enumOfType = ['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
];

enumOfType.forEach(function(t) {
    comm["is" + t] = function(params) {
        return type(params) === t.toLowerCase();
    }
});

/**
 * @date 2020-06-19
 * @author saltire
 * @description 对常用日期格式化函数的封装
 */
function comm() {
    let result = '\n';
    let index = 1;

    Object.keys(list).forEach(function(key) {
        result = `${result}***${index}. ${key}: ${list[key]} ***\n`;
        index++;
    })

    return result;
}

/**
 * @author jxye
 * @date 2020/3/18
 * @Description: 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
 * @example: debounce(function(){console.log(this);}, 300)
 */
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.call(context, args);
        }, delay)
    }
}

/**
 * @date 2020-07-09
 * @author saltire
 * @description 将一个字符串复制到剪贴板
 * @param (string, 要复制的字符串)
 */
function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
}

/**
 * @date 2020-08-17
 * @author saltire
 * @description 根据网络上的url地址下载文件
 * @param (string, 文件地址);(string, 下载后的文件名)
 */
function downoladFile(url, name) {
    let xhr = new XMLHttpRequest();
    let path = "";
    xhr.open("get", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
        path = URL.createObjectURL(xhr.response);
        const a = document.createElement("a");
        a.setAttribute("download", name);
        a.setAttribute("href", path);
        a.click();
        URL.revokeObjectURL(path);
    };
    xhr.send();
}

Object.keys(list).forEach(function(t) {
    comm[t] = eval(t);
});

export {
    comm
}