/**
 *  为兼容以前ajax调用，封装jQuery的ajax调用
 */
//得到一个hcAjax对象
function hcAjax() {
	/**
	 *url:访问的目标地址
	 *para:type为post方式时，传递的参数. infotype为txt时，格式为&para1=value1&para2=value2&para3=value3
	 *                               infotype为xml时，格式为xml对象，或者为字符串。
	 *type:提交方式，post；get
	 *infotype:txt为普通参数提交，xml为xml格式文档
	 *succeed:成功后执行的方法名。如果这里传入了字符，那么直接给以字符串为ID的html对象的innerHTML属性写入返回的字符串。
	 *waiting:是否异步执行。
	 *returntype:返回结果类型 txt为普通参数提交，xml为xml格式文档 默认为txt
	 */

	this.request = function(url, para, type, infotype, succeed, waiting,
			returntype) {
		if(typeof(para) =="object"){
			for ( var key in para) {
				para[key] = encodeURIComponent(encodeURIComponent(para[key]));
			}
		}
		if (infotype == "txt" || returntype == "txt") {
			returntype = 'text';
		}
		if(infotype=="xml"){
			returntype="xml";
		}
		var ajaxObj = {
			type : type,
			url : url,
			dataType : returntype,
			async : waiting,
			success : function(msg) {
				if (typeof (succeed) == "string") {
					jQuery(succeed).html(msg);
				} else {
					succeed(msg);
				}
			},
			data : para
		};
		if(!window.jQuery){
			loadScript("http://style.org.hc360.com/js/detail/mysite/siteconfig/jquery-1-4-3-min.js",function(){jQuery.ajax(ajaxObj);});
		}else{
			jQuery.ajax(ajaxObj);
		}
	}
}

var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

function loadScript(src, callback) {
	var script = document.createElement("script");

	if (script.addEventListener)
		script.addEventListener("load", callback, false);
	else if (script.attachEvent)
		script.attachEvent("onreadystatechange", function() {
			loadScript.callbackIE(callback);
		});
	script.src = src;
	document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript.callbackIE = function(callback) {
	var target = window.event.srcElement;
	if (target.readyState == "loaded" || target.readyState == "complete")
		callback.call(target);
};