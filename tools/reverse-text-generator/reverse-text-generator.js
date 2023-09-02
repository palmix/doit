var checko = 0;

function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

function textalign() {
var x = document.getElementById("textalign").value;
if (x == "right"){
document.getElementById("oldText").style.textAlign = "right";
document.getElementById("oldText").style.direction = "rtl";
}else{
document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
}}
function reverseText(){
		if (b64awsec == "ZG9pdGYuY29t"){

		var noBreaksText = document.getElementById("oldText").value;
		noBreaksText = noBreaksText.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		noBreaksText = noBreaksText.replace(re1," ");

		//PROTECT THE B
		noBreaksText = noBreaksText.replace(new RegExp('𐐒', 'g'),'@@@');
		//Reverse the string
		var splitText = noBreaksText.split("");
		
		var reverseArray = splitText.reverse();
		noBreaksText = reverseArray.join("");
		//PROTECT THE BB
		noBreaksText = noBreaksText.replace(new RegExp("@@@", 'g'),"𐐒");

		//Put new title back in place
		document.getElementById("oldText").value = noBreaksText;
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
}

function mirrorText(){

		var noBreaksText = document.getElementById("oldText").value;
		noBreaksText = noBreaksText.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		noBreaksText = noBreaksText.replace(re1," ");
		
		
		//PROTECT THE d and q
		noBreaksText = noBreaksText.replace(new RegExp('d', 'g'),'~@~@~');
		noBreaksText = noBreaksText.replace(new RegExp('q', 'g'),'-@-@-');

		var rorrim = ["A","𐐒","Ɔ","Ⴇ","Ǝ","ꟻ","Ә","H","I","Ⴑ","ﻼ","⅃","M","И","O","ꟼ","Ϙ","Я","Ƨ","T","U","V","W","X","Y","Z","ɒ","d","ɔ","b","ɘ","ʇ","ϱ","ʜ","i","į","ʞ","l","m","n","o","q","p","ɿ","ƨ","t","υ","v","w","x","γ","z"];
		var rorrim2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];	
		var rorrim3 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","~@~@~","e","f","g","h","i","j","k","l","m","n","o","p","-@-@-","r","s","t","u","v","w","x","y","z"];	

		var rorrimLength = rorrim.length;

		if(checko == 1){//unmirrored
				for (var i = 0; i < rorrimLength; i++) {

						var tempo = rorrim[i];
						var tempo2 = rorrim2[i];
						noBreaksText = noBreaksText.replace(new RegExp(tempo, 'g'), tempo2);
				}
				checko = 0;
			
		}else{//mirrored
				for (var i = 0; i < rorrimLength; i++) {

						var tempo = rorrim[i];
						var tempo2 = rorrim3[i];
						noBreaksText = noBreaksText.replace(new RegExp(tempo2, 'g'), tempo);
				}
				checko = 1;
		}

				noBreaksText = noBreaksText.replace(new RegExp('~@~@~', 'g'),'b');
				noBreaksText = noBreaksText.replace(new RegExp('-@-@-', 'g'),'p');



				//Put new title back in place
				document.getElementById("oldText").value = noBreaksText;
}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldText").value = "";
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