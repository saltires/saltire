const list = {
	hasClass: '判断元素是否含有某个class',
	addClass: '原生js操作元素class的方法，给元素添加class，支持不定长参数',
	removeClass: '原生js操作元素class的方法，删除元素的class，支持不定长参数'
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断元素是否含有某个class
 * @example: hasClass(document.getElementById('content-toc'), 'content-toc') => true或false
*/
function hasClass(element, className) {
    if (!element || !className) {
        throw new Error("arguments error");
    }
    if (element.classList.contains(className)) {
        return true;
    }
    return false;
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，给元素添加class，支持不定长参数
*/
function addClass(element) {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }

    let argus = Array.from ? Array.from(arguments) : Array.prototype.slice.call(arguments);

    if (element) {
        argus.splice(0, 1);
    }

    for (let i = 0; i < argus.length; i++) {
        if (!element.classList.contains(argus[i])) {
            element.classList.add(argus[i]);
        }
    }
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，删除元素的class，支持不定长参数
*/
function removeClass(element) {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }
    let argus = Array.from ? Array.from(arguments) : Array.prototype.slice.call(arguments);

    if (element) {
        argus.splice(0, 1);
    }
    for (let i = 0; i < argus.length; i++) {
        if (element.classList.contains(argus[i])) {
            element.classList.remove(argus[i]);
        }
    }
}

/**
  * @date 2020-06-19
  * @author saltire
  * @description 对常用dom操作函数的封装，没有引入jquery时使用
*/
function dom(){
	let result = '\n';
	let index = 1;
	
	Object.keys(list).forEach(function(key){
		result = `${result}***${index}. ${key}: ${list[key]} ***\n`;
		index++;
	})
	
	return result;
}

Object.keys(list).forEach(function (t) {
    dom[t] = eval(t);
});


export {
    dom
}