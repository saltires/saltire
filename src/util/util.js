import { comm } from "./util_common"

import { cookie } from "./util_cookie"

import { date } from "./util_date"

import { device } from "./util_device"

import { dom } from "./util_dom"

import { check } from "./util_regexp"

import { string } from "./util_string"

import { url } from "./util_url"




class Util {
    constructor() {
        this._version = "Util function of version [v1.1.0]";
		
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