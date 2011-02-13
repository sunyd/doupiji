
function SetCookie(name,value){
	
     var argv=SetCookie.arguments;
     var argc=SetCookie.arguments.length;
     var expires=(2<argc)?argv[2]:null;
     var path=(3<argc)?argv[3]:null;
     var domain=(4<argc)?argv[4]:null;
     var secure=(5<argc)?argv[5]:false;
     //domain = "hc360.com";
     //path = "/";
     //document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
     //alert("value==" + value);
     var exp="";
     var dt=new Date(); 
	 dt.setTime(dt.getTime()+(1800000)); 
	 exp="; expires="+dt.toGMTString();
     //document.cookie=name+"="+escape(value)+exp+";path=/;domain=b2b.hc360.com"; 
     /*
     var exp="";
	 var dt=new Date(); 
	 dt.setTime(dt.getTime()+1800000); 
	 exp="; expires="+dt.toGMTString();
	 document.cookie=name+"="+escape(value)+exp+";path=/;domain=hc360.com"; */
}
function GetCookie(Name) {
	
	 var m=""; 
	 if(window.RegExp){ 
		var re=new RegExp(";\\s*"+Name+"=([^;]*)","i"); 
		m=re.exec(';'+document.cookie); 
	 } 
	 return(m?unescape(m[1]):"");
	/*
     var search = Name + "=";
     var returnvalue = "";
     if (document.cookie.length > 0) {
           offset = document.cookie.indexOf(search);
           if (offset != -1) {      
                 offset += search.length;
                 end = document.cookie.indexOf(";", offset);                        
                 if (end == -1)
                       end = document.cookie.length;
                 returnvalue=unescape(document.cookie.substring(offset,end));
           }
     }
     return returnvalue; */
}
/** 加入收藏夹 */
function hcAddFavorite(sURL,sTitle){
	try {
		window.external.addFavorite(sURL,sTitle);
	   }catch (e) {
		 try {
			window.sidebar.addPanel(sTitle, sURL, "");
		 } catch (e){
			alert("加入收藏失败,请手动添加.");
		}
	}
}

function vh(objstr){
	if(document.getElementById(objstr).style.display=="none"){
		document.getElementById(objstr).style.display="block";
	}else{
		document.getElementById(objstr).style.display="none";
	}
}
function vh2(objstr,onbj){
	if(document.getElementById(objstr).style.display=="none"){
		document.getElementById(objstr).style.display="block";
		onbj.className='st_h3_1';
	}else{
		document.getElementById(objstr).style.display="none";
		onbj.className='st_h3_2';
	}
}
function getElement(id){//工具函数，根据对象id得到对象
	return document.getElementById(id);
}


//url 
//senddata 
//returntype xml:xmldoc,else htmltext
var http_request = false;
var responsetype = 'txt';
var whichobjid;
	function GetResponse(url,senddata,returntype,sourceobjid){
		whichobjid = sourceobjid;
		new hcAjax().request(url,param,"post",returntype,BusinessFunc,true);	
}


////////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION
////////////////////////////////////////////////////////////////////////////////////

// 主背景色（大区域）
// 通常使用明快的颜色（浅黄色等...）
	if (typeof fcolor == 'undefined') { var fcolor = "FFFFDD";}
	
// Border的颜色和标题栏的颜色；
// 通常的颜色深（褐色，黑色等。）
	if (typeof backcolor == 'undefined') { var backcolor = "#FFDA8C";}
	
	
// 文字的颜色
// 通常是比较深的颜色；
	if (typeof textcolor == 'undefined') { var textcolor = "#993300";}
	
// 标题的颜色
// 通常是明快的颜色；
	if (typeof capcolor == 'undefined') { var capcolor = "#FFFFFF";}
	
// "Close"的颜色
// 通常是明快的颜色；
	if (typeof closecolor == 'undefined') { var closecolor = "#9999FF";}
	
	
// 弹出的窗口的宽度；
// 100-300 pixels 合适
	if (typeof width == 'undefined') { var width = "200";}
	
// 边缘的宽度，象素。
// 1-3 pixels 合适
	if (typeof border == 'undefined') { var border = "1";}
	
	
