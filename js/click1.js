function hcclick(param) {
    if(document.images) {
	var rannumber=Math.round(Math.random()*10000);
        (new Image()).src="http://log.info.hc360.com/click.htm" + param + "&rannumber="+rannumber;
    }
    return true;
}