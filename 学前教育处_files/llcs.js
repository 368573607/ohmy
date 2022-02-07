$(function(){
//列表获取栏目地址访问量
    var url1 = window.location.href;
	if(url1.indexOf("content_")==-1) return;
    var id;
    if(url1.indexOf("content_")>0){
        id = getAToBStr("content_",".shtml",url1);
    }else{
        id = getAToBStr("/",".shtml",url1);
    }
    var split;
	var strs = url1.split("/");
	url1 = strs[strs.length - 4] + "/";
// 栏目type=1,稿件type=2
    var mydata={type : 2,resourceId : id,url:url1};
    $.ajax({
        url : "/cms-access-count/accessCount/addCount.do",
        type : "post",
        data : mydata,
        dataType : "json",
        error : function(result) {
            console.log('失败');
        },
        success : function(result) {
            $("#Browse").html(result.count);
        }
    });

//取a与b之间的内容
    function getAToBStr(a,b,str){
        var indexA = str.lastIndexOf(a) + a.length;
        var indexB = str.lastIndexOf(b);
        if(indexA == -1) return "";
        return str.substring(indexA, indexB);
    }	
});

$(function(){
function rdph(wid2,doc){//热点排行
	if(!$(doc).length) return;
// 栏目type=1,稿件type=2
    var mydata={type : 2,pageNumber : 1,limit:10,wid:wid2};
    var dhks;
    $.ajax({
        url : "/cms-access-count/accessCount/getCountList.do",
        type : "post",
        data : mydata,
        dataType : "json",
        error : function(result) {
            console.log('失败');
        },
        success : function(result) {
        	var json = result;
        	var html='<ul>';
        	for(var i=0;i<json.data.result.length;i++){
        		html+='<li><a href="/pzs/'+json.data.result[i].URL+'" target="_blank">'+json.data.result[i].TITLE+'</a></li>'
        	}
        	html+='</ul>';
            $(doc).html(html);
            func2(doc+' li',doc+' ul','li');
        }
    });
    
    function func2(arg1,arg2,arg3) {//arg1(选择器):单个容器比如li,arg2(选择器):总容器比如ul,arg3(标签):添加的单个容器比如li标签
        var jgtime=3000;//间隔时间
        var sulv=1000;//动画时间
        if($(arg1).length<=1) return;
        function xunhuan(){
               var liheight=$(arg1).eq(0).height()+parseInt($(arg1).eq(0).css('margin-bottom'));
               $(arg2).animate({top:-liheight+'px'},sulv,function(){
                       var html=$(arg1).eq(0).html();
                       $(arg1).eq(0).remove();
                       $(arg2).append('<'+arg3+'>'+html+'</'+arg3+'>');
                       $(this).css('top',0);
               });
        }
        window.setInterval(xunhuan,jgtime);
	}

}
rdph('93ae3e92a5244999a3ef795c46506b8b','#syrdph');

});