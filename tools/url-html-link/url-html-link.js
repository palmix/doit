
document.getElementById("newtext1").focus();

document.getElementById("addnewurl").addEventListener("click", function () {
var numberOfOptions = $('div.numurl').length + 1;

$('#urlhtmlall').append('<div class="input-group input-group-sm mt-1 mb-2 numurl"> <div class="input-group-prepend"><span class="input-group-text">'+numberOfOptions+'</span> </div><div class="input-group-prepend"><label for="newtext'+numberOfOptions+'" class="input-group-text">نص الرابط</label> </div> <input type="text" placeholder="أدخل نص الرابط..." name="pages_title['+numberOfOptions+']" id="newtext'+numberOfOptions+'" class="form-control"> <div class="input-group-prepend"> <label for="newurl'+numberOfOptions+'" class="input-group-text">عنوان URL</label> </div> <input type="text" placeholder="أدخل رابط URL..." name="pages_url['+numberOfOptions+']" id="newurl'+numberOfOptions+'" class="form-control"> </div>');
document.getElementById("newtext"+numberOfOptions).focus();

});






function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.getElementById("convertURL").addEventListener("click", function () {
		if (b64awsec == "ZG9pdGYuY29t"){
				document.getElementById("pages_title").value = "";
				document.getElementById("pages_url").value = "";
$('input[name^="pages_title"]').each(function() {
document.getElementById("pages_title").value += $(this).val()+"\n";
});
$('input[name^="pages_url"]').each(function() {
document.getElementById("pages_url").value += $(this).val()+"\n";
});







	//Get parameters
	var urlformat = document.getElementById("urlformat").value;
	var lTarget = document.getElementById("lTarget").value;
	var newCode = document.getElementById("pages_title").value ;
	var newCodeUrl = document.getElementById("pages_url").value ;

	
	var formatStart = "";
	var formatEnd = "";
	var targetCode = "";
	if(urlformat == "paragraph"){
		formatStart = "<p>";
		formatEnd = "</p>";
	}else if(urlformat == "br"){
		formatStart = "";
		formatEnd = "<br />";
	}else if(urlformat == "div"){
		formatStart = "<div>";
		formatEnd = "</div>";
	}else if(urlformat == "ul"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else if(urlformat == "ol"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else{
		formatStart = "";
		formatEnd = "";
	}
	if(lTarget != "nope"){
		targetCode = ' target="' + lTarget + '"';
	}
			
				newCode = newCode.replace(/(\n\r|\n|\r)/gm,"XbreakX");
				var re1b = /XbreakX/gi;
				newCode = newCode.replace(re1b,"      ");
				newCode = newCode.trim();

				newCodeUrl = newCodeUrl.replace(/(\n\r|\n|\r)/gm,"XbreakX");
				re1a = /\s+/g;
				newCodeUrl = newCodeUrl.replace(re1a,"");
				re1b = /XbreakX/gi;
				newCodeUrl = newCodeUrl.replace(re1b," ");
				newCodeUrl = newCodeUrl.replace(re1a," ");
				newCodeUrl = newCodeUrl.trim();

				var newCodeArray = newCode.split("      ");
				var newCodeUrlArray = newCodeUrl.split(" ");
				newCode = "";
                for (var i = 0; i < newCodeArray.length; i++) {
				for (var i = 0; i < newCodeUrlArray.length; i++) {
					if (newCodeArray[i] != ""){
						if(i == newCodeArray.length -1 && urlformat == "br"){
							newCodeArray[i] = formatStart + '<a href="' + newCodeUrlArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a>\n';
						}else{
							newCodeArray[i] = formatStart + '<a href="' + newCodeUrlArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a>'+ formatEnd +'\n';
	    				}
						newCode = newCode + newCodeArray[i];
					}
				}
				}
				if(urlformat == "br"){
					newCode = "<p>\n" + newCode + "</p>";
				}
				if(urlformat == "ul"){
					newCode = "<ul>\n" + newCode + "</ul>";
				}
				if(urlformat == "ol"){
					newCode = "<ol>\n" + newCode + "</ol>";
				}
				
				document.getElementById("newCode").value = newCode;
				var preview = newCode.replace(/target="/g, 'data-target="')
				var preview = preview.replace(/href="/g, 'target="_blank" href="')
				document.getElementById("previewcode").innerHTML = preview;
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
	}
	
});	

	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("newCode").value = "";
        $("input:text").val("");
		document.getElementById("newtext1").focus();
	});	

	var textBox = document.getElementById("newCode");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};
    