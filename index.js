!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.saltire_util=t():e.saltire_util=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={debounce:"防止函数被频繁触发",copyToClipboard:"将一个字符串复制到剪贴板",downoladFile:"下载网络上的文件",once:"控制函数只被执行一次",flatten:"多维数组扁平化"};function o(){let e="\n",t=1;return Object.keys(r).forEach((function(n){e=`${e}***${t}. ${n}: ${r[n]} ***\n`,t++})),e}["Null","Undefined","Object","Array","String","Number","Boolean","Function","RegExp"].forEach((function(e){o["is"+e]=function(t){return n=t,Object.prototype.toString.call(n).match(/\[object\s(.*?)\]/)[1].toLowerCase()===e.toLowerCase();var n}})),o.debounce=function(e,t){let n;return function(){const r=this,o=arguments;clearTimeout(n),n=setTimeout(()=>{e.call(r,o)},t)}},o.copyToClipboard=function(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},o.downoladFile=function(e,t){let n=new XMLHttpRequest,r="";n.open("get",e),n.responseType="blob",n.onload=function(){r=URL.createObjectURL(n.response);const e=document.createElement("a");e.setAttribute("download",t),e.setAttribute("href",r),e.click(),URL.revokeObjectURL(r)},n.send()},o.once=function(e){let t=!1;return function(...n){if(!t)return t=!0,e(...n)}},o.flatten=function(e){for(;e.some(e=>Array.isArray(e));)e=[].concat(...e);return e};let i={setCookie:"给维权骑士项目（rightknights-html设置cookie，开发模式下是本地，正式环境下是.rightknights.com)",getCookie:"获取cookie",clearCookie:"清除某个cookie",parseCookie:"解析 HTTP Cookie 标头字符串并返回所有cookie的name-value对的对象"};function a(e,t,n){let r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);let o="expires="+r.toUTCString();console.log("production"),document.cookie=e+"="+t+"; "+o+"; path=/; domain=.rightknights.com"}function u(){let e="\n",t=1;return Object.keys(i).forEach((function(n){e=`${e}***${t}. ${n}: ${i[n]} ***\n`,t++})),e}u.parseCookie=function(){return document.cookie.split(";").map(e=>e.split("=")).reduce((e,t)=>(e[decodeURIComponent(t[0].trim())]=decodeURIComponent(t[1].trim()),e),{})},u.clearCookie=function(e){a(e,"",-1)},u.getCookie=function(e){let t=e+"=",n=document.cookie.split(";");for(let e=0;e<n.length;e++){let r=n[e];for(;" "==r.charAt(0);)r=r.substring(1);if(-1!=r.indexOf(t))return r.substring(t.length,r.length)}return""},u.setCookie=a;const s={renderDate:"日期格式化工具函数",between:"判断指定日期是否在指定的开始日期和结束日期之间",isEqual:"判断两个日期是否相等",isLeapYear:"判断是否是闰年",getFirstDayOfMonth:"返回指定年月的第一天是星期几，返回值是1-7的数字",getLastDayOfMonth:"返回指定月份的最后一天是星期几，返回值是1-7的数字",getFirstDateOfMonth:"返回指定年月第一天的日期",getLastDateOfMonth:"返回指定年月最后一天的日期",getDaysInMonth:"获取指定月份的天数",addDays:"给指定日期增加指定天数",addHours:"给指定日期增加指定小时",timeStartChange:"将时间转为时间戳，按当天最初一刻",timeEndChange:"将时间转为时间戳，按当天最后一刻",timeDifference:"获取时间差,提供两个时间戳，返回一个对象,为负数表示当前time1比time2小"};function c(e,t){let n=new Date(e),r=t||"yyyy-MM-dd",o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours()%12==0?12:n.getHours()%12,"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()},i={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(r)&&(r=r.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+i[n.getDay()+""]));for(let e in o)new RegExp("("+e+")").test(r)&&(r=r.replace(RegExp.$1,1==RegExp.$1.length?o[e]:("00"+o[e]).substr((""+o[e]).length)));return r}function l(e){let t=new Date(e).getFullYear();return!(0!=(3&t)||!(t%100||t%400==0&&t))}function d(e){let t=new Date(e);return c(new Date(t.getFullYear(),t.getMonth(),f(t)))}let f=function(){let e=[31,28,31,30,31,30,31,31,30,31,30,31];return function(t){let n=new Date(t),r=n.getMonth();return 1==r&&l(n)?29:e[r]}}();function g(){let e="\n",t=1;return Object.keys(s).forEach((function(n){e=`${e}***${t}. ${n}: ${s[n]} ***\n`,t++})),e}g.renderDate=c,g.between=function(e,t,n){let r=new Date(e),o=new Date(t),i=new Date(n),a=r.getTime();return o.getTime()<=a&&a<=i.getTime()},g.isEqual=function(e,t){let n=new Date(e),r=new Date(t);return n&&r?n.getTime()===r.getTime():!(n||r)},g.isLeapYear=l,g.getFirstDayOfMonth=function(e){let t=new Date(e),n=(t.getDay()-(t.getDate()-1))%7;return n<0?n+7:n},g.getLastDayOfMonth=function(e){let t=new Date(e);return new Date(d(t)).getDay()},g.getFirstDateOfMonth=function(e){let t=new Date(e);return c(new Date(t.getFullYear(),t.getMonth(),1))},g.getLastDateOfMonth=d,g.getDaysInMonth=f,g.addDays=function(e,t){let n=new Date(e),r=n.getTime();return n.setTime(r+864e5*parseInt(t)),n},g.addHours=function(e,t){let n=new Date(e),r=n.getTime();return n.setTime(r+36e5*parseInt(t)),n},g.timeStartChange=function(e){var t=new Date(e),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+"  00:00:00";return new Date(n).getTime()},g.timeEndChange=function(e){var t=new Date(e),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+"  23:59:59";return new Date(n).getTime()},g.timeDifference=function(e,t){let n=parseInt((t-e)/1e3),r=parseInt(n/86400),o=parseInt((n-24*r*60*60)/3600),i=parseInt((n-24*r*60*60-60*o*60)/60);return{day:r,hour:o,min:i,ms:n-24*r*60*60-60*o*60-60*i}};const p={trident:"Trident",presto:"Presto",webKit:"AppleWebKit",iPhone:"iPhone",iPad:"iPad",weixin:"MicroMessenger"},m="wechatdevtools desktopapp appservice port/48270 token/99f8ac1ba71ad7c1a00605bb2a03f8c8";let h=function(e,t){return new RegExp(t).test(e)};Object.keys(p).forEach((function(e){try{var t=window.navigator&&window.navigator.userAgent}catch{t=m}h["is"+e]=function(){return t.indexOf(p[e])>-1}})),h.ispc=function(){try{var e=window.navigator&&window.navigator.userAgent}catch{e=m}let t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0;for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n},h.isgecko=function(){try{var e=window.navigator&&window.navigator.userAgent}catch{e=m}return e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML")},h.isios=function(){try{var e=window.navigator&&window.navigator.userAgent}catch{e=m}return!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},h.isqq=function(){try{var e=window.navigator&&window.navigator.userAgent}catch{e=m}return" qq"==e.match(/\sQQ/i)},h.scrollToTop=function e(){try{const t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}catch{return}},h.elementIsVisibleInViewport=function(e,t=!1){try{const{top:n,left:r,bottom:o,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:u}=window;return t?(n>0&&n<a||o>0&&o<a)&&(r>0&&r<u||i>0&&i<u):n>=0&&r>=0&&o<=a&&i<=u}catch{return}};const w={hasClass:"判断元素是否含有某个class",addClass:"原生js操作元素class的方法，给元素添加class，支持不定长参数",removeClass:"原生js操作元素class的方法，删除元素的class，支持不定长参数"};function D(){let e="\n",t=1;return Object.keys(w).forEach((function(n){e=`${e}***${t}. ${n}: ${w[n]} ***\n`,t++})),e}D.hasClass=function(e,t){if(!e||!t)throw new Error("arguments error");return!!e.classList.contains(t)},D.addClass=function(e){if(!e||arguments.length<=1)throw new Error("arguments error");let t=Array.from?Array.from(arguments):Array.prototype.slice.call(arguments);e&&t.splice(0,1);for(let n=0;n<t.length;n++)e.classList.contains(t[n])||e.classList.add(t[n])},D.removeClass=function(e){if(!e||arguments.length<=1)throw new Error("arguments error");let t=Array.from?Array.from(arguments):Array.prototype.slice.call(arguments);e&&t.splice(0,1);for(let n=0;n<t.length;n++)e.classList.contains(t[n])&&e.classList.remove(t[n])};const y={url:/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,video_url:/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,img_url:/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,time_24:/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,time_12:/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,base64:/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,money:/^-?\d+(,\d{3})*(\.\d{1,2})?$/,bank_card:/^[1-9]\d{9,29}$/,name_chinese:/^(?:[\u4e00-\u9fa5·]{2,16})$/,license_plate:/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,md5:/^([a-f\d]{32}|[A-F\d]{32})$/,phone_rigorous:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,phone_loose:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,date:/^\d{4}(-|\/)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,tel:/^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/,id_card:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,passports:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,username:/^[a-zA-Z0-9_-]{4,16}$/,chinese:/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,decimal:/^\d+\.\d+$/,qq_number:/^[1-9][0-9]{4,10}$/,password:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,ip_v4:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,color_16:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,wx_username:/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,zip_code:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/};let b=function(e,t){return new RegExp(t).test(e)};Object.keys(y).forEach((function(e){b["is"+e]=function(t){return b(t,y[e])}})),b.isnumber=e=>"[object Object]"===Object.prototype.toString.call(e);const $={camelCase:"英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装",endsWith:"判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略",startsWith:"判断某个字符串是否以某特殊字符开头,头部空格会被忽略",randomString:"生成随机字符串",hiddenNumber:"隐藏号码的中间一部分，常见的是隐藏手机号中间四位",randomNumber:"生成一个[min, max]之间的随机数"};function A(){let e="\n",t=1;return Object.keys($).forEach((function(n){e=`${e}***${t}. ${n}: ${$[n]} ***\n`,t++})),e}A.camelCase=function(e){let t,n,r,o=[],i=e.split(""),a=!1,u=e.search(/([a-zA-Z])/)+1,s=/^[a-zA-Z]$/,c=/^[a-z]$/;if(e||(t="camelCase调用时参数不能为空"),u-1>=0){o.push(i[u-1].toLowerCase());for(let e=u;e<i.length;e++){let t=i[e],u=a;r=s.test(t),a=!1,r?(n=c.test(t),!1===u?o.push(t.toLowerCase()):o.push(t.toUpperCase())):a=!0}}return t?new Error(t):o&&o.length?o.join(""):e},A.endsWith=function(e,t){return e&&t?e===t||new RegExp(t.replace(/\s*$/g,"")+"$").test(e.replace(/\s*$/g,"")):new Error("endsWith函数调用时参数不能为空")},A.startsWith=function(e,t){return e&&t?e===t||new RegExp("^"+t.replace(/^\s*/g,"")).test(e.replace(/^\s*/g,"")):new Error("startsWith函数调用时参数不能为空")},A.randomString=function(){return Math.random().toString(36).substr(2)},A.hiddenNumber=function(e,t,n){for(var r=e.length-t-n,o="",i=0;i<r;i++)o+="*";return e.substring(0,t)+o+e.substring(e.length-n)},A.randomNumber=function(e,t){return parseInt(Math.random()*(t-e+1)+e,10)};const v={GetQueryString:"获取url中的某个参数值",replaceQueryString:"修改url中的某个参数的值，返回新地址",addQueryString:"在URL中追加一个参数",isAbsoluteURL:"如果给定的字符串是绝对URL，则返回 true ；否则返回 false"};function F(){let e="\n",t=1;return Object.keys(v).forEach((function(n){e=`${e}***${t}. ${n}: ${v[n]} ***\n`,t++})),e}F.GetQueryString=function(e){try{var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}catch{return}},F.replaceQueryString=function(e,t){var n=window.location.href.toString(),r=new RegExp("/("+e+"=)([^&]*)/gi");return n.replace(r,e+"="+t)},F.addQueryString=function(e,t){try{var n=window.location.href;if(n.indexOf(e)>-1){var r=new RegExp("/("+e+"=)([^&]*)/gi");n=n.replace(r,e+"="+t)}else{var o=e+"="+t,i=n.indexOf("?");i<0?n+="?":i>=0&&i!=n.length-1&&(n+="&"),n+=o}return n}catch{return}},F.isAbsoluteURL=function(e){return/^[a-z][a-z0-9+.-]*:/.test(e)};let E=new class{constructor(){this._version="Util function of version [v1.1.0]",this.comm=o,this.cookie=u,this.date=g,this.device=h,this.dom=D,this.check=b,this.string=A,this.url=F}version(){return this._version}},C=["comm","cookie","date","device","dom","check","string","url"],k=new Proxy(E,{get:function(e,t){let n;for(let r of C)t in e[r]&&(n=e[r][t]);return n||e[t]}});t.default=k}])}));