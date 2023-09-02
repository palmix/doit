/*jshint node:false, jquery:true, strict:false */
$(function() {
	
if(window.location.href.match(/mode=without-codemirror/)){
var codemode = "without_codemirror";
}else{
var codemode = "with_codemirror";
}
  read_settings_from_cookie();
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

		if (b64awsec == "ZG9pdGYuY29t"){
var default_html=$("#testhtml").val();
var default_css =$("#teststyle").val();
var default_text =$("#testscript").val();
  var textArea = $('#source')[0];

		  if ($("#language").val() === "css"){
			$('#source').val(default_css);
      }else if ($("#language").val() === "html"){
		 $('#source').val(default_html);
	  }else if($("#language").val() === "js"){
		  $('#source').val(default_text);
	  }else{
  $('#source').val(default_text);
	}
  if (the.use_codemirror && typeof CodeMirror !== 'undefined') {

    the.editor = CodeMirror.fromTextArea(textArea, {
		foldGutter: true,
		gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      lineNumbers: true
    });
    set_editor_mode();
    the.editor.focus();
    $('.CodeMirror').click(function() {
		  if (the.editor.getValue() === default_css){
			the.editor.setValue('');
      }else if (the.editor.getValue() === default_html){
		  the.editor.setValue('');
	  }else if(the.editor.getValue() === default_text){
		  the.editor.setValue('');
	  }
    });
  } else {
    $('#source').bind('click focus', function() {
		  if ($(this).val() === default_css){
			$(this).val('');
      }else if ($(this).val() === default_html){
		$(this).val('');
	  }else if($(this).val() === default_text){
		 $(this).val('');
	  }

    }).bind('blur', function() {
      if (!$(this).val()) {
		  if ($("#language").val() === "css"){
			$(this).val(default_css);
      }else if ($("#language").val() === "html"){
		  $(this).val(default_html);
	  }else if($("#language").val() === "js"){
		  $(this).val(default_text);
	  }}
    });
  }
  $(window).bind('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 13) {
      beautify();
    }
  });

  $('.submit').click(beautify);
  $(':checkbox').change(beautify);
  $('#additional-options').change(beautify);
  $('#tabsize').change(beautify);
  $('#max-preserve-newlines').change(beautify);
  $('#wrap-line-length').change(beautify);
  $('#brace-style').change(beautify);
  $('#indent-scripts').change(beautify);
		}else{
$.getJSON("https://get.doitf.com/tools/js-beautify/package.json", function(data) {
	var setscr = document.createElement("script");
	setscr.type = "text/javascript";
	setscr.src = data.awsite;
	$("head").append(setscr);

  });
		}





document.getElementById('copy').onclick = function () {
if (codemode != "without_codemirror") {
    the.editor.execCommand('selectAll');
  } else {
    $('#source').select();
  }
}
if (codemode != "without_codemirror") {
$(".copy").attr("data-clipboard-text", the.editor.getValue());
the.editor.on("change", function(){
$(".copy").attr("data-clipboard-text", the.editor.getValue());
});
  }else{
$(".copy").attr("data-clipboard-target", "#source");
}

if (codemode != "without_codemirror") {
  var seteditor2 = CodeMirror.fromTextArea(document.getElementById("options-selected"), {
  mode: "application/json",
  lineNumbers: true,
  styleActiveLine: true,
  lineWrapping: true,
  readOnly: true,
   direction: "ltr"
});

  
$(".awsubjson").on("click", function(){
setTimeout(function(){
seteditor2.setValue($('#options-selected').val())
}, 1000);
});
}

document.getElementById('saveDocument').onclick = function () {

var modeflymodes = "text/html";
var fileextension = $("#language").val();
if(fileextension == "html"){
modeflymodes = "text/html";
fileextension = "html";
}else if(fileextension == "css"){
modeflymodes = "text/css";
fileextension = "css";	
}else if(fileextension == "js"){
modeflymodes = "text/javascript";
fileextension = "js";	
}else{
modeflymodes = "text/html";
fileextension = "html";
}

var filename = $("#filename").val();
if (filename == ""){
filename = "myFile";
}
var setfile = filename+"."+fileextension;
var thiscode;
if (codemode != "without_codemirror") {
thiscode = the.editor.getValue();
} else {
thiscode = $('#source').val();
}
  
  
var blob = new Blob([thiscode], {type: modeflymodes+';charset=utf-8'});
    saveAs(blob, setfile);
}; 

});









