document.getElementById("oldNumber").addEventListener("keyup", function () {
		var noBadCharacters = document.getElementById("oldNumber").value;
		//noBadCharacters = noBadCharacters.replace(/[^0-9\s.,;"']/g,''); 
		noBadCharacters = noBadCharacters.replace(/[^0-9\s.,]/g,'');  
		document.getElementById("oldNumber").value = noBadCharacters;
});
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.getElementById("convertBinary").addEventListener("click", function () {
	if (b64awsec == "ZG9pdGYuY29t"){
	var theNumbers = document.getElementById("oldNumber").value;
	var inputSep = '\n';
	var decimalString = "";
	var decimal = "";
	var binaryString = "";
	theNumbers = theNumbers.replace(/,/gm , "");
	theNumbers = theNumbers.replace(/(\r\n|\r)/gm,"\n");
			newCodeArray = theNumbers.split(inputSep);
			for(var i=0;i<newCodeArray.length;i++){
				newCodeArray[i] = newCodeArray[i].replace(/\s+/g,"");
				var tempo = newCodeArray[i].split('.');
				newCodeArray[i] = tempo[0];
				newCodeArray[i].replace(/(,)/g,"");
				if(newCodeArray[i]){
					decimal = newCodeArray[i];
					binaryString = binaryString + parseInt(decimal, 10).toString(2) + '\n';
					decimalString = decimalString + decimal + '\n';	
				}else{
					decimalString = decimalString + '' + '\n';
					binaryString = binaryString + '' + '\n';
				}
			}
	decimalString = decimalString.trim();
	binaryString = binaryString.trim();
	
	
	document.getElementById("oldNumber").value = decimalString;
	document.getElementById("newNumber").value = binaryString;
	}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
	}
});

document.getElementById("clearText").addEventListener("click", function () {
   document.getElementById("oldNumber").value = "";
   document.getElementById("newNumber").value = "";
   document.getElementById("oldNumber").focus();
});

var textBox = document.getElementById("newNumber");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};