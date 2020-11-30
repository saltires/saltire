let list = {
	setCookie: '给维权骑士项目（rightknights-html设置cookie，开发模式下是本地，正式环境下是.rightknights.com)',
	getCookie: '获取cookie',
	clearCookie: '清除某个cookie',
	parseCookie: '解析 HTTP Cookie 标头字符串并返回所有cookie的name-value对的对象'
}

/**
  * @date 2020-06-19
  * @author saltire
  * @description 给维权骑士项目（rightknights-html设置cookie，开发模式下是本地，正式环境下是.rightknights.com）
  * @param (cname,string,键名) （cvalue，string，键值）（exdays, number, 失效时间，以天为单位）
  * @return undefined
*/
function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	console.log(process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'production'){
		document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=.rightknights.com";
	} else {
		document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=localhost";
	}
}

/* 获取cookie */
function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
	}
	
	return "";
}

 /* 清除某个cookie */
function clearCookie(name) {     
	setCookie(name, "", -1); 
}

/**
  * @date 2020-07-09
  * @author saltire
  * @description 解析 HTTP Cookie 标头字符串并返回所有 cookie 的 name-value 对的对象
  * @return (object)
*/
function parseCookie(){
	return document.cookie
		.split(';')
		.map(v => v.split('='))
		.reduce((acc, v) => {
		acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
		return acc;
		}, {});
}
  
function cookie(){
	let result = '\n';
	let index = 1;
	
	Object.keys(list).forEach(function(key){
		result = `${result}***${index}. ${key}: ${list[key]} ***\n`;
		index++;
	})
	
	return result;
}

cookie.parseCookie = parseCookie
cookie.clearCookie = clearCookie
cookie.getCookie = getCookie
cookie.setCookie = setCookie

export {
	cookie
}