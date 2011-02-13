/**
 *  Ϊ������ǰajax���ã���װjQuery��ajax����
 */
//�õ�һ��hcAjax����
function hcAjax() {
	/**
	 *url:���ʵ�Ŀ���ַ
	 *para:typeΪpost��ʽʱ�����ݵĲ���. infotypeΪtxtʱ����ʽΪ&para1=value1&para2=value2&para3=value3
	 *                               infotypeΪxmlʱ����ʽΪxml���󣬻���Ϊ�ַ�����
	 *type:�ύ��ʽ��post��get
	 *infotype:txtΪ��ͨ�����ύ��xmlΪxml��ʽ�ĵ�
	 *succeed:�ɹ���ִ�еķ�������������ﴫ�����ַ�����ôֱ�Ӹ����ַ���ΪID��html�����innerHTML����д�뷵�ص��ַ�����
	 *waiting:�Ƿ��첽ִ�С�
	 *returntype:���ؽ������ txtΪ��ͨ�����ύ��xmlΪxml��ʽ�ĵ� Ĭ��Ϊtxt
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