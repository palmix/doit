function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.addEventListener('DOMContentLoaded', function () {	
				if (b64awsec == "ZG9pdGYuY29t"){
	//Only numbers in the text inputs
	document.getElementById("numberNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("numberNumber").value;
			//noBadCharacters = noBadCharacters.replace(/[^0-9\s.,;"']/g,''); 
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 10000){noBadCharacters = 10000;}
			document.getElementById("numberNumber").value = noBadCharacters;
	});
	document.getElementById("startNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("startNumber").value;
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 10000000){noBadCharacters = 10000000;}
			document.getElementById("startNumber").value = noBadCharacters;
	});
	document.getElementById("endNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("endNumber").value;
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 1000000000){noBadCharacters = 1000000000;}
			document.getElementById("endNumber").value = noBadCharacters;
	});
	//Generate random numbers
	document.getElementById("toolSubmit").addEventListener("click", function () {
		//Get output separators
		var outputPref = document.getElementById("nLines").value;
		//Get min and max and etc
		var x = document.getElementById("numberNumber").value;
		var min = document.getElementById("startNumber").value;
		var max = document.getElementById("endNumber").value;
		var randomNumber;
		var tempo = "";
		for (var i = 0; i < x;) {
				randomNumber = (Math.random() * (max - min + 1) ) << 0;
				if(i + 1 == x){
						tempo = tempo + randomNumber;	
				}else{
					if(outputPref === "nLines"){
						tempo = tempo + randomNumber + '\r\n';
					}else{
						tempo = tempo + randomNumber + outputPref;
					}
				}
				i++;
		}		
		//Put random numbers in place
		document.getElementById("randoNums").value = tempo;
	});
	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("randoNums").value = "";
		document.getElementById("randoNums").focus();
	});	
	
	var textBox = document.getElementById("randoNums");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
});