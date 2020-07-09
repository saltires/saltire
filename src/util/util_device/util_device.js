const list = {
	ispc: "是否是PC设备",
	istrident: "是否是IE浏览器",
	ispresto: "是否是opera内核",
	iswebKit: "苹果、谷歌内核",
	isiPhone: "是否为iPhone或者QQHD浏览器",
	isiPad: "是否iPad",
	isweixin: "是否微信",
	isgecko: "判断是否是火狐内核",
	isios: "判断是否是ios终端",
	isqq: "判断是否是qq"
}

// 判断是pc端还是移动端
function isPC(){
  let userAgentInfo = navigator.userAgent;
  let Agents = [
	"Android",
	"iPhone",
	"SymbianOS",
	"Windows Phone",
	"iPad",
	"iPod"
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
	if (userAgentInfo.indexOf(Agents[v]) > 0) {
	  flag = false;
	  break;
	}
  }
  return flag;
}

const browser = {
	trident: 'Trident', //IE内核
	presto: 'Presto', //opera内核
	webKit: 'AppleWebKit', //苹果、谷歌内核
	iPhone: 'iPhone', //是否为iPhone或者QQHD浏览器
	iPad: 'iPad', //是否iPad
	weixin: 'MicroMessenger', //是否微信
}

/**
  * @date 2020-06-19
  * @author saltire
  * @description 封装常见的判断设备的方法
*/
let device = function(s, r) {
	let regNew = new RegExp(r);
	
	return regNew.test(s);
}

Object.keys(browser).forEach(function (t) {
	var u = navigator.userAgent
	
	device["is" + t] = function () {
		return u.indexOf(browser[t]) > -1;
	}
});

// 判断是否是火狐内核
device['isgecko'] = function(){
	var u = navigator.userAgent;
	return u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1;
}

// 判断是否是qq
device['isqq'] = function(){
	var u = navigator.userAgent;
	return u.match(/\sQQ/i) == " qq";
}

// 判断是否是ios终端
device['isios'] = function(){
	var u = navigator.userAgent;
	return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

// 判断是否是PC
device['ispc'] = isPC;

export{
	device
}