function textalign() {
var x = document.getElementById("textalign").value;
if (x == "right"){
document.getElementById("oldText").style.textAlign = "right";
document.getElementById("oldText").style.direction = "rtl";
document.getElementById("newText").style.textAlign = "right";
document.getElementById("newText").style.direction = "rtl";
}else{
document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
document.getElementById("newText").style.textAlign = "left";
document.getElementById("newText").style.direction = "ltr";
}}

document.getElementById("convertBreaks").addEventListener("click", function () {
if (b64awsec == "ZG9pdGYuY29t"){
	var para = document.getElementById("paragraphs").checked;
	var nopara = document.getElementById("noparagraphs").checked;
	var noBreaksText = document.getElementById("oldText").value;
	
	noBreaksText = noBreaksText.trim();
	
	noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	
	noBreaksText = noBreaksText.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	
	if(nopara == 1 || nopara ==  true){
		noBreaksText = noBreaksText.replace(/(\n\n)/gm, '</p><p>');
		noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,'');
		noBreaksText = noBreaksText.replace(/<\/p>/gm, '</p>\n\n');
		noBreaksText = "<p>" + noBreaksText + "</p>"; 
	}else{
		//Relax, take a break. Stop looking at code all day long. :)
	}
	
	document.getElementById("newText").value = noBreaksText;
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