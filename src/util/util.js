import { comm } from "./util_common/util_common.js"

import { cookie } from "./util_cookie/util_cookie.js"

import { date } from "./util_date/util_date.js"

import { device } from "./util_device/util_device.js"

import { dom } from "./util_dom/util_dom.js"

import { check } from "./util_regexp/util_regexp.js"

import { string } from "./util_string/util_string.js"

import { url } from "./util_url/util_url.js"




class Util {
    constructor() {
        this._version = "Util function of version [v1.0.9]";
		
		this.comm = comm;
		
		this.cookie = cookie;
		
		this.date = date;
		
		this.device = device;
		
		this.dom = dom;
		
		this.check = check;
		
		this.string = string;
		
		this.url = url;
    }
    // 返回Util工具的版本
    version() {
        return this._version;
    }
}

export {
    Util
}