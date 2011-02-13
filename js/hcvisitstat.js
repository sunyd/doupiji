var hcvisitstatUrl = "http://log.b2b.hc360.com/logmanage/log";


var visitproviderid = readCookie("hcproviderid");
	

function createCookie(nm,val,y){
	var exp="";
	if(y){ 
		var dt=new Date(); 
		dt.setTime(dt.getTime()+(y*86400000)); 
		exp="; expires="+dt.toGMTString();
	} 
	document.cookie=nm+"="+escape(val)+exp+";path=/"; 
}

function readCookie(nm){ 
	var m=""; 
	if(window.RegExp){ 
		var re=new RegExp(";\\s*"+nm+"=([^;]*)","i"); 
		m=re.exec(';'+document.cookie); 
	} 
	return(m?unescape(m[1]):"");
}

//记录企业,名片访问记录
function hcVistStat(providerid,infotype,infoid,infoname){
	var urlStr = hcvisitstatUrl + "";
	var visitproviderid = readCookie("newhcproviderid") + "";
	if(visitproviderid==providerid){//过滤自己访问自己的情况
		return;
		}
	if(!visitproviderid==""){
		if(document.images) 
		{
	    (new Image()).src= urlStr +"?providerid="+providerid+"&infotype="+infotype+"&infoid="+infoid+"&infoname="+infoname+"&visitproviderid="+visitproviderid;
	  	}
	}else{
		if(document.images)
		{
	    (new Image()).src= urlStr +"?providerid="+providerid+"&infotype="+infotype+"&infoid="+infoid+"&infoname="+infoname;
	  	}
	}
}

//记录商机,产品访问记录
function hcVistStatInfo(providerid,infotype,infoid,infoname,l3supcatid,supcatid){
	var urlStr = hcvisitstatUrl;
	var visitproviderid = readCookie("newhcproviderid") + "";
	if(visitproviderid==providerid){//过滤自己访问自己的情况
		return;
	}

	if(document.images){
   		(new Image()).src= urlStr +"?providerid="+providerid+"&infotype="+infotype+"&infoid="+infoid+"&infoname="+infoname+"&visitproviderid="+visitproviderid+"&l3supcatid="+l3supcatid+"&supcatid="+supcatid;
  	}
}
//记录商机,产品访问记录，改为ajax方式调用
function hcVistStatInfo4Ajax(username,providerid,infotype,infoid,infoname,l3supcatid,supcatid){
	var urlStr = hcvisitstatUrl;
	var visitproviderid = readCookie("newhcproviderid") + "";
	if(visitproviderid==providerid){//过滤自己访问自己的情况
		return;
	}
  	var jumpStr = "urlStr=" + urlStr +"&providerid="+providerid+"&infotype="+infotype+"&infoid="+infoid+"&infoname="+infoname+"&visitproviderid="+visitproviderid+"&l3supcatid="+l3supcatid+"&supcatid="+supcatid;
  	//正式环境下使用，有rewrite过程
  	//var acessStr = "http://" + username + ".b2b.hc360.com/action/shop,async,logproxy.html?";
  	//本地开发环境用，没有rewrite过程
  	var acessStr = "http://detail.b2b.hc360.com/detail/turbine/template/shop,async,logproxy.html?";
  	GetResponse(acessStr + jumpStr, 'logproxyid', 'txt', 'logproxyid');
  	//GetResponse("http://detail.b2b.hc360.com/detail/turbine/template/pubinfo,logproxy.html?" + jumpStr, '', 'txt', '');
}

function hcVistStatInfo4AjaxNew(username,providerid,infotype,infoid,infoname,l3supcatid,supcatid,visitproviderid,memtypeid,areaid,isNewVisitor,isFromOtherSite,searchkeyword){
	var urlStr = hcvisitstatUrl;
	var visitproviderid = visitproviderid+"";
	if(visitproviderid==providerid){
		return;
	}
  		var url = "http://log.b2b.hc360.com/logmanage/log";
		var r = new AjaxRequest("post",url,false);
		r.setParameter("username",username);
		r.setParameter("providerid",providerid);
		r.setParameter("infotype",infotype);
		r.setParameter("infoid",infoid);
		r.setParameter("infoname",infoname);
		r.setParameter("visitproviderid",visitproviderid);
		r.setParameter("l3supcatid",l3supcatid);
		r.setParameter("supcatid",supcatid);
		r.setParameter("memtypeid",memtypeid);	
		r.setParameter("areaid",areaid);
		r.setParameter("isNewVisitor",isNewVisitor);	
		r.setParameter("isFromOtherSite",isFromOtherSite);	
		r.setParameter("searchkeyword",searchkeyword);		
		r.send(null);
    	r.onresult = function(){
		   //showInfoHaveUsed(obj,r.getText());
		}
}


function increaseCounter(providerid){

  	//var acessStr = "http://detail.b2b.hc360.com/detail/turbine/template/shop,async,logproxy.html";
  	var acessStr = "http://log.b2b.hc360.com/logmanage/sitecounter/mysite_counter.jsp";
  	//GetResponse(acessStr + jumpStr, 'logproxyid', 'txt', 'logproxyid');
  	//GetResponse("http://detail.b2b.hc360.com/detail/turbine/template/pubinfo,logproxy.html?" + jumpStr, '', 'txt', '');
  	//调用AjaxRequest.js方式
	var url = acessStr;
		var r = new AjaxRequest("post",url,false);
		//r.setParameter("urlStr",urlStr);
		r.setParameter("providerid",providerid);
		r.send(null);
    	r.onresult = function(){
		   //showInfoHaveUsed(obj,r.getText());
		}
}

