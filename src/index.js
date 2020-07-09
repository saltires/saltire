import { Util } from "./util/util.js"

let util = new Util();

let map = ['comm','cookie','date','device','dom','check','string','url'];

// 给util设置拦截，当访问util上的一些方法时，如果发现util的子函数中存在，则代理到子函数中,可以少打一个字母
let proxy = new Proxy(util, {
	get: function(target, proKey) {
		let result;
		
		for (let key of map){
			if (proKey in target[key]) {
				result =  target[key][proKey];
			}
		}
		
		return result || target[proKey];
	}
})

export default proxy
