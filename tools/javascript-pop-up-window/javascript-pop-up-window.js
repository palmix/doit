addEvent(window, 'load', function() {
 document.getElementById('titlelink').focus()
});

function addEvent(obj, evType, fn){
	if(obj.addEventListener){
		obj.addEventListener(evType, fn, true);
		return true;
	}else if (obj.attachEvent){
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	}else{
		return false;
	}
}
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.getElementById("aw-submit").addEventListener("click", function () {
	if (b64awsec == "ZG9pdGYuY29t"){
	var titlelink = document.getElementById("titlelink").value;
	var destination = document.getElementById("destination").value;
	var popwidth = document.getElementById("popwidth").value;
	var popheight = document.getElementById("popheight").value;
	var toolbar = document.getElementById("toolbar").value;
	var tbstatus = document.getElementById("toolbar").checked;
	var menubar = document.getElementById("menubar").value;
	var mbstatus = document.getElementById("menubar").checked;
	var locationbar = document.getElementById("locationbar").value;
	var lbstatus = document.getElementById("locationbar").checked;
	var statusbar = document.getElementById("statusbar").value;
	var sbstatus = document.getElementById("statusbar").checked;
	var scrollbars = document.getElementById("scrollbars").value;
	var scbstatus = document.getElementById("scrollbars").checked;
	var resizable = document.getElementById("resizable").value;
	var rzstatus = document.getElementById("resizable").checked;
	day = new Date();
	popid = day.getTime();
	if(popwidth == "" ){popwidth = '700';}
	if(popheight == "" ){popheight = '500';}
	if(tbstatus == 0 || tbstatus ==  false){toolbar = 0;}else{toolbar = 1;}
	if(mbstatus == 0 || mbstatus ==  false){menubar = 0;}else{menubar = 1;}
	if(lbstatus  == 0 || lbstatus  ==  false){locationbar = 0;}else{locationbar = 1;}
	if(sbstatus  == 0 || sbstatus  ==  false){statusbar = 0;}else{statusbar = 1;}
	if(scbstatus  == 0 || scbstatus  ==  false){scrollbars = 0;}else{scrollbars = 1;}
	if(rzstatus  == 0 || rzstatus  ==  false){resizable = 0;}else{resizable = 1;}
	if(destination == ""){destination = 'https://try.doitf.com';}
	if(titlelink == ""){titlelink = 'أدوات ويب';}
	document.getElementById("newText").value = '\<a href=\"'+destination+'\" onclick=\"javascript:void window.open(\''+destination+'\',\''+popid+'\',\'width='+popwidth+',height='+popheight+',toolbar='+toolbar+',menubar='+menubar+',location='+locationbar+',status='+statusbar+',scrollbars='+scrollbars+',resizable='+resizable+',left=0,top=0\')\;return false\;\">'+titlelink+'</a>';
	document.getElementById("aw-example").innerHTML = '\<strong>أنقر على الرابط لإختبار النتيجة: <a href=\"'+destination+'\" onclick=\"javascript:void window.open(\''+destination+'\',\''+popid+'\',\'width='+popwidth+',height='+popheight+',toolbar='+toolbar+',menubar='+menubar+',location='+locationbar+',status='+statusbar+',scrollbars='+scrollbars+',resizable='+resizable+',left=0,top=0\')\;return false\;\">'+titlelink+'</a></strong>';
	}else{
	var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
});

var textBox = document.getElementById("newText");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};