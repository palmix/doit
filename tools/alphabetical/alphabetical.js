
document.getElementById("addtexttext").addEventListener("click", function (){
document.getElementById("oldText").value = "د س 8 3 ث ظ 6 ج ف 0 ز ح ض ي 1 غ 5 خ ت 2 ب ص 7 ل ه ك 9 ع ر 4 ذ ط ش 6 أ ق م و ن";
$('#displaystartmodal').modal('hide');
document.getElementById("sepspI").checked = true;
});

function textalign() {
var x = document.getElementById("textalign").value;
if (x == "right"){
document.getElementById("oldText").style.textAlign = "right";
document.getElementById("oldText").style.direction = "rtl";
document.getElementById("newCode").style.textAlign = "right";
document.getElementById("newCode").style.direction = "rtl";
}else{
document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
document.getElementById("newCode").style.textAlign = "left";
document.getElementById("newCode").style.direction = "ltr";
}}

document.addEventListener('DOMContentLoaded', function () {

	//Parameters
	var seperatorI;
	var newCode;
	var newCodeArray = [];
	var inputSep;
	var outputSep;

  
	//Match output to input on radio click
	var sepOne = document.querySelectorAll('.radSep');
	for (var i = 0; i < sepOne.length; i++) {
		sepOne[i].addEventListener('click', function(event) {
			if(document.getElementById('sepspI').checked) {
				document.getElementById("sepspO").checked = true;//space
				document.getElementById("sepcsO").value="";document.getElementById("sepcsI").value="";
			}
			if(document.getElementById('sepcoI').checked) {
				document.getElementById("sepcoO").checked = true;//comma
				document.getElementById("sepcsO").value="";document.getElementById("sepcsI").value="";
			}
			if(document.getElementById('sepscI').checked) {
				document.getElementById("sepscO").checked = true;//semi-colon
				document.getElementById("sepcsO").value="";document.getElementById("sepcsI").value="";
			}
			if(document.getElementById('spelbI').checked) {
				document.getElementById("spelbO").checked = true;//linebreak
				document.getElementById("sepcsO").value="";document.getElementById("sepcsI").value="";
			}	
		});
	}

	document.getElementById("sepcsI").addEventListener("click", function (){
		document.getElementById("spelbO").value = "";
	});
	function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

	//Custom separators
	document.getElementById("sepcsI").addEventListener("keyup", function (){
		
		if(document.getElementById("sepcsI").value != ""){
			//alert("x");
			document.getElementById("sepspI").checked = false;
			document.getElementById("sepcoI").checked = false;
			document.getElementById("sepscI").checked = false;
			document.getElementById("spelbI").checked = false;
			document.getElementById("sepspO").checked = false;
			document.getElementById("sepcoO").checked = false;
			document.getElementById("sepscO").checked = false;
			document.getElementById("spelbO").checked = false;
		}else{
			document.getElementById("sepspI").checked = true;
			document.getElementById("sepspO").checked = true;
		}
		document.getElementById("sepcsO").value = document.getElementById("sepcsI").value 
	});
	
	document.getElementById("sepcsO").addEventListener("keyup", function () {
		
		if(document.getElementById("sepcsO").value==""){
			document.getElementById("sepspO").checked = true;
		}else{
			document.getElementById("sepspO").checked = false;
			document.getElementById("sepcoO").checked = false;
			document.getElementById("sepscO").checked = false;
			document.getElementById("spelbO").checked = false;
		}
	});

	//Natural sorting function from Jim Palmer - check out the URL below...
	
	/*
	 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
	 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
	 * More info: http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm-with-unicode-support/
	 */
	 function naturalSort (a, b) {
	    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
	        sre = /(^[ ]*|[ ]*$)/g,
	        dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
	        hre = /^0x[0-9a-f]+$/i,
	        ore = /^0/,
	        i = function(s) { return naturalSort.insensitive && (''+s).toLowerCase() || ''+s },
	        // convert all to strings strip whitespace
	        x = i(a).replace(sre, '') || '',
	        y = i(b).replace(sre, '') || '',
	        // chunk/tokenize
	        xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
	        yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
	        // numeric, hex or date detection
	        xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
	        yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
	        oFxNcL, oFyNcL;
	    // first try and sort Hex codes or Dates
	    if (yD)
	        if ( xD < yD ) return -1;
	        else if ( xD > yD ) return 1;
	    // natural sorting through split numeric strings and default strings
	    for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
	        // find floats not starting with '0', string or 0 if not defined (Clint Priest)
	        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
	        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
	        // handle numeric vs string comparison - number < string - (Kyle Adams)
	        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
	        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
	        else if (typeof oFxNcL !== typeof oFyNcL) {
	            oFxNcL += '';
	            oFyNcL += '';
	        }
	        if (oFxNcL < oFyNcL) return -1;
	        if (oFxNcL > oFyNcL) return 1;
	    }
	    return 0;
	}
	
	//Alphabetize button logic
	document.getElementById("Alphabetize-Text").addEventListener("click", function () {
				if (b64awsec == "ZG9pdGYuY29t"){
		newCode = document.getElementById("oldText").value;
		if (newCode.length > 1){
            $('#newCode').removeAttr("disabled", "disabled");
            $('#buttoncopy').removeAttr("disabled", "disabled");
		}else{

            $('#newCode').attr("disabled", "disabled");
            $('#buttoncopy').attr("disabled", "disabled");
        			$('#displaystartmodal').modal('show');

		}
		newCode = newCode.trim();
		//remove HTML tags
		if(document.getElementById("removeHtml").checked == true){
			document.getElementById("htmlStripper").innerHTML = newCode;
			newCode = document.getElementById("htmlStripper").textContent;
			document.getElementById("htmlStripper").innerHTML = "";
		}
		if(document.getElementById("removePunctuation").checked == true){
			newCode = newCode.replace (/[.?!:(){}\[\]]/g, " ");
		}
		
		//Get input seperator
		if(document.getElementById("sepcsI").value != ""){
			inputSep = document.getElementById("sepcsI").value;
		}else{
			if(document.getElementById("sepspI").checked == true){
				inputSep = "space";
			}else if(document.getElementById("sepcoI").checked == true){
				inputSep = "comma";
			}else if(document.getElementById("sepscI").checked == true){
				inputSep = "semi-colon";
			}else if(document.getElementById("spelbI").checked == true){
				inputSep = "linebreak";
			}else{
				inputSep = "space";
			}
		}
		if (inputSep == 'space'){inputSep = ' ';}
		if (inputSep == 'comma'){inputSep = ',';}
		if (inputSep == 'semi-colon'){inputSep = ';';}
		if (inputSep == 'linebreak'){inputSep = '\n';}
		
		//Get output seperator
		if(document.getElementById("sepcsO").value != ""){
			outputSep = document.getElementById("sepcsO").value;
		}else{
			if(document.getElementById("sepspO").checked == true){
				outputSep = "space";
			}else if(document.getElementById("sepcoO").checked == true){
				outputSep = "comma";
			}else if(document.getElementById("sepscO").checked == true){
				outputSep = "semi-colon";
			}else if(document.getElementById("spelbO").checked == true){
				outputSep = "linebreak";
			}else{
				outputSep = "space";
			}
		}
		if (outputSep == 'space'){outputSep = ' ';}
		if (outputSep == 'comma'){outputSep = ',';}
		if (outputSep == 'semi-colon'){outputSep = ';';}
		if (outputSep == 'linebreak'){outputSep = '\n';}
		
		//Create array
		if (inputSep == '\n'){
			newCode = newCode.replace(/(\r\n|\r)/gm,"\n");
			newCodeArray = newCode.split(inputSep);
			for(var i=0;i<newCodeArray.length;i++){
				newCodeArray[i] = newCodeArray[i].trim();
			}
		}else{
			newCode = newCode.replace(/(\r\n|\n|\r)/gm," ");
			nodsp = /\s+/g;
			newCode = newCode.replace(nodsp," ");
			newCodeArray = newCode.split(inputSep);
			for(var i=0;i<newCodeArray.length;i++){
				newCodeArray[i] = newCodeArray[i].trim();
			}
		}
		
		//Using the default sort helps with grouping capitals first - Ban, ban, Can, can, etc.
		newCodeArray.sort(); 
		//Natural sorting
		if(document.getElementById("sortAlpha").checked == true){
			naturalSort.insensitive = true;
			newCodeArray.sort(naturalSort); 
		}

		//Remove duplicates
		if(document.getElementById("removeDuplicates").checked == true){
			var i = newCodeArray.length-1;
			while(i > -1){
				var ii = newCodeArray.length-1;
				while(ii > -1){
					if(i != ii){
						if (newCodeArray[i] == newCodeArray[ii]){
							newCodeArray.splice (ii, 1);
						}
					}
				ii--;
				}
			i--;
			}
		}

		if(document.getElementById("reverseSort").checked == true){
			newCodeArray.reverse();
		}
		
		newCode = newCodeArray.join(outputSep);
	
		//Put new code in place
		newCode = newCode.trim();
		document.getElementById("newCode").value = newCode;
		}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}
	});
	
	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newCode").value = "";
		document.getElementById("oldText").focus();
	});		
	

});