let list = {
	setCookie: '给维权骑士项目（rightknights-html设置cookie，开发模式下是本地，正式环境下是.rightknights.com)',
	getCookie: '获取cookie'
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

function cookie(){
	let result = '\n';
	let index = 1;
	
	Object.keys(list).forEach(function(key){
		result = `${result}***${index}. ${key}: ${list[key]} ***\n`;
		index++;
	})
	
	return result;
}

Object.keys(list).forEach(function (t) {
    cookie[t] = eval(t);
});

export {
	cookie
}