// 弹出窗口位于鼠标左侧或者右侧的距离，象素。
// 3-12合适
	if (typeof offsetx == 'undefined') { var offsetx = 10;}
	
// 弹出窗口位于鼠标下方的距离；
// 3-12 合适
	if (typeof offsety == 'undefined') { var offsety = 10;}
	
////////////////////////////////////////////////////////////////////////////////////
// 设置结束
////////////////////////////////////////////////////////////////////////////////////

// 以下是页面中使用的公共函数；

// Simple popup right
function drs(text) {
	dts(1,text);
}


// Clears popups if appropriate
function nd() {
	if ( cnt >= 1 ) { sw = 0 };
	if ( (ns4) || (ie4) ) {
		if ( sw == 0 ) {
			snow = 0;
			hideObject(over);
		} else {
			cnt++;
		}
	}
}

// 非公共函数，被其它的函数调用；

// Simple popup
function dts(d,text) {
	txt = "<TABLE WIDTH="+width+" BORDER=0 CELLPADDING="+border+" CELLSPACING=0 BGCOLOR=\""+backcolor+"\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR=\""+fcolor+"\"><TR><TD CLASS=P1><FONT FACE=\"宋体\" COLOR=\""+textcolor+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>"
	layerWrite(txt);
	dir = d;
	disp();
}



// Common calls
function disp() {
	if ( (ns4) || (ie4) ) {
		if (snow == 0) 	{
			if (dir == 2) { // Center
				moveTo(over,x+offsetx-(width/2),y+offsety);
			}
			if (dir == 1) { // Right
				moveTo(over,x+offsetx,y+offsety);
			}
			if (dir == 0) { // Left
				moveTo(over,x-offsetx-width,y+offsety);
			}
			showObject(over);
			snow = 1;
		}
	}
// Here you can make the text goto the statusbar.
}

