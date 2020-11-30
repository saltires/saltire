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
	isqq: "判断是否是qq",
	scrollToTop: '回到顶部',
	elementIsVisibleInViewport: "如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false"
}

const browser = {
	trident: 'Trident', //IE内核
	presto: 'Presto', //opera内核
	webKit: 'AppleWebKit', //苹果、谷歌内核
	iPhone: 'iPhone', //是否为iPhone或者QQHD浏览器
	iPad: 'iPad', //是否iPad
	weixin: 'MicroMessenger', //是否微信
}

const userAgentDefault = "wechatdevtools desktopapp appservice port/48270 token/99f8ac1ba71ad7c1a00605bb2a03f8c8"

/**
  * @date 2020-06-19
  * @author saltire
  * @description 封装常见的判断设备的方法
*/
let device = function (s, r) {
	let regNew = new RegExp(r);

	return regNew.test(s);
}

Object.keys(browser).forEach(function (t) {
	try {
		var u = window.navigator && window.navigator.userAgent
	} catch {
		var u = userAgentDefault
	}

	device["is" + t] = function () {
		return u.indexOf(browser[t]) > -1;
	}
});

// 判断是否是火狐内核
function isgecko() {
	try {
		var u = window.navigator && window.navigator.userAgent
	} catch {
		var u = userAgentDefault
	}

	return u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1;
}

// 判断是否是qq
function isqq() {
	try {
		var u = window.navigator && window.navigator.userAgent
	} catch {
		var u = userAgentDefault
	}

	return u.match(/\sQQ/i) == " qq";
}

// 判断是否是ios终端
function isios() {
	try {
		var u = window.navigator && window.navigator.userAgent
	} catch {
		var u = userAgentDefault
	}

	return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

// 判断是pc端还是移动端
function ispc() {
	try {
		var userAgentInfo = window.navigator && window.navigator.userAgent
	} catch {
		var userAgentInfo = userAgentDefault
	}
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

/* 
平滑滚动到页面顶部。
使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。从顶部滚动一小部分距离。使用window.requestAnimationFrame() 来实现滚动动画。
 */
function scrollToTop() {
	try {
		const c = document.documentElement.scrollTop || document.body.scrollTop;

		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 8);
		}
	} catch {
		return
	}
}

/**
  * @date 2020-07-09
  * @author saltire
  * @description 如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false 
  * @param （指定元素，el）（省略第二个参数来判断元素是否完全可见，或者指定 true 来判断它是否部分可见，bolean）
  * @return boolean
*/
function elementIsVisibleInViewport(el, partiallyVisible = false) {
	try {
		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		return partiallyVisible
			? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
			((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
			: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
	} catch {
		return
	}
}

device.ispc = ispc
device.istrident = istrident
device.ispresto = ispresto
device.iswebKit = iswebKit
device.isiPhone = isiPhone
device.isiPad = isiPad
device.isweixin = isweixin
device.isgecko = isgecko
device.isios = isios
device.isqq = isqq
device.scrollToTop = scrollToTop
device.elementIsVisibleInViewport = elementIsVisibleInViewport

export {
	device
}