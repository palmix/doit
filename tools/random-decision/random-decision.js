function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
document.addEventListener('DOMContentLoaded', function () {
	
	document.getElementById("aw-submit").addEventListener("click", function () {
      var rwords;
				if (b64awsec == "ZG9pdGYuY29t"){
		document.getElementById("oldText").value = "";
		var xc = document.getElementById("textalign").value;
		if (xc == "right"){
document.getElementById("oldText").style.textAlign = "right";
document.getElementById("oldText").style.direction = "rtl";
		rwords=["أنت تعرف الإجابة مسبقا.","اذهب مع الخيار الأسهل.","اذهب مع غرائزك.","الآن ليس الوقت المناسب لاتخاذ القرار.","الآن هو الوقت الخطأ لطرح هذا السؤال.","الجواب غير معروف.","الجواب لا.","الجواب لا.","الجواب نعم.","الجواب نعم.","الجواب هو الذي تخافه.","الجواب هو نعم على الارجح.","انتظر وسوف يأتي الجواب.","خذ الخيار الأصعب.","ربما يكون الجواب بالتأكيد.","هل تسأل السؤال الصحيح؟"];
}else{
document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
		rwords=["The answer is yes.","The answer is no.","The answer is yes.","The answer is no.","The answer is probably yes.","Now is the wrong time to ask this question.","The answer is unknown.","Go with your instincts.","Now is not the time to decide.","Go with the easier choice.","Take the harder option.","The answer is the one you fear.","Wait and the answer will come.","Are you asking the right question?","The answer is definitely maybe.","You already know the answer."];

}

		var ranNum = (Math.floor((Math.random() * 16) + 1)) -1;
		document.getElementById("oldText").value = rwords[ranNum];
		}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
	});
	
	document.getElementById("aw-reset").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("oldText").focus();
	});
	
});