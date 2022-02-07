function OnclickUrl(url)
{
    window.location.href=url;
}
//2015������Javascript���뿪ʼ
///��ҳ��ʼ


//��������
function NewsAndDivTable(curr_id, total_num) {
console.log(curr_id);
    for (var i = 0; i < total_num; i++) {
        var newstitle = document.getElementById('newsimg' + i);
        var newsdiv = document.getElementById('newsDiv' + i);

        if (i == curr_id) {
            newstitle.className = "NewsOverTable";
            newsdiv.style.display = "block";
        }
        else {
            newstitle.className = "NewsOutTable";
            newsdiv.style.display = "none";
        }
    }
}
//����ֿ�
function OpenAndDivTable(curr_id, total_num) {
    for (var i = 0; i < total_num; i++) {
        var newstitle = document.getElementById('Openimg' + i);
        var newsdiv = document.getElementById('OpenDiv' + i);
//      newstitle.style.backgroundColor='#fff';
        newstitle.removeAttribute('background');
        if (i == curr_id) {
            newstitle.className = "OpenOverTable";
            newstitle.setAttribute('background','/cdedu/xhtml/images/gov4.gif');
//          newstitle.style.backgroundColor='#DCF1FF';
            newsdiv.style.display = "block";
        }
        else {
            newstitle.className = "OpenOutTable";
            newsdiv.style.display = "none";
//          newstitle.style.backgroundColor='#fff';
            newstitle.removeAttribute('background');
        }
    }
}

//���·���
function ServiceDivTable(curr_id, total_num) {
    for (var i = 0; i < total_num; i++) {
        var newstitle = document.getElementById('Serviceimg' + i);
        var newsdiv = document.getElementById('ServiceDiv' + i);
        if (i == curr_id) {
            newstitle.className = "OpenOverTable";
            newsdiv.style.display = "block";
        }
        else {
            newstitle.className = "OpenOutTable";
            newsdiv.style.display = "none";
        }
    }
}

//���ڲ���
function ParticipateDivTable(curr_id, total_num) {
    for (var i = 0; i < total_num; i++) {
        var newstitle = document.getElementById('Participateimg' + i);
        var newsdiv = document.getElementById('ParticipateDiv' + i);
         newstitle.removeAttribute('background');
        if (i == curr_id) {
            newstitle.className = "OpenOverTable";
            newstitle.setAttribute('background','/cdedu/xhtml/images/gov4.gif');
            newsdiv.style.display = "block";
        }
        else {
            newstitle.className = "OpenOutTable";
            newsdiv.style.display = "none";
            newstitle.removeAttribute('background');
        }
    }
}


//��������
function OnlineAndDivTable(curr_id, total_num) {
    for (var i = 0; i < total_num; i++) {
        var newstitle = document.getElementById('Onlineimg' + i);
        var newsdiv = document.getElementById('OnlineDiv' + i);
        if (i == curr_id) {
            //newstitle.background="js/NewsOver.png";
            newstitle.className = "OnlineOver";
            newsdiv.style.display = "block";
        }
        else {
            //newstitle.background="js/NewsOut.png";            
            newstitle.className = "OnlineOut";
            newsdiv.style.display = "none";
        }
    }
}

//��������
function LinkAndDivTable(curr_id, total_num) {
    for (var i = 0; i < total_num; i++) {
        //var newstitle = document.getElementById('Linkimg'+i);
        var newsdiv = document.getElementById('LinkDiv' + i);
        if (i == curr_id) {
            //newstitle.background="js/NewsOver.png";
            // newstitle.className="NewsOver";
            newsdiv.style.display = "block";
        }
        else {
            //newstitle.background="js/NewsOut.png";            
            //newstitle.className="NewsOut";
            newsdiv.style.display = "none";
        }
    }
}
//2015������Javascript�������

function SetHome(obj,vrl){ 
	try{ 
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
	}catch(e){ 
		if(window.netscape){ 
			try { 
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
			}catch (e) { 
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
			} 
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
			prefs.setCharPref('browser.startup.homepage',vrl); 
		}else{ 
			alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入："+vrl+"点击确定。"); 
		} 
	} 
} 
