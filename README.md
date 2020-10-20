# Description
日常工具操作函数，其中包含：**日期处理**、**数据类型判断**、**字符串处理**、**cookie处理**、**正则判断**、**dom操作**、**设备判断**、**url操作**等
# Use

```
import util from 'saltire_util'
```

# API

### comm
```
util.debounce() // 防止函数被频繁触发,第一个参数是指定的函数，第二个是延迟时间
// 如: debounce(function(){console.log(this);}, 300)
util.copyToClipboard('字符串内容') // 将一个字符串复制到剪贴板
util.downoladFile(url, '文件名称') // 下载网络上的文件(任意文件格式，前提需要是一个存在于公网的资源地址)
// 如: downoladFile('https://rk-secure-base-test.oss-cn-qingdao.aliyuncs.com/font/image/image1.jpg', '资料')
```
### cookie

```
util.setCookie(cname, cvalue, exdays) // '给维权骑士项目（rightknights-html设置cookie，开发模式下是本地，正式环境下是.rightknights.com)'
// @param (cname,string,键名) （cvalue，string，键值）（exdays, number, 失效时间，以天为单位）
util.getCookie(cname) // '获取cookie' cname为键名
util.clearCookie(cname) // '清除某个cookie'
util.parseCookie() // '解析 HTTP Cookie 标头字符串并返回所有cookie的name-value对的对象'
```

### date

```
util.renderDate(d, f) //  '日期格式化工具函数',第一个参数为Date对象，第二个参数是格式，默认为年-月-日

util.between(d, s, e) // '判断指定日期是否在指定的开始日期和结束日期之间',@param (date, 指定日期) (start, 开始时间) （end， 结束时间）

util.isEqual(d1, d2) // '判断两个日期是否相等',
util.isLeapYear(d) // '判断是否是闰年',
util.getFirstDayOfMonth(d) // '返回指定年月的第一天是星期几，返回值是1-7的数字',
util.getLastDayOfMonth(d) // '返回指定月份的最后一天是星期几，返回值是1-7的数字',
util.getFirstDateOfMonth(d) // '返回指定年月第一天的日期',
util.getLastDateOfMonth(d) // '返回指定年月最后一天的日期',
util.getDaysInMonth(d) // '获取指定月份的天数',
util.addDays(d, days) // '给指定日期增加指定天数',
util.addHours(d, hours) // '给指定日期增加指定小时',
util.timeStartChange(d) // '将时间转为时间戳，按当天最初一刻',
util.timeEndChange(d) //'将时间转为时间戳，按当天最后一刻',
util.timeDifference(time1, time2) // '获取时间差,提供两个时间戳，返回一个对象,为负数表示当前time1比time2小',这里两个参数都是时间戳
```

### device

```
util.ispc()  // "是否是PC设备",
util.istrident()  // "是否是IE浏览器",
util.ispresto()  // "是否是opera内核",
util.iswebKit()  // "苹果、谷歌内核",
util.isiPhone()  // "是否为iPhone或者QQHD浏览器",
util.isiPad()  // "是否iPad",
util.isweixin()  // "是否微信",
util.isgecko()  // "判断是否是火狐内核",
util.isios()  // "判断是否是ios终端",
util.isqq()  // "判断是否是qq"
util.scrollToTop() // "回到顶部"
util.elementIsVisibleInViewport()  // "如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false"，* @param （指定元素，el）（省略第二个参数来判断元素是否完全可见，或者指定 true 来判断它是否部分可见，bolean）
```

### dom

```
util.hasClass(element, className) //  '判断元素是否含有某个class',
util.addClass(element, ...) //  '原生js操作元素class的方法，给元素添加class，支持不定长参数',element为必填，class名称支持不定长参数
util.removeClass(element, ...) //  '原生js操作元素class的方法，删除元素的class，支持不定长参数',element为必填，class名称支持不定长参数
```

### check

```
const reg = {
	// 网址(url,支持端口和"?+参数"和"#+参数)
	url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
	
	// 视频(video)链接地址（视频格式可按需增删）
	video_url: /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,
	
	// 图片(image)链接地址（图片格式可按需增删）
	img_url: /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,
	
	// 24小时制时间（HH:mm:ss）
	time_24: /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
	
	// 12小时制时间（hh:mm:ss）
	time_12: /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,
	
	// base64格式
	base64: /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,
	
	// 数字/货币金额（支持负数、千分位分隔符）
	money: /^-?\d+(,\d{3})*(\.\d{1,2})?$/,
	
	// 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
	bank_card: /^[1-9]\d{9,29}$/,
	
	// 中文姓名
	name_chinese: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
	
	// 车牌号(新能源+非新能源)
	license_plate: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,
	
	// md5格式(32位)
	md5: /^([a-f\d]{32}|[A-F\d]{32})$/,
	
	// 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
	phone_rigorous: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
	
	// 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
	phone_loose: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
	
	// 日期 支持2020-01-02和2020/01/02这两种形式
	date: /^\d{4}(-|\/)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/,
	
	// 邮箱
	email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	
	// 座机(tel phone)电话(国内),如: 0341-86091234
	tel: /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/,
	
	// 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
	id_card: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
	
	// 护照（包含香港、澳门）
	passports: /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,
	
	// 用户名校验，4到16位（字母，数字，下划线，减号）
	username: /^[a-zA-Z0-9_-]{4,16}$/,
	
	// 中文/汉字
	chinese: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
	
	// 小数
	decimal: /^\d+\.\d+$/,
	
	// 数字
	number: /^\d{1,}$/,
	
	// qq号码格式
	qq_number: /^[1-9][0-9]{4,10}$/,
	
	// 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
	password: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
	
	// ipv4地址
	ip_v4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	
	// 十六进制颜色
	color_16: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
	
	// 微信号
	wx_username: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
	
	// 邮政编码（中国）
	zip_code: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
}
```

### string

```
util.camelCase(string) //  '英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装',
util.endsWith(string, match) //  '判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略',  * @example: endsWith("foobar", "bar") // true   endsWith("foobar", "foo") // false
util.startsWith(string, match) //  '判断某个字符串是否以某特殊字符开头,头部空格会被忽略', * @example: startsWith("foobar", "fo") // true startsWith("foobar", "v") // false
util.randomString() //  '生成随机字符串',
util.hiddenNumber(str, frontLen, endLen) //  '隐藏号码的中间一部分，常见的是隐藏手机号中间四位'，* @example hiddenNumber('13901342187', 3, 4) => 139****2187
util.randomNumber(min, max) // '生成一个[min, max]之间的随机数'
```

### url

```
util.GetQueryString(name) //  '获取url中的某个参数值',
util.replaceQueryString(paramName,replaceWith) //  '修改url中的某个参数的值，返回新地址',
util.addQueryString(paramName,replaceWith) //  '在URL中追加一个参数'
util.isAbsoluteURL(url) // '如果给定的字符串是绝对URL，则返回 true ；否则返回 false'
```