// Moves the layer
function mouseMove(e) {
	if (ns4) {x=e.pageX; y=e.pageY;}
	if (ie4) {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (ie5) {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (snow) {
		if (dir == 2) { // Center
			moveTo(over,x+offsetx-(width/2),y+offsety);
		}
		if (dir == 1) { // Right
			moveTo(over,x+offsetx,y+offsety);
		}
		if (dir == 0) { // Left
			moveTo(over,x-offsetx-width,y+offsety);
		}
	}
}

// The Close onMouseOver function for Sticky
function cClick() {
	hideObject(over);
	sw=0;
}

// Writes to a layer
function layerWrite(txt) {
        if (ns4) {
                var lyr = document.overDiv.document
                lyr.write(txt)
                lyr.close()
        }
        else if (ie4) document.all["overDiv"].innerHTML = txt
		if (tr) {  }
}

// Make an object visible
function showObject(obj) {
        if (ns4) obj.visibility = "show"
        else if (ie4) obj.visibility = "visible"
}

// Hides an object
function hideObject(obj) {
        if (ns4) obj.visibility = "hide"
        else if (ie4) obj.visibility = "hidden"
}

// Move a layer
function moveTo(obj,xL,yL) {
        obj.left = xL
        obj.top = yL
}

function VisitList(count)
{
	var pagesize = count;
	var visitinit = 0;
	
	for(i=0;i<pagesize;i++)
	{
   	var allcount = hcvisitresult[i];
	   if(allcount.length<3){
	   		allcount = "0,0"
	   	}
	 	var arrcount = allcount.split(",");
		var aa = document.getElementById('Totalvisit'+i);//总浏览次数
		var bb = document.getElementById('Todayvisit'+i);//今日浏览次数
		
		if (aa!=null){
				aa.innerText = arrcount[0];
			}
		if (bb !=null){
				//bb.innerText = arrcount[1];
			}

  }
}

function VipVisitCount(){
	var count = countStr;
	var arrcount = count.split(":");
	
	var totalvisit = document.getElementById('totalvisit');//总的访问次数
	var businvisit = document.getElementById('businvisit');//商业机会访问次数
	var provisit = document.getElementById('provisit');//产品访问次数
	var corvisit = document.getElementById('corvisit');//商铺访问次数
	var personvisit = document.getElementById('personvisit');//网络名片访问次数
		
		if(totalvisit!=null){
			totalvisit.innerText = arrcount[0];
			}
		
		if(businvisit!=null){
			businvisit.innerText = arrcount[1];
			}
		
		if(provisit!=null){
			provisit.innerText = arrcount[2];
			}
		
		if(corvisit!=null){
			corvisit.innerText = arrcount[3];
			}
		
		if(personvisit!=null){
			personvisit.innerText = arrcount[4];
			}
}

function SendData(url,objid,returntype,sourceobjid){
	var sendstr = '';	
	document.domain = "b2b.hc360.com";
	if(objid){
		var obj = document.getElementById(objid);
		//alert(obj);
		var sendstr = obj.name+'='+obj.value;
  	}
	GetResponse(url,sendstr,returntype,sourceobjid);			
}

function BusinessFunc(obj){
	//alert("obj=" + obj);	
	if(obj == '1' || obj == '-1') {
		//errorFlag = 0;		
		document.getElementById(whichobjid).innerText = "你输入的用户名不存在或无效！";
		document.getElementById(whichobjid).style.display = "";
	}else if(obj == '0'){
		document.getElementById(whichobjid).innerText = "";
		document.getElementById(whichobjid).style.display = "none";
		
		//alert("type="+document.getElementById('frd_operate_type').value);
		//alert("form="+document.getElementById('frd_operate_form').value);
		var op_type = document.getElementById('frd_operate_type').value;
		if(op_type == '1') {
			//提交友情操作
			var f_info_id = document.getElementById('frd_operate_infoid').value;
			var frd_operate_form = document.getElementById('frd_operate_form').value;
			if(f_info_id == ''){
				addFriendLink(3,whichobjid);
			}else {
				//alert("frd_operate_form=" + frd_operate_form);
				editFriendLink(editFriendLink, document.getElementById(frd_operate_form));
			}
			document.getElementById('frd_operate_type').value="";
			document.getElementById('frd_operate_form').value="";
			document.getElementById('frd_operate_infoid').value="";
		}
		
		
		

		//friendAddForm.action="$link.setPage("shop,async,changefriendlink.html")";
	//friendAddForm.submit();
	}	
}

//企业网站1.1新增 2009-08-14 added by weiwei
function slideLine(ul, delay, speed, lh) {
	var slideBox = (typeof ul == 'string')?document.getElementById(ul):ul;
	var delay = delay||1000, speed=speed||20, lh = lh||20;
	var tid = null, pause = false;
	var start = function() {
	tid=setInterval(slide, speed);
	}
	var slide = function() {
	if (pause) return;
	slideBox.scrollTop += 2;
	if (slideBox.scrollTop % lh == 0) {
	clearInterval(tid);
	slideBox.appendChild(slideBox.getElementsByTagName('li')[0]);
	slideBox.scrollTop = 0;
	setTimeout(start, delay);
	}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(start, delay);
}

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
/**
 * 设置当前位置
 */
function setCurrentLocation(current_location){
     current_location_span=document.getElementById('current_location');
     if(current_location_span!=null){
          current_location_span.innerHTML=current_location;
     }
}

/**
 * 设置订阅连接
 */
function setSubscribeLink(subscribe_link){
     subscribe_link_span=document.getElementById('subscribe_link');
     if(subscribe_link_span!=null){
          subscribe_link_span.innerHTML=subscribe_link;
     }
}
/**
商铺尾部显示十大标识时调用 begin
*/
function setTransition(){ 
if (document.all){ 
bannerADrotator.filters.revealTrans.Transition=Math.floor(Math.random()*23); 
bannerADrotator.filters.revealTrans.apply(); 
} 
} 
function playTransition(){ 
if (document.all) 
bannerADrotator.filters.revealTrans.play() 
} 
function nextAd(){ 
if(adNum<bannerAD.length-1)adNum++ ; 
else adNum=0; 
setTransition(); 
document.images.bannerADrotator.src=bannerAD[adNum]; 
playTransition(); 
theTimer=setTimeout("nextAd()", 4000); 
} 
function displayStatusMsg() { 
status=bannerADlink[adNum]; 
document.returnValue = true; 
}
/**
商铺尾部显示十大标识时调用 end
*/
/** 商铺尾部显示十大标识用户滚动广告 begin*/
    var time = 120;
    var h = 0;
    function addCount()
    {	
	
    
        if(time>0)
        {
            time--;
            h = h+2;//展开时步长
        }
        else
        {
            return;
        }
        if(h>120)  //高度
        {
            return;
        }
        document.getElementById("ads").style.display = "";
        document.getElementById("ads").style.height = h+"px";
        setTimeout("addCount()",0); 
    }
    
    var T = 120 ;
    var hh = 120; //高度
    function noneAds()
    {
        if(T>0)
        {
            T--;
            hh = hh-2;//收起时步长
        }
        else
        {
            return;
        }
        if(hh==60)
        {
            document.getElementById("f120").style.display = "none";
			document.getElementById("f60").style.display = "block";
            return;
        }
        
        document.getElementById("ads").style.height = hh+"px";
        setTimeout("noneAds()",0); 
    }
/** 商铺尾部显示十大标识用户滚动广告 end*/
//对页面内的所以PNG图片进行处理
function correctPNG()
{
	for(var i=0; i<document.images.length; i++)
	{
	var img = document.images[i]
	var imgName = img.src.toUpperCase()
	if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
	{
	var imgID = (img.id) ? "id='" + img.id + "' " : ""
	var imgClass = (img.className) ? "class='" + img.className + "' " : ""
	var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
	var imgStyle = "display:inline-block;" + img.style.cssText
	if (img.align == "left") imgStyle = "float:left;" + imgStyle
	if (img.align == "right") imgStyle = "float:right;" + imgStyle
	if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
	var strNewHTML = "<span " + imgID + imgClass + imgTitle
	+ " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
	+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
	+ "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
	img.outerHTML = strNewHTML
	i = i-1
	}
	}
}

function hideToolBars(){
	try{
		
		getElement('onlineServer').style.visibility='hidden';
		
	}catch(e){
		
	}
	try{
		
		getElement('rollBackMenu').style.display='none';
		
		
	}catch(e){
		
	}
	try{
		
		getElement('Color').style.display='none';
		
		
	}catch(e){
		
	}
	try{
		getElement('subMenuShow').style.display='none';
		
	}catch(e){
		
	}
}

function proDetailimgresize222(imgId,boxWidth,boxHeight)
{
	var imgWidth=jQuery("#"+imgId).width();
	var imgHeight=jQuery("#"+imgId).height();
	


	//比较imgBox的长宽比与img的长宽比大小
	if((boxWidth/boxHeight)>=(imgWidth/imgHeight))
	{
		//重新设置img的width和height
		jQuery("#"+imgId).width((boxHeight*imgWidth)/imgHeight);
		jQuery("#"+imgId).height(boxHeight);
		//让图片居中显示
		var marginleft=(boxWidth-jQuery("#"+imgId).width())/2;
		jQuery("#"+imgId).css("margin-left",marginleft);
		


	}
	else
	{
		//重新设置img的width和height
		jQuery("#"+imgId).width(boxWidth);
		jQuery("#"+imgId).height((boxWidth*imgHeight)/imgWidth);
		//让图片居中显示
		var margintop=(boxHeight-jQuery("#"+imgId).height())/2;
		jQuery("#"+imgId).css("margin-top",margintop);
	}
}
function proDetailimgresize(imgId,boxWidth,boxHeight)
{
	var imgWidth=jQuery("#"+imgId).width();
	var imgHeight=jQuery("#"+imgId).height();
	
	if(imgWidth>boxWidth||imgHeight>boxHeight){
		//重新设置img的width和height
		var scale = 0;
		if(imgWidth>imgHeight){
			scale = imgWidth/boxWidth;
		}else{
			scale = imgHeight/boxHeight;
		}
		
		jQuery("#"+imgId).width(imgWidth/scale);
		jQuery("#"+imgId).height(imgHeight/scale);

	}
	//让图片居中显示
		var marginleft=(boxWidth-jQuery("#"+imgId).width())/2;
		jQuery("#"+imgId).css("margin-left",marginleft);
		//ie6下 不知道为什么图片居右,所以改成居左
		jQuery("#"+imgId).css("text-align","left");
		

	//让图片居中显示
		var margintop=(boxHeight-jQuery("#"+imgId).height())/2;
		jQuery("#"+imgId).css("margin-top",margintop);

	
}
/** 对图片实现等比缩放 并小图居中 */
function proDetailimgresize11(img,w,h) {

    //remove default attribute
    img.removeAttribute("width");
    img.removeAttribute("height");
    var pic;
    //if is ie
    if(window.ActiveXObject) {
        var pic=new Image();
        pic.src=img.src;
    } else pic=img;
    if(pic && pic.width && pic.height && w) {
        if(!h) h=w;
        if(pic.width>w||pic.height>h) {
            var scale=pic.width/pic.height,fit=scale>=w/h;
            if(window.ActiveXObject) img=img.style;
            img[fit?'width':'height']=fit?w:h;
            //if is ie6
            if(window.ActiveXObject){
                img[fit?'height':'width']=(fit?w:h)*(fit?1/scale:scale);
            }
        }
    }
    var imgTop = 0 ;
    var imgLeft = 0 ;
    if(img.height<h){
    	imgTop = (h-img.height)/2 + "px";
	}else{
		imgTop = 0 + "px"; 
	}
	if(img.width<w){
    	imgLeft = (w-img.width)/2 + "px";
	}else{
		imgLeft = 0 + "px"; 
	}
	//img.style.margin=imgTop+"px"+imgLeft+"px auto";
	//jQuery("#focdiv").css({marginTop:imgTop});
	getElement("focpic").style.marginTop = imgTop;
	getElement("focpic").style.marginLeft = imgLeft;
	
}
//对图片实现等比缩放
function imgresize(img,w,h) {
    //remove default attribute
    img.removeAttribute("width");
    img.removeAttribute("height");
    var pic;
    //if is ie
    if(window.ActiveXObject) {
        var pic=new Image();
        pic.src=img.src;
    } else pic=img;
    if(pic && pic.width && pic.height && w) {
        if(!h) h=w;
        if(pic.width>w||pic.height>h) {
            var scale=pic.width/pic.height,fit=scale>=w/h;
            if(window.ActiveXObject) img=img.style;
            img[fit?'width':'height']=fit?w:h;
            //if is ie6
            if(window.ActiveXObject){
                img[fit?'height':'width']=(fit?w:h)*(fit?1/scale:scale);
            }
        }
    }
    
	/*
        w=ImgD.width;h=ImgD.height;
        //alert("w="+w+";h="+h);
        //如果宽度超过最大设定值，则给宽度设成指定最大宽度，然后按比例计算得到高度。
        if(ImgD.width>fixwidth) { ImgD.width=fixwidth;ImgD.height=h/(w/fixwidth);} 
        //如果缩小后的高度还比最大值大，则需把高度设成指定最大高度，然后按比例缩小宽度，此时就可以实现宽带和高度都不大于最大值了。
        if(ImgD.height>fixheight) { 
        w=ImgD.width;h=ImgD.height;
        ImgD.height=fixheight;ImgD.width=w/(h/fixheight);}
        */
}
/* 
 * 针对
 * http://detail.b2b.hc360.com/detail/turbine/template/shop
 * 下的页面
 * 根据当前访问host url
 * 获取rewrite后的page url 地址
 * 
 */
function getB2BShopRewriteUrl(username,providerid,pageName){
	var curHostName=document.location.hostname;
    var tmurl="";
    if(curHostName=="detail.b2b.hc360.com"){
		tmurl="http://detail.b2b.hc360.com/detail/turbine/template/shop,"+pageName+"?providerid="+providerid;
	}else if(curHostName.indexOf(".b2b.hc360.com")>=0){
		tmurl="http://"+username+".b2b.hc360.com/shop/"+pageName+"?providerid="+providerid;
	}else{
		tmurl="http://"+curHostName+"/"+username+"/shop/"+pageName+"?providerid="+providerid;
	}
	return tmurl;
}
//outerHTML兼容IE和firefox
if(typeof(HTMLElement)!="undefined" && !window.opera)    
{    
    HTMLElement.prototype.__defineGetter__("outerHTML",function()    
    {    
        var a=this.attributes, str="<"+this.tagName, i=0;for(;i<a.length;i++)    
        if(a[i].specified)    
            str+=" "+a[i].name+'="'+a[i].value+'"';    
        if(!this.canHaveChildren)    
            return str+" />";    
        return str+">"+this.innerHTML+"</"+this.tagName+">";    
    });    
    HTMLElement.prototype.__defineSetter__("outerHTML",function(s)    
    {    
        var r = this.ownerDocument.createRange();    
        r.setStartBefore(this);    
        var df = r.createContextualFragment(s);    
        this.parentNode.replaceChild(df, this);    
        return s;    
    });    
    HTMLElement.prototype.__defineGetter__("canHaveChildren",function()    
    {    
        return !/^(area|base|basefont|col|frame|hr|img|br|input|isindex|link|meta|param)$/.test(this.tagName.toLowerCase());    
    });    
} 

/*
 * 通栏产品橱窗翻页代码
 * http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/ppreh.gif
 * http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/ppre.gif
 * http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/pnext.gif
 * http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/pnexth.gif
 * 
 */
var proTlCurPage = 1;

function preTLInfos() {
    if(typeof proTLpagesize == "undefined"){
    	pagesize = getRadioValue("ctl_tlset");
	}else{
		pagesize = proTLpagesize;
	}
    var infos = getElement("boxProTlInfo").getElementsByTagName("li");
    proTlCurPage = proTlCurPage - 1;
    initTLBtn(infos.length,pagesize);
    for (var i = 0; i < infos.length; i++) {
        if (i >= pagesize * (proTlCurPage - 1)
                && i < proTlCurPage * pagesize) {
            infos[i].className="";//.style.display = "";
        } else {
            infos[i].className="imgDisplayNone";//.style.display = "none";
        }
    }
}

function nextTLInfos() {
	if(typeof proTLpagesize == "undefined"){
    	pagesize = getRadioValue("ctl_tlset");
	}else{
		pagesize = proTLpagesize;
	}
    var infos = getElement("boxProTlInfo").getElementsByTagName("li");

    if(infos.length>pagesize){
    	proTlCurPage = proTlCurPage + 1;
    }
    initTLBtn(infos.length,pagesize);
    for (var i = 0; i < infos.length; i++) {
        if (i >= pagesize * (proTlCurPage - 1)
                && i < proTlCurPage * pagesize) {
            infos[i].className="";//.style.display = "";
        } else {
            infos[i].className="imgDisplayNone";//.style.display = "none";
        }
    }
    // getElement("nextProTL").innerHTML="<img
    // src=\"http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/pnext.gif\"
    // />";
    // getElement("boxProTlInfo").style.top=
    // getElement("boxProTlInfo").style.top+getElement("preProTL").style.height+'px';
}

function initTLBtn(infosLen,pagesize) {
    if (proTlCurPage <= 1) {
        proTlCurPage = 1;
        getElement("preProTL").innerHTML = "<img src=\"http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/ppreh.gif\" />";
        getElement("preProTL").style.cursor = "";
    } else {
        getElement("preProTL").innerHTML = "<img src=\"http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/ppre.gif\" />";

        getElement("preProTL").style.cursor = "pointer";
    }
    var maxPage = Math.ceil(infosLen / pagesize);

    if (proTlCurPage >= maxPage) {
        proTlCurPage = maxPage;
        getElement("nextProTL").innerHTML = "<img src=\"http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/prnexth.gif\" />";
        getElement("nextProTL").style.cursor = "";
    } else {
        getElement("nextProTL").innerHTML = "<img src=\"http://style.org.hc360.com/images/detail/mysite/siteconfig/xuanpu3/pnext.gif\" />";
        getElement("nextProTL").style.cursor = "pointer";
    }
}