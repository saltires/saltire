const list = {
	GetQueryString: '获取url中的某个参数值',
	replaceQueryString: '修改url中的某个参数的值，返回新地址',
	addQueryString: '在URL中追加一个参数',
	isAbsoluteURL: '如果给定的字符串是绝对URL，则返回 true ；否则返回 false'
}

/* 获取url中的某个参数值 */
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

/* 修改url中的某个参数的值，返回新地址 */
function replaceQueryString(paramName,replaceWith) {
	var oUrl = this.location.href.toString();
	var re=eval('/('+ paramName+'=)([^&]*)/gi');
	var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
	return nUrl;
}

/* 在URL中追加一个参数 */
function addQueryString(paramName, replaceWith) {
    var url = window.location.href;
    if (url.indexOf(paramName) > -1) {
        var re = eval('/(' + paramName + '=)([^&]*)/gi');
        url = url.replace(re, paramName + '=' + replaceWith);
    } else {
        var paraStr = paramName + '=' + replaceWith;
 
        var idx = url.indexOf('?');
        if (idx < 0)
            url += '?';
        else if (idx >= 0 && idx != url.length - 1)
            url += '&';
        url=url + paraStr;
    }
    return url;
};

/**
  * @description 是否为绝对地址,如果给定的字符串是绝对URL，则返回 true ；否则返回 false。
  * @example isAbsoluteURL('https://google.com'); // true
  * @example isAbsoluteURL('ftp://www.myserver.net'); // true
  * @example isAbsoluteURL('/foo/bar'); // false
*/
function isAbsoluteURL(str){
	return  /^[a-z][a-z0-9+.-]*:/.test(str);
}

/**
  * @date 2020-06-19
  * @author saltire
  * @description 对常用url处理函数的封装
*/
function url(){
	let result = '\n';
	let index = 1;
	
	Object.keys(list).forEach(function(key){
		result = `${result}***${index}. ${key}: ${list[key]} ***\n`;
		index++;
	})
	
	return result;
}

Object.keys(list).forEach(function (t) {
    url[t] = eval(t);
});

export {
	url
}