try
{	
	var _$aVersion = '20161011';
	var _Sauthor;
	var _Scount_iframe = true;
	var _Sload_time;
	var _Spage_type;
	var _Spage_pic;
	var _Spage_id;
	var _$aformlist = '';
	var _$aformdetails = {};
	var _$aformfielddetails = {};
	var _$awebsite = _$apartner_website = '10000063';
	var _Spartner_website_id;
	var _Schannel_website_id;
	var _Schannel_webshop_id;
	var _Spageformjs = false;
	var _Sorder_encode_url;
	var _$achkdomain = '';
	if (_Scount_iframe === true)
	{
		var _$adocument = top.window.document;
	}
	else
	{
		var _$adocument = window.document;
	}
	var _$adocumentbody = _$adocument.getElementsByTagName('body')[0];
	var _$aprotocol = _$adocument.location.protocol;
	var _trackDataType;
	var _trackData = _trackData || [];
	var _$aiserror = 0;
	var _$aerrorcode = '';
	var _$aflashid = 'yfx_n_r_u';
	var _$acounturl = '//10.1.231.85:8025/phpstat/';
	var _$acounturl_proxy = '//171.221.172.149:8025/phpstat/';
	var _$amediumsource = _$amediumsourcefirst = _$akeywordsource = _$aedmemail = _$akeywordkey = '';
	var _$astarttime = _$atimestart = _$aloadtime = _$adowntime = _$agettime = (new Date()).getTime();
	window.onerror =  function(msg, url, line, column) {
		_$aerrorcode = "msg["+msg+"]#line["+line+"]#column["+column+"]";
		return true;
    };
	function _$aunicode(s){
	   var len=s.length;
	   var rs=0;
	   for(var i=0;i<len;i++){
			  rs+= parseInt(s.charCodeAt(i)%10);
	   }
	   return rs;
	}
	function _$areadmapcookie(name)
	{
		var cV = end = '';
		var v = name + '=';
		if (_$adocument.cookie) 
		{
			var p = _$adocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$adocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$adocument.cookie.length;};
				cV = _$adocument.cookie.substring(p, end);
			}
			return cV;
		}
	}
	function _$asplitdomain(gethost)
	{
		var pattern = new Array();
		var domain  = '';
		var isdomain  = 0;
		var domainlen = 0;
		pattern['.com.cn']	= 4;
		pattern['.net.cn']	= 4;
		pattern['.gov.cn']	= 4;
		pattern['.org.cn']	= 4;
		pattern['.com']	= 3;
		pattern['.net']	= 3;
		pattern['.org']	= 3;
		pattern['.gov']	= 3;
		pattern['.cc']	= 3;
		pattern['.biz']	= 3;
		pattern['.info']= 3;
		pattern['.cn']	= 3;
		pattern['.hk']	= 3;			
		for( var dk in pattern )
		{
			if( gethost.indexOf(dk) > -1 )
			{
				isdomain = 1;
				domainlen = parseInt(pattern[dk]);
				break;
			}
		}
		if( isdomain == 1 )
		{
			var s = gethost.split('.');
			if( s.length >= (domainlen) )
			{
				s[0] = '';
				domain = (s.join('.')).substr(1);
			}
			else
			{
				domain = gethost;
			}
		}
		else
		{
			domain = gethost;
		}
		return domain;
	}
	function _$agetservercookie(ghostvar,gtype)
	{
		var _$aurl = _$acounturl + '/getcookie.js.php';
		var _$aobj = _$adocument.createElement('script');
		_$aobj.type = 'text/javascript';
		_$aobj.async = true;
		_$aobj.id = 'getcookie_id';
		_$aobj.charset = 'utf-8';
		var _$adurl = _$aurl + '?website=' + _$awebsite + '&prefix=_$a&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
		_$adocument.getElementsByTagName('head').item(0).appendChild(_$aobj);
		_$adocument.getElementById('getcookie_id').src = _$adurl;
	}
	(function() {
		var CHARS = '01234567891357924680'.split('');
		Math.uuid = function (len, radix) 
		{
			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;

			if (len)
			{
				for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
			}
			return uuid.join('');
		};
	})();
	function _$aflash_cookie()
	{
		var f=0;
		var v=0;
		var swf;
		var ie = _$auseragent.match(/msie ([\d.]+)/);
		if(ie)
		{
			try {
			swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf) 
			{
				f=1;
				var vs=swf.GetVariable("$version");
				v=parseInt(vs.split(" ")[1].split(",")[0]);
			}
			}
			catch (e) {
			}
		}
		else
		{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					f=1;
					var ws = swf.description.split(" ");
					for (var i = 0; i < ws.length; ++i)
					{
						if (isNaN(parseInt(ws[i]))) continue;
						v = parseInt(ws[i]);
					}
				}
			}
		}
		return {f:f,v:v};
	}	
	var _$arandomid = _$astarttime;
	var _$auseragent = navigator.userAgent.toLowerCase();
	var _$atelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$auseragent);
	_$atelphone = _$atelphone === null ? '' : _$atelphone[0];
	var _$aflashok = _$aflash_cookie();
	var _$aphpstat_flash_object;
	function _$adownloadflash(){

		"use strict";
		var counter = 0;	
		var alpnum = /[^a-z0-9_]/ig;

		window.phpstatCookie = function(config){
			config = config || {};
			var defaults = {
				swf_url: _$acounturl_proxy+'/cookie/storage.swf',
				namespace: 'namespace_phpstat',
				debug: true,
				timeout: 10,
				onready: null,
				onerror: null
			};
			var key;
			for(key in defaults){
				if(defaults.hasOwnProperty(key)){
					if(!config.hasOwnProperty(key)){
						config[key] = defaults[key];
					}
				}
			}
			function _$adiv(visible){
				var d = _$adocument.createElement('div');
					d.id = "phpstat_js_div_id_10000063";
				var s = (_$afgid('phpstat_js_id_10000063')||_$afgid('phpstat_js_id')); 
				if (s)
				{				
					d.async = true; 
					s.parentNode.insertBefore(d, s);
				}
				return d;
			}
			var swfContainer = _$adiv(config.debug);
			config.namespace = config.namespace.replace(alpnum, '_');
			this.config = config;		
			function _$afid(){
				return "phpstatCookie_" + config.namespace + "_" +  (counter++);
			}
			function _$afgid(id){
				return _$adocument.getElementById(id);
			}
			phpstatCookie[config.namespace] = this;
			
			var swfName = _$afid();
				
			var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + 
				"onload=phpstatCookie." + config.namespace + ".onload&amp;" + 
				"onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + 
				"LSOName=" + config.namespace;
				
			swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + 
				swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
				'	<param value="' + config.swf_url + '" name="movie">' + 
				'	<param value="' + flashvars + '" name="FlashVars">' +
				'	<param value="always" name="allowScriptAccess">' +
				'	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
				'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
				'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
				'</object>';
			
			this.swf = _$adocument[swfName] || window[swfName];
			
			this._timeout = setTimeout(function(){
				if(config.onerror){
					config.onerror();
				}
			}, config.timeout * 1000);
		};

		phpstatCookie.prototype = {
	  
			version: "1.5",
			ready: false,
			set: function(key, value){
				this._checkReady();
				this.swf.set(key, value);
			},
			get: function(key){
				this._checkReady();
				return this.swf.get(key);
			},
			getAll: function(){
				this._checkReady();
				var data = this.swf.getAll();
				if(data.__flashBugFix){
					delete data.__flashBugFix;
				}
				return data;
			},
			clear: function(key){
				this._checkReady();
				this.swf.clear(key);
			},
			_checkReady: function(){
			},
			"onload": function(){
				var that = this;
				setTimeout(function(){
				  clearTimeout(that._timeout);
				  that.ready = true;
				  that.set('__flashBugFix','1');
				  if(that.config.onready){
					that.config.onready();
				  }
				}, 0);
			},
			onerror: function(){
				clearTimeout(this._timeout);
				if(this.config.onerror){
					this.config.onerror();
				}
			}
			
		};
	}
	var _$aisdownloadflash = 0;
	if(_$aflashok.v >= 88 && _$adocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$adocumentbody) !== 'undefined' && _$atelphone === '' && _$areadmapcookie('yfxm') === '')
	{
		_$aisdownloadflash = 1;
	}
	if(_$aisdownloadflash === 1)
	{
		_$adownloadflash();
	}
	var _$aclienturl = new Array();
	;
	var _$athehostname = _$adocument.location.hostname;
	var _$agetclienthost;
	for (_$agetclienthost in _$aclienturl) {
		if (_$agetclienthost == _$athehostname) {
			_$acounturl_proxy = _$aclienturl[_$agetclienthost];
			break
		}
	}
	function _$aphpstat(cookietype,serverclientcookie) {
		var _$adoimgerr_1 = 1;
		var _$areferrer = _$adocument.referrer;
		var _$atitle = _$adocument.title;
		var _$ahashcode = _$adocument.location.hash;
		var _$alanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
		var _$acolor = screen.colorDepth;
		var _$aclientwidth = _$adocument.documentElement.clientWidth;
		var _$aclientheight = _$adocument.documentElement.clientHeight;
		var _$ascrollheight = _$adocument.documentElement.scrollHeight;
		var _$ascreensize = screen.width + '*' + screen.height;
		var _$alastmodify = new Date(_$adocument.lastModified).getTime();
		var _$acookie = navigator.cookieEnabled ? 1 : 0;
		var _$autm_replace = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id','ca_kid','ca_source'];
		var _$autm_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id','pmf_id','pmf_group'];
		var _$abdu_replace = ['hmsr','hmmd','hmpl','hmci','hmkw','hmid'];
		var _$abdu_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id'];
		var _$asearchkey = ['baidu','google','yahoo','baidu','soso','sogou','youdao','bing','haosou','sm','so'];var _$akeyword = ['wd','q','p','word','w','query','q','q','q','q','so'];var _$asearchtype = ['default','default','default','default','default','default','default','default','default','default','default'];var _$akeywordrelated = ['bs','','','bs','bs','','lq','','','','so'];;
		var _$ahostname = _$adocument.location.hostname + (_$adocument.location.port.length > 0 ? ':' + _$adocument.location.port : '');
		var _$ahostname_no_port = _$adocument.location.hostname;
		var _$acounturl_logcount = _$acounturl_proxy + '/logcount.php';
		var _$afirsttime;
		var _$alasttime;
		var _$anlasttime;
		var _$avisittime;
		var _$af_l_v_ck = 0;
		var _$areturncount;
		var _$ausercookie;
		var _$asetusercookie;
		var _$aserusercookie;
		var _$ausername;
		var _$auserid;
		var _$auserregtime;
		var _$auserage;
		var _$ausersex;
		var _$adomain = '';
		var _$arefid = new Array();		
		var _$af_l_v_time = new Array();	
		var _$agtd = window._trackData;
		_$arefid['phptag_recom_id'] = '';
		_$adomain	= _$agethost(_$ahostname_no_port);
		_Sauthor	= _$atypeof(_Sauthor);
		_Spage_type	= _$atypeof(_Spage_type);
		_Spage_pic	= _$atypeof(_Spage_pic);
		_Spage_id	= _$atypeof(_Spage_id);
		if (typeof(_Sload_time) == 'undefined') {
			_$adowntime = 0
		} else {
			_$astarttime = parseInt(_Sload_time);
			_$adowntime = _$adowntime - parseInt(_Sload_time)
		}
		_$afirsttime = _$agettimestr('f_t_');
		if (_$afirsttime === '') {
			_$afirsttime = _$agettime;
			_$af_l_v_ck = 1;
		}
			
		if( _$agtd && _$agtd.length )
		{
			for(var _$ak in _$agtd)
			{
				if( !isNaN(_$ak) )
				{
					for(var _$akk in _$agtd[_$ak])
					{
						if( _$agtd[_$ak]['0'] == 'userset' && _$agtd[_$ak]['1'] == 'userid' && _$agtd[_$ak]['2'].length )
						{		
							_$auserid = _$agtd[_$ak]['2'];
							_$asetflashcookie('yfx_s_u_id', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
						if( _$agtd[_$ak]['0'] == 'userset' && _$agtd[_$ak]['1'] == 'username' && _$agtd[_$ak]['2'].length )
						{				
							_$ausername = _$agtd[_$ak]['2'];	
							_$asetflashcookie('yfx_s_u_name', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
						if( _$agtd[_$ak]['0'] == 'userset' && _$agtd[_$ak]['1'] == 'age' && _$agtd[_$ak]['2'].length )
						{					
							_$auserage = _$agtd[_$ak]['2'];
							_$asetflashcookie('yfx_s_u_age', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
						if( _$agtd[_$ak]['0'] == 'userset' && _$agtd[_$ak]['1'] == 'sex' && _$agtd[_$ak]['2'].length )
						{				
							_$ausersex = _$agtd[_$ak]['2'];	
							_$asetflashcookie('yfx_s_u_sex', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
						if( _$agtd[_$ak]['0'] == 'userset' && _$agtd[_$ak]['1'] == 'cookie' && _$agtd[_$ak]['2'].length )
						{			
							_$asetusercookie = _$agtd[_$ak]['2'];		
							_$asetflashcookie('yfx_s_c_g_u_id', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
						if( _$agtd[_$ak]['0'] == 'userregtime' && _$agtd[_$ak]['1'] == 'regtime' && _$agtd[_$ak]['2'].length )
						{					
							_$auserregtime = _$agtd[_$ak]['2'];	
							_$asetflashcookie('yfx_s_u_reg', _$agtd[_$ak]['2'], 3650, _$adomain, '');
						}
					}
				}
			}
		}
		_$areturncount   = _$agettimestr('r_c_');
		_$areturncount	= _$areturncount === '' ? 0 : _$areturncount; 
		_$ausername		= _$ausername || (_$areadflashcookie('PHPSTATNULLCOOKIE') ? _$areadflashcookie('PHPSTATNULLCOOKIE') : (_$areadflashcookie('yfx_s_u_name')?_$areadflashcookie('yfx_s_u_name'):_$areadflashcookie('yfx_s_u_id')));	
		_$auserid		= _$auserid || (_$areadflashcookie('PHPSTATNULLCOOKIE') ? _$areadflashcookie('PHPSTATNULLCOOKIE') : (_$areadflashcookie('yfx_s_u_id')?_$areadflashcookie('yfx_s_u_id'):_$areadflashcookie('yfx_s_u_name')));	
		_$auserage		= _$auserage || (_$areadflashcookie('PHPSTATNULLCOOKIE') ? _$areadflashcookie('PHPSTATNULLCOOKIE') : _$areadflashcookie('yfx_s_u_age'));
		_$auserregtime	= _$auserregtime || (_$areadflashcookie('PHPSTATNULLCOOKIE') ? _$areadflashcookie('PHPSTATNULLCOOKIE') : _$areadflashcookie('yfx_s_u_reg'));	
		_$ausersex		= _$ausersex || (_$areadflashcookie('PHPSTATNULLCOOKIE') ? _$areadflashcookie('PHPSTATNULLCOOKIE') : _$areadflashcookie('yfx_s_u_sex'));
		_$asetusercookie	= _$asetusercookie || _$areadflashcookie('yfx_s_c_g_u_id');
		_$ausercookie	= _$asetusercookie || _$areadflashcookie('yfx_c_g_u_id');
		_$aserusercookie	= serverclientcookie || _$areadflashcookie('yfx_c_c_g_u_id');
		if( _$asetusercookie === '' )
		{
			if (_$ausercookie === '' && _$aserusercookie === '' ) {
				_$ausercookie = _$aunique();
				_$asetflashcookie('yfx_c_g_u_id', _$ausercookie, 3650, _$adomain, '');
			}
			if (_$aserusercookie && _$aserusercookie !== _$ausercookie) {
				_$ausercookie = _$aserusercookie;
				_$asetflashcookie('yfx_c_g_u_id', _$aserusercookie, 3650, _$adomain, '');
			}
		}
		else if( _$asetusercookie )
		{
			_$ausercookie = '_ck_'+_$asetusercookie;
			_$aserusercookie = '_ck_'+_$asetusercookie;
		}
		_$alasttime = _$anlasttime = _$agettimestr('r_t_');
		if (_$alasttime === '') {
			_$alasttime = _$anlasttime = _$agettime;
			_$af_l_v_ck = 1;
		}
		if (_$agettime - _$alasttime >= 43200000) {
			_$anlasttime = _$agettime;
			_$areturncount++;
			_$af_l_v_ck = 1;
		} else {
			_$areturncount = _$areturncount
		}
		_$avisittime = _$agettimestr('v_t_');
		if (_$avisittime === '' || (_$agettime - _$avisittime) >= 1800000) {
			_$avisittime = _$agettime;
			_$af_l_v_ck = 1;
		}
		if( _$af_l_v_ck > 0 )
		{
			_$af_l_v_time['0'] = 'f_t_'+_$afirsttime;
			_$af_l_v_time['1'] = 'r_t_'+_$anlasttime;
			_$af_l_v_time['2'] = 'v_t_'+_$avisittime;
			_$af_l_v_time['3'] = 'r_c_'+_$areturncount;
			_$asetflashcookie('yfx_f_l_v_t', _$af_l_v_time.join('__'), 3650, _$adomain, '');
		}
		_$avisittime = '_vk' + _$avisittime;
		function _$agethost(gethost)
		{
			var _$apattern = new Array();
			var _$aisdomain  = 0;
			var _$adomainlen = 0;
			_$apattern['.com.cn']	= 4;
			_$apattern['.net.cn']	= 4;
			_$apattern['.gov.cn']	= 4;
			_$apattern['.org.cn']	= 4;
			_$apattern['.com']	= 3;
			_$apattern['.net']	= 3;
			_$apattern['.org']	= 3;
			_$apattern['.gov']	= 3;
			_$apattern['.cc']	= 3;
			_$apattern['.biz']	= 3;
			_$apattern['.info']	= 3;
			_$apattern['.cn']	= 3;
			_$apattern['.hk']	= 3;			
			for( var $dk in _$apattern )
			{
				if( gethost.indexOf($dk) > -1 )
				{
					_$aisdomain = 1;
					_$adomainlen = parseInt(_$apattern[$dk]);
					break;
				}
			}
			if( _$adomain.length <= 0 )
			{
				if( _$aisdomain == 1 )
				{
					var s = gethost.split('.');
					if( s.length >= (_$adomainlen) )
					{
						s[0] = '';
						_$adomain = (s.join('.')).substr(1);
					}
					else
					{
						_$adomain = gethost;
					}
				}
				else
				{
					_$adomain = gethost;
				}
				return _$adomain;

			}
			else
			{
				return gethost;
			}
		}
		function _$agt() {
			return (new Date()).getTime();
		}
		function _$aencode(s){
			return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
		}
		function _$adecode(s){
			return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
		} 
		function _$aid(id)
		{
			return _$adocument.getElementById(id);
		}
		function _$aname(name)
		{
			return _$adocument.getElementsByName(name);
		}
		function _$aunique() {
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			var H = T.getHours();
			var I = T.getMinutes();
			var S = T.getSeconds();
			var MS = T.getMilliseconds();
			Y = Y < 1900 ? Y + 1900 : Y;
			Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			H = H < 10 ? '0'+''+H : H;
			I = I < 10 ? '0'+''+I : I;
			S = S < 10 ? '0'+''+S : S;
			MS = (MS + 999)+'';
			return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
		}
		function _$agetYMD()
		{
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			Y = Y < 1900 ? Y + 1900 : Y;
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			return Y+'-'+M+'-'+D;
		}
		function _$agettimestr(id)
		{
			id = id || 'f_t_';	
			var flvt_ret = '';
			var flvt_arr = _$areadflashcookie('yfx_f_l_v_t').split('__');
			for(var vk in flvt_arr)
			{
				var vkv = _$atypeof(flvt_arr[vk]);
				if(vkv && vkv.indexOf(id) > -1)
				{
					flvt_ret = vkv.replace(id, '');
				}
			}
			return flvt_ret;
		}
		function _$areadflashcookie(name) 
		{
			var cV = fcV = '';
			if ( !_$aphpstat_flash_object && !_$acookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$aphpstat_flash_object) 
			{
				fcV = _$atypeof(_$aphpstat_flash_object.get(name));
			}
			if (_$acookie) 
			{
				cV = _$atypeof(_$areadcookie(name));
				if( cV !== fcV && fcV )
				{
					cV = fcV;
					_$asetcookie(name, fcV, 3650, _$adomain, '');
				}
				if( fcV === '' && cV && _$aphpstat_flash_object )
				{
					_$asetflashcookie(name, cV, 3650, _$adomain, '');
				}
			}
			return cV;
		}
		function _$areadcookie(name)
		{
			var cV = end = '';
			var v = 'yfx_cookie_group_'+_$awebsite+'=';
				v = name+'_'+_$awebsite+'=';
			if (_$acookie) 
			{
				var p = _$adocument.cookie.indexOf(v);
				if (p > -1) {
					p += v.length;
					end = _$adocument.cookie.indexOf(";", p);
					if (end == -1) {end = _$adocument.cookie.length;};
					cV = _$adecode(_$adocument.cookie.substring(p, end));
				}
				if( name != 'yfx_get_cookie_group' && 0 )
				cV = _$agetgroupcookie(cV,name);
				return _$atypeof(cV);
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$asetflashcookie(name, gv, h, d, t) 
		{
			if ( !_$aphpstat_flash_object && !_$acookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$aphpstat_flash_object) {
				_$aphpstat_flash_object.set(name, gv);
			}
			if (_$acookie)
			{
				_$asetcookie(name, gv, h, d, t);
			}
		}
		function _$asetcookie(name, gv, h, d, t) 
		{
			var v = '';
			if (_$acookie) {
				v = new Date(_$agt() + parseInt(h)*24*60*60*1000);
				v = '; expires=' + v.toGMTString();
				if( t == '' && 0 )
				{
					gv = _$asetgroupcookie(name, gv);
					name = 'yfx_cookie_group_'+_$awebsite;
				}
				name = name+'_'+_$awebsite;
				_$adocument.cookie = name + '=' + _$aencode(gv) + v + ';domain='+d+';path=/;';
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$agetgroupcookie(jsonname,name)
		{
			var returnstr = '';
			var groupcookie = new Array();
			groupcookie = _$adecode(jsonname).split('|:|');
			for( var jk in groupcookie )
			{
				var gcs = _$atypeof(groupcookie[jk]);
				if( gcs.indexOf(name+'=') >= 0 )
				{
					returnstr = gcs.substring((name+'=').length);break;
				}
			}
			return _$atypeof(returnstr) || '';
		}

		function _$asetgroupcookie(name,value)
		{
			var jsonname = _$areadcookie('yfx_get_cookie_group') || '';
			if( jsonname.indexOf(name+'=') < 0 )
			{
				jsonname = jsonname + '|:|' + name + '=' + _$atypeof(value);
			}
			else
			{
				var groupcookie = new Array();
				groupcookie = _$adecode(jsonname).split('|:|');
				for( var jk in groupcookie )
				{
					groupcookie[jk] = _$atypeof(groupcookie[jk]);
					if( groupcookie[jk].indexOf(name+'=') >= 0 )
					{
						groupcookie[jk] = name + '=' + _$atypeof(value);
					}
				}
				jsonname = groupcookie.join('|:|');
			}
			return jsonname;
		}
		function _$atestnull(r)
		{
			if( typeof(r) === null || r === null )
			{
				return false;
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		function _$ateststr(r)
		{
			if( typeof(r) === null || r === null )
			{
				return '';
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return '';
			}
			else if( r === '' )
			{
				return '';
			}
			else
			{
				return r;
			}
		}
		function _$ageturlparam(u) {
			var i = 0,j = 0;
			var h = '',p = '';
			if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
			u = u.substring(i + 3);
			h = u.substring(0, u.indexOf('/'));
			if ((i = u.indexOf("/")) > -1) {			
				if ((j = u.indexOf('#clickmapcode=')) > -1) 
				{
					p = u.substring(i, j);
				}
				else
				{
					p = u.substring(i);
				}
			};
			return {h:h,p:p}
		}
		function _$ageturlkey(u,k)
		{
			var i,j,h='';
			if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
			{
				h = u.substring(i+2+k.length);
				j = h.indexOf('&');
				j = j <= 0 ? h.length : j;
				{
					h = h.substring(0,j);
				}
			}
			return h;
		}
		function _$agetkeyword(u,b) {
			var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
			u = u.toLowerCase();
			h = _$ageturlparam(u).h;
			if( b == '_' ){b = '';}
			for (var ii = 0; ii < _$asearchkey.length; ii++) {
				if (h.toLowerCase().indexOf('.'+_$asearchkey[ii].toLowerCase()+'.') > -1) {
					if ((i = u.indexOf('?' + _$akeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$akeyword[ii] + '=')) > -1) {
						k = u.substring(i + _$akeyword[ii].length + 2);
						if(_$asearchtype[ii]=='default')
						{_$akeywordsource = _$asearchkey[ii]+b+'::'+k;}
						_$akeywordkey = k;
						v = '&KW=' + k + '&WC=' + _$asearchtype[ii] + '&WP=' + _$asearchkey[ii]+b;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							if(_$asearchtype[ii]=='default')
							{_$akeywordsource = _$asearchkey[ii]+b+'::'+k;}
							_$akeywordkey = k;
							v = '&KW=' + k + '&WC=' + _$asearchtype[ii] + '&WP=' + _$asearchkey[ii]+b
						}
					}
					if ((i = u.indexOf('?' + _$akeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$akeywordrelated[ii] + '=')) > -1) {
						k = u.substring(i + _$akeywordrelated[ii].length + 2);
						rk = '&RW=' + k;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							rk = '&RW=' + k
						}
					}
				}
			};
			v = v ? v : dv;
			if (_$atypeof(v) === '') {return '';}
			else if (rk) {return v + rk;}
			else {return v}
		}
		function _$areplace_utm(s)
		{
			if( s.indexOf('pmf_source=') <= -1 )
			{
				if( s.indexOf('utm_source=') > -1 )
				{
					for (var ii = 0; ii < _$autm_replace.length; ii++) {
						s = s.replace(_$autm_replace[ii]+'=', _$autm_pmf_replace[ii]+'=');
					}
				}
				else if( s.indexOf('hmsr=') > -1 )
				{
					for (var ii = 0; ii < _$abdu_replace.length; ii++) {
						s = s.replace(_$abdu_replace[ii]+'=', _$abdu_pmf_replace[ii]+'=');
					}
				}
			}
			return s;
		}
		function _$agetmap(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#clickmapcode=') > -1) {
				c = u.substring(14);
				s = c.split('|');
				s[2] = s[2] === '' ? _$awebsite : s[2];
				_$asetcookie('yfxm', s[0], 1, _$adomain, '');
				_$asetcookie('yfxm_t', s[1], 1, _$adomain, '');
				_$asetcookie('yfxm_code', s[2], 1, _$adomain, '');
				_$asetcookie('yfxm_site', s[3], 1, _$adomain, '');
				_$asetcookie('yfxm_p', s[4], 1, _$adomain, '');
				_$asetcookie('yfxm_s_d', s[5], 1, _$adomain, '');
				_$asetcookie('yfxm_e_d', s[6], 1, _$adomain, '');
				_$asetcookie('yfxm_sv', s[7], 1, _$adomain, '');
				_$asetcookie('yfxm_p_g', s[8], 1, _$adomain, '');
				_$asetcookie('yfxm_p_c', s[9], 1, _$adomain, '');
				_$asetcookie('yfxm_c', s[10], 1, _$adomain, '');
				_$asetcookie('yfxm_e', s[11], 1, _$adomain, '');
				_$asetcookie('yfxm_o', s[12], 1, _$adomain, '');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else if (_$areadcookie('yfxm') && _$areadcookie('yfxm_code') && _$areadcookie('yfxm_site')) {
				s[0] = _$areadcookie('yfxm');
				s[1] = _$areadcookie('yfxm_t');
				s[2] = _$areadcookie('yfxm_code');
				s[3] = _$areadcookie('yfxm_site');
				s[4] = _$areadcookie('yfxm_p');
				s[5] = _$areadcookie('yfxm_s_d');
				s[6] = _$areadcookie('yfxm_e_d');
				s[7] = _$areadcookie('yfxm_sv');
				s[8] = _$areadcookie('yfxm_p_g');
				s[9] = _$areadcookie('yfxm_p_c');
				s[10] = _$areadcookie('yfxm_c');
				s[11] = _$areadcookie('yfxm_e');
				s[12] = _$areadcookie('yfxm_o');
				s[13] = _$areadcookie('yfxm_h_h');
				s[14] = _$areadcookie('yfxm_h_p');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else {return {
				a: '',
				b: '',
				c: '',
				d: '',
				e: '',
				f: '',
				g: '',
				h: '',
				i: '',
				j: '',
				p: '',
				q: '',
				r: '',
				ht: '',
				pu: ''
			}}
		}
		function _$agettag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#tagcontent=') > -1) {
				c = u.substring(12);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1]
				}
			}
			else
			{
				return {
					a: '',
					b: ''
				}
			}
		}
		function _$agetpagetag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#pagecontent=') > -1) {
				c = u.substring(13);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1],
					c: s[2]
				}
			}
			else
			{
				return {
					a: '',
					b: '',
					c: ''
				}
			}
		}
		function _$ajsgif(gs) {
			if( _$ais_can_record == 0 )
			{
				return;
			}
			var gif = new Image();
			gif.onload = function () {
				gif.onload = null;
				_$adoimgerr_1 = 1;
			};
			//gif.onerror = function () {
			//	_$ajsgif(gs);_$adoimgerr_1++;
			//};
			if( _$adoimgerr_1 <= 2 )
			{
				gif.src = gs;
			};
		}
		function _$aparseurl(u) {
			var p = new Array();
			u = u + '&phpstat';
			var c = u.replace(/^\?/,'').split('&');
			for (var b = 0; b < c.length; b++) {
				var e = c[b].split('=');
				p[e[0]] = e[1];
			}
			return p;
		}
		function _$atypeof(tp)
		{
			var rp=tp;
			if( tp === null ){rp = '';}
			else if( typeof(tp) === 'undefined' ){rp = '';}
			else if( typeof(tp) === 'object' ){rp = '';}
			else if( typeof(tp) === 'function' ){rp = '';}
			return rp;
		}
		function _$asetfirst(fvar, nvalue)
		{
			if( _$atypeof(fvar) == '' )
			{			
				_$asetcookie('yfx_mr_f', nvalue, 30, _$adomain, '');
			}
		}		
		var _$ajava = 0;
		if (navigator.javaEnabled()) {_$ajava = '1';}
		var _$abrowser = /(weibo|micromessenger)/.exec(_$auseragent);
		if (!_$abrowser) {_$abrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$auseragent);}
		if (!_$abrowser) {_$abrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$auseragent);}
		_$abrowser = _$abrowser === null ? 'other' : _$abrowser[0];
		var _$asystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$auseragent);
		_$asystem = _$asystem === null ? 'other' : _$asystem[0];
		var _$aalexa			= (_$auseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
		var _$aflash			= _$aflashok.f;
		var _$apathname		= _$adocument.location.pathname;
		var _$afreferrer		= _$ageturlparam(_$areferrer);
		var _$afreferrerhost = _$afreferrer.h;
		var _$aref			= _$aencode(_$afreferrer.p);
		var _$amapcode		= _$agetmap(_$ahashcode);
		var _$atagcode		= _$agettag(_$ahashcode);
		var _$apagecode		= _$agetpagetag(_$ahashcode);
		var _$asearch		= _$areplace_utm(_$adocument.location.search);
		if( _$ahashcode && 0 )
		{
			_$asearch		= _$asearch + _$ahashcode;
		}
		_$apathname			= _$aencode(_$apathname + _$asearch);
		_$apartner_website	= _$areadflashcookie('yfx_p');
		_$amediumsource		= _$areadflashcookie('yfx_mr');
		_$amediumsourcefirst	= _$areadflashcookie('yfx_mr_f');
		_$aedmemail			= _$areadflashcookie('yfx_e');
		var _$ais_can_record = 1;
		var _$aparseurlarr	= _$aparseurl(_$asearch);
		var _$apmf_key		= _$atypeof(_$aparseurlarr['k']);
		var _$apmf_from		= _$atypeof(_$aparseurlarr['f']);
		var _$apmf_key_macth = _$atypeof(_$aparseurlarr['m']);
		var _$apmf_key_word  = _$atypeof(_$aparseurlarr['w']);
		var _$apmf_key_id	= _$atypeof(_$aparseurlarr['kid']);
		var _$apmf_key_tid	= _$atypeof(_$aparseurlarr['tid']);
		var _$apmf_gclid		= _$atypeof(_$aparseurlarr['gclid']);
		var _$apmf_bdclkid	= _$atypeof(_$aparseurlarr['bdclkid']);
		var _$apmf_group		= _$atypeof(_$aparseurlarr['pmf_group']);
		var _$apmf_medium	= _$atypeof(_$aparseurlarr['pmf_medium']);
		var _$apmf_source	= _$atypeof(_$aparseurlarr['pmf_source']);
		var _$apmf_match		= _$atypeof(_$aparseurlarr['pmf_match']);
		var _$apmf_keyword	= _$atypeof(_$aparseurlarr['pmf_keyword']);
		var _$apmf_advname	= _$atypeof(_$aparseurlarr['pmf_advname']);
		var _$apmf_partner	= _$atypeof(_$aparseurlarr['pmf_partner']);
		var _$apmf_email		= _$atypeof(_$aparseurlarr['pmf_email']);
		var _$apmf_area		= _$atypeof(_$aparseurlarr['pmf_area']);
		var _$apmf_id		= _$atypeof(_$aparseurlarr['pmf_id']);
		var _$apmf_tid		= _$atypeof(_$aparseurlarr['pmf_tid']);
		var _$apmf_tui_id	= _$apmf_tid ? _$apmf_tid : _$apmf_key_tid;
		if (_$apmf_tui_id) {
			_$asetflashcookie('yfx_f_id', _$apmf_tui_id, 3650, _$adomain, '');
		}
		else
		{
			_$apmf_tui_id = _$areadflashcookie('yfx_f_id');
		}
		if(_$apagecode.a && _$apagecode.b && _$apagecode.c)
		{
			var ac = 'pageab_'+_$apagecode.a+'_'+_$apagecode.c;
			_$asetflashcookie('yfx_p_ab_' + _$apagecode.a, _$apagecode.c, 30, _$adomain, 'new');
			_trackData.push(['addclick','HTML',ac,_$apagecode.c]);
		}
		if (_$amapcode.a && _$amapcode.b && _$amapcode.c) 
		{
			_$ais_can_record = 0;
		}
		else if ( _$ahashcode.indexOf('#visitorplay') > -1 )
		{
			_$ais_can_record = 0;
		}
		else if ( _$ahashcode.indexOf('#onlinevisitor') > -1 )
		{
			_$ais_can_record = 0;
		}
		else if ( _$apathname.indexOf('fromclickhot') > -1 )
		{
			_$ais_can_record = 0;
		}
		if( _$apmf_medium && _$apmf_medium.indexOf('market_type_') <= -1 )
		{
			_$apmf_medium = "market_type_"+_$apmf_medium;
		}
		var _$apstac			= _$atypeof(_$aparseurlarr['pstac']);
		if( ( _$apmf_medium && _$apmf_source ) || ( ( _$apmf_gclid || _$apmf_bdclkid ) && _$apmf_key !== 'ppc' ) )
		{
			_$apmf_key = 'ppc';
		}
		var _$apmf_channel = _$apmf_medium;
		var _$asearchkeyword  = _$agetkeyword(_$areferrer,'_'+_$apmf_key);
		if (_$apmf_medium && _$apmf_source) {
			_$amediumsource = _$apmf_group+'::'+_$apmf_medium+'::'+_$apmf_source+'::'+_$akeywordsource+'::'+_$apmf_match+'::'+_$apmf_keyword+'::'+_$afreferrerhost+'::'+_$apmf_id+'::pmf_from_adv';
			_$asetflashcookie('yfx_mr', _$amediumsource, 3650, _$adomain, '');
			_$asetfirst(_$amediumsourcefirst, _$amediumsource);
			_$asetflashcookie('yfx_key', _$akeywordkey, 3650, _$adomain, '');
		}
		else if (_$apmf_key && _$apmf_from && _$amediumsource.indexOf('pmf_from_adv') <= -1) {
			_$apmf_channel = 'market_type_paid_search';
			_$amediumsource = _$apmf_group+'::market_type_paid_search::::'+_$akeywordsource+'::'+_$apmf_key_macth+'::'+_$apmf_key_word+'::'+_$afreferrerhost+'::'+_$apmf_key_id+'_'+_$apmf_from+'_'+_$apmf_key+'::pmf_from_paid_search';
			_$asetflashcookie('yfx_mr', _$amediumsource, 3650, _$adomain, '');
			_$asetfirst(_$amediumsourcefirst, _$amediumsource);
			_$asetflashcookie('yfx_key', _$akeywordkey, 3650, _$adomain, '');
		}
		else if (_$akeywordsource && _$amediumsource.indexOf('pmf_from_paid_search') <= -1 ) {
			_$apmf_channel = 'market_type_free_search';
			_$amediumsource = _$apmf_group+'::market_type_free_search::::'+_$akeywordsource+'::::::'+_$afreferrerhost+'::::pmf_from_free_search';
			_$asetflashcookie('yfx_mr', _$amediumsource, 3650, _$adomain, '');
			_$asetfirst(_$amediumsourcefirst, _$amediumsource);
			_$asetflashcookie('yfx_key', _$akeywordkey, 3650, _$adomain, '');
		}
		_$akeywordkey = _$areadcookie('yfx_key');
		if (_$apmf_partner) {
			_$apartner_website = _$apmf_partner;
			_$asetflashcookie('yfx_p', _$apartner_website, 3650, _$adomain, '')
		}
		if (_$apmf_email) {
			_$aedmemail = _$apmf_group+'::'+_$apmf_medium+'::'+_$apmf_source+'::'+_$apmf_email+'::'+_$apmf_area+'::pmf_from_edm';
			_$asetflashcookie('yfx_e', _$aedmemail, 3650, _$adomain, '')
		}
		_$amediumsourcefirst = _$amediumsourcefirst == _$amediumsource ? 'same' : _$amediumsource;
		var _$acourl = _$acounturl_logcount + '?WS=' + _$awebsite + '&RD=common&SWS='+_$ateststr(_$apartner_website)+'&SWSID='+_$ateststr(_Schannel_website_id)+'&SWSPID='+_$ateststr(_Schannel_webshop_id)+'&JSVER=' + _$aVersion + '&TDT='+_$ateststr(_trackDataType)+'&UC=' + _$ausercookie + '&LUC=' + (_$aserusercookie==_$ausercookie?'same':_$aserusercookie) + '&VUC=' + _$avisittime + '&FS=' + _$afreferrerhost + '&RF=' + _$aencode(_$aref) + '&PS=' + _$ahostname + '&PU=' + _$apathname + _$asearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$aiserror + '&PC=' + _$aencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$alastmodify + '&LG=' + _$alanguage + '&CL=' + _$acolor + '&CK=' + _$acookie + '&SS=' + _$ascreensize + '&SCW=' + _$aclientwidth + '&SCH=' + _$aclientheight + '&SSH=' + _$ascrollheight + '&FT=' + _$afirsttime + '&LT=' + _$alasttime + '&DL=' + _$adowntime + '&FL='+_$aflash+'&CKT='+cookietype+'&JV='+_$ajava+'&AL=' + _$aalexa + '&SY=' + _$aencode(_$asystem) + '&BR=' + _$aencode(_$abrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$aencode(_$ausername) + '&UID=' + _$aencode(_$auserid) + '&URT=' + _$aencode(_$auserregtime) + '&UA=' + _$aencode(_$auserage) + '&US=' + _$aencode(_$ausersex) + '&TID=' + _$aencode(_$apmf_tui_id) + '&MT=' + _$atelphone + '&FMSRC='+_$aencode(_$amediumsourcefirst)+'&MSRC='+_$aencode(_$amediumsource)+'&MSCH=&EDM='+_$aencode(_$aedmemail)+'&RC=' + _$areturncount + '&SHPIC=&MID=' + _$arandomid + '&TT=' + _$aencode(_$atitle) + "&CHK=" + _$aunicode(_$awebsite+_$arandomid) + "&SHT=" + _$adomain + "&RDM=" + Math.random();
		var _$aclickhotokstr = true;
		function _$acreatejs()
		{
			if (_$amapcode.a && _$amapcode.b && _$amapcode.c) 
			{
				_$aclickhotokstr = false;
				var _$aurl = _$acounturl + '/clickareamap.js.php';
				var _$aobj = _$adocument.createElement('script');
				_$aobj.type = 'text/javascript';
				_$aobj.async = true;
				_$aobj.id = 'clickareamap_id';
				_$aobj.charset = 'utf-8';
				
				var _$apage_site = _$ahostname;
				var _$apath_name = _$apathname;
				if(_$apathname.indexOf('clickhotcount')>-1 && _$amapcode.ht && _$amapcode.pu)
				{
					_$apage_site = _$amapcode.ht;
					_$apath_name = _$amapcode.pu;
				}	
				var _$adurl = _$aurl + '?jsprefix=yfx_&clicktype=' + _$amapcode.a + '&areatype=' + _$amapcode.b + '&website=' + _$amapcode.d + '&server=' + _$amapcode.h + '&starttime=' + _$areadcookie('yfxm_s_d') + '&endtime=' + _$areadcookie('yfxm_e_d') + '&fromtype=' + _$areadcookie('yfxm_f') + '&pagesite=' + _$apage_site + '&pageurl=' + _$apath_name + '&pagegroup=' + _$amapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$amapcode.c+'&clickmapposition=' + _$amapcode.e+'&counturl='+_$aencode(_$acounturl)+'&type='+_$amapcode.j+'&chose='+_$amapcode.p+'&first='+_$amapcode.q+'&order='+_$amapcode.r + '&hashcode=' + _$aencode(_$ahashcode.substr(1));
				_$adocument.getElementsByTagName('head').item(0).appendChild(_$aobj);
				setTimeout("_$adocument.getElementById('clickareamap_id').src='"+_$adurl+"'; ",1500);
			}

			if ( [_ONLINE_VISITE_] )
			{
				var _$aurl = _$acounturl + '/onlinevisite.js.php';
				var _$aobj = _$adocument.createElement('script');
				_$aobj.type = 'text/javascript';
				_$aobj.async = true;
				_$aobj.id = 'onlinevisite_id';
				_$aobj.charset = 'utf-8';
				var _$adurl = _$aurl + '?counturl=' + _$aencode(_$acounturl) + '&WS='+ _$awebsite + '&CK=' + _$aencode(_$ausercookie) +'&UN=' + _$aencode(_$ausername) +'&clientw='+_$aclientwidth+'&clienth='+_$aclientheight+'&platform='+_$asystem + '&rand=' + Math.random();
				_$adocument.getElementsByTagName('head').item(0).appendChild(_$aobj);
				setTimeout("_$adocument.getElementById('onlinevisite_id').src='"+_$adurl+"'; ",1600);
			}
			if ( _$ahashcode.indexOf('#visitorplay') > -1 )
			{
				if ( _$ahashcode.indexOf('|dtest') > -1 )
				var _$aurl = '//test.yeefx.cn/phpstat/visitorplay.js.php';
				else
				var _$aurl = _$acounturl + '/visitorplay.js.php';
				var _$aobj = _$adocument.createElement('script');
				_$aobj.type = 'text/javascript';
				_$aobj.async = true;
				_$aobj.id = 'visitorplay_id';
				_$aobj.charset = 'utf-8';
				var _$adurl = _$aurl + '?counturl=' + _$aencode(_$acounturl) + '&WS='+ _$awebsite + '&pagesite=' + _$ahostname + '&pageurl=' + _$apathname + '&hashcode=' + _$aencode(_$ahashcode.substr(1)) + '&width=' + _$aclientwidth + '&rand=' + Math.random();
				_$adocument.getElementsByTagName('head').item(0).appendChild(_$aobj);
				setTimeout("_$adocument.getElementById('visitorplay_id').src='"+_$adurl+"'; ",1700);
			}
			if ( _$ahashcode.indexOf('#onlinevisitor') > -1 )
			{
				if ( _$ahashcode.indexOf('|dtest') > -1 )
				var _$aurl = '//test.yeefx.cn/phpstat/onlinevisitor.js.php';
				else
				var _$aurl = _$acounturl + '/onlinevisitor.js.php';
				var _$aobj = _$adocument.createElement('script');
				_$aobj.type = 'text/javascript';
				_$aobj.async = true;
				_$aobj.id = 'onlinevisitor_id';
				_$aobj.charset = 'utf-8';
				var _$adurl = _$aurl + '?counturl=' + _$aencode(_$acounturl) + '&WS='+ _$awebsite + '&pagesite=' + _$ahostname + '&pageurl=' + _$apathname + '&height=' + _$aclientheight + '&hashcode=' + _$aencode(_$ahashcode.substr(1)) + '&rand=' + Math.random();
				_$adocument.getElementsByTagName('head').item(0).appendChild(_$aobj);
				setTimeout("_$adocument.getElementById('onlinevisitor_id').src='"+_$adurl+"'; ",1800);
			}

			if( false )
			{
				if (_$atagcode.a && _$atagcode.b)
				{
					var _$aturl = _$acounturl_proxy + '/optimizer.js.php';
					var _$atobj = _$adocument.createElement('script');
					_$atobj.type = 'text/javascript';
					_$atobj.async = true;
					_$atobj.id = 'tagcode_id';
					_$atobj.charset = 'utf-8';
					var _$adurl = _$aturl + '?abtype=test&website=' + _$awebsite + '&abtestid=' + _$atagcode.a + '&tagcheckcode=' + _$atagcode.b + "&rand="+Math.random();
					_$adocument.getElementsByTagName('head').item(0).appendChild(_$atobj);
					setTimeout("_$adocument.getElementById('tagcode_id').src='"+_$adurl+"'; ",1900);
				}
				else
				{
					var _$aturl = _$acounturl_proxy + '/optimizer.js.php';
					var _$atobj = _$adocument.createElement('script');
					_$atobj.type = 'text/javascript';
					_$atobj.async = true;
					_$atobj.id = 'tagcode_id';
					_$atobj.charset = 'utf-8';
					var _$adurl = _$aturl + '?abtype=show&website=' + _$awebsite + "&prefix=_$a&rand="+Math.random();
					_$adocument.getElementsByTagName('head').item(0).appendChild(_$atobj);
					setTimeout("_$adocument.getElementById('tagcode_id').src='"+_$adurl+"'; ",2000);
				}
			}
			if( _Spageformjs )
			{
				var _$aturl = _$acounturl_proxy + '/formtrans.js.php';
				var _$atobj = _$adocument.createElement('script');
				_$atobj.type = 'text/javascript';
				_$atobj.async = true;
				_$atobj.id = 'formtrans_id';
				_$atobj.charset = 'utf-8';
				if( _$aformlist && _$acfre_f )
				{
					var _$adurl = _$aturl + '?action=reaction&website=' + _$awebsite + '&swebsite=' + _$apartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$ausercookie + '&luipcode=' + _$aserusercookie + '&formlist=' + _$aencode(_$aformlist) + '&pagesite=' + _$ahostname + '&phone='+_$aencode(_$atelphone)+'&system='+_$aencode(_$asystem)+'&medium='+_$aencode(_$amediumsource)+'&marknum='+_$arandomid+'&prefix=_$a&rand='+Math.random();
				}
				if( _$aformhidden )
				{
					var _$adurl = _$aturl + '?action=hidden&website=' + _$awebsite + '&swebsite=' + _$apartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$aencode(_$aformlist) + '&prefix=_$a&rand='+Math.random();
				}
				_$adocument.getElementsByTagName('head').item(0).appendChild(_$atobj);
				setTimeout("_$adocument.getElementById('formtrans_id').src='"+_$adurl+"'; ",2100);
			}
		}
			var _$aformhiddenloop = 1;	
	var _$aclickhot;
	var _$adoimgerr_2 = 1;
	var _$aclickhotok = 0;
	var _$amessageid = '';
	var _$aformhidden = 0||0;
	var _$aclickarray = new Array();
	var _$acf_f = 1||0;
	var _$acfre_f = 0||0;
	_$aclickarray[0]='(*)';;
	var _$aclickreg = '';
	if (_$aclickarray[0] == 'clickhotall') {
		_$aclickhotok = 1
	}
	function _$adotest(r)
	{
		r = r+'';
		r = r.replace(/\\/g, '\\/');
		r = r.replace(/\//g, '\\/');
		r = r.replace(/\*/g, '(.*)');
		return r;
	}
	if (_$aclickhot !== 'clickhot' && _$aclickarray[0] !== 'clickhotall') {
		for (var ci = 0; ci < _$aclickarray.length; ci++) {
			if (_$aclickarray[ci].lastIndexOf('*') > - 1) {
				_$aclickarray[ci] = _$adotest(_$aclickarray[ci]);
				if (_$aclickarray[ci].indexOf('/') === 0) {
					_$aclickarray[ci] = _$aclickarray[ci].substring(1)
				}
				_$aclickreg = eval('/' + _$aclickarray[ci] + '/ig');
				if (_$aclickreg.test(_$apathname)) {
					_$aclickhotok = 1;
					break
				}
			} else {
				if (_$aclickarray[ci].indexOf('/') !== 0) {
					_$aclickarray[ci] = '/' + _$aclickarray[ci]
				}
				if (_$aclickarray[ci] == _$apathname) {
					_$aclickhotok = 1;
					break
				}
			}
		}
	}
	var _$aclienturlstr = '';
	var _$aposarr = new Array();

	function _$atimelong(ini) {
		var tl = _$agt() - _$astarttime;
		if (tl >= 1800000) {
			tl = 1000
		}
		if (ini) {
			tl = _$agt() - _$atimestart;
			_$atimestart = _$agt()
		}
		tl <= 0 ? 0 : tl;
		return tl
	}
	function _$asetformfield(a,b)
	{
		if( typeof( _$aformfielddetails[a][b] ) == null || typeof( _$aformfielddetails[a][b] ) == 'undefined' )
		{
			_$aformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
		}
	}
	function _$ainitevent(init) {
		var _$afn;
		var _$afc;
		_$aaddlistener(window, 'unload', _$aunload);
		_$aaddlistener(window, 'blur', _$aunload);
		
		if( _$acf_f )
		{
			for (var a = 0; a < _$adocument.forms.length; a++) {
				_$afn = _$adocument.forms.item(a);
				_$afc = _$afn.name || _$afn.id;
				if( _$afc && _$acfre_f )
				{
					_$aformlist = _$aformlist + _$afc + "::" + _$afn.action + "||";
					_$aformdetails[_$afc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
					_$aformfielddetails[_$afc] = {};
				}
				_$ainitform(_$afn);
			}
			_$agetelementby(['form'], ['submit'], _$asubmit);
			_$agetelementby(['select', 'input', 'textarea'], ['change'], _$achangeselect);
			_$agetelementby(['select', 'input', 'textarea','button'], ['blur'], _$afocus);
			_$agetelementby(['select', 'input', 'textarea','button'], ['click'], _$aclick);
		}

		 if (init && 1) {
			_$aaddlistener(_$adocument, 'click', _$aclick);
			_$aaddlistener(_$adocument, 'mousemove', _$amousemove)
		}
		if (init && _$acf_f && 0) {
			_$aaddlistener(_$adocument, 'keydown', _$akeydown);
			_$aaddlistener(_$adocument, 'keyup', _$akeyup);
		}
	}
	function _$arecord(a) {
		var s = '';
		if (parseInt(Math.random() * 100) < 5*10 && a.a === 'msmv') return;
		switch (a.a) {
		case 'msmv':
			s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$aencode(a.i) + '::' + a.p;
			_$acountdourl(s);
			break;
		case 'clk':
		case 'fus':
		case 'link':
		case 'chn':
		case 'down':
		case 'onkey':
		case 'clkout':
		case 'submit':
			s = '||' + a.a + '::' + _$aencode(a.tn) + '::' + _$aencode(a.i) + '::' + _$aencode(a.n) + '::' + a.tp + '::' + _$aencode(a.v) + '::' + _$aencode(a.h) + '::' + _$aencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$aencode(a.fn) + '::' + _$aencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$aencode(a.msg) + '::' + _$aencode(a.ak) + '::' + _$aencode(a.eor);
			_$acountdourl(s);
			break;
		default:
			_$acountdourl(a.a);
			break
		}
	}
	function _$aunload() {
		_$aloadgif(_$aclienturlstr);
		_$aclienturlstr = ''
	}
	function _$acountdourl(s) {
		_$aclienturlstr += s;
		if (_$aclienturlstr.length > 2048 && s) {
			_$aloadgif(_$aclienturlstr);
			_$aclienturlstr = ''
		}
	}
	function _$adownload(p) {
		var ckda = new Array();
		ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';;
		var _pin = p.toLowerCase();
		for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
			if (_pin.indexOf(ckda[ckdi]) > - 1) {
				return 1
			}
		}
		return 0
	}
	function _$aclickout(h) {
		var ckoa = new Array();
		ckoa[0]='(*)';;
		var hi = h.toLowerCase();
		for (var ci = 0; ci < ckoa.length; ci++) {
				ckoa[ci] = _$adotest(ckoa[ci]);
		}
		var reg = eval('/'+ckoa.join('|')+'/ig');
		return (!reg.test(hi));
	}
	function _$atrackevent()
	{
		var s = '';
		var rs = '';
		var td = window._trackData;
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			s = _trackEvent.trackActionUrl;
			_trackEvent.trackActionUrl = '';
		}
		else if( td && td.length )
		{
			for(var k in td)
			{
				if( !isNaN(k) )
				{
					for(var kk in td[k])
					{
						if( td[k]['0'] == 'viewgoods' )
						{
							for(var rd in _$arefid)
							{
								rs = _$atypeof(_$aparseurlarr[rd]);
								if( rs )
								{
									td[k]['9'] = rs;
								}
							}
						}
						var jsonid = 0;
						var jsonarr = [];
						var jsonrarr = new Array();
						if( td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object' )
						{
							jsonarr = td[k]['3'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['3'] = jsonrarr.join('$');
						}
						if( td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object' )
						{
							jsonarr = td[k]['2'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['2'] = jsonrarr.join('$');
						}
						if( _$atestnull(_Sorder_encode_url) === false )
						td[k][kk] = _$aencode(td[k][kk]);
					}
					if( td[k].length == 1 )
					{
						s += '||'+td[k]['0'];
					}
					else
					{
						s += '||'+(td[k].join('::'));
					}
				}
			}
			window._trackData = [];
		}
		return s;
	}
	function _$adirecttrackevent()
	{
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			_$aloadgif('');
		}
		else if( window._trackData && window._trackData.length )
		{
			_$aloadgif('');
		}
	}
	function _$aloadgif(gs) {
		if( _$ais_can_record == 0 )
		{
			return;
		}
		var gif = new Image();
		var clestr = gs + _$atrackevent();
		if( clestr.length <= 0 ) {return;}
		gif.onload = function () {
			gif.onload = null;
			_$adoimgerr_2 = 1;
		};
		//gif.onerror = function () {
		 //  _$aloadgif(gs);_$adoimgerr_2++;
		//};
		if( _$adoimgerr_2 <= 2 )
		{
			gif.src = _$acounturl_logcount + '?WS=' + _$awebsite + '&RD=record&SWS='+_$ateststr(_$apartner_website)+'&SWSID='+_$ateststr(_Schannel_website_id)+'&SWSPID='+_$ateststr(_Schannel_webshop_id)+'&JSVER=' + _$aVersion + '&TDT='+_$ateststr(_trackDataType)+'&UC=' + _$ausercookie + '&LUC=' + (_$aserusercookie==_$ausercookie?'same':_$aserusercookie) + '&VUC=' + _$avisittime + '&UN=' + _$aencode(_$ausername) + '&UID=' + _$aencode(_$auserid) + '&RC=' + _$areturncount + '&PS=' + _$ahostname + '&PU=' + _$apathname + '&PT=' + _Spage_type + '&FS=' + _$afreferrerhost + '&RF=' + _$aencode(_$aref) + '&KW=' + _$akeywordkey + '&SS=' + _$ascreensize + '&SW=' + _$ascreen_width() + '&SCW=' + _$aclient_width() + '&SCH=' + _$aclientheight + '&SSH=' + _$ascrollheight + '&BR=' + _$aencode(_$abrowser) + '&LTL=' + Math.ceil(_$atimelong(1) / 1000) + '&MSRC='+_$aencode(_$amediumsource)+'&EDM='+_$aencode(_$aedmemail)+'&CLE=' + clestr + '&MID=' + _$arandomid+'&CHK=' + _$aunicode(_$awebsite+_$arandomid) + '&RDM='+Math.random();
		}
		if( _$apstac.toLowerCase() == 'debug' )
		_$amessage(gif.src);
	}
	function _$aaddlistener(a, b, c) {
		if (a.addEventListener) {
			a.addEventListener(b, c, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent('on' + b, c)
			}
		}
	}
	function _$aclick(ev) {
		_$acountimg(ev);
		var b = ev.srcElement || ev.target;
		if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$achange(b, b.checked)
		}
		if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
			_$asubmit_button(b, ev)
		}
	}
	function _$arecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
	{
		var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
		var $error = _$aerrorcode || '';
		_$aerrorcode = '';
		$x = _$aposition(ele).x;
		$y = _$aposition(ele).y;
		$p = ele.type;
		if(type == 'fus')
		{
			$v = _$agetvalue(ele);
		}
		if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
		{
			$v = _$aencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
			$x = _$acltxy(eleev).x;
			$y = _$acltxy(eleev).y;
			$e = _$aencode(ele.getAttribute('phpstatevent') || '');
		}
		if(type == 'clk' && ele.tagName!=='A')
		{
			$v = _$agetvalue(ele);
			$x = _$acltxy(eleev).x;
			$y = _$acltxy(eleev).y;
		}
		if(type == 'chn')
		{
			$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
			$v = _$agetvalue(ele);
		}
		if(type == 'onkey')
		{
			$v = eff;
			$typekey = eleslt;
		}
		if(type == 'msmv')
		{
			$x = _$acltxy(eleev).x;
			$y = _$acltxy(eleev).y;
		}
		if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
		{		
			$gfn = _$agetformname(ele);
			$fn = $gfn.n;
			$fa = $gfn.a;
		}
		if(type == 'submit')
		{
			$gfn	= _$agetformname(ele);
			$fn		= $gfn.n;
			$fa		= $gfn.a;
		}	
		if( fname !== '' )
		{
			$fn = fname;
		}
		if( $p === 'password' && $v )
		{
			$v = '********';
		}
		$fa = '';
		var $ig={pose:'',tagid:''};
		$ig = _$ainindeof(ele);
		var $fmsg = '';
		if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
		{
			$fmsg = window._trackFormMsg;
		}
		window._trackFormMsg = '';
		
		if( $fn && $fa && _$acfre_f )
		{
			var $eln_id = ele.name || ele.id;
			$eln_id = $eln_id || 'unname';
			_$asetformfield($fn,$eln_id);
			if( $eln_id != 'unname' )
			{
				if(type == 'chn')
				{
					_$aformdetails[$fn].change++;
					_$aformfielddetails[$fn][$eln_id].change++;
					_$aformdetails[$fn].inputinfo = $v;
					_$aformfielddetails[$fn][$eln_id].inputinfo = $v;
				}
				if(type == 'onkey')
				{
					_$aformdetails[$fn].onkey++;
					_$aformfielddetails[$fn][$eln_id].onkey++;
				}
				if(type == 'fus')
				{
					_$aformdetails[$fn].focus++;
					_$aformfielddetails[$fn][$eln_id].focus++;
				}
				if(type == 'submit')
				{
					_$aformdetails[$fn].submits++;
					_$aformfielddetails[$fn][$eln_id].submits++;
				}
				if( $fmsg && $fmsg.indexOf('==failed') )
				{			
					_$aformdetails[$fn].errors++;
					_$aformfielddetails[$fn][$eln_id].errors++;
				}
				_$aformdetails[$fn].times = _$atimelong(0);
				_$aformfielddetails[$fn][$eln_id].times = _$atimelong(0);
			}
		}

		_$arecord({
				a:  type,
				ak:  $typekey,
				p:  $ig.pose,
				h:  host,
				u:  url,
				t:  _$atimelong(0),
				n:  (_$atestobject(ele.name) || ''),
				i:  ($ig.tagid || _$atestobject(ele.id)),
				v:  $v,
				x:  $x,
				y:  $y,
				e:  $e,
				tp: (_$atestobject(ele.type) || ''),
				tn: (_$atestobject(ele.tagName) || ''),
				fn: $fn,
				fa: $fa,
				ef: eff,
				msg: $fmsg,
				eor: $error
			});
	}
	function _$afocus(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		if (b && /input|textarea|select/i.test(b.tagName)) {
			_$arecodeelement(b,ev,'','fus','','',0,'');
		}
	}
	function _$aonkey(ev,vc) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = ev.keyCode || ev.charCode;
		if (/input|textarea|select/i.test(b.tagName)) {
			_$arecodeelement(b,ev,vc,'onkey','','',c,'');
		}
	}
	function _$akeydown(ev)
	{
		_$aonkey(ev,'k_d');
	}
	function _$akeyup(ev)
	{
		_$aonkey(ev,'k_u');
	}
	function _$akeypress(ev)
	{
		_$aonkey(ev,'k_p');
	}
	function _$acountimg(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = b;
		while (b && (!b.href || /img/i.test(b.tagName))) {
			b = b.parentNode
		}
		var gettype = 'clk';
		var chu = clkhost = clkurl = '';
		if (b) {
			chu = _$ageturlparam(b.href);
			clkhost = chu.h;
			clkurl = chu.p;
			_$arecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			if (_$adownload(b.href)) {
				gettype = 'down';
				_$arecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
			if (_$aclickout(clkhost)) {
				gettype = 'clkout';			
				_$arecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
		}
		if (c&&b!=c) {
			var eff = 0;var effid = 'id';
			if ((/img|input|textarea|select|a/i.test(c.tagName))) {
				eff = 1
			}
			if ((/img/i.test(c.tagName)) && chu) {
				effid = c.id || '';
			}
			if( effid == 'id' || effid )
			{
				_$arecodeelement(c,ev,'','clk','','',eff,'');
			}
		}
	}
	function _$ascreen_width() {
		return _$adocument.documentElement.scrollWidth;
	}
	function _$aclient_width() {
		return _$adocument.documentElement.clientWidth;
	}
	function _$atestnull(r)
	{
		if( typeof(r) === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$atestobject(r)
	{
		if( typeof(r) === 'object' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
	function _$ainindeof(c) {
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var i = 0;
		var b = c;
		var phptag = '';
		var fetchtag = 'phptag_';
		var parentnodes = new Array();
		var resultarray = new Array();
		var resultarraystr = new Array();
		while (b && b !== _$adocument.body && b !== _$adocument.documentElement) {
			var ch = 1;
			var g = new Array();
			if(!_$atestnull(b.parentNode)||!b.parentNode) break;
			g = b.parentNode.childNodes;
			for (var e = 0; e < g.length; e++) {
				if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
					if (g[e] == b) {
						break
					}
					ch++
				}
			}
			if( ch < 10 )
			{
				parentnodes[i] = '0'+ch;
			}
			else
			{
				parentnodes[i] = ch;
			}
			phptag = phptag == '' ? (b.getAttribute(fetchtag)||'') : phptag;
			b = b.parentNode;
			i++
		}
		resultarray = parentnodes.reverse();
		resultarraystr = resultarray.join('-');
		return {pose:resultarraystr,tagid:phptag}
	}
	function _$agetformname(c)
	{
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var b = c;
		if(/input|textarea|select|img|button/i.test(c.tagName))
		{
			var i = 0;
			while ( b && b.tagName !== 'FORM' ) 
			{
				if( b.tagName == 'BODY' )break;
				b = b.parentNode;
				i++;
			}
		}
		if( b && b.tagName == 'FORM' )
		{
			return {
				n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
				a: (b.getAttribute('action') || _$apathname)
			}
		}
		else
		{
			return {
				n: '',
				a: ''
			}
		}
	}
	function _$aposition(b) {
		var a = {
			x: 0,
			y: 0
		};
		while (b.offsetParent) {
			a.x += parseInt(b.offsetLeft);
			a.y += parseInt(b.offsetTop);
			b = b.offsetParent
		}
		a.x += parseInt(b.offsetLeft);
		a.y += parseInt(b.offsetTop);
		return a
	}
	function _$agetxy() {
		var x = 0;
		var y = 0;
		if (_$adocument.body.scrollTop) {
			x = parseInt(_$adocument.body.scrollLeft);
			y = parseInt(_$adocument.body.scrollTop);
		} else {
			x = parseInt(_$adocument.documentElement.scrollLeft);
			y = parseInt(_$adocument.documentElement.scrollTop);
		};
		return {
			x: x,
			y: y
		}
	}

	function _$aistable(a) {
		return (a.tagName == 'TBODY' || a.tagName == 'TR')
	}
	function _$achangeselect(c) {
		var b = c.srcElement || c.target;
		if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$achange(b, b.checked)
		} else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
			_$achange(b, b.value.length)
		} else if (/textarea/i.test(b.tagName)) {
			_$achange(b, _$atxt_len(b.value))
		} else if (/select/i.test(b.tagName)) {
			_$achange(b, b.selectedIndex)
		}
	}
	function _$achange(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return;
		};
		_$arecodeelement(b,'',a,'chn','','',0,'');
		_$agetby_idname(b);
		_$ahiddenele(b,b);
		b.lastvalue = a;
	}
	function _$achange_com(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return
		};
		b.lastvalue = a;
	}
	function _$ainitform(b) 
	{
		for (var a = 0; a < b.elements.length; a++) {
			var c = b.elements[a];
			if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
			{
				_$achange_com(c, c.checked);
			} 
			else
			{
				if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
				{
					_$achange_com(c, c.value.length);
				} 
				else 
				{
					if (/textarea/i.test(c.tagName)) 
					{
						_$achange_com(c, _$atxt_len(c.value));
					} 
					else 
					{
						if (/select/i.test(c.tagName)) 
						{
							_$achange_com(c, c.selectedIndex);
						}
					}
				}
			}
		}
	}
	function _$atxt_len(a) {
		return a.length - (a.split("\r").length - 1)
	}
	function _$acltxy(ev) {
		if (!ev) {
			var ev = event
		}
		var y = parseInt(ev.clientY) + parseInt(_$agetxy().y) - parseInt(_$adocument.getElementsByTagName('body')[0].offsetTop);
		var x = parseInt(ev.clientX) + parseInt(_$agetxy().x) - parseInt(_$adocument.getElementsByTagName('body')[0].offsetLeft);
		if (x > 5000 || x < 0) {
			x = 0
		}
		if (y > 50000 || y < 0) {
			y = 0
		}
		return {
			x: x,
			y: y
		}
	}
	function _$amousemove(ev) {
		var t = _$agt();
		var e = ev.srcElement || ev.target;
		if ((t - _$aloadtime) > (parseInt(5) + 1) * 100) {_$arecodeelement(e,ev,0,'msmv','','','','');}
		_$aloadtime = t
	}

	function _$agetvalue(a) {
		var rv = '';
		if (a.tagName == 'SELECT') {
			rv = a.options[a.selectedIndex].text || ''
		}
		else {
			rv = a.value || '';
			if(rv==''&&_$atestchildren(a)==1)
			{
				rv = a.innerHTML.replace(/<[^>].*?>/g, '') || '';
			}
		}
		rv = _$ateststr(_$aencode(rv.replace(/\s/g, '')));
		return rv.substring(0, 512)
	}
	function _$asubmit(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.currentTarget;
		if( b )
		{
			_$arecodeelement(b,ev,'','submit','','',0,'');
		}
	}
	function _$ahiddenele(f,t)
	{
		var loop = 1;
		while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
		{
			if( f && f.tagName === 'BODY' )break;
			f = f.parentNode;
			t = f;
			loop++;
		}
		if( f && f.tagName === 'FORM' && _$aformhiddenloop <= 10 ) 
		{
			var b = t.childNodes;
			for (var i = 0; i < b.length; i++) 
			{
				if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display === 'none')) 
				{
					var b_lastvalue = _$ateststr(_$agetvalue(b[i]));
					b[i].lastvalue = _$ateststr(b[i].lastvalue);
					if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
					{
						_$arecodeelement(b[i],'','','chn','','',0,'');
						b[i].lastvalue = b_lastvalue;
					}
				}
				else
				{
					_$ahiddenele(f,b[i]);
					_$aformhiddenloop++;
				}
			}
		}
	}
	function _$atestchildren(f)
	{
		if( f ) 
		{
			return f.childNodes.length;
		}
		else
		{
			return 0;
		}
	}
	function _$asubmit_button(b,ev) {
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
		if( b && b.tagName == 'FORM' )
		{
			_$arecodeelement(b,ev,'','submit','','',0,'');
			_$agetby_idname(b);
			_$ahiddenele(b,b);
		}
	}
	function _$agetby_idname(b)
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}

		if( b && b.tagName === 'FORM' && b.name && _$aformlist && _$aformhidden )
		{
			var gh = phpstat_do_hidden_form(b.name);
			for(var ghk in gh)
			{
				var _fidv = _$ateststr(_$aid(gh[ghk]['ffield']));
				if( _fidv === '' )
				{
					var _fidva = _$aname(gh[ghk]['ffield']);	
					if( _fidva.length > 0 )
					{
						_fidv = _fidva['0'];
					}
				}
				if( _fidv )
				{
					var b_lastvalue = _$ateststr(_$agetvalue(_fidv));
					_fidv.lastvalue = _$ateststr(_fidv.lastvalue);
					if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
					{
						_$arecodeelement(_fidv,'','','chn','','',0,b.name);
						_fidv.lastvalue = b_lastvalue;
					}
				}
			}
		}
	}
	function _$agetelementby(b, f, a) {
		for (var d = 0; d < b.length; d++) {
			var j = _$adocument.getElementsByTagName(b[d]);
			for (var c = 0; c < j.length; c++) {
				for (var g = 0; g < f.length; g++) {
					_$aaddlistener(j[c], f[g], a)
				}
			}
		}
	}
	function _$agetmessageid(a) {
		if (a.toLowerCase() == 'debug') {
			setTimeout(function(){var _$aobj = _$adocument.createElement("div");
			_$aobj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$acourl+'</textarea>';
			_$adocument.getElementsByTagName('body').item(0).appendChild(_$aobj);_$amessageid = _$adocument.getElementById('pst_messageid');},3000);     
		}
	}
	function _$amessage(a) {
		if (_$amessageid) {
			_$amessageid.value = a;
		}
	}
	_$agetmessageid(_$apstac);
	_$aclickhotokstr ? setTimeout(function(){_$ainitevent(_$aclickhotok);},3000) : '';
	window.setInterval(function(){_$aunload();}, 5000);
	_$adirecttrackevent();

		_$ajsgif(_$acourl);
		_$acreatejs();
		_$ashare(_$ausercookie);
	}
	function _$ashare(userunique){};;
	if( _$aprotocol.toString().toLowerCase().indexOf('http') > -1 )
	{
		if(_$aisdownloadflash === 0)
		{			
			var ghostvar = _$asplitdomain(_$athehostname);
			var _$aclientcookie = _$areadmapcookie("yfx_c_c_g_u_id");
			if( _$achkdomain && _$acounturl.indexOf(_$achkdomain) > -1 && _$aclientcookie === '' )
			{
				_$agetservercookie(ghostvar,'outfunc');
			}
			else
			{
				_$aphpstat('HttpCookie','');
			}
		}
		else
		{
			_$aphpstat_flash_object = new phpstatCookie({

					namespace: 'namespace_phpstat',
					swf_url: _$acounturl_proxy+'/cookie/storage.swf?'+Math.random(), 
					debug: false,
					onready: function() {
					_$aphpstat('FlashCookie','');
					},
					onerror: function() {
					_$aphpstat('FlashCookie-err','');
					}
				});
		}
	}
}
catch(e)
{
}
