/*  _divName    div元素名

    _nPageCount 总页数；

    _nCurrIndex 当前页码；

    _sPageName  共同前缀名；

    _sPageExt   分页页面的文件名后缀;

    _nPageSum   总记录数

*/

function createPageHTML(_divName, _nPageCount, _nCurrIndex, _sPageName, _sPageExt, _nPageSum) {
	var con_text = "";
	var hover="";
	var pagination_num=[];
	var num=7;//页数展示个数，只能为奇数
	if(_nPageCount == null || _nPageCount < 1) return;
	
	con_text += "<span class=\"pagination-first\"><a class=\"pagination-index\" href=\""+_sPageName+"."+_sPageExt+"\">首页</a>";
	if(_nCurrIndex == 1){
		con_text += "<a class=\"pagination-index\" href=\"javascript:;\">上一页</a>";
	}else{
		if(_nCurrIndex == 2){
			con_text += "<a class=\"pagination-index\" href=\""+_sPageName+"."+_sPageExt+"\">上一页</a>";
		}else{
			con_text += "<a class=\"pagination-index\" href=\""+_sPageName+"_"+(_nCurrIndex-1)+"."+_sPageExt+"\">上一页</a>";
		}
	}
	
	
	for(var i=0;i<num;i++){
		var pagination_num_txt=_nCurrIndex-(num-1)/2+i;
		hover=(i==(num-1)/2)?"hover":"";
		if(pagination_num_txt==1){
			pagination_num[i]="<a class=\"pagination-num "+hover+"\" href=\""+_sPageName+"."+_sPageExt+"\">"+pagination_num_txt+"</a>";
		}else{
			pagination_num[i]="<a class=\"pagination-num "+hover+"\" href=\""+_sPageName+"_"+pagination_num_txt+"."+_sPageExt+"\">"+pagination_num_txt+"</a>";
		}
		if(pagination_num_txt>_nPageCount||pagination_num_txt<1){
			pagination_num[i]="";
		}
		con_text+=pagination_num[i];
	}
	
	
	if(_nCurrIndex == _nPageCount){
		con_text += "<a class=\"pagination-index\" href=\"javascript:;\">下一页</a>";
	}else{
		con_text += "<a class=\"pagination-index\" href=\""+_sPageName+"_"+(_nCurrIndex+1)+"."+_sPageExt+"\">下一页</a>";
	}
	if(_nPageCount == 1){
		con_text += "<a class=\"pagination-index\" href=\"javascript:;\">末页</a></span>";
	}else{
		con_text += "<a class=\"pagination-index\" href=\""+_sPageName+"_"+_nPageCount+"."+_sPageExt+"\">末页</a></span>";
	}
	
	
	con_text += "<span class=\"pagination-last\">\
	<span>当前第 "+_nCurrIndex+" 页</span>\
	<span>跳转至</span>\
	<input id=\"pagination-input\" type=\"text\">\
	<span>页</span>\
	<a href=\"javascript:;\" onclick=\"pagination_go('"+_sPageName+"','"+_sPageExt+"','"+_nPageCount+"')\">跳转</a>\
	<span>共 "+_nPageCount+" 页</span>\
	<span>共 "+_nPageSum+" 条</span>\
	</span>"
	
	document.getElementById(_divName).innerHTML=con_text;
}

function pagination_go(sPageName, sPageExt, nPageCount) {//跳转
    var gopageID = document.getElementById('pagination-input').value;
    gopageID = gopageID.replace(" ", '');
    if(gopageID) {
        if(parseInt(gopageID) <= nPageCount && parseInt(gopageID) > 0) {
            if(gopageID == "1") {
                window.location.href = sPageName + "." + sPageExt;
            } else {
                window.location.href = sPageName + "_" + gopageID + "." + sPageExt;
            }
        }
    }
    return false;
}


///////内容页上一篇下一篇功能;_nNowPageID当前信息ID
function ContentUporNext(_nNowPageID, _target, _type) {
    if(!content_str) return false;
    if(content_str.lastIndexOf(",") == content_str.length - 1) {
        content_str = content_str.substring(0, content_str.length - 1);
    }
    var tst = content_str.split(",");
    for(var i = 0; i < tst.length; i++) {
        var iscan = tst[i].indexOf(_nNowPageID + ":");
        if(iscan != -1) {
            if(i == 0) { ///此时没有上一篇
                var prevReg = /^[PREV]|[prev]$/;
                if("PREV" != _type) {
                    var content_tst = tst[i + 1].split(":");
                    if(content_tst[2] && content_tst[2].indexOf("..") > -1) {
                        content_tst[2] = content_tst[2].substring(content_tst[2].lastIndexOf("..") + 2);
                    }
                    document.write("<a  href='" + content_tst[2] + "' target='" + _target + "'>" + content_tst[1] + "<FONT face=Webdings>4</FONT></a>");
                }
            } else if(i == tst.length - 1) { //此时没有下一篇
                if("NEXT" != _type) {
                    var content_tst = tst[i - 1].split(":");
                    if(content_tst[2] && content_tst[2].indexOf("..") > -1) {
                        content_tst[2] = content_tst[2].substring(content_tst[2].lastIndexOf("..") + 2);
                    }
                    document.write("<a  href='" + content_tst[2] + "' target='" + _target + "'><FONT face=Webdings>3</FONT>" + content_tst[1] + "</a>");
                }
            } else {
                if("PREV" == _type) {
                    var content_up = tst[i - 1].split(":");
                    if(content_up[2] && content_up[2].indexOf("..") > -1) {
                        content_up[2] = content_up[2].substring(content_up[2].lastIndexOf("..") + 2);
                    }
                    document.write("<a href='" + content_up[2] + "' target='" + _target + "'><FONT face=Webdings>3</FONT>" + content_up[1] + "</a>&nbsp;&nbsp;&nbsp;&nbsp;");
                }
                if("NEXT" == _type) {
                    var content_next = tst[i + 1].split(":");
                    if(content_next[2] && content_next[2].indexOf("..") > -1) {
                        content_next[2] = content_next[2].substring(content_next[2].lastIndexOf("..") + 2);
                    }
                    document.write("<a href='" + content_next[2] + "' target='" + _target + "'>" + content_next[1] + "<FONT face=Webdings>4</FONT></a>");
                }
            }
            break;
        }
    }
}